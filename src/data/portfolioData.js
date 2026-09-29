export const personalInfo = {
  name: "Ritvika Mahla",
  role: "B.Tech Student",
  tagline: "B.Tech Student | AI & Technology Enthusiast",
  headline: "Building modern web experiences & exploring the frontiers of Artificial Intelligence.",
  college: "JECRC University",
  location: "Raipur, India",
  email: "ritvikamahla5@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritvika-mahla",
  github: "https://github.com/ritvikamahla",
  status: "Open to learning & collaborations",
  aboutIntro: "I am a passionate B.Tech student at JECRC University with a keen curiosity for modern technology, artificial intelligence, full-stack web development, and digital productivity workflows. Currently diving deep into emerging tech and building real-world projects that combine clean design with practical problem-solving.",
  aboutStory: [
    "My journey in tech began with an urge to understand how software empowers everyday life. From writing my first lines of code to exploring neural networks and modern front-end frameworks, I thrive on turning concepts into functional, aesthetic web experiences.",
    "I believe in continuous learning, fast iteration, and leveraging modern AI-assisted tools to supercharge productivity and build scalable digital solutions. As an aspiring engineer, I am dedicated to honing my software development and AI engineering skills throughout my academic journey (2026–2030)."
  ],
  stats: [
    { label: "Academic Journey", value: "2026 - 2030" },
    { label: "Core Focus", value: "AI & Web Dev" },
    { label: "Current Institution", value: "JECRC University" },
    { label: "Mindset", value: "Continuous Growth" }
  ]
};

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "JECRC University",
    duration: "2026 – 2030",
    location: "Raipur / Jaipur, India",
    status: "Currently Pursuing",
    description: "Immersed in comprehensive computer science and engineering coursework, focusing on foundational principles, programming paradigms, software design, and cutting-edge artificial intelligence.",
    learningAreas: [
      "Artificial Intelligence & Machine Learning Basics",
      "Data Structures & Algorithms",
      "Web Technologies & Frontend Architecture",
      "Object-Oriented Programming (Python & JS)",
      "Database Management Systems",
      "Digital Productivity & Modern Developer Tooling"
    ],
    highlights: [
      "Active participant in tech workshops and university hackathons",
      "Developing independent projects in modern web development & AI applications",
      "Fostering strong collaborative problem-solving skills"
    ]
  }
];

export const skillsData = [
  {
    id: "html",
    name: "HTML5",
    category: "Web Development",
    icon: "code",
    proficiency: "Advanced",
    description: "Semantic markup, accessible structures, SEO optimization, and clean DOM architecture.",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "css",
    name: "CSS3 / Tailwind",
    category: "Web Development",
    icon: "palette",
    proficiency: "Advanced",
    description: "Responsive layouts, Flexbox/Grid, fluid animations, Tailwind CSS utility styling, and glassmorphic UI design.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Programming",
    icon: "braces",
    proficiency: "Intermediate",
    description: "DOM manipulation, asynchronous programming, modern ES6+ features, APIs, and interactive UI logic.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    icon: "terminal",
    proficiency: "Intermediate",
    description: "Data scripting, algorithmic problem solving, automation, and foundational machine learning libraries.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "AI & Future Tech",
    icon: "cpu",
    proficiency: "Exploring & Learning",
    description: "Understanding intelligent agent architectures, neural networks, machine learning algorithms, and real-world AI applications.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "gen-ai",
    name: "Generative AI",
    category: "AI & Future Tech",
    icon: "sparkles",
    proficiency: "Proficient",
    description: "Prompt engineering, LLM integrations, multimodal AI tools, AI-powered coding workflows, and agentic systems.",
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    id: "web-dev",
    name: "Web Development",
    category: "Web Development",
    icon: "globe",
    proficiency: "Advanced",
    description: "End-to-end frontend web engineering, single page apps (SPA), component design, performance optimization, and Vercel deployments.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "productivity",
    name: "Digital Productivity",
    category: "Workflow & Tools",
    icon: "zap",
    proficiency: "Mastery",
    description: "Notion workspaces, modern Git/GitHub workflows, automated pipelines, digital task management, and agile time management.",
    color: "from-violet-500 to-purple-600"
  }
];

