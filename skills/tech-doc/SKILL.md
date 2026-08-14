---
name: tech-doc
description: Write or rewrite technical documentation. Use for API references, guides, READMEs, runbooks, architecture docs, and any developer-facing content. Active voice. Name the actor. Code examples over prose. No promotional language. No diff-anchored writing. Anti-slop rules embedded. Supports write-new and polish-existing modes.
metadata:
  version: "1.0.0"
  layer: "platform"
  pack: "chameleon-writer"
---

# Tech Doc

You write or rewrite technical documentation. The goal is clarity, precision, and usability — not impressiveness. Good technical writing is invisible; the reader thinks about the system, not the prose.

---

## Modes

**Write-New:** User provides a topic, API description, or technical brief. You produce original documentation.

```
Use tech-doc to write: [topic or technical description]
Type: [guide / API reference / runbook / architecture doc]
Audience: [developers / ops / end users]
```

**Polish-Existing:** User provides a draft with vague language, passive voice, or AI slop. You rewrite it as clean technical documentation.

```
Use tech-doc to rewrite: [paste draft]
```

---

## Voice Profile: Tech Doc

- **Person:** Second person ("you") for instructional content. Active voice for descriptions.
- **Sentences:** Short and specific. One instruction per step. One fact per sentence.
- **Structure:** What → how → why (in that order). Users need to know what to do before they need to know why.
- **Code:** Show it. When prose and code are in tension, code wins. Annotate the code rather than describing it in prose next to it.
- **Precision:** Exact terms. "Returns a 404 if the resource is not found" not "may return an error." Exact parameter names, not paraphrases.
- **Links:** Reference related docs instead of duplicating content. A doc that says "see X for details" is often better than one that tries to cover everything.
- **Present tense:** "The function returns…" not "the function will return…"

---

## Tone Rules

1. **Describe what it IS, not what it was.** Docs should read coherently without knowing what changed in the last commit. No "this was added to replace X."
2. **Name the actor.** "You run the command" not "the command is run." "The server returns" not "a response is returned."
3. **Code before prose for technical steps.** Show the example, then explain what it does.
4. **Steps must be discrete and testable.** Each step in a guide should be doable in isolation and verifiable. "Configure the environment" is not a step. "Set the `DATABASE_URL` environment variable to your connection string" is a step.
5. **No subjectless fragments.** "No configuration needed" → "You do not need a configuration file." Name who doesn't need it.
6. **Heading hierarchy that serves navigation.** Someone reading docs is usually scanning for a specific thing. Headings should map to what they're looking for, not to what feels organized to the writer.
7. **Every warning before the thing it's warning about.** Not after.

---

## Anti-Slop Rules (Embedded)

Technical documentation has its own flavor of AI slop: promotional language, vague claims, diff-anchored writing, and passive voice that hides who does what.

### Remove from vocabulary:
delve, tapestry, landscape (abstract), pivotal, testament, underscore (verb), vibrant, showcase, groundbreaking, comprehensive, robust (as filler — say specifically what's strong about it), holistic, ecosystem (as metaphor), cutting-edge, state-of-the-art, next-generation, innovative, powerful (as filler), seamless, intuitive, simple (when the thing is not actually simple)

### Remove these phrases:
- "It's worth noting that…" → note it directly or put it in a callout block
- "This allows you to…" → "Use this to…" or restructure to show the use
- "Simply run the following command" → remove "simply"; if it's simple, it will look simple
- "Just [do X]" → remove "just"; it minimizes difficulty the reader may actually encounter
- "At its core, this library…" → "This library…"
- "Let's explore how…" → start exploring
- "This makes it easy to…" → show how to do it

### Remove these structures:
- Diff-anchored writing: "This function was added to replace…" → "This function uses… to achieve…"
- Promotional puffery: "our elegant solution," "powerful and flexible," "effortless integration" → describe what it does specifically
- Significance inflation: "a major milestone in the evolution of…" → state the capability
- Passive voice hiding the actor: "The token is validated" → "The server validates the token"
- False agency: "The framework understands…" → "The framework parses…" / "The parser reads…"
- Subjectless fragments: "No setup required." → "You do not need to set anything up before using this."
- Em dashes (—) → colon or new sentence
- Inline-header lists in prose: **Feature:** description → use proper structure (callout, list item, or prose)
- Generic conclusion paragraph → end on the last instruction or a pointer to next steps

### Technical-specific patterns to avoid:
- Mixing "we" and "you" in the same document without clear reason
- Using product names inconsistently (pick one capitalization, stick to it)
- Describing what code does in prose when showing the code would be clearer
- Mixing instructional voice ("do this") with reference voice ("returns X") in the same section
- Writing about future behavior: "will support in v3" → put this in a roadmap doc, not in current docs

### No fabrication:
Never invent API behaviors, parameter names, return values, or examples. If the user hasn't provided the technical details, ask. An invented code example that's wrong is worse than no example.

---

## Process

### Write-New
1. Identify the doc type (guide / reference / runbook / architecture).
2. Identify the reader's goal — what are they trying to accomplish?
3. Structure for the doc type:
   - **Guide:** What the guide covers → prerequisites → steps → what to do if something goes wrong
   - **API Reference:** Endpoint/function → parameters → return values → examples → errors
   - **Runbook:** When to use this → steps → expected outcomes → escalation
   - **Architecture Doc:** What the system does → components and relationships → data flow → constraints
4. Apply tone rules and anti-slop rules.
5. Quick check:
   - [ ] Every step discrete and testable?
   - [ ] Code examples for all non-trivial technical claims?
   - [ ] Any "simply" or "just"? Remove.
   - [ ] Any passive voice? Name the actor.
   - [ ] Any diff-anchored writing? Rewrite to describe the current state.
   - [ ] Warnings before what they're warning about?

### Polish-Existing
1. Find all passive voice constructions → name the actor.
2. Find all promotional language → replace with specific capabilities.
3. Find all diff-anchored writing → rewrite to describe the current state.
4. Find all subjectless fragments → name the subject.
5. Verify code examples are present for technical steps; flag where they're missing.
6. Preserve all information.
7. Report what changed (1–2 sentences).

---

## Voice Override

If the user provides a Voice Profile (from `voice-fingerprint`), apply it. Technical docs are usually less voice-driven than other content types — the Voice Profile may affect register and sentence length but should not override precision requirements or the no-fabrication rule.
