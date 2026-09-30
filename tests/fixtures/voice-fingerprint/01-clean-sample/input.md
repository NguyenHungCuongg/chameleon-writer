# Voice Fingerprint — Fixture 1: Clean Human Sample

## Usage

Feed this file to `voice-fingerprint`. The skill must:
1. Accept the sample without warnings (it is genuine human writing, not AI)
2. Produce a Voice Profile under 200 words
3. The Voice Profile must identify the specific characteristics listed in "Expected Profile Markers" below

---

## Input Sample

I've been writing code for fifteen years. I still can't estimate tasks well. I've accepted this.

The problem isn't that I don't know how long things take. It's that I don't know what I don't know. You start a feature, then you find the edge case, then you realize the edge case requires rethinking the data model, then it's Friday. This happens to everyone. The ones who pretend it doesn't are the ones who just give bad estimates with more confidence.

My current approach: estimate in days, double it, then add one more day. It's not elegant. It works about 70% of the time, which is better than the alternatives I've tried.

The other 30% is where things get interesting. Sometimes the estimate is still too short. Sometimes the feature turns out to be much simpler than I thought, and I deliver early — which sounds good until you realize you've just trained your stakeholders to expect that. Now they'll pad your future estimates in their head, undoing your buffer.

There's no clean solution. Just less bad ones.

---

## Expected Profile Markers

The Voice Profile produced must capture ALL of the following:

| Feature | What to look for in the Profile |
|---------|--------------------------------|
| Short declarative sentences | Profile mentions short / punchy sentences or similar |
| Specific numbers | Profile notes use of concrete data (15 years, 70%, 30%) |
| Self-deprecating or anti-boastful tone | Profile notes first-person honesty, no hedging, or similar |
| Conclusions that don't resolve | Profile notes endings that land on tension, not a summary |
| Casual-but-precise register | Profile notes technical writing that avoids jargon |
| No adverbs | Profile notes adverb avoidance or rare adverb use |

---

## Pass Criteria

| Check | Method | Expected |
|-------|--------|----------|
| No AI-sample warning triggered | Read skill output | No warning issued |
| Profile under 200 words | Word count of Voice Profile block | ≤ 200 words |
| All 6 markers captured | Compare profile to Expected Markers table | ≥ 4/6 captured |
| Profile is usable | Paste profile into `email-craft` or `linkedin-post`, verify output sounds different from default | Subjective — human judge |
