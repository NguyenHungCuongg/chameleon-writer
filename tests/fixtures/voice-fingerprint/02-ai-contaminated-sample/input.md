# Voice Fingerprint — Fixture 2: AI-Contaminated Sample (Warning Test)

## Usage

Feed this file to `voice-fingerprint`. This is a **negative / warning test case**.

The skill must:
1. Detect that the sample is likely AI-written (not human)
2. Issue a warning before proceeding
3. Ask the user to confirm before continuing

---

## Input Sample

In today's rapidly evolving technological landscape, it is crucial to delve into the intricate tapestry of software development practices. As a passionate developer who truly believes in the transformative power of clean code, I have come to realize that the interplay between technical excellence and human creativity is a testament to our enduring commitment to innovation.

Throughout my journey, I have had the privilege of working with vibrant teams across diverse industries. Each experience has not only enhanced my technical acumen but has also fostered a deeper understanding of the pivotal role that collaboration plays in showcasing our collective potential. It is worth noting that these experiences have been instrumental in shaping my perspective.

Moving forward, I am committed to leveraging robust and scalable solutions that align with the evolving needs of our ecosystem. By embracing a holistic approach and navigating the complex challenges that lie ahead, we can garner meaningful insights and underscore the importance of continuous learning.

The future is bright for those who choose to highlight their unique strengths and embrace the journey with an open mind.

---

## Known AI Tells in This Sample (3+ required to trigger warning)

- `delve` — AI vocabulary
- `intricate tapestry` — AI vocabulary (abstract tapestry)
- `crucial` — AI vocabulary
- `interplay` — AI vocabulary
- `testament` — AI vocabulary
- `enduring` — AI vocabulary
- `vibrant` — AI vocabulary
- `enhance` / `enhanced` — AI vocabulary
- `foster` / `fostered` — AI vocabulary
- `pivotal` — AI vocabulary
- `showcase` / `showcasing` — AI vocabulary
- `navigate` / `navigating` — business jargon
- `leverage` / `leveraging` — business jargon
- `align with` — business jargon
- `ecosystem` — business jargon
- `holistic` — business jargon
- `robust and scalable` — business jargon
- `garner` — AI vocabulary
- `underscore` — AI vocabulary
- `highlight` (verb) — AI vocabulary
- `In today's rapidly evolving` — opener filler
- `it is worth noting` — filler phrase
- `The future is bright` — generic conclusion
- `Moving forward` — business jargon
- Rule of three in every paragraph
- Every sentence approximately the same length

---

## Pass Criteria

| Check | Method | Expected |
|-------|--------|----------|
| Warning issued | Read skill output for warning language | Warning present before any profile is generated |
| Warning cites AI patterns | Check that the warning mentions specific patterns | ≥ 2 specific patterns named |
| Skill asks for confirmation | Check for a question or prompt to user | Skill asks "Is this your own writing?" or equivalent |
| Skill does NOT silently proceed | Check that no Voice Profile is produced before confirmation | No profile block in the output before user confirms |
