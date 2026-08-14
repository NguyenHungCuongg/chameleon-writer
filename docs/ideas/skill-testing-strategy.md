# Skill Testing Strategy

## Problem Statement

How might we verify that chameleon-writer skills (especially `slop-detector` and `voice-fingerprint`) do what they claim, and give GitHub users confidence before they install?

## Recommended Direction

Two-layer test approach. Layer 1 is deterministic pattern linting — fast, no API, runs in CI. Layer 2 is human-evaluation fixtures — curated input/output pairs that act as ground truth for subjective quality.

**Why not AI Detectors (GPTZero, Turnitin, Originality.ai)?**
They measure perplexity and burstiness, not slop. They produce false positives on non-native English writers and overly logical prose. They also misrepresent the purpose of this pack — chameleon-writer is not a "bypass Turnitin" tool. Do not use them as a quality metric.

**How did the predecessors test?**
- `blader/humanizer`: Frequency analysis — counted how often flagged vocabulary appeared before and after. No AI detector.
- `hardikpandya/stop-slop`: Human evaluation — read the output aloud, judge whether it sounds like a scripted speech or a real person.

Both conclusions support the same approach: **rule-based counting + human read-aloud**.

## Key Assumptions to Validate

- [ ] LLM output is stable enough to write snapshot-style tests — test by running the same prompt 3x and comparing outputs for structural similarity (not exact match).
- [ ] The fixture inputs are slop-rich enough to be realistic — test by having a second reader identify the slop without reading the expected output first.
- [ ] The scoring rubric (1-10 on 5 dimensions) is consistent enough to be useful — test by having 2 people independently score the same text and compare.

## MVP Scope

**In scope:**
- `tests/fixtures/slop-detector/` — 3 fixture sets: light slop, heavy slop, clean text (negative case)
- `tests/fixtures/voice-fingerprint/` — 2 fixture sets: clean human sample, AI-contaminated sample (should trigger warning)
- `tests/eval-guide.md` — how to run tests manually and what to look for
- `tests/lint-check.js` — Node.js script that counts banned vocabulary hits in a given text file

**Not in scope (v1):**
- Automated CI that calls a live LLM API — too expensive, non-deterministic
- AI Detector integration — misleading metric, wrong framing
- Tests for all 14 skills — cover the 2 core skills first

## Not Doing (and Why)

- **AI Detector integration** — misrepresents the pack's purpose; these tools measure the wrong thing
- **LLM-as-judge CI** — circular logic when judging slop with the same model that produces slop; non-deterministic output breaks assertions
- **100% automated test suite** — the subjective dimension of `voice-fingerprint` requires a human reader; automate the objective parts only

## Open Questions

- Should fixtures be English-only, or add Vietnamese examples since the author's audience is multilingual?
- Is `tests/lint-check.js` enough for CI, or should it be a GitHub Action that runs on PR?
- Who maintains the fixture "ground truth" as LLM behavior evolves?
