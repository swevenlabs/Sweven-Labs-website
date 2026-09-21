import { SiteConfig } from '../types';
import { PRAJAIAN_CAFE_DATA_URI } from '../assets/imagesData';

export const siteConfig: SiteConfig = {
  name: 'Sweven Labs',
  tagline: 'Where Visions Become Technology.',
  subTagline: 'Independent software studio turning ambitious ideas into thoughtful digital products.',
  heroHeadline: 'Where Visions Become Technology.',
  heroDescription: 'We design and build digital products, intelligent software, and experiences for ideas ready to move forward.',
  email: 'swevenlabs.co@gmail.com',
  location: 'Global / Remote Studio',
  
  socials: [
    { platform: 'GitHub', url: 'https://github.com/swevenlabs', iconName: 'Github' },
    { platform: 'Instagram', url: 'https://instagram.com/swevenlabs.co', iconName: 'Instagram' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/swevenlabs', iconName: 'Linkedin' },
    { platform: 'Email', url: 'mailto:swevenlabs.co@gmail.com', iconName: 'Mail' }
  ],

  services: [
    {
      id: 'web-apps',
      title: 'Web Applications',
      subtitle: 'Performant, high-precision web platforms',
      description: 'Custom React, Next.js, and TypeScript web applications engineered for speed, reactivity, and intuitive user experiences.',
      features: ['Single Page Applications (SPAs)', 'Full-Stack Web Systems', 'Real-time Dashboards', 'PWAs & Offline Support'],
      techStack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'],
      iconName: 'Globe',
      featured: true
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      subtitle: 'Native-feel iOS & Android solutions',
      description: 'Cross-platform mobile applications crafted with fluid UI animations, offline state sync, and native device capabilities.',
      features: ['Flutter & React Native', 'iOS & Android Deployment', 'Real-time Data Sync', 'Push Notifications'],
      techStack: ['Flutter', 'React Native', 'TypeScript', 'Firebase', 'REST/GraphQL'],
      iconName: 'Smartphone',
      featured: true
    },
    {
      id: 'ai-intelligent-systems',
      title: 'AI & Intelligent Systems',
      subtitle: 'Custom Gemini, LLM & automation flows',
      description: 'Integrate state-of-the-art AI models, natural language interfaces, dynamic multimodal agents, and smart automated processing.',
      features: ['Gemini API Integrations', 'RAG & Vector Search', 'Multimodal Processing', 'Autonomous AI Workflows'],
      techStack: ['Python', '@google/genai', 'LangChain', 'FastAPI', 'Vector Databases'],
      iconName: 'Sparkles',
      featured: true
    },
    {
      id: 'saas-products',
      title: 'SaaS Products',
      subtitle: 'End-to-end multi-tenant product engines',
      description: 'Architecting scalable SaaS products from zero to launch with subscription logic, user auth, RBAC, and telemetry.',
      features: ['Multi-Tenant Architecture', 'Billing & Subscription Logic', 'User Management & Auth', 'Analytics & Metering'],
      techStack: ['Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      iconName: 'Layers',
      featured: true
    },
    {
      id: 'automation',
      title: 'Automation & Integration',
      subtitle: 'Eliminate friction with custom pipelines',
      description: 'Custom background services, webhooks, serverless workflows, and API bridges to automate repetitive operational tasks.',
      features: ['Custom Webhook Hubs', 'API Integration Networks', 'Data Ingestion Pipelines', 'Scheduled Jobs & Bots'],
      techStack: ['Python', 'Node.js', 'Docker', 'Google Cloud', 'REST APIs'],
      iconName: 'Zap'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX & Product Design',
      subtitle: 'Design systems with surgical precision',
      description: 'Creating cohesive visual identities, interactive design systems, wireframes, and high-fidelity interactive prototypes.',
      features: ['Design System Engineering', 'Interactive Motion Prototypes', 'Information Architecture', 'Usability & Accessibility'],
      techStack: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Design Tokens'],
      iconName: 'Palette'
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      subtitle: 'Tailored tools built for exact requirements',
      description: 'Bespoke internal software tools, developer utilities, and backend engines tailored specifically to unique business challenges.',
      features: ['Internal Admin Portals', 'Data Visualization Tools', 'High-Throughput APIs', 'Legacy Refactoring'],
      techStack: ['TypeScript', 'Go', 'Python', 'PostgreSQL', 'Docker'],
      iconName: 'Cpu'
    },
    {
      id: 'mvp-development',
      title: 'MVP Development',
      subtitle: 'Rapid execution for ambitious founders',
      description: 'Transforming napkin ideas into production-ready Minimum Viable Products built for real market testing and fast iteration.',
      features: ['Fixed-Scope MVPs', 'Product Strategy Alignment', 'Production-Grade Architecture', 'Founder Co-Pilot'],
      techStack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      iconName: 'Rocket'
    }
  ],

  technologies: [
    { name: 'React', category: 'Frontend', description: 'Declarative component architecture', icon: 'Atom' },
    { name: 'TypeScript', category: 'Frontend', description: 'End-to-end static type safety', icon: 'Code' },
    { name: 'Vite', category: 'Frontend', description: 'Lightning-fast frontend toolchain', icon: 'Zap' },
    { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first styling framework', icon: 'Palette' },
    { name: 'Node.js', category: 'Backend', description: 'Scalable server-side JavaScript runtime', icon: 'Server' },
    { name: 'Python', category: 'Backend', description: 'AI, data processing & microservices', icon: 'Terminal' },
    { name: 'Java', category: 'Backend', description: 'Enterprise backend & distributed engines', icon: 'Coffee' },
    { name: 'C#', category: 'Backend', description: 'High-performance API services & .NET', icon: 'Cpu' },
    { name: 'Flutter', category: 'Mobile', description: 'Cross-platform native mobile framework', icon: 'Smartphone' },
    { name: 'PostgreSQL', category: 'AI & Data', description: 'Relational data engine with Vector support', icon: 'Database' },
    { name: 'MongoDB', category: 'AI & Data', description: 'Flexible document-based database', icon: 'HardDrive' },
    { name: 'AI APIs & GenAI', category: 'AI & Data', description: 'Gemini, LLMs & Multimodal Intelligence', icon: 'Sparkles' },
    { name: 'Docker', category: 'DevOps & Tools', description: 'Containerized application deployment', icon: 'Box' },
    { name: 'Git', category: 'DevOps & Tools', description: 'Version control & collaborative workflow', icon: 'GitBranch' }
  ],

  projects: [
    {
      id: 'prajaians-resto-cafe',
      title: "Prajaian's Resto Cafe",
      clientType: 'Client Project // Kodakara, Kerala',
      category: 'Full-Stack Web & Inventory Engine',
      summary: "Built a live full-stack restaurant management platform and automated inventory system with custom user dashboards using React and Tailwind CSS.",
      fullDescription: "Prajaian's Resto Cafe is a live full-stack restaurant management platform engineered for Prajaian's Resto Cafe in Kodakara. It features an automated inventory control engine to track stock levels, calculate profit & loss, flag expiring ingredients, and parse uploaded PDF sales reports to auto-generate bills, financial reports, and live business statistics.",
      challenge: "The client needed a complete inventory and management system to track ingredient stock, calculate real-time profit and loss, monitor expiring food items, and automate financial reports by uploading daily PDF sales reports to auto-generate billing receipts, statistics, and business insights.",
      solution: "Engineered a custom full-stack web architecture with a React + Vite frontend styled using Tailwind CSS and backed by Node.js/Express and MongoDB. Integrated Cloudinary for high-performance image, video, and PDF delivery, alongside an automated PDF sales data parser that processes daily sales records to generate bills, profit/loss breakdowns, and stock deduction statistics automatically.",
      impact: [
        "Built a live full-stack restaurant management platform with separate user and administrative dashboards using React and Tailwind CSS.",
        "Engineered complete inventory stock tracking with automated food expiration alerts and real-time profit & loss calculation.",
        "Implemented PDF sales report upload processing to automatically generate bills, analytical reports, and business statistics.",
        "Developed Node.js/Express backend with MongoDB; integrated Cloudinary media delivery and deployed on Vercel and Railway."
      ],
      technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'Vercel', 'Railway'],
      image: 'https://res.cloudinary.com/bn8jj56m/image/upload/v1786607534/prajains.png',
      featured: true,
      year: '2026',
      liveUrl: 'https://www.prajaianscafe.com/',
      githubUrl: ''
    }
  ],

  processSteps: [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Uncovering core objectives and boundaries',
      description: 'We dive deep into your vision, target audience, core constraints, and technical requirements through direct collaborative discussion.',
      deliverables: ['Product Scope Document', 'Technical Feasibility Analysis', 'Architecture Blueprint']
    },
    {
      number: '02',
      title: 'Define',
      tagline: 'Translating concepts into structured specifications',
      description: 'We map out user flows, database schemas, API contracts, design systems, and milestone timelines to eliminate ambiguity early.',
      deliverables: ['Wireframes & User Journeys', 'API Specifications', 'Milestone Schedule']
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Crafting high-precision aesthetic & functional interfaces',
      description: 'We design bespoke UI component systems with focus on typography, layout hierarchy, motion design, and responsive fluidity.',
      deliverables: ['High-Fidelity UI Prototypes', 'Design System Tokens', 'Interactive Motion Specs']
    },
    {
      number: '04',
      title: 'Develop',
      tagline: 'Engineering clean, scalable, type-safe code',
      description: 'We write robust, modular frontend and backend code with continuous testing, strict linting, and performant state architecture.',
      deliverables: ['Clean GitHub Repository', 'Staging Environment', 'Automated Build Pipelines']
    },
    {
      number: '05',
      title: 'Launch',
      tagline: 'Deploying smoothly to production infrastructure',
      description: 'Rigorous pre-flight auditing, security review, performance optimization, and seamless deployment to cloud hosting.',
      deliverables: ['Production Cloud Deployment', 'DNS & SSL Setup', 'Analytics & Error Monitoring']
    },
    {
      number: '06',
      title: 'Evolve',
      tagline: 'Iterating and scaling based on real impact',
      description: 'Post-launch support, performance optimization, new feature iterations, and long-term evolutionary technical guidance.',
      deliverables: ['Performance Reports', 'Feature Backlog Roadmaps', 'Ongoing Maintenance Options']
    }
  ],

  pillars: [
    {
      title: 'Thoughtful Engineering',
      tagline: 'Quality over shortcuts',
      description: 'We write clean, modular, maintainable TypeScript code with strict architectural boundaries that scale gracefully.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Clear Communication',
      tagline: 'Direct, honest, transparent',
      description: 'Direct founder-to-client updates, zero corporate jargon, realistic deadlines, and total transparency on progress.',
      iconName: 'MessageSquare'
    },
    {
      title: 'Modern Technology',
      tagline: 'Battle-tested modern stacks',
      description: 'We leverage Vite, React, Tailwind, Python, and GenAI frameworks to deliver peak speed, security, and developer ergonomics.',
      iconName: 'Cpu'
    },
    {
      title: 'Scalable Foundations',
      tagline: 'Built to grow with your ambition',
      description: 'Every codebase is structured so your product can seamlessly transition from early prototype to full enterprise engine.',
      iconName: 'TrendingUp'
    },
    {
      title: 'Product Mindset',
      tagline: 'We think like co-builders',
      description: 'We focus on end-user utility, retention, performance, and business value rather than just closing tickets.',
      iconName: 'Compass'
    }
  ],

  faqs: [
    {
      question: 'What does Sweven Labs build?',
      answer: 'Sweven Labs designs and engineers custom web applications, mobile apps, AI & intelligent systems, SaaS platforms, automation workflows, and tailored software products for ambitious ideas ready to move forward.',
      category: 'General'
    },
    {
      question: 'How does a project start?',
      answer: 'Every project begins with a simple conversation. Submit the project form below, and we will schedule an initial scope alignment call to understand your vision, requirements, timeline, and budget.',
      category: 'Process'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes! We frequently partner with early-stage founders and stealth startups to build production-grade Minimum Viable Products (MVPs) that validate core hypotheses fast without technical debt.',
      category: 'Clients'
    },
    {
      question: 'Can you build MVPs?',
      answer: 'Absolutely. MVP development is one of our core specialties. We help refine your core feature set, eliminate unnecessary clutter, and build a sleek, performant v1 ready for real user feedback and investor demos.',
      category: 'Services'
    },
    {
      question: 'Do you provide maintenance?',
      answer: 'Yes. After launch, we offer flexible post-launch evolutionary support options, covering security updates, performance monitoring, infrastructure scaling, and ongoing feature development.',
      category: 'Support'
    },
    {
      question: 'Can you work with existing products?',
      answer: 'Yes. We can audit, refactor, redesign, or extend existing codebases—whether you need a UI overhaul, performance optimization, new feature modules, or AI integration.',
      category: 'Services'
    },
    {
      question: 'How do I start a project?',
      answer: 'Simply fill out our project inquiry form below with details about your idea, timeline, and estimated budget range. We review inquiries within 24 hours and get back to you with next steps.',
      category: 'Process'
    }
  ]
};
