export const projectsData = [
    {
        id: "40",
        title: "Minthost",
        slug: "minthost.com.bd",
        image: "https://i.ibb.co.com/p6ZkhwLJ/image.png",
        tags: ["Hosting", "VPS", "Domain"],
        badge: null,
        description: "A Hosing & VPS Provider Company",
        fullDescription: "This project is a modern Hosing & VPS Provider Company website. It features a clean, minimalist interface with smooth animations and responsive layouts that work seamlessly across all devices.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Axios", "Tanstack Query", "Custom Authentication", "Express.js", "MongoDB", "SSLCommerz Payment Gateway", "Mongoose", "JWT", "Bcrypt js", "Prettier", "Cloudflare", "Docker",],
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
            "User Can Tranfer Domain"
        ]
    },
    {
        id: "41",
        title: "Demo 41",
        slug: "demo-41",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        badge: { text: "Hot", color: "bg-[#FF0055]" },
        description: "A cutting-edge cybersecurity consulting platform.",
        fullDescription: "Built for security professionals, this platform provides comprehensive tools for vulnerability assessment and security consulting services.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Security dashboard",
            "Real-time monitoring",
            "Encrypted communications",
            "Audit logging"
        ]
    },
    {
        id: "42",
        title: "Demo 42",
        slug: "demo-42",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        badge: { text: "Hot", color: "bg-[#FF0055]" },
        description: "Modern consulting platform for business professionals.",
        fullDescription: "A comprehensive platform designed to connect consultants with clients, featuring scheduling, video calls, and project management tools.",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "WebRTC"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Video conferencing",
            "Appointment scheduling",
            "Payment integration",
            "Client management"
        ]
    },
    {
        id: "43",
        title: "Demo 43",
        slug: "demo-43",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        badge: { text: "Popular Item", color: "bg-[#6366f1]" },
        description: "Portfolio showcase for models and artists.",
        fullDescription: "An elegant portfolio platform designed specifically for models and artists to showcase their work with beautiful galleries and professional layouts.",
        technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "Image galleries",
            "Video portfolios",
            "Contact forms",
            "Social media integration"
        ]
    },
    {
        id: "44",
        title: "Demo 44",
        slug: "demo-44",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        badge: { text: "Popular Item", color: "bg-[#6366f1]" },
        description: "Creative agency website template.",
        fullDescription: "A stunning website template for creative agencies, featuring bold typography, smooth animations, and a modern aesthetic.",
        technologies: ["Next.js", "GSAP", "Three.js", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        features: [
            "3D animations",
            "Interactive elements",
            "Case studies section",
            "Team showcase"
        ]
    },
    {
        id: "45",
        title: "Demo 45",
        slug: "demo-45",
        image: "/image.png",
        tags: ["HandyMan", "Plumber", "Cleaner"],
        badge: { text: "Coming Soon", color: "bg-[#FF0055]" },
        overlayText: "COMING SOON",
        description: "Service marketplace for home professionals.",
        fullDescription: "A comprehensive marketplace connecting homeowners with trusted service professionals including handymen, plumbers, and cleaners.",
        technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API"],
        liveUrl: null,
        githubUrl: null,
        features: [
            "Service booking",
            "Real-time tracking",
            "Payment processing",
            "Review system"
        ]
    }
];

export function getProjectBySlug(slug: string) {
    return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs() {
    return projectsData.map(project => project.slug);
}
