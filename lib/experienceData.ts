export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  logo: string;
  technologies: string[];
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "MISFOfficial",
    role: "Lead Full Stack Engineer",
    duration: "2024 - Present",
    location: "Remote",
    description:
      "Leading the development of high-performance web applications and mentoring junior developers.",
    logo: "https://i.ibb.co.com/p6ZkhwLJ/image.png", // Using an existing image placeholder
    technologies: ["Next.js", "TypeScript", "Nest.js", "MongoDB", "Docker"],
    responsibilities: [
      "Architected and implemented complex full-stack solutions with Next.js and Nest.js.",
      "Optimized application performance and scalability using Docker and Cloudflare.",
      "Led a team of developers in delivering high-quality software products.",
      "Implemented secure authentication and payment gateway integrations.",
    ],
  },
  {
    id: "2",
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2023 - 2024",
    location: "Global",
    description:
      "Delivered custom web solutions for various clients across different industries.",
    logo: "https://i.ibb.co.com/VcCDHdLg/image.png",
    technologies: ["React", "Node.js", "Express", "Firebase", "Tailwind CSS"],
    responsibilities: [
      "Developed responsive and interactive user interfaces using React and Tailwind CSS.",
      "Built robust backend APIs with Node.js and Express.",
      "Integrated third-party services like Firebase and Stripe.",
      "Collaborated closely with clients to define requirements and deliver solutions.",
    ],
  },
];
