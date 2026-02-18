"use client";

import { motion } from "framer-motion";
import { CheckCircle, Leaf, FileText, Gavel, TrendingUp, Handshake } from "lucide-react";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <>
            <section className="py-20 text-center relative overflow-hidden" style={{ backgroundColor: '#1a4a2e' }}>
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image

                        src="https://images.unsplash.com/photo-1542601906990-24ccd54b549d?q=80&w=2874&auto=format&fit=crop"
                        alt="Planning"
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
                        Why Choose Us?
                    </motion.h1>
                    <p className="text-green-200 text-lg max-w-2xl mx-auto">
                        Your trusted partner in secure and profitable real estate investments.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <WhyCard
                            icon={<FileText className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
                            title="Clear Title & Legal Approval"
                            description="We ensure every project has 100% clear titles and necessary government approvals (DTCP/RERA) before launch."
                        />
                        <WhyCard
                            icon={<TrendingUp className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
                            title="High ROI & Appreciation"
                            description="Our properties are located in high-growth corridors, ensuring substantial appreciation over time."
                        />
                        <WhyCard
                            icon={<Handshake className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
                            title="Professional Team"
                            description="Managed by experienced professionals dedicated to transparency and customer satisfaction."
                        />
                    </div>
                </div>
            </Section>

            {/* Legal & Compliance */}
            <Section className="bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="font-medium tracking-wide uppercase mb-3" style={{ color: '#1a4a2e' }}>Legal &amp; Compliance</h2>
                            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-6">
                                Complete Peace of Mind
                            </h3>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                We understand that buying land is a significant investment. That&apos;s why we prioritize legal compliance above all else.
                            </p>
                            <ul className="space-y-4">
                                <ListItem text="Rigorous clear title verification process" />
                                <ListItem text="DTCP / RERA approvals for all layouts" />
                                <ListItem text="Transparent documentation and registration" />
                                <ListItem text="No hidden legal hurdles or litigation" />
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="aspect-square bg-white p-8 rounded-2xl shadow-xl flex items-center justify-center">
                                <Gavel className="w-32 h-32 opacity-20" style={{ color: '#1a4a2e' }} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h4 className="text-2xl font-bold text-slate-800 text-center">100%<br />Compliant</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Sustainability Focus */}
            <Section>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="mb-12">
                        <span className="inline-block p-3 rounded-full mb-4" style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}>
                            <Leaf className="w-8 h-8" style={{ color: '#1a4a2e' }} />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Sustainability Focus</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We don&apos;t just build layouts; we create ecosystems that harmonize with nature.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <SustainabilityCard
                            title="Eco-friendly Planning"
                            desc="Layouts designed to minimize environmental impact and preserve local ecology."
                        />
                        <SustainabilityCard
                            title="Greenery Preservation"
                            desc="Retaining existing trees and planting native species to maintain green cover."
                        />
                        <SustainabilityCard
                            title="Water Management"
                            desc="Advanced rainwater harvesting and efficient water usage systems."
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}

function WhyCard({ icon, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors"
        >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
}

function ListItem({ text }) {
    return (
        <li className="flex items-center gap-3 text-slate-700 text-lg">
            <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#c9a227' }} />
            {text}
        </li>
    );
}

function SustainabilityCard({ title, desc }) {
    return (
        <div className="p-6 rounded-xl border" style={{ backgroundColor: 'rgba(201,162,39,0.08)', borderColor: 'rgba(201,162,39,0.2)' }}>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </div>
    );
}
