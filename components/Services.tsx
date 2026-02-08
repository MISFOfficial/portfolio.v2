"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Smartphone,
  BarChart,
  PenTool,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="text-accent" size={32} />,
    title: "Web Development",
    desc: "Building fast, SEO-friendly, and responsive websites using modern technologies.",
  },
  {
    icon: <Layout className="text-accent" size={32} />,
    title: "UI/UX Design",
    desc: "Creating intuitive and beautiful user interfaces that provide great user experiences.",
  },
  {
    icon: <Smartphone className="text-accent" size={32} />,
    title: "App Development",
    desc: "Developing high-performance cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <BarChart className="text-accent" size={32} />,
    title: "Digital Marketing",
    desc: "Implementing effective strategies to grow your brand and reach more customers.",
  },
  {
    icon: <PenTool className="text-accent" size={32} />,
    title: "Branding",
    desc: "Crafting unique brand identities that resonate with your target audience.",
  },
  {
    icon: <Code className="text-accent" size={32} />,
    title: "Custom Solutions",
    desc: "Providing tailored software solutions to solve complex business problems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent font-outfit text-sm font-bold tracking-widest uppercase mb-4 block">
              What I Provide
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight">
              AWESOME <span className="text-white/40">SERVICES</span> FOR YOUR
              BUSINESS
            </h2>
          </div>
          <p className="font-inter text-muted text-lg max-w-sm">
            I help brands and businesses stand out in the digital world with
            high-quality and modern solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-card rounded-3xl border border-border hover:border-accent/30 group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />

              <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                {service.icon}
              </div>

              <h3 className="font-outfit text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="font-inter text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
