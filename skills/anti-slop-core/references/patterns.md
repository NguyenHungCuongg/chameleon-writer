# Patterns Reference — 33 AI Writing Patterns

Sourced from [humanizer](https://github.com/blader/humanizer) and [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

A clean human writer may hit several of these patterns occasionally. Flag **clusters**, not isolated instances.

---

## Content Patterns

### 1. Undue Emphasis on Significance, Legacy, and Broader Trends

**Words to watch:** stands/serves as, is a testament/reminder, a vital/significant/crucial/pivotal/key role/moment, underscores/highlights its importance, reflects broader, symbolizing its ongoing/enduring/lasting, contributing to the, setting the stage for, marking/shaping the, represents/marks a shift, key turning point, evolving landscape, focal point, indelible mark, deeply rooted

**Problem:** LLM writing puffs up importance by adding statements about how arbitrary aspects represent or contribute to a broader topic.

**Before:**
> The Statistical Institute of Catalonia was officially established in 1989, marking a pivotal moment in the evolution of regional statistics in Spain. This initiative was part of a broader movement across Spain to decentralize administrative functions and enhance regional governance.

**After:**
> The Statistical Institute of Catalonia was established in 1989, part of a wider decentralization of administrative functions in Spain.

---

### 2. Undue Emphasis on Notability and Media Coverage

**Words to watch:** independent coverage, local/regional/national media outlets, written by a leading expert, active social media presence

**Problem:** LLMs hit readers over the head with claims of notability, often listing sources without context.

**Before:**
> Her views have been cited in The New York Times, BBC, Financial Times, and The Hindu. She maintains an active social media presence with over 500,000 followers.

**After:**
> Her views have been cited in The New York Times and the BBC.

If the source gives real context for one citation (what she said and where), keep that one and drop the rest. Don't invent the context.

---

### 3. Superficial Analyses with -ing Endings

**Words to watch:** highlighting/underscoring/emphasizing…, ensuring…, reflecting/symbolizing…, contributing to…, cultivating/fostering…, encompassing…, showcasing…

**Problem:** AI tacks present participle phrases onto sentences to add fake depth.

**Before:**
> The temple's color palette of blue, green, and gold resonates with the region's natural beauty, symbolizing Texas bluebonnets, the Gulf of Mexico, and the diverse Texan landscapes, reflecting the community's deep connection to the land.

**After:**
> The temple is painted blue, green, and gold, colors meant to evoke Texas bluebonnets and the Gulf of Mexico.

---

### 4. Promotional and Advertisement-like Language

**Words to watch:** boasts a, vibrant, rich (figurative), profound, enhancing its, showcasing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking (figurative), renowned, breathtaking, must-visit, stunning

**Before:**
> Nestled within the breathtaking region of Gonder in Ethiopia, Alamata Raya Kobo stands as a vibrant town with a rich cultural heritage and stunning natural beauty.

**After:**
> Alamata Raya Kobo is a town in the Gonder region of Ethiopia.

---

### 5. Vague Attributions and Weasel Words

**Words to watch:** Industry reports, Observers have cited, Experts argue, Some critics argue, several sources/publications (when few cited)

**Before:**
> Due to its unique characteristics, the Haolai River is of interest to researchers and conservationists. Experts believe it plays a crucial role in the regional ecosystem.

**After:**
> Researchers and conservationists study the Haolai River for its unusual characteristics.

Name a real source or cut the claim. Never invent one.

---

### 6. Formulaic "Challenges and Future Prospects" Sections

**Words to watch:** Despite its… faces several challenges…, Despite these challenges, Challenges and Legacy, Future Outlook

**Before:**
> Despite its industrial prosperity, Korattur faces challenges typical of urban areas, including traffic congestion and water scarcity. Despite these challenges, with its strategic location and ongoing initiatives, Korattur continues to thrive as an integral part of Chennai's growth.

**After:**
> Korattur has recurring traffic congestion and water shortages.

---

## Language and Grammar Patterns

### 7. Overused "AI Vocabulary" Words

**High-frequency AI words:** Actually, additionally, align with, crucial, delve, emphasizing, enduring, enhance, fostering, garner, highlight (verb), interplay, intricate/intricacies, key (adjective), landscape (abstract noun), pivotal, showcase, tapestry (abstract noun), testament, underscore (verb), valuable, vibrant

**Before:**
> Additionally, a distinctive feature of Somali cuisine is the incorporation of camel meat. An enduring testament to Italian colonial influence is the widespread adoption of pasta in the local culinary landscape, showcasing how these dishes have integrated into the traditional diet.

**After:**
> Somali cuisine also includes camel meat, which is considered a delicacy. Pasta dishes, introduced during Italian colonization, remain common, especially in the south.

---

### 8. Avoidance of "is"/"are" (Copula Avoidance)

**Words to watch:** serves as/stands as/marks/represents [a], boasts/features/offers [a]

**Before:**
> Gallery 825 serves as LAAA's exhibition space for contemporary art. The gallery features four separate spaces and boasts over 3,000 square feet.

**After:**
> Gallery 825 is LAAA's exhibition space for contemporary art. The gallery has four rooms totaling 3,000 square feet.

---

### 9. Negative Parallelisms and Tailing Negations

**Before:**
> It's not just about the beat riding under the vocals; it's part of the aggression and atmosphere. It's not merely a song, it's a statement.

**After:**
> The heavy beat adds to the aggressive tone.

**Before (tailing negation):**
> The options come from the selected item, no guessing.

**After:**
> The options come from the selected item without forcing the user to guess.

---

### 10. Rule of Three Overuse

**Before:**
> The event features keynote sessions, panel discussions, and networking opportunities. Attendees can expect innovation, inspiration, and industry insights.

**After:**
> The event includes talks and panels. There's also time for informal networking between sessions.

---

### 11. Elegant Variation (Synonym Cycling)

**Before:**
> The protagonist faces many challenges. The main character must overcome obstacles. The central figure eventually triumphs. The hero returns home.

**After:**
> The protagonist faces many challenges but eventually triumphs and returns home.

---

### 12. False Ranges

**Before:**
> Our journey through the universe has taken us from the singularity of the Big Bang to the grand cosmic web, from the birth and death of stars to the enigmatic dance of dark matter.

**After:**
> The book covers the Big Bang, star formation, and current theories about dark matter.

---

### 13. Passive Voice and Subjectless Fragments

**Before:**
> No configuration file needed. The results are preserved automatically.

**After:**
> You do not need a configuration file. The system preserves the results automatically.

---

## Style Patterns

### 14. Em Dashes — Hard Cut

**Rule:** Final rewrite contains no em dashes (—) or en dashes (–). Replace with: period (new sentence), comma (tight aside), colon (introducing explanation), parentheses (true aside). Also catch spaced em dashes (` — `) and double hyphens (` -- `).

**Before:**
> The term is primarily promoted by Dutch institutions—not by the people themselves. You don't say "Netherlands, Europe" as an address—yet this mislabeling continues—even in official documents.

**After:**
> The term is primarily promoted by Dutch institutions, not by the people themselves. You don't say "Netherlands, Europe" as an address, yet this mislabeling continues in official documents.

**Exception:** If a user-provided voice sample uses em dashes, match the sample's frequency instead.

---

### 15. Overuse of Boldface

**Before:**
> It blends **OKRs (Objectives and Key Results)**, **KPIs (Key Performance Indicators)**, and visual strategy tools such as the **Business Model Canvas (BMC)**.

**After:**
> It blends OKRs, KPIs, and visual strategy tools like the Business Model Canvas.

---

### 16. Inline-Header Vertical Lists

**Before:**
> - **User Experience:** The user experience has been significantly improved with a new interface.
> - **Performance:** Performance has been enhanced through optimized algorithms.

**After:**
> The update improves the interface and speeds up load times through optimized algorithms.

---

### 17. Title Case in Headings

**Before:**
> ## Strategic Negotiations And Global Partnerships

**After:**
> ## Strategic negotiations and global partnerships

---

### 18. Emojis

**Before:**
> 🚀 **Launch Phase:** The product launches in Q3
> 💡 **Key Insight:** Users prefer simplicity

**After:**
> The product launches in Q3. User research showed a preference for simplicity.

---

### 19. Curly Quotation Marks

**Before:**
> He said "the project is on track" but others disagreed.

**After:**
> He said "the project is on track" but others disagreed.

---

### 26. Hyphenated Word Pair Overuse

Keep hyphens in attributive position (a high-quality report). Drop them in predicate position (the report is high quality).

**Before:**
> The team is cross-functional, the report is high-quality, and the methodology is data-driven.

**After:**
> The team is cross functional, the report is high quality, and the methodology is data driven.

---

### 27. Persuasive Authority Tropes

**Phrases to watch:** The real question is, at its core, in reality, what really matters, fundamentally, the deeper issue, the heart of the matter

**Before:**
> The real question is whether teams can adapt. At its core, what really matters is organizational readiness.

**After:**
> The question is whether teams can adapt. That mostly depends on whether the organization is ready to change its habits.

---

### 28. Signposting and Announcements

**Phrases to watch:** Let's dive in, let's explore, let's break this down, here's what you need to know, now let's look at, without further ado

**Before:**
> Let's dive into how caching works in Next.js. Here's what you need to know.

**After:**
> Next.js caches data at multiple layers, including request memoization, the data cache, and the router cache.

---

### 29. Fragmented Headers

**Before:**
> ## Performance
>
> Speed matters.
>
> When users hit a slow page, they leave.

**After:**
> ## Performance
>
> When users hit a slow page, they leave.

---

### 30. Diff-Anchored Writing

**Before:**
> This function was added to replace the previous approach of iterating through all items, which caused O(n²) performance.

**After:**
> This function uses a hash map for O(1) lookups, avoiding the O(n²) cost of naive iteration.

---

### 31. Manufactured Punchlines and Staccato Drama

**Before:**
> Then AlphaEvolve arrived. It had no preference for symmetry. No aesthetic prior. No nostalgia for human taste. The old rules were gone.

**After:**
> AlphaEvolve changed the search because it did not favor symmetry or human-looking designs. That made some of the older assumptions less useful.

---

### 32. Aphorism Formulas

**Words to watch:** X is the Y of Z, X becomes a trap, X is not a tool but a mirror, the language of, the currency of, the architecture of

**Before:**
> Symmetry is the language of trust. Efficiency becomes a trap when teams forget the human layer.

**After:**
> Symmetric layouts often feel more predictable to users. Teams can over-optimize workflows and miss how people actually use them.

---

### 33. Conversational Rhetorical Openers

**Phrases to watch:** Honestly?, Look, Here's the thing, The thing is, Let's be honest, Real talk — used as standalone hooks before an ordinary point.

**Before:**
> Is it worth the price? Honestly? It depends on how often you'll use it.

**After:**
> Whether it's worth the price depends on how often you'll use it.

---

## Communication Patterns

### 20. Collaborative Communication Artifacts

**Words to watch:** I hope this helps, Of course!, Certainly!, You're absolutely right!, Would you like…, Want me to…?, let me know, here is a…

**Before:**
> Here is an overview of the French Revolution. I hope this helps! Let me know if you'd like me to expand on any section.

**After:**
> The French Revolution began in 1789 when financial crisis and food shortages led to widespread unrest.

---

### 21. Knowledge-Cutoff Disclaimers and Speculative Gap-Filling

**Words to watch:** as of [date], based on available information, not publicly available, maintains a low profile, keeps personal details private, likely [grew up/studied/began], it is believed that

**Before:**
> While specific details about the company's founding are not extensively documented in readily available sources, it appears to have been established sometime in the 1990s.

**After:**
> The company's founding date is not documented in the available sources.

---

### 22. Sycophantic/Servile Tone

**Before:**
> Great question! You're absolutely right that this is a complex topic.

**After:**
> The economic factors you mentioned are relevant here.

---

## Filler and Hedging

### 23. Filler Phrases

- "In order to achieve this goal" → "To achieve this"
- "Due to the fact that it was raining" → "Because it was raining"
- "At this point in time" → "Now"
- "In the event that you need help" → "If you need help"
- "The system has the ability to process" → "The system can process"
- "It is important to note that the data shows" → "The data shows"

---

### 24. Excessive Hedging

**Before:**
> It could potentially possibly be argued that the policy might have some effect on outcomes.

**After:**
> The policy may affect outcomes.

---

### 25. Generic Positive Conclusions

**Before:**
> The future looks bright for the company. Exciting times lie ahead as they continue their journey toward excellence.

**After:**
Cut the paragraph. End on the last concrete fact instead of a send-off.
