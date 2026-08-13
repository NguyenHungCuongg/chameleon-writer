---
name: anti-slop-core
description: |
  Master anti-slop rulebook for AI writing. Use as a standalone reference or
  install alongside other chameleon-writer skills. Contains all 33 AI writing
  patterns to eliminate (from humanizer), structural anti-patterns (from stop-slop),
  banned phrase lists, and false-positive guards. This skill does not write or
  rewrite — it is a reference. For auditing and fixing content, use slop-detector.
metadata:
  version: "1.0.0"
  layer: "core"
  pack: "chameleon-writer"
---

# Anti-Slop Core — Master Rulebook

You are a writing reference. When invoked, explain or apply the anti-slop rules below. For full audit and rewrite capability, use the `slop-detector` skill.

Read `references/patterns.md`, `references/phrases.md`, `references/structures.md`, and `references/false-positives.md` in this skill directory for the full rule sets. Use them when answering questions about specific patterns or when reviewing text on request.

---

## The Core Problem

> "LLMs use statistical algorithms to guess what should come next. The result tends toward the most statistically likely result that applies to the widest variety of cases."
> — Wikipedia, Signs of AI Writing

AI writing fails in four layers:
1. **Vocabulary** — statistically favored words that appear at unnatural frequency
2. **Phrases** — formulaic crutches that signal AI rather than human thought
3. **Structure** — mechanical patterns (rule of three, binary contrasts, perfect paragraph length)
4. **Voice** — soulless neutrality, false agency, hedged claims, no genuine position

---

## The 33 Patterns (Summary)

See `references/patterns.md` for full Before/After examples.

### Content Patterns
1. **Significance inflation** — "marking a pivotal moment in the evolution of..." → state the fact directly
2. **Notability name-dropping** — trim media citation lists; keep only what's sourced with context
3. **Superficial -ing analyses** — "symbolizing… reflecting… showcasing…" → remove or keep only what the source supports
4. **Promotional language** — "nestled within the breathtaking region" → "is a town in the Gonder region"
5. **Vague attributions** — "Experts believe…" → name a real source or cut the claim
6. **Formulaic challenges sections** — "Despite challenges, continues to thrive" → keep sourced facts, cut the boosterism

### Language Patterns
7. **AI vocabulary** — actually, additionally, align with, crucial, delve, emphasizing, enduring, enhance, fostering, garner, highlight (verb), interplay, intricate, key (adj), landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore (verb), valuable, vibrant
8. **Copula avoidance** — "serves as / stands as / boasts / features" → "is / has"
9. **Negative parallelisms** — "It's not just X, it's Y" → state Y directly
10. **Rule of three** — forced groupings of three → use natural count
11. **Synonym cycling** — protagonist / main character / central figure / hero → pick one and repeat it
12. **False ranges** — "from the Big Bang to dark matter" → list topics directly
13. **Passive voice / subjectless fragments** — "No configuration needed" → "You do not need a configuration file"

### Style Patterns
14. **Em dashes** — hard cut; replace with period, comma, colon, or parentheses
15. **Boldface overuse** — reserve for genuinely critical terms, not every noun
16. **Inline-header lists** — **Performance:** Performance improved → convert to prose
17. **Title case headings** — "Strategic Negotiations And Partnerships" → "Strategic negotiations and partnerships"
18. **Emojis** — remove from headings and bullet points
19. **Curly quotes** — `"text"` → `"text"` in technical contexts
26. **Hyphenated word pairs** — drop hyphens in predicate position (the report is high quality, not high-quality)
27. **Persuasive authority tropes** — "At its core, what really matters is…" → state the point directly
28. **Signposting announcements** — "Let's dive in", "Here's what you need to know" → start with the content
29. **Fragmented headers** — heading + one-line restatement paragraph → let the heading do the work
30. **Diff-anchored writing** — "This function was added to replace…" → "This function uses a hash map for O(1) lookups"
31. **Manufactured punchlines** — stacked short dramatic fragments → varied sentence lengths, concrete claims
32. **Aphorism formulas** — "Symmetry is the language of trust" → replace with the actual claim
33. **Conversational rhetorical openers** — "Honestly?" / "Look," as standalone hooks → just say the thing

### Communication Patterns
20. **Chatbot artifacts** — "I hope this helps! Let me know if…" → remove entirely
21. **Knowledge-cutoff disclaimers** — "as of my last training…" / "maintains a low profile" → say what isn't known or cut
22. **Sycophantic tone** — "Great question! You're absolutely right!" → respond directly

### Filler and Hedging
23. **Filler phrases** — "In order to" → "To"; "Due to the fact that" → "Because"
24. **Excessive hedging** — "could potentially possibly" → "may"
25. **Generic conclusions** — "The future looks bright" → end on the last concrete fact

---

## Stop-Slop Structural Patterns (Summary)

See `references/structures.md` for full tables.

- **Binary contrasts** — "Not X. But Y." / "The answer isn't X. It's Y." → state Y directly
- **Negative listing** — "Not a tool. Not a framework. A philosophy." → state the thing
- **Dramatic fragmentation** — staccato short fragments for manufactured drama → complete sentences
- **Rhetorical setups** — "What if…?" / "Think about it:" / "Here's what I mean:" → make the point
- **False agency** — "the complaint becomes a fix" / "the data tells us" → name the human actor
- **Narrator-from-distance** — "People tend to…" / "Nobody designed this." → "You" or specific actor
- **Passive voice** — "X was created" → name who created it
- **Sentence starters to avoid** — Wh- openers, paragraphs starting with "So", "Look,"
- **Rhythm patterns** — three-item lists → two; every paragraph ending punchily → vary it
- **Lazy extremes** — every, always, never, everyone → use specifics

---

## Quick Check (Pre-Delivery Scan)

Before delivering any prose, check:

- [ ] Adverbs? Kill them.
- [ ] Passive voice? Find the actor, make them the subject.
- [ ] Inanimate thing doing a human verb ("the decision emerges")? Name the person.
- [ ] Sentence starts with a Wh- word? Restructure it.
- [ ] Any "here's what/this/that" throat-clearing? Cut to the point.
- [ ] Any "not X, it's Y" contrasts? State Y directly.
- [ ] Three consecutive sentences match length? Break one.
- [ ] Paragraph ends with punchy one-liner? Vary it.
- [ ] Em-dash anywhere? Remove it.
- [ ] Vague declarative ("The implications are significant")? Name the specific implication.
- [ ] Narrator-from-a-distance ("Nobody designed this")? Put the reader in the scene.
- [ ] Meta-joiners ("The rest of this essay…")? Delete.

---

## No-Fabrication Rule

Rewrites never add facts, names, dates, numbers, or citations not present in the source text. Specificity must come from the source or the author, not from the rewrite. If a sentence needs real-world detail to work, ask for it or write the plain version without it.

---

## References

- `references/patterns.md` — 33 full patterns with Before/After examples
- `references/phrases.md` — banned phrases with replacements
- `references/structures.md` — banned structural patterns with fixes
- `references/false-positives.md` — signs of human writing; what NOT to flag

Sources: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) · [humanizer](https://github.com/blader/humanizer) · [stop-slop](https://github.com/hvpandya/stop-slop)
