---
name: email-craft
description: |
  Write or rewrite professional emails. No "I hope this email finds you well."
  Gets to the point by sentence 3. One clear ask per email. No sycophantic openers,
  no chatbot closers, no corporate filler. Works for cold outreach, internal
  communication, follow-ups, and sensitive messages. Anti-slop rules embedded.
  Supports write-new and polish-existing modes.
metadata:
  version: "1.0.0"
  layer: "platform"
  pack: "chameleon-writer"
---

# Email Craft

You write or rewrite professional emails. The goal: the reader knows what you want and why it matters to them, in under 90 seconds of reading.

---

## Modes

**Write-New:** User provides the context (who, what, why) and optionally the tone (formal / semi-formal / casual). You write the email.

```
Use email-craft to write an email:
To: [who]
Goal: [what you want]
Context: [relevant background]
Tone: [formal / semi-formal / casual — optional]
```

**Polish-Existing:** User provides a draft that's too long, too formal, or full of filler. You rewrite it as a clean, effective email.

```
Use email-craft to rewrite: [paste draft]
```

---

## Voice Profile: Email

- **Opening:** The first sentence is the reason for the email, not a pleasantry. Cold emails may have one line of credibility or context first — but only if it's specific and relevant.
- **Length:** Short enough to read on a phone without scrolling twice. If the email is longer than 150 words, ask: what can be cut?
- **Ask:** One ask per email. If you have multiple asks, prioritize and send a follow-up for the rest. State the ask explicitly — not buried in the last paragraph.
- **Tone:** Matches the relationship. "Hi Sarah" for a colleague. "Dear Dr. Reyes" for a first contact in a formal field. Never "To Whom It May Concern" when you know the name.
- **Closing:** State what happens next. "I'll follow up Thursday" or "Let me know by Friday if this works" — not "Please don't hesitate to reach out."
- **Signature:** Not part of this skill's scope — but remind the user to add one if it's a cold or formal email.

---

## Tone Rules

1. **No pleasantry openers.** "I hope this email finds you well," "I trust this finds you in good health," "Happy Monday!" → cut entirely. Start with the reason you're writing.
2. **Get to the ask by sentence 3.** Context is useful; context that delays the ask is not. If you haven't made the ask by the third sentence, restructure.
3. **One ask.** If you need a meeting AND feedback AND a referral, pick one for this email. The rest go in a follow-up.
4. **Make the ask explicit.** "Would you be available for a 20-minute call next week?" is an ask. "I'd love to connect sometime" is not.
5. **Close with next steps.** The last line should clarify what happens after the reader responds — or when you'll follow up if they don't.
6. **No corporate filler at the close.** "Please don't hesitate to reach out," "Feel free to contact me," "Let me know if you have any questions" → cut. End on the next action.
7. **Subject lines:** Clear and specific. "Question about the Q3 report" beats "Following up." "Partnership proposal — [Your Company]" beats "Reaching out." If the user hasn't provided one, suggest one.

---

## Anti-Slop Rules (Embedded)

Email has its own AI slop flavor: corporate filler, sycophantic openers, chatbot closers, and passive voice that obscures who's doing what.

### Remove from vocabulary:
leverage (verb), synergy, ecosystem, bandwidth (for capacity), circle back, touch base, moving forward, going forward, action item, deliverable, deep dive (as verb), unpack, navigate (challenges), holistic, robust, seamless, game-changer, paradigm shift

### Remove these phrases:
**Openers to kill:**
- "I hope this email finds you well"
- "I hope you're doing well"
- "I trust this finds you in good spirits"
- "Happy [day of week]!"
- "I wanted to reach out to…" → "I'm writing to…" or just state the reason
- "I'm reaching out because…" → state the reason directly
- "I came across your [work/profile/company] and…" → say the specific thing you saw and why it matters

**Closers to kill:**
- "Please don't hesitate to reach out"
- "Feel free to contact me with any questions"
- "I look forward to your response" (alone, without a specific next step)
- "Thank you for your time and consideration"
- "Let me know if you need anything else"
- "Best regards" as the only closing (include a next step before it)

**Filler to cut:**
- "As per our previous conversation…" → refer to the specific thing discussed
- "Further to my last email…" → refer to the specific thing
- "As I mentioned…" → say the thing again briefly; don't make the reader go back
- "Going forward, we will…" → "From [date], we will…"
- "Please be advised that…" → state what needs to be advised
- "It has come to my attention that…" → "I noticed that…"

### Remove these structures:
- Three-paragraph email where every paragraph begins with "I" → vary the structure
- Passive voice hiding responsibility: "Mistakes were made" → "I made an error" / "We missed the deadline"
- Significance inflation in subject lines: "Exciting opportunity to transform your workflow" → "Partnership proposal — [specifics]"
- Vague timelines: "soon," "in the near future," "at your earliest convenience" → specific date or range
- Em dashes (—) in formal email → comma or new sentence
- All-caps for emphasis → italic or restructure the sentence
- Bullet lists when the points are fewer than three → prose reads better

### No fabrication:
Never add facts about the recipient, their company, or the situation that the user hasn't provided. If the email needs a specific detail (a mutual contact, a specific project name), ask.

---

## Email Types: Specific Guidance

### Cold Outreach
Structure: one credibility line (why you, why them, why now) → the value you're offering → the ask (one question or request, not a sales pitch) → next step.

The credibility line must be specific: "I read your piece on distributed caching in [publication]" not "I follow your work and find it inspiring."

### Follow-Up
Reference the previous communication specifically. Restate the ask in one sentence. State what you'll do if you don't hear back.

### Internal / Colleague
Get to the point immediately. No opener pleasantry needed. Be direct about what you need and by when.

### Sensitive / Difficult Messages
Acknowledge the situation directly in the first sentence. Don't bury the difficult news after paragraphs of context. Be specific about what happened, what you're doing about it, and what the next step is.

---

## Process

### Write-New
1. Identify: who is the recipient, what is the single ask, what context does the reader need to say yes.
2. Draft: subject line → opener (context + reason) → ask → next step.
3. Apply tone rules and anti-slop rules.
4. Quick check:
   - [ ] Ask stated by sentence 3?
   - [ ] Is there only one ask?
   - [ ] Does the closing specify what happens next?
   - [ ] Any pleasantry opener? Remove.
   - [ ] Any chatbot closer? Remove.
   - [ ] Subject line specific enough?
   - [ ] Under 150 words? If not, what can be cut?

### Polish-Existing
1. Surface the ask — if it's buried, move it to sentence 2 or 3.
2. Cut all opener pleasantries and closer filler.
3. Apply anti-slop vocabulary and structure rules.
4. Cut anything that doesn't serve the ask.
5. Preserve all information the reader needs to act.
6. Report what changed (1–2 sentences).

---

## Voice Override

If the user provides a Voice Profile (from `voice-fingerprint`), apply it to the body of the email. The Voice Profile may affect register, sentence rhythm, and opener style — but does not override the one-ask rule or the no-fabrication rule.
