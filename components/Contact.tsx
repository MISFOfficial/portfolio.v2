"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-accent font-outfit text-sm font-bold tracking-widest uppercase mb-4 block">
              Contact Me
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight mb-8">
              LET'S WORK <span className="text-white/40 italic">TOGETHER</span>
            </h2>
            <p className="font-inter text-muted text-lg mb-10">
              Have a project in mind? Reach out and let's build something
              amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-inter text-muted text-sm mb-1">Email Me</p>
                  <p className="font-outfit font-bold text-xl">
                    hello@virtuo.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-inter text-muted text-sm mb-1">Call Me</p>
                  <p className="font-outfit font-bold text-xl">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-inter text-muted text-sm mb-1">Location</p>
                  <p className="font-outfit font-bold text-xl">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-[2rem] border border-border"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-outfit text-sm font-semibold mb-3 block text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-border rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors font-inter"
                  />
                </div>
                <div>
                  <label className="font-outfit text-sm font-semibold mb-3 block text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-border rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors font-inter"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-outfit text-sm font-semibold mb-3 block text-muted">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full bg-white/5 border border-border rounded-xl px-6 py-4 outline-none focus:border-accent transition-colors font-inter resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-accent text-black font-outfit font-bold py-5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
