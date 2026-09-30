# Changelog

All notable changes to the Chameleon Writer Skill Pack.

Format: [Semantic Versioning](https://semver.org)

---

## [1.0.2] — 2026-09-30

### Fixed

- Every skill now embeds the same 22-word core AI vocabulary list. Five skills (`email-craft`, `linkedin-post`, `readme-writer`, `slide-script`, `twitter-thread-craft`) had none of it; the rest had partial copies. Skill-specific words moved under "Also remove from vocabulary"; duplicates removed.
- Removed em dashes from skill descriptions, which the skills themselves ban.
- Fixed the curly quotes example in `anti-slop-core` (Before and After were identical).
- `brutal-editor` moved from the Platform layer to Core; it edits any text rather than targeting a platform.
- Stopped publishing `.agents/` and `skills-lock.json` (local install artifacts that shipped duplicate and third-party skills).

### Added

- `tests/validate-skills.js`: checks frontmatter, single-line dash-free descriptions, YAML-breaking `: ` in unquoted descriptions, the core vocabulary list, and README/AGENTS listings.
- `tests/lint-check.js`: the banned-term counter that `tests/eval-guide.md` already documented. `tests/` is now published.

## [1.0.1] — 2026-08-14

### Fixed

- Fixed YAML parsing errors in `readme-writer` and `slop-detector` caused by unquoted descriptions containing colons.

## [1.0.0] — 2026-08-13

### Added

**Layer 0: Core Skills**
- `anti-slop-core` — master anti-slop rulebook; 33 humanizer patterns + stop-slop structural patterns; includes `references/` with full pattern tables, phrase blacklists, structure guides, and false-positive guards
- `slop-detector` — audit + score (5 dimensions, /50) + rewrite; polish-only skill
- `voice-fingerprint` — extract personal writing style from samples; produces reusable Voice Profile

**Layer 1: Tone Skills**
- `formal-executive` — C-suite voice, pyramid structure, no hedging
- `storyteller` — scene-first narrative, concrete detail, unresolved tension allowed
- `witty-conversational` — direct, opinionated, earned humor
- `eli5-explainer` — clear simplification without condescension

**Layer 2: Platform Skills**
- `tech-doc` — developer documentation, active voice, code-first, no diff-anchored writing
- `email-craft` — professional email, one ask, no pleasantry openers, no chatbot closers
- `linkedin-post` — no hustle porn, no "humbled to announce," direct first sentence
- `twitter-thread-craft` — thesis in tweet 1, no "a thread 🧵", standalone per tweet
- `readme-writer` — what → install → one working example, no marketing language
- `slide-script` — spoken voice, one idea per slide, content transitions
- `brutal-editor` — user-defined target cuts in priority order, protects specifics, flags information loss

**Sources**
- 33 AI slop patterns from [humanizer](https://github.com/blader/humanizer) by @blader (MIT)
- Structural patterns and phrase lists from [stop-slop](https://github.com/hardikpandya/stop-slop) by Hardik Pandya (MIT)
- Primary source: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
