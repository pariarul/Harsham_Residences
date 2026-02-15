"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

export function StatCounter({ end, duration = 2, suffix = "", title }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration * 1000 / end));
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return (
        <div ref={ref}>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {count}{suffix}
            </div>
            <div className="text-emerald-100 text-sm md:text-base uppercase tracking-wider">{title}</div>
        </div>
    );
}

export function TestimonialCard({ name, role, content }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative"
        >
            <Quote className="w-10 h-10 text-emerald-200 mb-4" />
            <p className="text-slate-600 mb-6 italic leading-relaxed">"{content}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">{name}</h4>
                    <p className="text-sm text-emerald-600">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}
