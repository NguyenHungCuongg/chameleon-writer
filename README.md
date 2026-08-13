# Chameleon Writer

[![skills.sh](https://img.shields.io/badge/skills.sh-chameleon--writer-blue)](https://skills.sh)

A portable Agent Skill Pack that eliminates AI Slop from writing. 12 skills in 3 composable layers: Core anti-slop tools, Tone skills (how it sounds), and Platform skills (where it goes).

## Install

```bash
# Install the full suite
npx skills add NguyenHungCuongg/chameleon-writer --global

# Install a single skill
npx skills add NguyenHungCuongg/chameleon-writer --skill slop-detector --global
npx skills add NguyenHungCuongg/chameleon-writer --skill formal-executive --global
```

Or install into every supported agent harness:

```bash
npx skills add NguyenHungCuongg/chameleon-writer --global --agent '*'
```

## How It Works

**Three layers, composable.**

| Layer | Skills | Purpose |
|-------|--------|---------|
| **Core** | `anti-slop-core`, `slop-detector`, `voice-fingerprint` | Foundation tools — rules, audit, style calibration |
| **Tone** | `formal-executive`, `storyteller`, `witty-conversational`, `eli5-explainer` | *How* content sounds |
| **Platform** | `tech-doc`, `email-craft`, `linkedin-post`, `twitter-thread-craft`, `readme-writer`, `slide-script`, `brutal-editor` | *Where* content goes |

**Combine them freely:**
- `storyteller` × `email-craft` → narrative cold email
- `formal-executive` × `tech-doc` → executive technical brief
- Any skill + `voice-fingerprint` → output that sounds like *you*

**All skills work in two modes:**
- **`write-new`** — given a topic or brief, produce original content
- **`polish-existing`** — given a draft, rewrite it

---

## Skill Reference

### Layer 0: Core

#### `anti-slop-core`
> Master anti-slop rulebook. 33 AI writing patterns, structural anti-patterns, phrase blacklists, and false-positive guards.

Install alone if you want the reference without any writing capability.

```
Use anti-slop-core to explain pattern [N]
Use anti-slop-core to check if this phrase is an AI tell: "..."
```

---

#### `slop-detector`
> Audit existing content. Scores 1–10 on Directness, Rhythm, Trust, Authenticity, Density. Below 35/50: must revise. Polish-only.

```
Use slop-detector to audit this text: [paste]
```

```
Use slop-detector on the file docs/launch-post.md
```

---

#### `voice-fingerprint`
> Extract your personal writing style from samples. Produces a compact Voice Profile you paste into any other skill to override its defaults.

```
Use voice-fingerprint to analyze my writing style.

[Paste 2–5 paragraphs of your own writing (150 words minimum)]
```

Save the output. Paste it at the start of any skill session to make every output sound like you.

---

### Layer 1: Tone Skills

Each tone skill supports write-new and polish-existing modes. Paste a Voice Profile at the start to personalize output further.

#### `formal-executive`
C-suite memos, board reports, investor updates, strategic proposals.
Conclusion first (pyramid structure). Declarative. Specific numbers. No hedging.

```
Use formal-executive to write: Q3 performance summary — revenue up 18%, hiring behind plan by 3 headcount
```

---

#### `storyteller`
Case studies, personal essays, brand narratives, long-form articles.
Scene-first. Specific sensory detail. Mixed sentence rhythm. Opinions and unresolved tension allowed.

```
Use storyteller to write: how we almost shipped the wrong feature and what stopped us
```

---

#### `witty-conversational`
Blog posts, opinion pieces, casual essays, social copy.
Direct second-person. Short sentences. Opinions stated without hedging. Earned humor.

```
Use witty-conversational to write: why most onboarding flows fail in the first 60 seconds
```

---

#### `eli5-explainer`
Explainer posts, non-technical documentation, onboarding copy.
One concept per sentence. Everyday analogies. No jargon without definition.

```
Use eli5-explainer to explain: how HTTPS certificates work, for a non-technical audience
```

---

### Layer 2: Platform Skills

#### `tech-doc`
API references, guides, runbooks, architecture docs. Active voice. Code over prose. No diff-anchored writing.

```
Use tech-doc to write a guide for: authenticating with the API using an API key
```

---

#### `email-craft`
Professional email — cold outreach, internal communication, follow-ups, sensitive messages.
One ask. No "I hope this email finds you well." No chatbot closers.

```
Use email-craft to write an email:
To: potential design agency partner
Goal: schedule a 20-minute call to explore collaboration
Context: we're building a new product and need brand design help
```

---

#### `linkedin-post`
LinkedIn posts. First sentence = the actual point. No hustle porn. No fake vulnerability.

```
Use linkedin-post to write: we shipped our first feature built entirely by one customer request — here's how it changed our process
```

---

#### `twitter-thread-craft`
Twitter/X threads. Tweet 1 = the thesis. No "A thread 🧵". Each tweet standalone. 8–12 tweets.

```
Use twitter-thread-craft to write a thread on: why most API documentation fails and what good API docs look like
```

---

#### `readme-writer`
GitHub READMEs. What → install → one working example. No marketing language. Code-first.

```
Use readme-writer to write a README for: chameleon-writer
What it does: a set of agent skills that eliminate AI slop from writing
```

---

#### `slide-script`
Speaker notes for presentations. One idea per slide. Spoken English. No announcement transitions.

```
Use slide-script to write speaker notes for:
[Slide 1]: The problem with AI writing
[Slide 2]: What AI slop actually looks like
[Slide 3]: The 3-layer solution
```

---

#### `brutal-editor`
Cut any draft to a user-defined target. Adverbs first, then hedges, then repetition. Never cuts the most specific detail.

```
Use brutal-editor to cut this to 150 words:
[paste draft]

Use brutal-editor to cut by 35%:
[paste draft]
```

---

## Voice Fingerprint: Make Any Skill Sound Like You

1. Run `voice-fingerprint` with your own writing sample
2. Save the Voice Profile it generates
3. Paste it at the start of any skill session:

```
My Voice Profile:
[paste your Voice Profile here]

Now use [skill-name] to write: [topic]
```

The Voice Profile overrides the skill's default style — sentence rhythm, vocabulary, punctuation habits, register.

---

## Anti-Slop Basics

This pack is built on research from [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) and two open-source skills:

- [humanizer](https://github.com/blader/humanizer) by @blader — 33 AI writing patterns with Before/After examples
- [stop-slop](https://github.com/hvpandya/stop-slop) by Hardik Pandya — structural patterns and phrase blacklists

**AI writing fails in four layers:**

| Layer | What it looks like |
|-------|-------------------|
| Vocabulary | delve, tapestry, pivotal, testament, vibrant, showcase |
| Phrases | "It's worth noting", "Let's dive in", "In today's world" |
| Structure | Rule of three, em dashes, staccato drama, binary contrasts |
| Voice | Soulless neutrality, false agency, hedged claims, no position |

All 12 skills embed these rules. You don't have to run `slop-detector` after every other skill — the output is clean by design.

---

## License

MIT

## Acknowledgments

Built on [humanizer](https://github.com/blader/humanizer) (MIT) and [stop-slop](https://github.com/hvpandya/stop-slop) (MIT). Primary research source: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).