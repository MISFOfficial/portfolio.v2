"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: "40",
        title: "Demo 40",
        image: "/image.png",
        tags: ["Fashion Designer", "Architecture", "Actor"],
        badge: null
    },
    {
        id: "41",
        title: "Demo 41",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        badge: { text: "Hot", color: "bg-[#FF0055]" }
    },
    {
        id: "42",
        title: "Demo 42",
        image: "/image.png",
        tags: ["Fashion Designer", "cyber security", "Consulter"],
        badge: { text: "Hot", color: "bg-[#FF0055]" }
    },
    {
        id: "43",
        title: "Demo 43",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        badge: { text: "Popular Item", color: "bg-[#6366f1]" }
    },
    {
        id: "44",
        title: "Demo 44",
        image: "/image.png",
        tags: ["Model", "Artist", "Consulter"],
        badge: { text: "Popular Item", color: "bg-[#6366f1]" }
    },
    {
        id: "45",
        title: "Demo 45",
        image: "/image.png",
        tags: ["HandyMan", "Plumber", "Cleaner"],
        badge: { text: "Coming Soon", color: "bg-[#FF0055]" },
        overlayText: "COMING SOON"
    }
];

export default function AllProjects() {
    return (
        <section className="ratio">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group w-full"
                    >
                        {/* Card Container */}
                        <div className="relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-[#121212] border border-white/5">
                            {/* Image / Preview Area */}
                            <div className="relative h-[380px] w-full overflow-hidden bg-[#1a1a1a]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <button className="primary-color cursor-pointer text-white px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                        More <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Footer Area */}
                            <div className="p-5 text-white">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>

                                </div>

                                <div className="flex items-end flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] font-semibold px-3 py-1.5 rounded primary-color text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))} More......
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}