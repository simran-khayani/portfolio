# Placeholders and open questions

This file is excluded from the live site (see `.vercelignore`).

Every placeholder lives in `content.js` and starts with `[ADD`. The public site hides them. To see them highlighted, open the site with `?draft` added to the address, for example `https://simrankhayani.vercel.app/?draft`. To fill one in, replace the whole bracketed text with your wording.

## Placeholders

### Hero
- [ ] **Target roles**: `person.target`. One line saying which roles you're seeking, for example "Seeking 2027 full-time roles in risk analytics, strategy and product."

### Experience: Emeritus
- [ ] **Product direction**: `experience[0].details[0]`. A metric such as number of programs or revenue influenced.
- [ ] **Go-to-market**: `experience[0].details[1]`. A metric such as enrollment or conversion change.
- [ ] **Evaluation workflows**: `experience[0].details[3]`. A metric such as hours saved per cohort.

### Experience: Deutsche Bank
- [ ] **GenAI initiative**: `experience[1].details[3]`. A metric such as cases automated or time saved.

### Selected Work
- [ ] **AI Compliance Dashboard result**: `projects[0].result`. A metric such as review time saved or cases covered.
- [ ] **Tepper project 1**: `projects[1]`. Title, course or client and term, problem, approach, result, tools.
- [ ] **Tepper project 2**: `projects[2]`. Same fields as project 1.

These project cards stay hidden on the public site until you fill them in. Once a project is complete, delete its `placeholder: true` line so the card appears publicly.

## Facts to confirm

- [ ] **Experience length**: the hero says "3+ years at Deutsche Bank and Emeritus." Your dates add up to about 3 years 8 months.
- [ ] **Deutsche Bank result**: an older form said "reduced KYC processing time by 15% through process automation"; the resume says the Excel tracker "reduced manual processing effort by ~15%." The site follows the resume.
- [ ] **Deutsche Bank title**: "Senior Operations Analyst" (resume) or "Senior Operational Analyst" (form). The site follows the resume.
- [ ] **Emeritus company name**: "Emeritus" (resume) or "Emeritus Learning" (form). The site follows the resume.
- [ ] **AI Compliance Dashboard context**: the dates (Aug 2024 to Jul 2025, Jaipur) overlap with Deutsche Bank. If it was built on the job, check it's fine to show publicly. The image is an illustrative mock-up, not real data.
- [ ] **Skills**: add any tools you use that aren't listed, such as Tableau, Power BI or a SQL dialect.
