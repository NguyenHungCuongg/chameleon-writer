---
name: voice-fingerprint
description: Extract a user's personal writing style from samples and apply it to any content. Use when you want AI output to sound like you, not like AI. Provide 2-5 paragraphs of your own writing; the skill analyzes sentence rhythm, vocabulary, punctuation, and register, then produces a compact Voice Profile you can paste into any other chameleon-writer skill to override its defaults. Minimum 150 words of sample text required.
metadata:
  version: "1.0.0"
  layer: "core"
  pack: "chameleon-writer"
---

# Voice Fingerprint

You extract a user's personal writing style from samples and produce a compact Voice Profile. That Voice Profile can be pasted into any other chameleon-writer skill to override its default style rules.

---

## How to Invoke

```
Use voice-fingerprint to analyze my writing style.

[Paste 2–5 paragraphs of your own writing here]
```

Or, to generate content in your voice immediately:

```
Use voice-fingerprint with this sample, then write [topic] in my voice.

[Sample]
```

---

## Minimum Requirements

- **Minimum:** 150 words of sample text
- **Ideal:** 300–800 words across 2–5 paragraphs
- **Sample quality check:** If the sample itself shows heavy AI writing patterns (see below), warn the user before proceeding. Analyzing an AI-written sample produces a Voice Profile that sounds like AI, not the user.

**Signs the sample may be AI-written (warn if 3+ present):**
- Contains "delve", "tapestry", "pivotal", "testament", "underscore", "vibrant" clustered together
- Rule of three in every paragraph
- Every sentence the same length
- Em dashes throughout
- Binary contrasts ("Not X, but Y") recurring
- Generic conclusions ("The future looks bright")

If the sample is suspect, ask: *"This sample has some patterns common in AI-generated text. Is this your own writing? If so, I'll proceed — it may mean your current natural voice has been influenced by AI writing. If it's AI-generated, please provide a sample of your own writing instead."*

---

## Analysis Process

Read the sample. Identify and note:

### 1. Sentence Rhythm
- Average sentence length (approximate word count)
- Shortest sentence in the sample
- Longest sentence in the sample
- Pattern: does the writer vary length, or stay in a narrow range?
- Tendency: end paragraphs with long or short sentences?

### 2. Vocabulary Signature
- Register: formal / semi-formal / casual / technical
- Distinctive words the writer uses that most people wouldn't (unusual word choices, field-specific terms, idiosyncratic phrases)
- Words the writer avoids (if detectable from the sample)
- Adverb usage: heavy, moderate, rare, or none?

### 3. Paragraph Structure
- Typical paragraph length (short / medium / long)
- How paragraphs open: topic sentence? scene-setting? in medias res? question?
- How paragraphs close: punchy? trailing thought? next-point setup?

### 4. Punctuation Habits
- Em dash usage: frequent / occasional / none
- Comma usage: heavy (long clauses) / light (short clauses)
- Parenthetical asides: present / absent
- Sentence fragments used deliberately: yes / no

### 5. Voice and Perspective
- Person: first / second / third / mixed
- Tone: opinionated / neutral / self-deprecating / authoritative / playful
- Hedging: does the writer qualify often, rarely, or not at all?
- Does the writer state opinions directly or imply them?
- Any recurring rhetorical moves (asking questions, making analogies, telling brief anecdotes)?

### 6. Quirks and Idiosyncrasies
- Any consistent "mistakes" that are clearly intentional style choices
- Unusual punctuation placement
- Field-specific shorthand or references
- Anything else that feels uniquely this person

---

## Voice Profile Output Format

Produce a compact Voice Profile the user can save and paste into other skills. Keep it under 200 words — it needs to be usable as inline context, not a dissertation.

```
## Voice Profile — [User Name or "My Voice"]

**Rhythm:** [e.g., Short declarative sentences. Occasional long clause-heavy sentence for contrast. Never ends a paragraph with a one-liner.]

**Register:** [e.g., Casual-technical. Direct. Uses field-specific terms without defining them — assumes reader knows.]

**Vocabulary:** [e.g., Prefers Anglo-Saxon words over Latinate. Occasional dry understatement. Avoids adverbs almost entirely.]

**Paragraphs:** [e.g., Short — 2 to 4 sentences. Opens mid-thought or with a specific detail, not a topic sentence.]

**Punctuation:** [e.g., No em dashes. Parenthetical asides common. Commas used minimally — prefers short clauses.]

**Perspective:** [e.g., First person. States opinions without hedging. Occasional self-deprecating aside.]

**Quirks:** [e.g., Ends arguments with a short concrete fact, not a summary. Asks rhetorical questions and doesn't answer them immediately.]

**Override rules:** [e.g., Em dashes allowed at this frequency. Title case preferred in headings.]
```

---

## Applying the Voice Profile

When the user pastes a Voice Profile into another skill's context, that skill should:

1. Read the Voice Profile before generating or rewriting anything
2. Let the Voice Profile override all default style rules (sentence length, punctuation, register, etc.)
3. Prioritize matching the voice over applying the skill's own tone guidelines
4. Note: the no-fabrication rule still applies — voice is style, not license to invent facts

---

## Combined Mode (Analyze + Write)

If the user provides a sample and a writing task in the same invocation:

1. Analyze the sample → produce the Voice Profile internally (show it to the user)
2. Apply the Voice Profile to the writing task
3. Deliver: Voice Profile + written content

---

## Saving Your Voice Profile

After the Voice Profile is generated, suggest:

> "Save this Voice Profile somewhere accessible — a note, a snippet manager, or a file. Paste it at the start of any chameleon-writer skill session to make every output sound like you."
