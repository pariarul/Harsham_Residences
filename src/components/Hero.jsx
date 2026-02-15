"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')", // Nature/Farm landscape
                }}
            >
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 text-center text-white space-y-6 max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider mb-4">
                        PREMIUM REAL ESTATE DEVELOPMENT
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
                        Where Nature Meets <br />
                        <span className="text-secondary-400">Modern Living</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
                >
                    Discover legally approved residential layouts and farm land projects designed for comfort, security, and long-term investment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-4 bg-secondary-600 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-secondary-600/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-secondary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all w-full sm:w-auto"
                    >
                        Schedule Site Visit
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
