# Slop Detector — Fixture 1: Heavy Slop

## Usage

Feed this file to `slop-detector`. The skill must:
1. Flag at least 8 of the listed tells (see `expected-tells.md`)
2. Score below 25/50 on the rubric
3. Produce a rewrite where all flagged vocabulary is absent

---

## Input Text

In today's rapidly evolving digital landscape, it is crucial for organizations to delve into the intricate tapestry of modern communication strategies. At its core, what really matters is how companies can showcase their vibrant ecosystems and garner the valuable insights that underscore their pivotal role in the market.

Let me be clear: this is not just a challenge. It is a testament to the enduring power of human connection. Experts believe that by leveraging robust, scalable solutions and leaning into holistic approaches, businesses can truly enhance their impact and highlight their key differentiators.

The future looks bright. Organizations that navigate these challenges will not only survive but thrive. And as we move forward, it's worth noting that the interplay between technology and human experience will continue to foster meaningful change.

Let's dive in and explore what this means for you. Here's what you need to know: the time to act is now. The data tells us that companies failing to align with these trends risk being left behind. Make no mistake — the implications are significant.

---

## Known Slop Tells in This Text

### Vocabulary
- `delve` (line 1)
- `intricate tapestry` (line 1)
- `crucial` (line 1)
- `showcase` (line 2)
- `vibrant ecosystems` (line 2)
- `garner` (line 2)
- `underscore` (line 2)
- `pivotal` (line 2)
- `testament` (line 4)
- `enduring` (line 4)
- `leverage` (line 5)
- `robust, scalable` (line 5)
- `holistic` (line 5)
- `enhance` (line 5)
- `highlight` (line 5)
- `key differentiators` (line 5)
- `interplay` (line 7)
- `foster` (line 7)
- `navigate` (business jargon) (line 6)

### Phrases
- `In today's rapidly evolving digital landscape` — opener filler
- `At its core, what really matters is` — persuasive authority trope
- `Let me be clear` — throat-clearing opener
- `Experts believe` — vague attribution (no named source)
- `The future looks bright` — generic conclusion
- `Let's dive in` — signposting
- `Here's what you need to know` — signposting
- `The data tells us` — false agency (data cannot tell)
- `Make no mistake` — emphasis crutch

### Structural
- Em dashes (`—`) present
- Binary contrast: "not just a challenge. It is a testament"
- Staccato drama at end: 3+ consecutive short punchy sentences
- Rule of three forced: "survive but thrive" setup

---

## Pass Criteria

| Check | Method | Expected |
|-------|--------|----------|
| Vocabulary tells flagged | Count flagged words in skill output | ≥ 8 flagged |
| Score below threshold | Read score table in output | Total < 25/50 |
| Rewrite clean of AI vocab | Run `lint-check.js` on rewrite section | 0 hits on banned list |
| No em dashes in rewrite | String search for `—` or `–` | 0 hits |
| No fabricated facts | Compare claims in rewrite vs input | All claims traceable to input |