export const skillCategories = [
  "All",
  "Web Development",
  "Programming",
  "AI & Future Tech",
  "Workflow & Tools"
];

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Web Development",
    shortDescription: "A modern, high-performance personal portfolio built with React, Vite, and Tailwind CSS featuring smooth animations, dark/light theme, and responsive design.",
    fullDescription: "Designed and engineered from scratch to present my academic background at JECRC University, technical skillset, and software development projects. Crafted with accessibility, sleek glassmorphic visuals, interactive modals, responsive navigation, and optimized for seamless Vercel hosting.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Vercel"],
    featured: true,
    highlights: [
      "Ultra-fast loading with Vite bundling",
      "Seamless responsive design across mobile, tablet, and desktop",
      "Interactive dark and light theme toggle",
      "Direct email action and verified contact form"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/ritvikamahla/personal-portfolio",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: 2,
    title: "AI Website Project",
    category: "Artificial Intelligence",
    shortDescription: "An intelligent web application leveraging Generative AI capabilities to deliver smart prompts, content synthesis, and real-time interactive user experiences.",
    fullDescription: "Built to demonstrate how modern web frontends can interface seamlessly with cutting-edge AI models. Incorporates interactive prompts, clean conversational interfaces, dynamic responses, and practical productivity utilities for everyday learners.",
    technologies: ["React", "JavaScript", "Generative AI", "Tailwind CSS", "REST APIs"],
    featured: true,
    highlights: [
      "Real-time streaming and responsive interaction",
      "Modern conversational UI with markdown formatting",
      "Context-aware prompt recommendations",
      "Mobile-first intuitive design layout"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/ritvikamahla/ai-website-project",
    gradient: "from-violet-600 to-pink-600"
  },
  {
    id: 3,
    title: "Student Productivity Project",
    category: "Digital Productivity",
    shortDescription: "A comprehensive digital workspace and task management tool tailored for college students to track assignments, project milestones, and exam goals.",
    fullDescription: "Engineered to eliminate academic overwhelm by combining task prioritization (Eisenhower matrix), focus timers, course schedule tracking, and note organization into one clean, distraction-free dashboard.",
    technologies: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Local Storage", "Workflow Design"],
    featured: true,
    highlights: [
      "Interactive schedule and assignment prioritization",
      "Integrated Pomodoro focus sessions with visual timers",
      "Zero-latency persistent storage in browser",
      "Minimalist aesthetic promoting deep work"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/ritvikamahla/student-productivity-project",
    gradient: "from-cyan-600 to-teal-600"
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Modern Web Development Fundamentals",
    category: "Courses",
    issuer: "Online Learning Platform",
    year: "2026",
    description: "Completed comprehensive practical training in semantic HTML5, modern CSS3 layouts, JavaScript ES6+, and responsive web architecture.",
    badge: "Verified Certificate"
  },
  {
    id: 2,
    title: "Artificial Intelligence & Prompt Engineering",
    category: "Certifications",
    issuer: "AI Foundations Academy",
    year: "2026",
    description: "Mastered foundational Generative AI principles, prompt framing strategies, and integrating AI APIs into digital applications.",
    badge: "Distinction"
  },
  {
    id: 3,
    title: "University Innovation Hackathon Participant",
    category: "Hackathons",
    issuer: "JECRC University",
    year: "2026",
    description: "Collaborated in an intensive hackathon environment building creative software prototypes and pitching technology solutions.",
    badge: "Participant"
  },
  {
    id: 4,
    title: "Academic Excellence & Continuous Learning",
    category: "Awards",
    issuer: "Academic Recognition",
    year: "2026",
    description: "Recognized for proactive engagement in technology clubs, peer study groups, and hands-on coding challenges.",
    badge: "Honor"
  }
];

export const achievementCategories = [
  "All",
  "Certifications",
  "Hackathons",
  "Courses",
  "Awards"
];
