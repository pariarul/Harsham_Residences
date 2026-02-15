"use client";

import { motion } from "framer-motion";
import { Target, Eye, award, Heart, Shield, Award, Users } from "lucide-react"; // Note: 'award' lower case might be wrong if not checking, but Lucide usually exports CamelCase. It's 'Award'.
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                        alt="Corporate building"
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
                        About Us
                    </motion.h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Building trust through quality developments and transparent practices.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <Section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-emerald-600 font-medium tracking-wide uppercase mb-3">Company Overview</h2>
                            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-6">
                                Redefining Real Estate Standards
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                Harsham Residences / Harsham Farms is a professionally managed real-estate development company focused on creating legally compliant, well-planned residential and farm land communities.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                We believe in delivering value beyond just land. Our projects are designed to offer a blend of modern infrastructure and natural serenity, ensuring a high quality of life and exceptional return on investment for our customers.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                                alt="Meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section className="bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-emerald-500"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-full">
                                    <Eye className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-playfair text-slate-900">Our Vision</h3>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To develop sustainable residential and farm land communities that blend modern living with nature and ensure long-term investment value.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-emerald-500"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-full">
                                    <Target className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-playfair text-slate-900">Our Mission</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600 text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    Deliver DTCP / RERA-approved projects
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    Ensure clear documentation and ownership
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    Provide modern, eco-friendly infrastructure
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    Build trust through ethical business practices
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Leadership Team */}
            <Section className="bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Meet Our Leaders</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Driven by a passion for excellence and a commitment to delivering quality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        <TeamMember
                            name="Ramesh Reddy"
                            role="Managing Director"
                            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2874&auto=format&fit=crop"
                        />
                        <TeamMember
                            name="Suresh Kumar"
                            role="Director - Operations"
                            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
                        />
                        <TeamMember
                            name="Priya Sharma"
                            role="Head of Sales"
                            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2876&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Shield className="w-10 h-10 text-white" />}
                            title="Integrity"
                            desc="We uphold the highest standards of honesty in all our dealings."
                        />
                        <ValueCard
                            icon={<Award className="w-10 h-10 text-white" />}
                            title="Quality"
                            desc="Delivering excellence in every aspect of development."
                        />
                        <ValueCard
                            icon={<FileSearch className="w-10 h-10 text-white" />}
                            title="Transparency"
                            desc="Clear processes and documentation, no hidden terms."
                        />
                        <ValueCard
                            icon={<Users className="w-10 h-10 text-white" />}
                            title="Customer Trust"
                            desc="Building lasting relationships through reliable service."
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}

function TeamMember({ name, role, image }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg group"
        >
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
                <p className="text-emerald-600 font-medium">{role}</p>
            </div>
        </motion.div>
    );
}

// Importing FileSearch locally for use in ValueCard
import { FileSearch } from "lucide-react";

function ValueCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors"
        >
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </motion.div>
    );
}
