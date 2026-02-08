"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Menu, Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-outfit font-bold text-black text-xl">
            V
          </div>
          <span className="font-outfit font-bold text-2xl tracking-tighter">
            VIRTUO
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-outfit text-sm font-medium hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <Facebook
              size={18}
              className="hover:text-accent cursor-pointer transition-colors"
            />
            <Twitter
              size={18}
              className="hover:text-accent cursor-pointer transition-colors"
            />
            <Instagram
              size={18}
              className="hover:text-accent cursor-pointer transition-colors"
            />
            <Github
              size={18}
              className="hover:text-accent cursor-pointer transition-colors"
            />
          </div>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
