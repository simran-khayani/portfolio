const portfolioContent = {
  person: {
    name: "Simran Khayani",
    monogram: "SK",
    eyebrow: "Business analytics · risk · product",
    headline: "Turning messy data into decisions that move.",
    alternateHeadlines: [
      "A sharper point of view for complicated data.",
      "Where analysis gets dressed for the real world."
    ],
    subline: "I work at the meeting point of analytics, risk, and product—asking better questions until the next decision feels obvious.",
    email: "simrankhayani11@gmail.com",
    instagramFact: "25K+ views on my Instagram content",
    image: "Assets/profile.jpeg",
    resume: "Simran Khayani - Resume Complete.pdf",
    social: {
      linkedin: "https://www.linkedin.com/in/simran-khayani/",
      github: "https://github.com/simran-khayani",
      instagram: "https://www.instagram.com/simplysimpyyy_/"
    }
  },
  experience: [
    {
      id: "emeritus",
      period: "Aug 2025 — Apr 2026",
      company: "Emeritus",
      role: "Manager, Product",
      location: "Remote",
      logo: "EM",
      logoImage: "",
      accent: "peach",
      summary: "Product strategy across pricing, positioning, and value proposition—then the stakeholder choreography to make it real.",
      details: ["Shaped product direction across new and existing offerings.", "Built go-to-market targeting and messaging with marketing.", "Led marketing, sales, delivery, and external partners toward alignment.", "Mentored associates on product development, GTM thinking, and analytical rigor.", "Optimized evaluation workflows to improve grading efficiency and consistency."]
    },
    {
      id: "deutsche-bank",
      period: "Aug 2022 — Jul 2025",
      company: "Deutsche Bank",
      role: "Senior Operations Analyst",
      location: "Jaipur",
      logo: "DB",
      logoImage: "Logos/images.png",
      accent: "lilac",
      summary: "Risk and compliance analytics for 200+ FIC clients, with a particular eye for the gap between clean data and useful data.",
      details: ["Analyzed 200+ FIC clients for risk indicators, data gaps, and workflow trends.", "Built an Excel tracker that reduced manual processing effort by ~15%.", "Conducted QA reviews of KYC/EDD cases and resolved inconsistencies across 300+ client profiles.", "Contributed to a GenAI automation initiative for due-diligence workflows.", "Worked with Relationship Managers, Compliance, and Transformation teams."]
    },
    {
      id: "mckinsey-forward",
      period: "Aug 2025",
      company: "McKinsey Forward Program",
      role: "Global Development Initiative",
      location: "Program",
      logo: "MF",
      logoImage: "",
      accent: "mint",
      summary: "A global learning program for structured problem-solving, stakeholder management, and analytical storytelling.",
      details: ["Strengthened leadership, analytical problem-solving, and digital transformation capabilities.", "Engaged with modules designed to improve decision-making in complex business environments.", "Applied program insights to cross-functional collaboration and operational efficiency."]
    }
  ],
  recognition: [
    { figure: "18", suffix: " months", label: "to Senior Analyst (SME)" },
    { figure: "4", suffix: " consecutive", label: "Best Employee awards" },
    { figure: "01", suffix: " research paper", label: "Best Research Paper at an international college conference" }
  ],
  projects: [
    {
      title: "AI Compliance Dashboard",
      kicker: "Shipped · Aug 2024 — Jul 2025 · Jaipur",
      summary: "A working decision surface for an operations team deciding whether to maintain or offboard customer relationships.",
      body: "I researched risk trends, used SQL and Python to build the UI, and managed internal and external stakeholder communication. The result: risk is easier to see, discuss, and act on.",
      tags: ["SQL", "Python", "Risk analytics", "Data visualization"],
      link: "https://ai-compliance-dashboard-ashen.vercel.app/",
      image: "Assets/projects/AI_Due_Diligence_Compliance_Risk_PRD.pdf",
      imageLabel: "AI compliance dashboard project brief"
    }
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      short: "CMU",
      place: "Tepper School of Business · Pittsburgh, PA",
      degree: "Master of Science in Business Analytics",
      date: "May 2027",
      mark: "CM",
      logoImage: "Logos/wordmarksquare-red-600x600.png",
      coursework: "Statistical Foundations of Business Analytics · Business Value for Integrative Analytics · Modern Data Management · Machine Learning for Business Applications · Managing People and Teams"
    },
    {
      school: "Sophia College",
      short: "SC",
      place: "MDSU · Ajmer, India",
      degree: "Bachelor of Business Administration",
      date: "May 2022",
      mark: "S",
      logoImage: "Logos/logo.webp",
      coursework: "Financial Management · Corporate Finance · Cost Accounting · Business Statistics · Quantitative Techniques · Management Information Systems · Business Research · Investment Management",
      extras: "President, Management Forum & Women Development Cell · National Service Scheme (NSS) member"
    }
  ],
  skills: {
    "Analytics & data": ["SQL", "Python", "Excel", "data visualization", "data quality"],
    "Risk & compliance": ["KYC/EDD reviews", "risk and compliance analytics", "quality assurance"],
    "Product & strategy": ["product strategy", "pricing and positioning", "go-to-market", "structured problem-solving", "analytical storytelling"],
    "Leadership": ["stakeholder management", "cross-functional leadership", "mentoring"],
    "AI & automation": ["GenAI automation", "Claude", "AI-assisted coding"]
  },
  outside: {
    title: "Off the spreadsheet",
    copy: "Pickleball, content creation, and the occasional reminder that a good story still needs a point of view.",
    activities: ["Pickleball", "Content creation"]
  }
};

window.portfolioContent = portfolioContent;
