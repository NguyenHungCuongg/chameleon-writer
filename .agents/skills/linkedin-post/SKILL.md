---
name: linkedin-post
description: Write or rewrite LinkedIn posts. First sentence = the actual point. No hustle porn. No "I'm humbled to announce." No fake vulnerability. No emoji spam. No bullet-point walls. Treats the reader as an adult. Anti-slop rules embedded plus LinkedIn-specific patterns. Supports write-new and polish-existing modes.
metadata:
  version: "1.0.0"
  layer: "platform"
  pack: "chameleon-writer"
---

# LinkedIn Post

You write or rewrite LinkedIn posts that treat the reader as an adult. No performance. No hustle porn. Just the actual thing worth saying, said clearly.

---

## Modes

**Write-New:** User provides a topic, announcement, or insight. You write the post.

```
Use linkedin-post to write: [topic or what you want to share]
```

**Polish-Existing:** User provides a draft that's too corporate, too emotional, or full of AI patterns. You rewrite it.

```
Use linkedin-post to rewrite: [paste draft]
```

---

## Voice Profile: LinkedIn Post

- **Length:** 100–250 words for most posts. Long-form (300–500 words) only when the content earns it.
- **Opening:** The first sentence is the post. Not a setup, not a hook that withholds. The actual claim, story opening, or insight. LinkedIn cuts the preview at ~210 characters — the first sentence must stand alone.
- **Structure:** Short paragraphs, 1–3 sentences. White space is not padding — it's readability.
- **Closing:** Optional. If you have one, it should open a question to the reader or land a specific point — not "What do you think?" or "Drop a comment below."
- **Emojis:** Maximum one, only if it's genuinely useful for navigation (e.g., a bullet point emoji in a structured list). Zero in formal or professional posts.
- **Hashtags:** Maximum three, placed at the end. Only if they're real categories people search. Skip them if they feel forced.

---

## Tone Rules

1. **First sentence = the point.** Not "I've been thinking about something lately." Not "Three years ago, I made a mistake." The actual claim or the specific detail that starts the story.
2. **No hustle porn.** The category includes: "I wake up at 4am," "rejected 100 times before…," "99% of people won't do this," "if you're not [doing X], you're falling behind." These are performance, not substance.
3. **No fake vulnerability.** "I'll be honest — this was hard for me" is only genuine if what follows is specific about what was hard and why. Vague admissions of struggle with a triumphant resolution ("but I pushed through and now…") are a formula, not a story.
4. **No "I'm humbled to announce."** Say what happened. "We closed a $5M seed round" not "I'm beyond honored and humbled to share this incredibly exciting news."
5. **No bullet-point wall.** Three to five bullets, maximum. If everything is a bullet point, nothing is.
6. **State the claim directly.** LinkedIn rewards confidence. Hedged takes ("it might be worth considering…") get scrolled past. State it, then show the evidence.
7. **No call-to-action that begs for engagement.** "Drop a like if you agree" → cut. "What do you think?" → only if it's a genuine question you're curious about.

---

## Anti-Slop Rules (Embedded)

LinkedIn has its own slop dialect. These patterns are so common on the platform that avoiding them immediately signals a real voice.

### Remove from vocabulary (LinkedIn-specific):
hustle, grind, journey, passion, purpose-driven, authentic (as a self-description), impactful, synergy, bandwidth, leverage (verb), ecosystem, game-changer, paradigm shift, unlock (potential), transform (as empty verb), empower, elevate, crushing it, killing it, next level

### Remove these phrases (LinkedIn-specific):
- "I'm humbled/honored to announce…" → state the announcement
- "I'll be honest…" (as setup for a vague vulnerability moment) → state what you're being honest about
- "Nobody talks about this, but…" → say it
- "Here's what [X years] taught me:" → say what you learned; don't announce that you learned something
- "This is why I do what I do." → show it, don't announce it
- "The most successful people I know all do one thing:" → state the thing
- "Stop doing X. Start doing Y." (when X and Y are obvious) → say something specific instead
- "Agree?" / "Thoughts?" at the end as a reflex → only keep if it's a genuine question
- "Drop a like/comment if…" → remove
- "Tag someone who needs to see this" → remove
- "If this resonates…" → cut
- "Save this post for later" → cut

### Remove these structures:
- The "fake story hook" opening: "Three years ago, I sat in my car and cried." (dramatic setup → triumph → lesson) → if there's a real story, tell the specific version of it
- The "list of obvious things" post: "5 things successful people do every morning: 1. Wake up early 2. Exercise 3. Read…" → add the specific insight that makes it worth reading
- Significance inflation: "This changes everything," "a pivotal moment in my journey," "the most important thing I've learned" → say the thing; it'll be significant if it's good
- The three-emoji-separated paragraph structure → prose or genuine bullets
- Every line as its own one-sentence paragraph for dramatic effect → use this sparingly; it's the staccato drama pattern
- Generic conclusion: "The future is exciting," "I can't wait for what's next" → end on the specific thing

### Standard anti-slop patterns:
- No em dashes (—)
- No rule of three for the sake of three
- No passive voice hiding the actor ("a decision was made" → "I decided")
- No vague attributions ("research shows," "experts say") without naming the research or expert
- No chatbot closers

### No fabrication:
Never add specific results, numbers, quotes, or outcomes the user hasn't provided. "We increased revenue by 40%" is a fabrication if the user said "we grew revenue." Ask for the number.

---

## LinkedIn-Specific Format Notes

- Line breaks after every 1–3 sentences
- No walls of text (5+ unbroken sentences)
- Hashtags: 0–3, at the end, not embedded in the text
- Emojis: 0–1, functional not decorative
- Mentions: use only if the user explicitly requests mentioning someone; don't invent mentions

---

## Process

### Write-New
1. Identify the single claim or story worth sharing.
2. Write the first sentence as the claim or the story's specific opening moment.
3. Build: evidence or narrative → one concrete takeaway → optional closing question (if genuine).
4. Apply LinkedIn-specific and standard anti-slop rules.
5. Quick check:
   - [ ] First sentence stands alone as the post?
   - [ ] Any hustle porn? Remove.
   - [ ] Any "I'm humbled to…"? Replace with the announcement.
   - [ ] Any bullet-point wall? Reduce to 3–5 bullets or convert to prose.
   - [ ] Any engagement-beg at the end? Remove.
   - [ ] Under 250 words?
   - [ ] Em dashes? Remove.

### Polish-Existing
1. Rewrite the opening to lead with the actual claim.
2. Cut all performative phrases (humbled, honored, hustle, journey).
3. Apply anti-slop rules.
4. Cut to 250 words or under unless content earns the length.
5. Preserve all substantive information.
6. Report what changed (1–2 sentences).

---

## Voice Override

If the user provides a Voice Profile (from `voice-fingerprint`), apply it. The Voice Profile may affect register, sentence rhythm, and opener style — but does not override the no-hustle-porn rule, the no-fabrication rule, or the em dash ban.
