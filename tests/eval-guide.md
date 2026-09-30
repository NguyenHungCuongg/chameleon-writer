# Evaluation Guide

How to test the chameleon-writer skills manually and what to look for.

## Philosophy

These tests are not automated LLM-as-judge tests. They are human-in-the-loop verification tests. You run a skill, then check the output against a concrete rubric. The goal is to catch regressions — when a skill stops doing what its SKILL.md claims.

**Why not AI Detectors?**
GPTZero, Turnitin, and Originality.ai measure perplexity and burstiness. They do not measure slop. They flag non-native English writers and logical prose as "AI-generated." They would misrepresent what this skill pack does. Do not use them.

---

## Setup

No dependencies beyond Node.js (already required for `npx skills`).

```bash
# Verify Node.js is available
node --version
```

---

## Tool: `validate-skills.js`

Checks every `skills/*/SKILL.md` against the maintenance contract in `AGENTS.md`: valid frontmatter, a single-line description with no em/en dashes, the full core AI vocabulary list, and a listing in `README.md` and `AGENTS.md`. Run it after any skill edit.

```bash
node tests/validate-skills.js
# Exit code 0 = valid, exit code 1 = problems found
```

---

## Tool: `lint-check.js`

Counts banned AI vocabulary and phrase hits in any text file. Run it on the rewrite output produced by `slop-detector` to verify banned terms were removed.

```bash
# Check a file for banned terms
node tests/lint-check.js path/to/your-rewrite.txt

# Example: check the heavy slop fixture input (should find many hits)
node tests/lint-check.js tests/fixtures/slop-detector/01-heavy-slop/input-text-only.txt

# Exit code 0 = clean, exit code 1 = hits or dashes found
```

The script checks for:
- 22 AI vocabulary words (delve, tapestry, pivotal, etc.), matched by stem so "leveraging" counts as "leverage"
- 13 business jargon terms (leverage, ecosystem, holistic, etc.)
- 27 banned phrases (Let's dive in, At its core, etc.)
- Em dashes (— or –), reported separately from the hit total

---

## Running the Fixtures

### slop-detector

Each fixture is a self-contained test. Open the fixture's `input.md`, copy the "Input Text" section, and paste it into your agent with the `slop-detector` skill active.

| Fixture | What it tests | Expected score |
|---------|--------------|----------------|
| `01-heavy-slop/input.md` | Skill catches dense slop | < 25/50 |
| `02-light-slop/input.md` | Skill catches subtle jargon | 28–38/50 |
| `03-clean-text/input.md` | Skill does NOT over-correct human writing | ≥ 40/50 |

**After running `slop-detector` on a fixture:**

1. Copy only the rewrite section from the skill output into a temporary `.txt` file
2. Run `node tests/lint-check.js <your-rewrite.txt>` — exit 0 = pass, exit 1 = regression
3. Check the Pass Criteria table inside each fixture's `input.md`

> **Note:** Each fixture includes an `input-text-only.txt` file containing just the raw input prose (no markdown documentation). Use this file with `lint-check.js` to verify the *input* has the expected slop density before running the skill. Do not run `lint-check.js` on the full `input.md` files — the documentation sections will produce false hits.

```bash
# Verify the input has the expected slop hits before running the skill
node tests/lint-check.js tests/fixtures/slop-detector/01-heavy-slop/input-text-only.txt
# Expected: 34 hits

node tests/lint-check.js tests/fixtures/slop-detector/02-light-slop/input-text-only.txt
# Expected: 9 hits
```

---

### voice-fingerprint

| Fixture | What it tests | Expected behavior |
|---------|--------------|-------------------|
| `01-clean-sample/input.md` | Skill extracts a valid Voice Profile | No warning, profile ≤ 200 words |
| `02-ai-contaminated-sample/input.md` | Skill warns before proceeding | Warning issued, confirms with user |

**For fixture 01 — checking the Voice Profile quality:**

After running, compare the generated Voice Profile against the "Expected Profile Markers" table in the fixture. The profile must capture at least 4 of the 6 markers.

**The "usability test" (subjective, human judge):**
1. Copy the Voice Profile produced in fixture 01
2. Open a new session with `email-craft` or `linkedin-post`
3. Paste the Voice Profile at the top, then ask the skill to write something
4. Read the output aloud — does it sound noticeably different from the same skill without the profile?
5. If yes: pass. If the voice profile made no difference: regression.

---

## How to Report a Regression

If a fixture fails:

1. Note the fixture name and which Pass Criteria failed
2. Run `npx skills ls` to capture the skill version
3. Open a GitHub Issue with:
   - The fixture that failed
   - The criterion that failed
   - The actual skill output (or the `lint-check.js` report)

---

## What These Tests Do NOT Cover

- **Tone and Platform skills** (formal-executive, linkedin-post, etc.) — these require qualitative judgment and are not covered by fixtures yet
- **Automated CI** — tests are run manually; a GitHub Action calling a live LLM API is expensive and non-deterministic for v1
- **Non-English inputs**: the pack targets English only
