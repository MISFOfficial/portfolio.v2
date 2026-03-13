"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experienceData } from "@/lib/experienceData";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experienceData)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="relative flex items-start gap-6 md:gap-10 w-full group"
    >
      <div className="flex-1 pb-12">
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#FF0055]/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center p-2 border border-white/10 shrink-0">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0055] transition-colors leading-tight">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  {exp.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#FF0055]">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                <Calendar className="w-3 h-3" />
                <span>{exp.duration}</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl">
            {exp.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/5 rounded text-gray-500 group-hover:text-white group-hover:bg-[#FF0055]/10 group-hover:border-[#FF0055]/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experiance() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <Briefcase className="text-[#FF0055]" size={24} />
          <span className="text-[#FF0055] font-bold uppercase tracking-widest text-sm">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
        >
          Professional <br />
          <span className="text-neutral-500 italic">Timeline</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-lg leading-relaxed"
        >
          Tracing the evolution of professional expertise through diverse roles
          and impactful contributions.
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
