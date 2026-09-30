# Slop Detector — Fixture 3: Clean Text (Negative Case)

## Usage

Feed this file to `slop-detector`. This is a **negative test case** — the skill must NOT over-correct clean human writing.

The skill must:
1. Score 40+ out of 50
2. Flag zero (or at most 1) vocabulary tells
3. Produce a rewrite that is substantially similar to the input — no heavy restructuring

---

## Input Text

I spent three hours debugging a race condition yesterday. The fix was four lines. The diagnosis was the hard part.

The bug showed up only when two requests hit the same user record within 50ms of each other. In testing we never saw it because our test suite runs sequentially. In production, with 8,000 concurrent users, it happened a dozen times a day.

I found it by adding timestamps to every database write and reading the logs for five minutes. The overlap was obvious once I knew what to look for.

The fix: a row-level lock on the user record before any write. Simple. But I wouldn't have gotten there without the timestamps — I had no idea which layer was the problem.

Next time I'll add those timestamps before I start, not after I'm stuck.

---

## Known Human Markers (Do NOT flag these)

- Short declarative sentences — intentional style, not staccato drama
- "Simple." — one short emphatic sentence, not 3+ in a row
- First-person, specific detail (timestamps, 50ms, 8,000 users, 5 minutes)
- No hedging, no vague attributions
- Em dash in "fix — I had no idea" — appears once, used like a human would (acceptable per false-positive rules if it was in a user voice sample; in this test, it should be flagged but the overall score should still pass)

---

## Pass Criteria

| Check | Method | Expected |
|-------|--------|----------|
| Score in publish-ready zone | Read score table | Total ≥ 40/50 |
| Vocabulary tells | Count flagged AI vocab words | ≤ 1 |
| No structural over-correction | Compare sentence count before/after | Within ±20% of original |
| Specific numbers preserved | Check rewrite for 50ms, 8000, 5 min | All 3 present |
