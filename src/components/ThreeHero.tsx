"use client";

import { motion } from "framer-motion";
import ProjectWorld from "./ProjectWorld";

export default function ThreeHero() {
    return (
        <section className="relative">
            <div className="container mx-auto pt-16 pb-10">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I’m Chibuikem — <span className="text-zinc-300">Frontend Developer</span>
                </motion.h1>

                <motion.p
                    className="mt-4 max-w-2xl text-zinc-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Building pixel-perfect, high-performance web apps. Explore my work in a fully interactive 3D space.
                </motion.p>

                <motion.div
                    className="mt-6 flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <a href="https://github.com/yourname" target="_blank" className="px-4 py-2 rounded bg-white text-black hover:opacity-90">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourname" target="_blank" className="px-4 py-2 rounded border border-white/30 hover:bg-white/10">
                        LinkedIn
                    </a>
                    <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded border border-white/30 hover:bg-white/10">
                        Resume
                    </a>
                </motion.div>
            </div>

            <ProjectWorld />
        </section>
    );
}
