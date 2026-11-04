// All site copy lives here. Text containing "[ADD …]" is a placeholder: it is
// hidden on the public site and shown highlighted when the URL has ?draft.
const portfolioContent = {
  person: {
    name: "Simran Khayani",
    monogram: "SK",
    headline: "Business analyst in risk, compliance & product strategy.",
    subhead: "3+ years at Deutsche Bank and Emeritus · MSBA, Carnegie Mellon Tepper, May 2027.",
    target: "[ADD TARGET ROLES — e.g. “Seeking 2027 full-time roles in risk analytics, strategy and product.”]",
    email: "simrankhayani11@gmail.com",
    resume: "simran-khayani-resume.pdf",
    social: {
      linkedin: "https://www.linkedin.com/in/simran-khayani/",
      github: "https://github.com/simran-khayani"
    }
  },
  navigation: [
    { id: "experience", label: "Experience" },
    { id: "work", label: "Selected Work" },
    { id: "recognition", label: "Recognition" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ],
  copy: {
    resume: "View resume",
    resumeShort: "Resume",
    contactCta: "Get in touch",
    menu: "Menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    navigation: "Primary navigation",
    experience: {
      title: "Experience",
      subtitle: "Risk, compliance and product roles across banking and education."
    },
    work: {
      title: "Selected Work",
      subtitle: "Case studies, from problem to result.",
      problem: "Problem",
      approach: "Approach",
      result: "Result",
      tools: "Tools",
      live: "View live project",
      brief: "Read the project brief",
      mockCaption: "Illustrative interface mock-up. Not real data."
    },
    recognition: {
      title: "Recognition",
      subtitle: "Career highlights."
    },
    education: {
      title: "Education",
      subtitle: "Graduate and undergraduate training in analytics and business.",
      coursework: "Coursework",
      involvement: "Leadership",
      certifications: "Certifications & programs"
    },
    skills: {
      title: "Skills",
      subtitle: "Tools and methods used in day-to-day work."
    },
    contact: {
      title: "Contact",
      subtitle: "For roles, interviews or a conversation about analytics.",
      copyEmail: "Copy email",
      copiedEmail: "Email copied.",
      emailError: "Could not copy the address. Please select and copy it.",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    outside: "Outside work: pickleball and content creation."
  },
  experience: [
    {
      role: "Manager, Product",
      company: "Emeritus",
      location: "Remote",
      period: "Aug 2025 — Apr 2026",
      logoImage: "Logos/idacsm2ss__1791418144223.png",
      summary: "Led product strategy across pricing, positioning and value proposition for new and existing offerings.",
      details: [
        "Shaped product direction across new and existing offerings [ADD METRIC — e.g. number of programs or revenue influenced].",
        "Built go-to-market targeting and messaging with the marketing team [ADD METRIC — e.g. enrollment or conversion change].",
        "Aligned marketing, sales, delivery and external partners, and mentored associates in product development and go-to-market thinking.",
        "Optimized evaluation workflows to improve grading efficiency and consistency [ADD METRIC — e.g. hours saved per cohort]."
      ]
    },
    {
      role: "Senior Operations Analyst",
      company: "Deutsche Bank",
      location: "Jaipur, India",
      period: "Aug 2022 — Jul 2025",
      logoImage: "Logos/images.png",
      summary: "Ran risk and compliance analysis across 200+ FIC client relationships.",
      details: [
        "Analyzed 200+ FIC clients for risk indicators, data gaps and workflow trends.",
        "Built an Excel tracker that reduced manual processing effort by ~15%.",
        "Resolved inconsistencies across 300+ client profiles through KYC/EDD case reviews.",
        "Contributed to a GenAI automation initiative for due-diligence workflows with Relationship Manager, Compliance and Transformation teams [ADD METRIC — e.g. cases automated or time saved]."
      ]
    }
  ],
  recognition: [
    { figure: "18", unit: "months", label: "Promoted to Senior Analyst (SME)" },
    { figure: "4", unit: "consecutive", label: "Best Employee awards" }
  ],
  projects: [
    {
      title: "AI Compliance Dashboard",
      meta: "Shipped · Aug 2024 — Jul 2025 · Jaipur",
      problem: "Operations teams needed a clearer way to decide whether to maintain or offboard customer relationships based on risk.",
      approach: "Researched risk trends, built the interface with SQL and Python using Claude and AI-assisted coding, and coordinated with internal and external stakeholders.",
      result: "Shipped a live AI-powered dashboard that surfaces risk signals for the maintain-or-offboard decision [ADD METRIC — e.g. review time saved or cases covered].",
      tools: ["SQL", "Python", "Claude", "Data visualization", "Risk analysis"],
      link: "https://ai-compliance-dashboard-ashen.vercel.app/",
      brief: "Assets/projects/AI_Due_Diligence_Compliance_Risk_PRD.pdf",
      mock: true
    },
    {
      placeholder: true,
      title: "[ADD PROJECT — Tepper project 1 title]",
      meta: "[ADD PROJECT — course or client · term]",
      problem: "[ADD PROJECT — the business question]",
      approach: "[ADD PROJECT — data, methods and your role]",
      result: "[ADD PROJECT — the outcome, with a metric]",
      tools: ["[ADD PROJECT — tools]"]
    },
    {
      placeholder: true,
      title: "[ADD PROJECT — Tepper project 2 title]",
      meta: "[ADD PROJECT — course or client · term]",
      problem: "[ADD PROJECT — the business question]",
      approach: "[ADD PROJECT — data, methods and your role]",
      result: "[ADD PROJECT — the outcome, with a metric]",
      tools: ["[ADD PROJECT — tools]"]
    }
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      unit: "Tepper School of Business · Pittsburgh, PA",
      degree: "Master of Science in Business Analytics",
      date: "May 2027",
      logoImage: "Logos/wordmarksquare-red-600x600.png",
      coursework: [
        "Statistical Foundations of Business Analytics",
        "Business Value for Integrative Analytics",
        "Modern Data Management",
        "Machine Learning for Business Applications",
        "Managing People and Teams"
      ]
    },
    {
      school: "Sophia College",
      unit: "MDSU · Ajmer, India",
      degree: "Bachelor of Business Administration",
      date: "May 2022",
      logoImage: "Logos/logo.webp",
      coursework: [
        "Financial Management",
        "Corporate Finance",
        "Cost Accounting",
        "Business Statistics",
        "Quantitative Techniques",
        "Management Information Systems",
        "Business Research",
        "Investment Management"
      ],
      involvement: [
        "President, Management Forum & Women Development Cell",
        "National Service Scheme (NSS) member"
      ]
    }
  ],
  certifications: [
    {
      name: "McKinsey Forward Program",
      date: "Aug 2025",
      detail: "Structured problem-solving, stakeholder management and analytical storytelling."
    }
  ],
  skills: {
    "Analytics & data": ["SQL", "Python", "Excel", "Data visualization", "Data quality"],
    "Risk & compliance": ["KYC/EDD reviews", "Risk and compliance analytics", "Quality assurance"],
    "Product & strategy": ["Product strategy", "Pricing and positioning", "Go-to-market", "Structured problem-solving", "Analytical storytelling"],
    "Leadership": ["Stakeholder management", "Cross-functional leadership", "Mentoring"],
    "AI & automation": ["GenAI automation", "Claude", "AI-assisted coding"]
  }
};

window.portfolioContent = portfolioContent;
