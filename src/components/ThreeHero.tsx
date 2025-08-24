"use client";

import { motion } from "framer-motion";
import HeroTitle3D from "./HeroTitle3D";

export default function ThreeHero() {
    return (
        <section className="relative">
            {/* Top textual header/CTAs */}
            <div className="container mx-auto pt-10 md:pt-14">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi, I’m Chibuikem —{" "}
                    <span className="text-zinc-300">Frontend Developer</span>
                </motion.h1>

                <motion.p
                    className="mt-3 max-w-2xl text-zinc-300"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                >
                    Building pixel-perfect, high-performance web apps.
                </motion.p>

                <motion.div
                    className="mt-5 mb-2 flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <a
                        href="https://github.com/ChibuikemLucas"
                        target="_blank"
                        className="px-4 py-2 rounded bg-white text-black hover:opacity-90"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chibuikem-lucas-073355261"
                        target="_blank"
                        className="px-4 py-2 rounded border border-white/30 hover:bg-white/10"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-4 py-2 rounded border border-white/30 hover:bg-white/10"
                    >
                        Resume
                    </a>
                </motion.div>
            </div>

            {/* 3D hero */}
            <HeroTitle3D />
        </section>
    );
}
