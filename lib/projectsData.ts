export interface Project {
    id: string;
    title: string;
    slug: string;
    image: string;
    tags: string[];
    year: string;
    badge?: { text: string; color: string } | null;
    overlayText?: string;
    description: string;
    fullDescription: string;
    technologies: string[];
    liveUrl?: string | null;
    githubUrl?: string | null;
    fgithubUrl?: string | null;
    bgithubUrl?: string | null;
    features: string[];
    role?: string;
    architecture?: {
        frontend: string;
        backend: string;
        database: string;
        infrastructure: string[];
    };
    problemSolution?: {
        problem: string;
        solution: string;
    };
    metrics?: {
        label: string;
        value: string;
        description: string;
    }[];
    lessons?: string[];
}

export const projectsData: Project[] = [
    {
        id: "40",
        title: "Minthost",
        slug: "minthost.com.bd",
        image: "https://i.ibb.co.com/p6ZkhwLJ/image.png",
        tags: ["Hosting", "VPS", "Domain"],
        year: "2026",
        badge: null,
        description: "A Hosing & VPS Provider Company",
        fullDescription:
            "This project is a modern Hosing & VPS Provider Company website. It features a clean, minimalist interface with smooth animations and responsive layouts that work seamlessly across all devices.",
        role: "Lead Full Stack Engineer",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Axios",
            "Tanstack Query",
            "Custom Authentication",
            "Express.js",
            "MongoDB",
            "SSLCommerz Payment Gateway",
            "Mongoose",
            "JWT",
            "Bcrypt js",
            "Prettier",
            "Cloudflare",
            "Docker",
        ],
        liveUrl: "https://minthost.com.bd",
        githubUrl: "https://github.com/example",
        features: [
            "Secure Payment",
            "Secure Authentication",
            "Password Hashing",
            "JWT",
            "Secure Database",
            "User Can Buy VPS & Hosting",
            "User Can Buy Domain",
            "User Can Tranfer Domain",
        ],
        architecture: {
            frontend: "Next.js (App Router) + Redux Toolkit",
            backend: "Node.js (Express) with Microservices",
            database: "MongoDB (Mongoose) with Auto-scaling",
            infrastructure: ["Docker Containers", "Cloudflare CDN", "SSLCommerz Checkout"],
        },
        problemSolution: {
            problem: "Existing hosting portals were slow and had poor UX for mobile users, causing high bounce rates during the checkout process.",
            solution: "Implemented a server-side rendered (SSR) architecture with optimized payment flows, reducing checkout time by 45%.",
        },
        metrics: [
            { label: "Performance", value: "98/100", description: "Lighthouse Score" },
            { label: "Security", value: "A+", description: "SSL Labs Rating" },
            { label: "Response", value: "< 200ms", description: "API Latency" },
        ],
        lessons: [
            "Optimized MongoDB indexing for complex domain search queries.",
            "Implemented robust error handling for multi-step payment callbacks.",
        ],
    },
    {
        id: "41",
        title: "Demo 41",
        slug: "demo-41",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        year: "2025",
        badge: { text: "Hot", color: "bg-[#FF0055]" },
        description: "A cutting-edge cybersecurity consulting platform.",
        fullDescription:
            "Built for security professionals, this platform provides comprehensive tools for vulnerability assessment and security consulting services.",
        role: "Independent Developer",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Security dashboard",
            "Real-time monitoring",
            "Encrypted communications",
            "Audit logging",
        ],
        architecture: {
            frontend: "React with Client-Side Routing",
            backend: "Express.js REST API",
            database: "MongoDB Atlas",
            infrastructure: ["Firebase Authentication", "Vercel Hosting", "ImgBB Storage"],
        },
        problemSolution: {
            problem: "Manual tutor matching was slow and prone to human error, often leading to multiple tutors applying for filled positions.",
            solution: "Engineered an 'Auto-Rejection' system where selecting one tutor automatically notifies and closes other applications for that specific slot.",
        },
        metrics: [
            { label: "User Base", value: "5k+", description: "Active Tutors" },
            { label: "Matching", value: "24h", description: "Average MTTR" },
            { label: "Trust", value: "100%", description: "Verified Profiles" },
        ],
        lessons: [
            "Gained deep understanding of JWT-based authentication security.",
            "Learned to manage complex state transitions in a multi-user marketplace.",
        ],
    },
    {
        id: "42",
        title: "Demo 42",
        slug: "demo-42",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        year: "2025",
        badge: { text: "Hot", color: "bg-[#FF0055]" },
        description: "Modern consulting platform for business professionals.",
        fullDescription:
            "A comprehensive platform designed to connect consultants with clients, featuring scheduling, video calls, and project management tools.",
        role: "Full Stack Developer",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "WebRTC"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Video conferencing",
            "Appointment scheduling",
            "Payment integration",
            "Client management",
        ],
        architecture: {
            frontend: "React (Vite) + Framer Motion",
            backend: "Node.js (Express)",
            database: "MongoDB with Relational Schemas",
            infrastructure: ["Stripe Connect", "Firebase Hosting", "Cloudinary"],
        },
        problemSolution: {
            problem: "Tourists struggled with inconsistent pricing and unverified guides in the local tourism market.",
            solution: "Built a centralized booking system with fixed transparent pricing and a mandatory certification badge for guides.",
        },
        metrics: [
            { label: "Bookings", value: "1.2k", description: "Total Trips" },
            { label: "Payments", value: "Stripe", description: "100% Secure" },
            { label: "Reviews", value: "4.8/5", description: "Avg Rating" },
        ],
        lessons: [
            "Mastered role-based access control (RBAC) in Express middleware.",
            "Implemented complex form validation for multi-day itineraries.",
        ],
    },
    {
        id: "43",
        title: "Demo 43",
        slug: "demo-43",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        year: "2025",
        badge: { text: "Popular Item", color: "bg-[#6366f1]" },
        description: "Portfolio showcase for models and artists.",
        fullDescription:
            "An elegant portfolio platform designed specifically for models and artists to showcase their work with beautiful galleries and professional layouts.",
        role: "Security Architect",
        technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Image galleries",
            "Video portfolios",
            "Contact forms",
            "Social media integration",
        ],
        architecture: {
            frontend: "Next.js (Edge Functions Support)",
            backend: "Next.js API Routes",
            database: "MongoDB (Time-series data)",
            infrastructure: ["Vercel Edge", "SSLCommerz API", "JWT Auth"],
        },
        problemSolution: {
            problem: "Electronic payments in the region suffered from high rates of card-not-present (CNP) fraud.",
            solution: "Developed an AI detection layer that evaluates transactional risk scores in milliseconds based on 15+ data points.",
        },
        metrics: [
            { label: "Precision", value: "94%", description: "Fraud Detection" },
            { label: "Latency", value: "80ms", description: "Risk Scoring" },
            { label: "Uptime", value: "99.9%", description: "Service SLA" },
        ],
        lessons: [
            "Explored the integration of behavioral analytics for fraud prevention.",
            "Optimized MongoDB aggregations for real-time risk reporting.",
        ],
    },
    {
        id: "44",
        title: "Demo 44",
        slug: "demo-44",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        year: "2025",
        badge: { text: "Popular Item", color: "bg-[#6366f1]" },
        description: "Creative agency website template.",
        fullDescription:
            "A stunning website template for creative agencies, featuring bold typography, smooth animations, and a modern aesthetic.",
        role: "Frontend Specialist",
        technologies: ["Next.js", "GSAP", "Three.js", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: ["3D animations", "Interactive elements", "Case studies section", "Team showcase"],
        architecture: {
            frontend: "React + Redux Toolkit",
            backend: "Express.js",
            database: "MongoDB",
            infrastructure: ["Firebase Auth", "Render for Backend", "Vercel"],
        },
        problemSolution: {
            problem: "Students lacked a structured way to participate in peer-review, often leading to biased or disorganized feedback.",
            solution: "Designed a blind-marking system where student identities are hidden during the evaluation process to ensure fairness.",
        },
        metrics: [
            { label: "Engagement", value: "+40%", description: "Peer Activity" },
            { label: "Sync", value: "Realtime", description: "Data Update" },
            { label: "Users", value: "1k+", description: "Daily Active" },
        ],
        lessons: [
            "Implemented complex Redux state management for nested assignment data.",
            "Learned to handle race conditions in peer-grading submissions.",
        ],
    },
    {
        id: "45",
        title: "Demo 45",
        slug: "demo-45",
        image: "/image.png",
        tags: ["HandyMan", "Plumber", "Cleaner"],
        year: "2025",
        badge: { text: "Coming Soon", color: "bg-[#FF0055]" },
        overlayText: "COMING SOON",
        description: "Service marketplace for home professionals.",
        fullDescription:
            "A comprehensive marketplace connecting homeowners with trusted service professionals including handymen, plumbers, and cleaners.",
        role: "Lead Developer",
        technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API"],
        liveUrl: null,
        githubUrl: null,
        features: [
            "Service booking",
            "Real-time tracking",
            "Payment processing",
            "Review system",
        ],
        architecture: {
            frontend: "React with Hook Form",
            backend: "Node.js REST API",
            database: "MongoDB Atlas",
            infrastructure: ["Firebase Authentication", "ImgBB Image Hosting"],
        },
        problemSolution: {
            problem: "Urban gardeners had fragmented information sources, making it hard to find region-specific planting advice.",
            solution: "Created a searchable 'Knowledge Vault' where tips are categorized by climate zone and plant types.",
        },
        metrics: [
            { label: "Articles", value: "500+", description: "Curation List" },
            { label: "Community", value: "2k+", description: "Gardeners" },
            { label: "Search", value: "< 1s", description: "Index Speed" },
        ],
        lessons: [
            "Optimized image uploads with client-side compression before server sync.",
            "Built a reusable component library for social interaction (likes/comments).",
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projectsData.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
    return projectsData.map((project) => project.slug);
}

