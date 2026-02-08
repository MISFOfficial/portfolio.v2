"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-accent font-outfit text-sm font-semibold tracking-wider mb-6"
          >
            CREATIVE DESIGNER & DEVELOPER
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-outfit text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            I CREATE <span className="gradient-text">DIGITAL</span> EXPERIENCES
            THAT <span className="text-white/50 italic">MATTER</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-inter text-muted text-lg max-w-xl mb-10 leading-relaxed"
          >
            Passionate about building highly interactive, pixel-perfect, and
            modern web applications that stand out.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="px-8 py-4 bg-accent text-black font-outfit font-bold rounded-full hover:scale-105 transition-transform">
              View Portfolio
            </button>
            <button className="px-8 py-4 border border-border font-outfit font-bold rounded-full hover:bg-white/5 transition-colors">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Video Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 right-20 hidden lg:block group"
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            alt="Intro"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play fill="white" size={40} />
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black animate-bounce">
          👋
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
