# Slop Detector — Fixture 2: Light Slop

## Usage

Feed this file to `slop-detector`. The skill must:
1. Flag at least 3 tells (see known tells below)
2. Score between 28–38/50 (revise-targeted zone)
3. Produce a rewrite that removes the flagged patterns without losing any information

---

## Input Text

The product team shipped a new onboarding flow last week. Early feedback has been positive, with users completing setup 40% faster than before.

That said, it's worth noting that retention numbers haven't moved yet — it's still too early to draw conclusions. The team will circle back to this in the next sprint review.

This update also enhances the dashboard experience. Users can now highlight key metrics directly from the main view, which makes it easier to navigate the data and align with their goals.

The next milestone is scheduled for Q4. Moving forward, the focus will be on scalability and making the platform more robust for enterprise customers.

---

## Known Slop Tells in This Text

### Vocabulary
- `enhance` — AI vocabulary cluster
- `highlight` (verb) — AI vocabulary cluster
- `key` (adjective) — AI vocabulary cluster
- `navigate` — business jargon
- `align with` — business jargon
- `circle back` — business jargon
- `moving forward` — business jargon
- `scalability` / `robust` — business jargon
- `it's worth noting` — filler phrase

### Structural
- Em dash in "haven't moved yet — it's still too early"

---

## Pass Criteria

| Check | Method | Expected |
|-------|--------|----------|
| Vocabulary tells flagged | Count flagged words in skill output | ≥ 3 flagged |
| Score in revise zone | Read score table in output | Total 28–38/50 |
| Rewrite clean of flagged terms | Run `lint-check.js` on rewrite section | 0 hits on banned list |
| All facts preserved | Compare claims: 40% faster, Q4 milestone, retention unchanged | All 3 present in rewrite |
| No em dashes in rewrite | String search | 0 hits |
