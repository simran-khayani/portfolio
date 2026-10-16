# Missing items and open questions

The page is complete without these items, but the additions or confirmations below would make the portfolio more specific. The website uses the existing `Assets/` and `Logos/` folders; paths are case-sensitive.

## Assets to add

- [ ] **Dashboard screenshot** — There is no real dashboard image yet. A screenshot would show the shipped project rather than a designed placeholder. Add it at `Assets/projects/ai-compliance-dashboard.jpg`. Ready-to-paste prompt: “I added `Assets/projects/ai-compliance-dashboard.jpg`. Replace the project cover placeholder with the screenshot and keep the rest of the design the same.”
- [ ] **Expected organized resume copy** — The working resume PDF is currently `Simran Khayani - Resume Complete.pdf` in the repository root. The résumé button opens its browser PDF preview, where visitors can download a copy. If you prefer the brief’s organized path, add `Assets/docs/resume.pdf`. Ready-to-paste prompt: “I added `Assets/docs/resume.pdf`. Point the résumé preview button to it and keep the browser preview behavior.”

## Copy and fact checks

- [ ] **Alternative headlines** — The chosen headline is “I ask what the data changes.” Two alternatives are “More signal. Better decisions. Fewer guesswork meetings.” and “Good analysis should change what happens next.” This matters if one sounds more like you. Belongs in `content.js` → `person.headline` and `person.alternateHeadlines`. Ready-to-paste prompt: “Use this headline instead: [paste your preferred headline], and keep the rest of the portfolio unchanged.”
- [ ] **Deutsche Bank result** — The form says “reduced KYC processing time by 15% through process automation”; the resume says the Excel tracker “reduced manual processing effort by ~15%.” The site currently follows the resume. Which version is accurate? Belongs in `content.js` → `experience[1].details`. Ready-to-paste prompt: “For Deutsche Bank, use this exact result: [confirmed wording].”
- [ ] **Deutsche Bank title** — The form says “Senior Operational Analyst”; the resume says “Senior Operations Analyst.” The site currently follows the resume. Please confirm the title. Belongs in `content.js` → `experience[1].role`. Ready-to-paste prompt: “Confirm my Deutsche Bank title is [exact title].”
- [ ] **Emeritus company name** — The form says “Emeritus Learning”; the resume says “Emeritus.” The site currently follows the resume. Please confirm the company name. Belongs in `content.js` → `experience[0].company`. Ready-to-paste prompt: “Confirm the company name should appear as [exact company name].”
- [ ] **Hobbies** — The site shows “Pickleball” and “Content creation.” Please confirm that “pickle” means pickleball. Belongs in `content.js` → `outside.activities`. Ready-to-paste prompt: “Confirm my hobbies should be shown as [your preferred wording].”
- [ ] **Instagram fact** — The site says “25K+ views on my Instagram content.” Would you prefer different wording or a time frame? Belongs in `content.js` → `person.instagramFact`. Ready-to-paste prompt: “Use this Instagram fact instead: [exact wording and time frame, if applicable].”
- [ ] **Skills** — The grouped list uses skills supplied in the brief and resume. Please confirm it and add any tools you use that are not listed (for example Tableau, Power BI, or a SQL dialect). Belongs in `content.js` → `skills`. Ready-to-paste prompt: “Update my skills with these confirmed tools and skills: [list].”
- [ ] **McKinsey Forward wording** — The resume’s final bullet ends mid-sentence. The site uses the complete program description and the two complete resume points, and leaves that unfinished claim out. How would you like the final bullet worded? Belongs in `content.js` → `experience[2].summary` or `experience[2].details`. Ready-to-paste prompt: “Replace my McKinsey Forward description with: [approved description].”

## Small hidden detail

The word `cover` toggles a brief, subtle “special edition” treatment. It does not interrupt reading or navigation. The old draggable stickers have been removed; their scattered controls distracted from the editorial composition.

## Three useful next additions

1. A real dashboard screenshot at `Assets/projects/ai-compliance-dashboard.jpg`.
2. Confirmation of the Deutsche Bank result and title so the strongest measurable detail is exact.
3. Your preferred final wording for the unfinished McKinsey Forward bullet.
