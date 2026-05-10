export const profile = {
  initials: "AY",
  name: "Amit Yadav",
  location: "Puducherry, India",
  email: "amiit.contact@gmail.com",
  phone: "+91 9559261513",
  available: "Open to SDE / Full Stack / AI Roles",
  tagline:
    "Software developer focused on scalable full-stack applications, AI-powered systems, modern UI engineering, backend architecture, and production-ready web platforms.",
  github: "https://github.com/Amit-code01",
  linkedin: "https://linkedin.com/in/amiityadav",
  resumeUrl: "/Amit_Yadav_Resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "4+", label: "Production Projects" },
  { value: "15+", label: "Technologies Explored" },
  { value: "8+", label: "AI Features Built" },
];

export const summary =
  "ECE student transitioning into Software Development and AI Engineering with strong focus on scalable backend systems, modern frontend architecture, production-ready applications, and real-world product building.";

export const highlights = [
  "Built enterprise-grade AI-powered full-stack applications.",
  "Hands-on experience with RAG pipelines and prompt engineering.",
  "Developed scalable SaaS dashboards and CRM platforms.",
  "Focused on clean architecture and production deployment.",
];

export const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript (ES6+)",
      "Python",
      "Java (DSA)",
      "C++",
    ],
  },

  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Chart.js",
      "Recharts",
    ],
  },

  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Mongoose",
      "Cron Jobs",
      "JWT Authentication",
    ],
  },

  {
    category: "Databases",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
    ],
  },

  {
    category: "AI / LLM",
    items: [
      "OpenAI API",
      "Claude API",
      "Groq SDK",
      "Llama 3.3",
      "RAG Pipelines",
      "Prompt Engineering",
      "Sentiment Analysis",
      "TensorFlow",
      "PyTorch",
    ],
  },

  {
    category: "DevOps / Cloud",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "GCP",
      "Render",
      "Vercel",
      "Postman",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "PrepWise AI",
    year: "2026",
    tagline: "AI Interview Simulator Platform",

    description:
      "Enterprise-grade AI interview simulator that parses resumes and generates personalized technical interview questions using RAG pipelines and advanced prompt engineering.",

    bullets: [
      "Built complete LLM workflow using React, Next.js, Node.js, Express, and Groq SDK",
      "Implemented structured prompt templates with few-shot prompting",
      "Created analytics dashboard with AI evaluation feedback",
      "Integrated secure resume upload and optimized AI inference pipeline",
    ],

    github: "https://github.com/Amit-code01/prepwise-ai-interviewer",

    live:"https://prepwise-991cli0je-amit-code01s-projects.vercel.app/",

    image: "/Prepwise.png",

    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Groq SDK",
      "Python",
    ],
  },

  {
    id: 2,
    name: "AI Journal System",
    year: "2026",
    tagline: "AI Productivity & Sentiment Platform",

    description:
      "Production-ready AI journaling platform with sentiment analysis, automated summaries, and optimized LLM workflows serving real users.",

    bullets: [
      "Built AI-powered journaling and productivity platform",
      "Implemented sentiment analysis and AI-generated summaries",
      "Deployed with Docker and secured backend API pipelines",
      "Reduced API latency through optimized inference workflows",
    ],

    github: "https://github.com/Amit-code01/AI-journal-system",
 live:"https://ai-journal-system-chi.vercel.app/",
    image: "/Journal.png",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Llama 3.1",
    ],
  },

 

  {
    id: 3,
    name: "PlanPilot",
    year: "2026",
    tagline: "Modern SaaS Analytics Dashboard",

    description:
      "Modern SaaS-style dashboard frontend focused on scalable UI architecture, reusable React components, analytics visualization, and production-grade responsive design systems.",

    bullets: [
      "Built responsive SaaS dashboard using React, Vite, and Tailwind CSS",
      "Designed reusable UI component architecture for scalable frontend development",
      "Implemented analytics cards, project tracking, and activity timeline modules",
      "Created clean modern dashboard UX inspired by real-world SaaS products",
    ],

    github: "https://github.com/Amit-code01/Planpilot-frontend",

    live: "https://planpilotfrontend.vercel.app/",

    image: "/Planpilot.png",

    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive UI",
      "Dashboard Design",
    ],
  },
  {
  id: 4,
  name: "Developer Portfolio",
  year: "2026",
  tagline: "Personal Brand & Full-Stack Portfolio",
  description:
    "Modern developer portfolio engineered with responsive UI architecture, animated interactions, backend contact management, MongoDB integration, and professional project showcasing.",

  bullets: [
    "Built fully responsive developer portfolio with Framer Motion animations",
    "Integrated backend contact form with MongoDB message storage",
    "Implemented real-time email notifications using Nodemailer",
    "Designed modern UI system with reusable React components and Tailwind CSS",
  ],

  github: "https://github.com/Amit-code01",

  live: "YOUR_PORTFOLIO_DEPLOY_LINK",

  video: "DevPortfolio.mp4",

  stack: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Nodemailer",
  ],
},
 {
    id: 5,
    name: "Gharpayy CRM",
    year: "2026",
    tagline: "Enterprise CRM Dashboard",

    description:
      "Full-stack CRM platform with lead lifecycle management, analytics dashboard, and workflow automation features for business productivity.",

    bullets: [
      "Built CRM dashboard with lead and conversion tracking",
      "Integrated analytics using Chart.js",
      "Optimized MongoDB Atlas query performance",
      "Implemented cron-based automated follow-up workflows",
    ],

    github: "https://github.com/Amit-code01/gharpayy-crm",

        live: "https://gharpayy-crm-two.vercel.app/",


    image: "/Gharpayy.png",

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Chart.js",
    ],
  },
];


export const education = {
  degree:
    "B.Tech in Electronics and Communication Engineering",

  institution:
    "Puducherry Technological University",

  location: "Puducherry, India",

  duration: "2023 - 2027",

  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "AWS-CP",
  },

  {
    name:
      "Google Cloud Associate Cloud Engineer",

    issuer: "Google Cloud Platform",

    code: "GCP-ACE",
  },
];