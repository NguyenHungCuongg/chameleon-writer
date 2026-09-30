#!/usr/bin/env node
// Counts banned AI vocabulary, jargon, phrases, and dashes in a text file.
// Usage: node tests/lint-check.js <file>   (exit 0 = clean, 1 = hits found)
// Lists mirror the Step 1 scan in skills/slop-detector/SKILL.md. Keep them in sync.

const fs = require('fs');

const AI_VOCABULARY = [
  'actually', 'additionally', 'align with', 'crucial', 'delve', 'emphasizing',
  'enduring', 'enhance', 'fostering', 'garner', 'highlight', 'interplay',
  'intricate', 'key', 'landscape', 'pivotal', 'showcase', 'tapestry',
  'testament', 'underscore', 'valuable', 'vibrant',
];

const JARGON = [
  'navigate', 'unpack', 'lean into', 'game-changer', 'double down', 'deep dive',
  'moving forward', 'circle back', 'leverage', 'ecosystem', 'robust', 'scalable',
  'holistic',
];

const PHRASES = [
  "Here's the thing", 'The truth is', 'Let me be clear', "Here's what", 'It turns out',
  'Full stop', 'Let that sink in', 'Make no mistake',
  'At its core', "In today's", "It's worth noting", 'At the end of the day',
  'When it comes to', 'In a world where',
  "Let's dive in", "Let's explore", "Here's what you need to know", 'Without further ado',
  'The rest of this essay', 'Let me walk you through', "In this section, we'll",
  'I hope this helps', "Let me know if you'd like", 'Feel free to ask',
  'Great question', "You're absolutely right", 'Certainly!',
];

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "['’]");

// Words match by stem so inflections count (leverage -> leveraging, moving -> move); phrases match literally.
const stem = (word) => escape(word.replace(/(ing|e)$/i, '')) + '\\w*';
const wordRegex = (w) => new RegExp(`\\b${w.split(' ').map(stem).join(' ')}`, 'gi');
const phraseRegex = (p) => new RegExp(`${/^\w/.test(p) ? '\\b' : ''}${escape(p)}`, 'gi');

function lint(text) {
  const hits = [];
  const scan = (list, category, toRegex) => {
    for (const term of list) {
      const count = (text.match(toRegex(term)) || []).length;
      if (count) hits.push({ category, term, count });
    }
  };
  scan(AI_VOCABULARY, 'vocabulary', wordRegex);
  scan(JARGON, 'jargon', wordRegex);
  // "Here's what you need to know" also matches "Here's what"; count it once.
  scan(PHRASES.filter((p) => p !== "Here's what"), 'phrase', phraseRegex);
  const bareHeresWhat = (text.match(/\bHere['’]s what(?! you need to know)/gi) || []).length;
  if (bareHeresWhat) hits.push({ category: 'phrase', term: "Here's what", count: bareHeresWhat });
  return hits;
}

const countDashes = (text) => (text.match(/[—–]/g) || []).length;

if (require.main === module) {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node tests/lint-check.js <file>');
    process.exit(2);
  }
  const text = fs.readFileSync(file, 'utf8');
  const hits = lint(text);
  const total = hits.reduce((n, h) => n + h.count, 0);
  const dashes = countDashes(text);
  for (const h of hits) console.log(`${h.category.padEnd(10)} ${String(h.count).padStart(3)}  ${h.term}`);
  console.log(`Total: ${total} hits, ${dashes} dashes`);
  process.exit(total || dashes ? 1 : 0);
}

module.exports = { lint, countDashes, AI_VOCABULARY, JARGON, PHRASES };
