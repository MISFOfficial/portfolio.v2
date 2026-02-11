"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function HireMe() {
    return (
        <section className="ratio py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#20255e] via-[#111111] to-black opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-block mb-6">
                        <span className="primary-color text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                            Available For Hire
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Let's Work <span className="primary-text">Together</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        I'm currently available for freelance work and exciting projects.
                        If you have a project in mind, let's discuss how we can bring your vision to life.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="primary-color text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all"
                        >
                            Hire Me Now <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/40 transition-all"
                        >
                            View Portfolio
                        </motion.button>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <Mail className="text-[#20255e]" size={24} />
                            <span className="text-gray-400 text-sm">Email</span>
                            <span className="text-white font-semibold">hello@example.com</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <Phone className="text-[#20255e]" size={24} />
                            <span className="text-gray-400 text-sm">Phone</span>
                            <span className="text-white font-semibold">+880 123 456 789</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <MapPin className="text-[#20255e]" size={24} />
                            <span className="text-gray-400 text-sm">Location</span>
                            <span className="text-white font-semibold">Dhaka, Bangladesh</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}