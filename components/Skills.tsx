"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/00f2ff" },
  { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow/00f2ff" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/00f2ff" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/00f2ff" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88ce02" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/f24e1e" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178c6" },
];

const Skills = () => {
  return (
    <section className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-outfit font-bold text-lg text-white/50 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
