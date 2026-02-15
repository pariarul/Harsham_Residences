"use client";

import { motion } from "framer-motion";
import { Trees, Home, Lock, Zap, Droplets, Leaf, Route } from "lucide-react";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2940&auto=format&fit=crop"
                        alt="Construction plan"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
                    >
                        Our Projects
                    </motion.h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Discover a wide range of premium residential and farm land opportunities.
                    </p>
                </div>
            </section>

            <div className="bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 py-16 space-y-20">

                    {/* Residential Layouts */}
                    <ProjectCategory
                        title="Residential Layouts"
                        description="Perfectly planned plots for your dream home, equipped with modern amenities and excellent connectivity."
                        image="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2724&auto=format&fit=crop"
                        features={[
                            "Well-planned plots",
                            "Black-top roads & drainage",
                            "Street lights & amenities",
                            "Ideal for home construction"
                        ]}
                        icon={<Home className="w-8 h-8 text-emerald-600" />}
                        reverse={false}
                    />

                    {/* Farm Lands */}
                    <ProjectCategory
                        title="Farm Lands"
                        description="Escape to nature with our fertile and scenic farm lands, perfect for agriculture or a weekend retreat."
                        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                        features={[
                            "Fertile agricultural land",
                            "Weekend home suitable plots",
                            "Pollution-free environment",
                            "Long-term appreciation"
                        ]}
                        icon={<Trees className="w-8 h-8 text-emerald-600" />}
                        reverse={true}
                    />

                    {/* Gated Communities */}
                    <ProjectCategory
                        title="Gated Communities"
                        description="Experience secure and organized living in our premium gated communities with controlled access."
                        image="https://images.unsplash.com/photo-1582268611958-abfd38471bc6?q=80&w=2940&auto=format&fit=crop"
                        features={[
                            "Secure layouts",
                            "Defined boundaries",
                            "Organized infrastructure",
                            "Controlled access"
                        ]}
                        icon={<Lock className="w-8 h-8 text-emerald-600" />}
                        reverse={false}
                    />
                </div>
            </div>

            {/* Infrastructure Features */}
            <Section className="bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Infrastructure Features</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Every project is developed with attention to detail and high-quality infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Route className="w-10 h-10 text-emerald-600" />}
                            title="Wide Internal Roads"
                        />
                        <FeatureCard
                            icon={<Droplets className="w-10 h-10 text-emerald-600" />}
                            title="Rainwater Harvesting"
                        />
                        <FeatureCard
                            icon={<Zap className="w-10 h-10 text-emerald-600" />}
                            title="Water & Electricity"
                        />
                        <FeatureCard
                            icon={<Leaf className="w-10 h-10 text-emerald-600" />}
                            title="Green Open Spaces"
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}

function ProjectCategory({ title, description, image, features, icon, reverse }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
        >
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                        {icon}
                    </div>
                    <h2 className="text-3xl font-playfair font-bold text-slate-900">{title}</h2>
                </div>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function FeatureCard({ icon, title }) {
    return (
        <div className="bg-slate-50 p-8 rounded-xl text-center hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
    );
}
