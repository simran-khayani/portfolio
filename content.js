const portfolioContent = {
  person: {
    name: "Simran Khayani",
    monogram: "SK",
    eyebrow: "Business analytics · risk · product",
    headline: "I ask what the data changes.",
    alternateHeadlines: [
      "More signal. Better decisions. Fewer guesswork meetings.",
      "Good analysis should change what happens next."
    ],
    subline: "I’m studying business analytics at Carnegie Mellon’s Tepper School and exploring finance, investment banking, and strategy. The question I keep coming back to: why do businesses have so much data and still struggle to decide?",
    email: "simrankhayani11@gmail.com",
    instagramFact: "25K+ views on my Instagram content",
    image: "Assets/profile.jpeg",
    imageAlt: "Simran Khayani, photographed for her portfolio",
    resume: "Simran Khayani - Resume Complete.pdf",
    social: {
      linkedin: "https://www.linkedin.com/in/simran-khayani/",
      github: "https://github.com/simran-khayani",
      instagram: "https://www.instagram.com/simplysimpyyy_/"
    }
  },
  navigation: [
    { id: "experience", label: "Experience" },
    { id: "recognition", label: "Recognition" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "outside", label: "Outside work" },
    { id: "contact", label: "Contact" }
  ],
  copy: {
    resume: "Download résumé",
    resumeShort: "Résumé",
    downloadResume: "Download résumé",
    menu: "Menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    backToTop: "Back to top",
    navigation: "Primary navigation",
    coverNumber: "01 / 06",
    workCta: "Explore the work",
    contactCta: "Get in touch",
    scrollCue: "A little further down",
    coverCaption: "MSBA · TEPPER '27",
    coverNote: "A closer look at the work",
    experience: {
      eyebrow: "01 / The work",
      title: "Where the numbers had somewhere to go.",
      intro: "Product, operations and a learning program—each a closer look at how decisions actually get made."
    },
    recognition: {
      eyebrow: "02 / The good news",
      title: "A few moments that stayed on the record."
    },
    projects: {
      eyebrow: "03 / One project, up close",
      title: "A risk signal, made easier to read.",
      imagePending: "Concept artwork · dashboard image to come",
      artLabel: "An abstract line connecting risk signals",
      artPrefix: "Case study",
      artTitle: "Risk",
      artSubline: "in context",
      briefLabel: "Read the project brief",
      liveLabel: "View the live project"
    },
    education: {
      eyebrow: "04 / The study of it",
      title: "Learning the language behind the numbers.",
      coursework: "Coursework"
    },
    skills: {
      eyebrow: "05 / At the desk",
      title: "The methods I reach for.",
      hint: "Open a chapter to see what’s in it."
    },
    outside: {
      eyebrow: "06 / After hours",
      title: "Away from the spreadsheet.",
      copy: "Pickleball, content creation, and a soft spot for a story with a good point of view.",
      factLabel: "Instagram, lately",
      instagramLink: "A little more over on Instagram"
    },
    contact: {
      eyebrow: "The next conversation",
      title: "Have a decision worth unpacking?",
      intro: "For roles, collaborations, or a conversation about how analytics can move the work forward.",
      copyEmail: "Copy email",
      copiedEmail: "Email copied",
      emailError: "Could not copy the address. Please select and copy it.",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram"
    },
    footer: "Curious by nature. Specific by design.",
    cursorExplore: "Explore",
    cursorOpen: "Open",
    cursorRead: "Read",
    specialEdition: "Special edition unlocked"
  },
  experience: [
    {
      id: "emeritus",
      period: "Aug 2025 — Apr 2026",
      company: "Emeritus",
      role: "Manager, Product",
      location: "Remote",
      mark: "E",
      logoType: "wordmark",
      logoImage: "Logos/idacsm2ss__1791418144223.png",
      summary: "Product strategy across pricing, positioning and value proposition, followed by the work of getting everyone pointed in the same direction.",
      details: [
        "Shaped product direction across new and existing offerings.",
        "Built go-to-market targeting and messaging with marketing.",
        "Aligned marketing, sales, delivery and external partners.",
        "Mentored associates in product development, go-to-market thinking and analytical rigor.",
        "Optimized evaluation workflows to improve grading efficiency and consistency."
      ]
    },
    {
      id: "deutsche-bank",
      period: "Aug 2022 — Jul 2025",
      company: "Deutsche Bank",
      role: "Senior Operations Analyst",
      location: "Jaipur",
      mark: "DB",
      logoImage: "Logos/images.png",
      summary: "Risk and compliance work across 200+ FIC clients—looking for the gaps between complete data and useful data.",
      details: [
        "Analyzed 200+ FIC clients for risk indicators, data gaps and workflow trends.",
        "Built an Excel tracker that reduced manual processing effort by ~15%.",
        "Reviewed KYC/EDD cases and resolved inconsistencies across 300+ client profiles.",
        "Contributed to a GenAI automation initiative for due-diligence workflows.",
        "Worked with Relationship Managers, Compliance and Transformation teams."
      ]
    },
    {
      id: "mckinsey-forward",
      period: "Aug 2025",
      company: "McKinsey Forward Program",
      role: "Global Development Initiative",
      location: "Program",
      mark: "MF",
      logoImage: "",
      summary: "A global learning program in structured problem-solving, stakeholder management and analytical storytelling.",
      details: [
        "Strengthened leadership, analytical problem-solving and digital transformation capabilities.",
        "Engaged with modules designed to improve decision-making in complex business environments."
      ]
    }
  ],
  recognition: [
    { figure: "18", suffix: "months", label: "Promoted to Senior Analyst (SME)." },
    { figure: "4", suffix: "in a row", label: "Consecutive Best Employee awards." },
    { figure: "01", suffix: "paper", label: "Best Research Paper at an international college conference." }
  ],
  projects: [
    {
      title: "AI Compliance Dashboard",
      period: "Aug 2024 — Jul 2025",
      location: "Jaipur",
      status: "Shipped",
      summary: "An AI-powered dashboard for spotting risk and helping operations teams decide whether to maintain or offboard customer relationships.",
      body: "I researched risk trends, built the interface with SQL and Python, used Claude and AI-assisted coding, and coordinated with internal and external stakeholders. The aim: give the team a clearer way to make the call.",
      tags: ["SQL", "Python", "Risk analysis", "Data visualization", "Claude"],
      link: "https://ai-compliance-dashboard-ashen.vercel.app/",
      brief: "Assets/projects/AI_Due_Diligence_Compliance_Risk_PRD.pdf",
      image: "Assets/projects/ai-compliance-dashboard.jpg"
    }
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      place: "Tepper School of Business · Pittsburgh, PA",
      degree: "Master of Science in Business Analytics",
      date: "May 2027",
      mark: "CMU",
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
      place: "MDSU · Ajmer, India",
      degree: "Bachelor of Business Administration",
      date: "May 2022",
      mark: "SC",
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
      extras: [
        "President, Management Forum & Women Development Cell",
        "National Service Scheme (NSS) member"
      ]
    }
  ],
  skills: {
    "Analytics & data": ["SQL", "Python", "Excel", "Data visualization", "Data quality"],
    "Risk & compliance": ["KYC/EDD reviews", "Risk and compliance analytics", "Quality assurance"],
    "Product & strategy": ["Product strategy", "Pricing and positioning", "Go-to-market", "Structured problem-solving", "Analytical storytelling"],
    "Leadership": ["Stakeholder management", "Cross-functional leadership", "Mentoring"],
    "AI & automation": ["GenAI automation", "Claude", "AI-assisted coding"]
  },
  outside: {
    activities: ["Pickleball", "Content creation"]
  }
};

window.portfolioContent = portfolioContent;
