"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Eco-Friendly App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Financial Dashboard",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Art Gallery Platform",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop",
  },
  {
    title: "Minimalist E-commerce",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Startup Landing Page",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Home UI",
    category: "UI Design",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent font-outfit text-sm font-bold tracking-widest uppercase mb-4 block">
              Recent Works
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight">
              LOOK AT MY <span className="text-white/40 italic">PORTFOLIO</span>{" "}
              PROJECTS
            </h2>
          </div>
          <button className="px-8 py-4 border border-border font-outfit font-bold rounded-full hover:bg-white/5 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="text-accent font-outfit text-sm font-semibold mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Glowing Border Overlay */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/40 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
