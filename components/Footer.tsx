"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-outfit font-bold text-black">
            V
          </div>
          <span className="font-outfit font-bold tracking-tighter">VIRTUO</span>
        </div>

        <p className="font-outfit text-muted text-sm">
          © 2026 Virtuo Portfolio. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-medium font-outfit">
          <a href="#" className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
