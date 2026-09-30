#!/usr/bin/env node
// Enforces the AGENTS.md maintenance contract on every skills/*/SKILL.md.
// Usage: node tests/validate-skills.js   (exit 0 = valid, 1 = problems found)

const fs = require('fs');
const path = require('path');
const { AI_VOCABULARY } = require('./lint-check');

const ROOT = path.join(__dirname, '..');
const SKILLS = path.join(ROOT, 'skills');
const LAYERS = ['core', 'tone', 'platform'];

const problems = [];
const fail = (skill, msg) => problems.push(`${skill}: ${msg}`);

const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
const agents = fs.readFileSync(path.join(ROOT, 'AGENTS.md'), 'utf8');
const dirs = fs.readdirSync(SKILLS).filter((d) => fs.statSync(path.join(SKILLS, d)).isDirectory());

for (const dir of dirs) {
  const file = path.join(SKILLS, dir, 'SKILL.md');
  if (!fs.existsSync(file)) { fail(dir, 'missing SKILL.md'); continue; }
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { fail(dir, 'missing YAML frontmatter'); continue; }
  const field = (re) => (fm[1].match(re) || [])[1];

  if (field(/^name:\s*(.+)$/m) !== dir) fail(dir, 'name must match directory');
  const desc = field(/^description:\s*(.*)$/m);
  if (!desc || /^[|>]/.test(desc)) fail(dir, 'description must be a single inline string');
  else if (/[—–]/.test(desc)) fail(dir, 'description contains an em/en dash');
  else if (!/^['"]/.test(desc) && /: | #/.test(desc)) fail(dir, 'unquoted description contains ": " or " #" (breaks YAML); quote it or rephrase');
  if (!/^ {2}version:\s*"\d+\.\d+\.\d+"$/m.test(fm[1])) fail(dir, 'metadata.version missing or not "X.Y.Z"');
  if (!LAYERS.includes(field(/^ {2}layer:\s*"(\w+)"$/m))) fail(dir, `metadata.layer must be one of ${LAYERS}`);
  if (field(/^ {2}pack:\s*"(.+)"$/m) !== 'chameleon-writer') fail(dir, 'metadata.pack must be "chameleon-writer"');

  const lower = text.toLowerCase();
  const missing = AI_VOCABULARY.filter((w) => !lower.includes(w));
  if (missing.length) fail(dir, `anti-slop vocabulary missing: ${missing.join(', ')}`);

  if (!readme.includes(`\`${dir}\``)) fail(dir, 'not listed in README.md');
  if (!agents.includes(`\`${dir}\``)) fail(dir, 'not listed in AGENTS.md');
}

for (const p of problems) console.log(p);
console.log(`${dirs.length} skills checked, ${problems.length} problems`);
process.exit(problems.length ? 1 : 0);
