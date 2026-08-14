# AGENTS.md

Guidance for AI coding agents working in this repository.

## What This Repo Is

A portable Agent Skill Pack: 12 writing skills organized in 3 layers (Core, Tone, Platform) that eliminate AI Slop from AI-generated content. All skills are plain Markdown (`SKILL.md`) with YAML frontmatter — no build step, no runtime beyond the agent harness.

## Key Files

- `skills/` — all installable skills; each subdirectory is one skill
- `README.md` — installation, usage, skill table (source of truth for users)
- `CHANGELOG.md` — version history
- `AGENTS.md` — this file; guidance for agents

## Skill Directory

| Skill | Layer | Description |
|-------|-------|-------------|
| `anti-slop-core` | Core | Master anti-slop rulebook (standalone) |
| `slop-detector` | Core | Audit + score + rewrite existing content |
| `voice-fingerprint` | Core | Extract and apply personal writing style |
| `formal-executive` | Tone | C-suite voice, pyramid structure |
| `storyteller` | Tone | Scene-first, narrative, concrete detail |
| `witty-conversational` | Tone | Direct, opinionated, earned humor |
| `eli5-explainer` | Tone | Clear, non-patronizing simplification |
| `tech-doc` | Platform | Developer documentation |
| `email-craft` | Platform | Professional email |
| `linkedin-post` | Platform | LinkedIn posts |
| `twitter-thread-craft` | Platform | Twitter/X threads |
| `readme-writer` | Platform | GitHub READMEs |
| `slide-script` | Platform | Presentation speaker notes |
| `brutal-editor` | Platform | User-defined cuts |

## Maintenance Contract

### SKILL.md frontmatter (required fields)
Every `SKILL.md` must have valid YAML frontmatter with at minimum:
```yaml
---
name: skill-name
description: Description text as a single inline string. No line breaks.
metadata:
  version: "X.Y.Z"
  layer: "core|tone|platform"
  pack: "chameleon-writer"
---
```

> **Critical:** `description` must be a **single-line inline string**. Do NOT use YAML block scalar syntax (`|` or `>`). Multi-line descriptions prevent agents (Antigravity, Cursor, etc.) from discovering the skill in their slash command autocomplete. The description should fit on one line — trim it if necessary.

### Self-contained skills
**No skill may reference files from another skill directory.** When a user installs a single skill via `npx skills add ... --skill <name>`, only that skill's directory is available. Anti-slop rules must be embedded inline in every Layer 1 and Layer 2 skill — not referenced from `anti-slop-core/`.

### Consistency rule
All Layer 1 and Layer 2 skills must embed the same core anti-slop vocabulary list. When updating the anti-slop vocabulary (adding or removing words), update all 11 skill files that embed it. Check by searching for "delve" — it appears in every skill's anti-slop section.

### Version bumping
When adding patterns, fixing behavior, or changing any skill's output in a meaningful way:
1. Bump `metadata.version` in the affected `SKILL.md`
2. Add an entry to `CHANGELOG.md`

### README sync
`README.md` and the skill table in `AGENTS.md` must stay in sync with the actual `skills/` directory. When adding or removing a skill, update both.

### No marketing language in skill descriptions
Skill descriptions (in YAML frontmatter) should describe what the skill does and when to use it. No "powerful," "elegant," or "blazing fast."

## Editing SKILL.md

- Preserve valid YAML frontmatter (formatting and indentation)
- The prompt body below the frontmatter is the product — edit it like a careful instruction document
- Read the skill aloud after editing to verify it sounds like instruction, not prose performance
- Run `npx skills add . --list` to verify all skills are valid after edits

## Adding a New Skill

1. Create `skills/<skill-name>/SKILL.md`
2. Add valid frontmatter with `layer` and `pack` metadata
3. Embed the anti-slop vocabulary section if it's a Layer 1 or Layer 2 skill
4. Add it to the skill table in `README.md` and `AGENTS.md`
5. Add a version entry in `CHANGELOG.md`
6. Run `npx skills add . --list` to verify

## What This Repo Does NOT Do

- No build step
- No runtime except the agent harness
- No inter-skill dependencies (each skill is standalone)
- No automated AI detection (detection is unreliable; we focus on writing well)
- No model modifications or fine-tuning
