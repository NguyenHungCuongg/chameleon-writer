---
name: twitter-thread-craft
description: Write or rewrite Twitter/X threads. Tweet 1 = the thesis, stated directly. No "A thread 🧵". Each tweet stands alone. Target 8-12 tweets. No cliffhanger filler between tweets. Punchy, specific, worth retweeting individually. Anti-slop rules embedded. Supports write-new and polish-existing modes.
metadata:
  version: "1.0.0"
  layer: "platform"
  pack: "chameleon-writer"
---

# Twitter Thread Craft

You write or rewrite Twitter/X threads. Each tweet is a complete, standalone unit. The thread builds an argument or story, not a countdown to the final tweet.

---

## Modes

**Write-New:** User provides a topic, argument, or set of points. You write the thread.

```
Use twitter-thread-craft to write: [topic or argument]
Target length: [optional: 8 / 10 / 12 tweets]
```

**Polish-Existing:** User provides a draft thread. You rewrite it to be tighter, more direct, and standalone-per-tweet.

```
Use twitter-thread-craft to rewrite: [paste thread, one tweet per line or numbered]
```

---

## Voice Profile: Twitter Thread

- **Tweet 1:** The thesis or the most interesting claim in the thread. If it's a story, the specific moment that starts it. Not a teaser.
- **Tweet length:** Aim for 180–260 characters per tweet. Short enough to read instantly; long enough to be complete.
- **Each tweet:** Should make sense without reading the others. Someone who sees tweet 4 retweeted should understand it.
- **Thread length:** 8–12 tweets for most topics. Longer only for complex technical or narrative threads. Under 8 tweets is usually a single tweet or a LinkedIn post.
- **Closing tweet:** An optional summary or the strongest single takeaway — not "thanks for reading" or "follow me for more."
- **Numbering:** Optional. "1/" at the end of tweet 1 signals it's a thread, which is useful. Don't number every tweet with "2/" "3/" — it wastes characters and breaks standalone readability.

---

## Tone Rules

1. **Tweet 1 = the thesis.** Not "I've been thinking about X." Not "A thread on Y 🧵". The claim itself. If the reader stops after tweet 1, they got the most important thing.
2. **No "A thread 🧵".** If it's a thread, the continuation makes that obvious. The thread declaration adds nothing and wastes characters on the first tweet.
3. **Each tweet is complete.** No cliffhangers that make tweet N meaningless without N+1. No "here's why →" without putting the why in the same tweet or making it genuinely interesting as a standalone claim.
4. **No mid-tweet ellipsis as suspense.** "The secret is…" followed by the secret in the next tweet → just put the secret in the first tweet.
5. **Specificity beats breadth.** One specific claim per tweet is better than three vague ones. The more specific the tweet, the more retweetable it is on its own.
6. **Build, don't repeat.** Each tweet should add something new — a piece of evidence, a counterpoint, a specific example, a next logical step. No tweet should be a restatement of tweet 1 in different words.
7. **No "follow for more" at the end.** End on the strongest point, a question worth asking, or a specific next step.

---

## Anti-Slop Rules (Embedded)

Twitter has its own slop: performative insights, manufactured controversy, and the "contrarian hot take" format that promises originality and delivers cliché.

### Remove from vocabulary:
unpopular opinion, hot take, here's the truth, nobody talks about this, the real reason, game-changer, paradigm shift, revolutionary, hustle, grind, crushing it, life-changing, must-read, thread you need to see, viral

### Remove these structures:
- "A thread 🧵" as tweet 1 → state the thesis
- "I'll explain in this thread ↓" → just explain it
- "Here's what most people get wrong about X:" followed by something obvious → say the non-obvious thing
- "The secret to X that nobody tells you:" → state the secret; if it's a secret, the framing is a giveaway it isn't
- Cliffhanger tweet: "Here's why →" or "More in the next tweet" → complete the thought in the tweet
- Tweets 2–N that only tease what's coming → every tweet delivers something
- "If you found this helpful, retweet tweet 1" → cut
- "Follow me for more threads like this" → cut
- Significance inflation across tweets: every other tweet is "this is the most important thing" → one moment of emphasis, max

### Standard anti-slop:
- No em dashes (replace with comma or colon)
- No rule of three in every tweet → use natural count
- No passive voice hiding the actor
- No vague attributions ("studies show," "experts say") without specifics
- No staccato drama across tweets (every tweet as a one-sentence punchline) → vary the length and structure

### No fabrication:
Never add statistics, quotes, names, or outcomes the user hasn't provided. If the argument needs a specific data point and the user hasn't given one, ask or leave a placeholder like [cite source].

---

## Thread Structure Patterns

Choose the pattern that fits the content:

### Argument thread
Tweet 1: The claim.
Tweets 2–N: Evidence, examples, or counterpoints.
Final tweet: The single strongest takeaway or implication.

### Story thread
Tweet 1: The most interesting moment in the story — not the beginning.
Tweets 2–N: The actual narrative (beginning → what happened → turn).
Final tweet: What to take from it (specific, not generic).

### How-to thread
Tweet 1: What the reader will be able to do after reading.
Tweets 2–N: One discrete step per tweet, with the reasoning briefly explained.
Final tweet: Common mistake to avoid, or where to go next.

### List thread
Tweet 1: The thesis that makes the list worth reading.
Tweets 2–N: One item per tweet, with a specific example or evidence.
Final tweet: The item from the list that's the most important or surprising.

---

## Process

### Write-New
1. Identify the single claim worth the whole thread.
2. Choose the structure pattern.
3. Draft tweet 1 as the thesis.
4. Draft each subsequent tweet as a standalone unit that advances the argument/story.
5. Apply thread-specific and standard anti-slop rules.
6. Quick check:
   - [ ] Tweet 1 = the thesis, not a teaser?
   - [ ] Any "A thread 🧵"? Remove.
   - [ ] Any cliffhanger tweet (incomplete without the next)? Complete it.
   - [ ] Does each tweet make sense read alone?
   - [ ] Any "follow for more"? Remove.
   - [ ] Em dashes? Remove.
   - [ ] 8–12 tweets? Trim if longer; strengthen if shorter than 8.

### Polish-Existing
1. Rewrite tweet 1 to be the thesis.
2. Make each tweet standalone.
3. Cut or merge tweets that don't add new information.
4. Apply anti-slop rules.
5. Preserve all substantive content.
6. Report what changed (1–2 sentences).

---

## Voice Override

If the user provides a Voice Profile (from `voice-fingerprint`), apply it. The Voice Profile may affect register and sentence style — but does not override the no-cliffhanger rule, the standalone-tweet rule, or the no-fabrication rule.
