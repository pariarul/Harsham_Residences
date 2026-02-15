"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Leaf } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: <Target className="w-8 h-8 text-secondary-600" />,
            title: "Our Mission",
            description: "To deliver DTCP / RERA-approved residential and farm land projects with clear documentation and modern infrastructure.",
        },
        {
            icon: <Eye className="w-8 h-8 text-secondary-600" />,
            title: "Our Vision",
            description: "To develop sustainable communities that provide comfort, security, and long-term investment value while maintaining harmony with nature.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-secondary-600"></span>
                            <span className="text-secondary-600 font-bold uppercase tracking-widest text-sm">About Us</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6 leading-tight">
                            Building Trust through <span className="text-secondary-600">Transparency</span> & Excellence
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Harsham Residences / Harsham Farms is a professionally managed real-estate development company specializing in residential layouts and farm land developments. We are committed to delivering legally approved, well-planned properties that combine modern living with nature.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            With a strong emphasis on transparency, quality infrastructure, and customer satisfaction, we ensure that every square foot you buy is a step towards a secure and prosperous future.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0 p-3 bg-primary-50 rounded-lg h-fit">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Modern House"
                                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop"
                                    alt="Farm Land"
                                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                                />
                            </div>
                            <div className="space-y-4 pt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop"
                                    alt="Green Landscape"
                                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                                />
                                <div className="bg-primary-900 rounded-2xl p-6 text-white flex flex-col justify-center h-64 shadow-xl">
                                    <h4 className="text-4xl font-serif font-bold mb-2">15+</h4>
                                    <p className="text-primary-200">Years of Excellence in Real Estate Development</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
