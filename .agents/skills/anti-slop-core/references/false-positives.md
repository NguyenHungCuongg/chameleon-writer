# False Positives — What NOT to Flag

Sourced from [humanizer](https://github.com/blader/humanizer), Detection Guidance section.

A clean human writer can hit several AI writing patterns without any AI involvement. Before flagging or rewriting, check this list. **Look for clusters of tells, not isolated ones.** A single em dash means nothing; em dashes plus rule-of-three plus "vibrant tapestry" plus a "Conclusion" section is a confession.

---

## Do NOT Flag These Alone

### Perfect grammar and consistent style
Many writers are professionals or have been edited. Polish does not equal AI.

### Mixed casual and formal registers
This often signals a person in a technical field, a young writer, or someone with neurodivergent prose habits — not a chatbot.

### "Bland" or "robotic" prose
AI prose has *specific* tells. Generic dryness without those tells is just dry writing.

### Formal or academic vocabulary
AI overuses *specific* fancy words (see patterns.md §7), not all fancy words. Don't flatten "ostensibly" or "constituent" just because they sound brainy.

### Letter-style opening or closing on a comment
Salutations and sign-offs predate ChatGPT by centuries.

### Common transition words in isolation
*Additionally*, *moreover*, *consequently* are AI-coded only when piled up. One *however* is not a tell.

### Curly quotes alone
macOS, Word, Google Docs, and most CMSes auto-curl by default. Curly quotes only count when stacked with other tells.

### Em dashes alone
Many editors and journalists use them often. Em dashes are evidence only when paired with formulaic sales-y rhythm. **Exception for rewrites:** the em dash ban in humanizer is a *style rule for output*, not a detection rule. Don't strip em dashes from source text just because they appear.

### One short emphatic sentence
Humans use clipped sentences to land a point. Flag staccato drama only when several short fragments appear in a row and inflate the tone.

### "Honestly" or "look" mid-sentence
These are ordinary in casual writing. The tell is the standalone theatrical opener, not the word itself.

### Unsourced claims
Most of the web is unsourced. Lack of citations doesn't prove anything.

### Correct, complex formatting
Visual editors and templates produce clean output without any AI.

### Secondhand text
Do not rewrite flagged phrases inside quotations, titles, proper names, or examples where the phrase is being *discussed* rather than *used*.

### Adverbs used once, naturally
One "genuinely" in 800 words is not a tell. It's only a flag when they cluster or appear in phrases that read as AI affectation.

---

## Signs of Human Writing — Preserve These

When you see these, lean toward leaving the prose alone. They are evidence of a real person writing. Over-editing will destroy what makes the piece sound human.

### Specific, unusual, hard-to-fabricate detail
A real address. A weird quote. The phrase "the lawyer who used to work upstairs from my dentist." LLMs round off specifics; humans hoard them.

### Mixed feelings and unresolved tension
"I think this is mostly good, but it bothers me, and I can't fully explain why." LLMs default to clean takes.

### Dated, era-bound references
Slang, memes, or in-jokes that map to a specific year and subculture. Models lag by a year or more.

### First-person editorial choices the writer can defend
If the writer can explain *why* they made a particular cut or used a particular word, that's a strong human signal.

### Variety in sentence length
Real writing alternates short and long. AI writing tends toward an even, mid-length cadence.

### Genuine asides, parentheticals, or self-corrections
"(I keep wanting to say 'almost' here, but it really was certain.)" Models rarely interrupt themselves like this.

### Writing predating November 30, 2022
ChatGPT's public launch. Anything older than that is, with very rare exceptions, not AI-written.

### Contradictions or admissions of uncertainty
"I don't know why this works, but it does." AI tends to explain things with false confidence.

### Spelling or grammar quirks consistent throughout
A consistent idiosyncratic habit (always writing "alright" as one word, British spelling in American context) is a human fingerprint.

### Opinions the author is willing to defend
A clear position stated without hedging, especially a contrarian one, is usually human. AI defaults to "both sides" framing.

---

## The Cluster Rule

No single pattern is definitive. Evaluate text as a whole:

- **1–2 tells:** Note but do not rewrite unless combined with a clear AI cadence
- **3–5 tells:** Likely worth reviewing; light editing appropriate
- **5+ tells in one passage:** Strong signal; rewrite recommended

The *combination* of vocabulary (delve, tapestry), structure (rule of three, em dashes), and voice (soulless neutrality, vague attributions) is the actual tell — not any one feature alone.
