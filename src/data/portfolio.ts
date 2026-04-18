export const profile = {
  name: "Priyanshu Singh",
  role: "Aspiring Software Engineer",
  tagline: "Full-Stack Developer · AI Enthusiast · Problem Solver",
  bio: [
    "Aspiring Software Engineer skilled in full-stack development and problem-solving.",
    "Experienced in building real-world web and AI-based applications.",
    "Passionate about creating efficient, user-focused solutions.",
  ],
avatar: "/profile.jpg",

  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/prinu916",
    linkedin: "https://www.linkedin.com/in/priyanshu-singh-0b4587349/",
    leetcode: "https://leetcode.com/u/PriyanshuSingh916/",
    instagram: "https://www.instagram.com/hy_prinu_singh",
  },
};

export const currentlyWorking = [
  {
    title: "Access-AI v2",
    description: "Upgrading the AI learning platform with personalized study paths and a smarter chatbot.",
    progress: 65,
    tags: ["AI", "React", "FastAPI"],
  },
  {
    title: "DSA Mastery",
    description: "Solving 300+ problems on LeetCode focused on graphs, DP, and system design fundamentals.",
    progress: 45,
    tags: ["DSA", "C++", "Problem Solving"],
  },
  {
    title: "Open Source Contributions",
    description: "Contributing to community-driven projects and exploring full-stack architecture patterns.",
    progress: 30,
    tags: ["OSS", "Collaboration"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Chandigarh Group of Colleges, Mohali",
    period: "2024 — 2028",
    detail: "CGPA: 7.78",
  },
  {
    degree: "Class 10th & 12th",
    school: "Janta High School, Gorhna",
    period: "2024",
    detail: "10th: 75% · 12th: 80%",
  },
];

export type Project = {
  title: string;
  description: string;
  bullets: string[];
  github?: string;
  demo?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Bharat-AI-Pro",
    description: "AI assistant providing intelligent responses to real-world queries.",
    bullets: [
      "AI-powered intelligent responses",
      "Dynamic input/output handling",
      "Interactive, user-friendly UI",
    ],
    github: "https://github.com/prinu916/bharat-pro-ai",
    demo: "https://bharat-ai-priyanshu.surge.sh/",
    tags: ["AI", "JavaScript", "API"],
  },
  {
    title: "VeritasNet-AI",
    description: "AI system that analyzes and verifies user-provided information.",
    bullets: [
      "Intelligent data validation",
      "Reduces misinformation",
      "Structured reliable outputs",
    ],
    github: "https://github.com/prinu916/VeritasNet-Ai",
    demo: "https://veritasnet-ai.netlify.app",
    tags: ["AI", "Validation", "React"],
  },
  {
    title: "RentNest",
    description: "Property rental platform for managing and displaying room listings.",
    bullets: [
      "Dynamic listing management",
      "Responsive clean UI",
      "Seamless browsing experience",
    ],
    github: "https://github.com/prinu916/RentNest",
    demo: "https://rentnest.surge.sh/",
    tags: ["Web App", "Frontend", "UI/UX"],
  },
  {
    title: "SafeMap",
    description: "Safety-focused web app to identify safer locations in real time.",
    bullets: [
      "Real-time map-based location data",
      "User awareness features",
      "Intuitive responsive interface",
    ],
    github: "https://github.com/prinu916/SafeMap",
    demo: "https://safemap-sigma.vercel.app/",
    tags: ["Maps", "Real-time", "React"],
  },
  {
    title: "Barterly",
    description: "Platform for exchanging goods/services without monetary transactions.",
    bullets: [
      "Item listing & search",
      "Community-driven trading",
      "Sustainability focused",
    ],
    github: "https://github.com/prinu916/Barterly",
    demo: "https://barterly-7t4bup6vd-priyanshu-kumar-s-projects-674fb0a8.vercel.app/",
    tags: ["Marketplace", "Full-stack"],
  },
  {
    title: "PocketMate",
    description: "Personal finance management app for tracking income & expenses.",
    bullets: [
      "Track transactions & budgets",
      "Structured financial data",
      "Better spending analysis",
    ],
    github: "https://github.com/prinu916/PocketMate",
    demo: "https://pocket-mate-peach.vercel.app/",
    tags: ["Finance", "React"],
  },
  {
    title: "CGC-GFG-CampusBody",
    description: "Platform showcasing campus activities, tech events, and initiatives.",
    bullets: [
      "Events & workshops sections",
      "Community engagement",
      "Clean responsive UI",
    ],
    github: "https://github.com/prinu916/CGC-GFG-CampusBody",
    demo: "https://gfg-community.vercel.app/",
    tags: ["Community", "Frontend"],
  },
  {
    title: "Access-AI",
    description: "AI-powered learning platform for coding & AI education.",
    bullets: [
      "Intelligent chatbot",
      "Personalized learning",
      "Accessible UI",
    ],
    github: "https://github.com/prinu916/Access-AI",
    tags: ["AI", "EdTech", "Chatbot"],
  },
  {
    title: "Smart-Scheduler",
    description: "Smart scheduling system based on priorities & deadlines.",
    bullets: [
      "Automated task allocation",
      "Time management focus",
      "Friendly task tracking UI",
    ],
    github: "https://github.com/prinu916/Smart-Scheduler",
    tags: ["Productivity", "Web"],
  },
  {
    title: "Hear-Me",
    description: "Assistive technology app for accessibility.",
    bullets: [
      "Real-time data handling",
      "Accurate responsive outputs",
      "Accessible interface",
    ],
    github: "https://github.com/prinu916/HearMe",
    tags: ["Accessibility", "Real-time"],
  },
  {
    title: "File-Handling",
    description: "File-based data management system with full CRUD operations.",
    bullets: [
      "CRUD via file handling",
      "Validation & error handling",
      "Optimized file processing",
    ],
    github: "https://github.com/prinu916/file-handling-task3",
    tags: ["Systems", "Backend"],
  },
  {
    title: "MiniERP",
    description: "Java-based ERP system to manage business records & operations.",
    bullets: [
      "Modular OOP architecture",
      "Multiple business modules",
      "Scalable structure",
    ],
    github: "https://github.com/prinu916/MiniERP",
    tags: ["Java", "OOP", "ERP"],
  },
];

export const skills = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "DSA", "AI"],
  Frontend: ["React", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "FastAPI", "Firebase", "REST APIs"],
  Databases: ["Supabase", "MongoDB", "Firebase", "MySQL"],
  Tools: ["Git", "VS Code", "Postman", "Notion"],
};

export const achievements = [
  "🥈 2nd Place — 100 Days Coding Challenge, DevHive @ CGC University",
  "🏆 Hackathon Participant — VaultHeist, ISTE Hackathon, HackShastra, SIH, National Science Day 2025",
  "💻 Tech Team — CodeZen, Web Dev Workshops @ CGC University",
  "🎯 Event Team — GeeksforGeeks, organized Code Catana 2.0",
  "📚 Active Contributor — Technical workshops & training sessions",
  "⚡ Coding Contests — HackerRank, GFG, Unstop, Coderush 9.0",
  "🧠 Quiz & Aptitude — TATA Crucible & multiple events",
  "💃 Dance Competition Winner — 1st, 2nd & 3rd positions, CGC University",
  "🤝 Teamwork — Hackathons & competitive programming",
  "🌟 Campus Mantri & Ambassador — GeeksforGeeks community lead",
  "📋 Management Leader — GFG event planning & coordination",
  "🛠️ Technical Head — DCPD Titan, led project execution",
];
