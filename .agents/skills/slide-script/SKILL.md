---
name: slide-script
description: Write or rewrite scripts for slide presentations. Each slide = one idea. Script sounds spoken, not written. Sentences under 20 words in speaker notes. Transitions are content, not announcements. No "Next, we'll look at..." — just start the next point. Anti-slop rules embedded. Supports write-new and polish-existing modes.
metadata:
  version: "1.0.0"
  layer: "platform"
  pack: "chameleon-writer"
---

# Slide Script

You write or rewrite scripts for slide presentations — the words the presenter says, matched to what the slide shows. The script should sound like a person talking, not like a document being read aloud.

---

## Modes

**Write-New:** User provides the slide titles, bullet points, or a rough outline. You write the speaker notes / script.

```
Use slide-script to write speaker notes for:
[Slide 1]: [title or bullets]
[Slide 2]: [title or bullets]
...
```

**Polish-Existing:** User provides existing speaker notes or a presentation script that's too dense, too formal, or full of written-prose habits. You rewrite it for spoken delivery.

```
Use slide-script to rewrite these speaker notes: [paste script]
```

---

## Voice Profile: Slide Script

- **Register:** Spoken English. Not written English read aloud. Contractions are fine. Sentence fragments (when natural) are fine. "Here's the thing" is not fine (it's throat-clearing). Just start the thing.
- **Sentence length:** 20 words maximum per sentence in speaker notes. Most should be shorter. Long sentences lose the audience when spoken.
- **Per-slide:** One idea per slide. The script for one slide should cover exactly what the slide shows — nothing more, nothing less. If the script is going beyond what's on the slide, either the slide needs more content or the script needs a cut.
- **Transitions:** Content, not announcements. Don't say "now let's move on to our next topic." Just start the next topic with a sentence that connects it to what came before.
- **Timing:** Speaker notes should match the slide time. For a 60-second slide: ~120 words (average speaking pace ~130 words/minute). For a 30-second slide: ~60 words. Ask the user for timing if not specified; it shapes the script length significantly.

---

## Tone Rules

1. **Write for the ear, not the eye.** Read every sentence aloud. If it sounds like something you'd write in a doc, rewrite it.
2. **One idea per slide.** If the script covers two ideas, the slide probably needs to be split. Flag this to the user.
3. **Transitions are implicit.** "We've seen the problem — now here's what we did about it" is a transition. "Now let's move on to our next section" is an announcement.
4. **Opening sentence of each slide = the one thing the audience should remember from that slide.** Not a question, not a setup. The idea itself.
5. **Don't read the slide.** If the slide has bullets, the script explains, elaborates, or adds context. If the script is just the bullets spoken aloud, it adds nothing.
6. **Short sentences for emphasis.** One short sentence in a longer slide is fine. Three consecutive short sentences is staccato theater.
7. **End each slide script on a complete thought.** Don't leave the slide on a trailing "so…" or "which leads us to…" The next slide's opening connects.

---

## Anti-Slop Rules (Embedded)

Presentation scripts have their own AI slop: announcement transitions, significance inflation for every slide, and written-prose sentences that no one would actually say.

### Remove from vocabulary:
pivotal, testament, underscore, landscape (abstract), tapestry, showcase, groundbreaking, cutting-edge, revolutionary, transformative, impactful, robust (without specifics), seamless, delightful, powerful (without specifics), synergy, leverage (verb), ecosystem

### Remove these phrases:
**Transition announcements (replace with content transitions):**
- "Now let's move on to…" → start the next point
- "Let's take a look at…" → start looking at it
- "Next, we'll discuss…" → start the discussion
- "Before we dive in…" → dive in
- "With that said…" → cut entirely; just continue
- "Moving on…" → cut; the next slide is already moving on
- "I'd like to walk you through…" → walk through it

**Significance inflation:**
- "This is perhaps the most important slide in the deck" → if it's the most important, the content shows it
- "This is a pivotal moment for…" → say what's happening
- "This data is truly remarkable" → say what's remarkable about the data

**Filler openers:**
- "So, today we're going to talk about…" → state the first point
- "Hello everyone, my name is…" → the user handles their own intro
- "Thank you for having me" → user's call; don't write this unless asked

### Remove these structures:
- Long sentences (20+ words) → split at the conjunction
- Written-prose sentences that can't be spoken naturally (read aloud to check)
- Rhetorical questions as transitions: "But what does this mean for us?" → state what it means
- Binary contrasts: "It's not about X, it's about Y" → state Y
- Em dashes (—) → pause (written as "...") or new sentence
- Passive voice: "The research was conducted" → "We ran the study" or "The team conducted…"
- Meta-commentary about the presentation: "As you can see in this slide…" → just say what it shows
- Bullet-point scripts (verbatim recitation of slide bullets) → elaboration and context instead

### No fabrication:
Never add data, quotes, statistics, or outcomes not provided by the user. If a slide claims "40% improvement" and the user only said "improvement," ask for the number or write "significant improvement" with a note to verify.

---

## Output Format

Deliver the script slide-by-slide. For each slide:

```
## Slide [N]: [Slide Title]

[Script — the words the presenter says. One paragraph or short paragraphs for longer slides.]

[Timing: ~XX seconds if you can estimate from word count]
```

If a slide's content is unclear or the topic seems to need splitting into two slides, flag it with a note before the script for that slide.

---

## Process

### Write-New
1. Map each slide title/bullets to one central idea.
2. Flag any slides that seem to contain two ideas — suggest splitting.
3. Write each slide's script: opening sentence (the idea) → elaboration → any data or example → silent transition setup.
4. Apply tone and anti-slop rules.
5. Quick check (read everything aloud):
   - [ ] Any sentence over 20 words? Split it.
   - [ ] Any transition announcements? Replace with content transitions.
   - [ ] Any significance inflation? Remove.
   - [ ] Does each slide's opening sentence state the idea?
   - [ ] Does the script avoid reading the slide bullets verbatim?
   - [ ] Em dashes? Replace with pause marks (...) or new sentence.

### Polish-Existing
1. Identify and rewrite written-prose sentences that can't be spoken naturally.
2. Cut all announcement transitions.
3. Shorten sentences over 20 words.
4. Apply anti-slop rules.
5. Preserve all information.
6. Report what changed (1–2 sentences).

---

## Voice Override

If the user provides a Voice Profile (from `voice-fingerprint`), apply it to adjust register and natural speaking patterns. A Voice Profile is especially useful here — it captures how someone naturally talks, which is exactly what a slide script should sound like.
