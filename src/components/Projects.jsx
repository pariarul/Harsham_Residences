"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        category: "Residential Layouts",
        title: "Premium Plots",
        description: "Well-planned plots with black-top roads, drainage, and essential amenities prepared for immediate construction.",
        image: "https://images.unsplash.com/photo-1628744876497-eb30490ed950?q=80&w=2070&auto=format&fit=crop",
    },
    {
        category: "Farm Lands",
        title: "Green Acres",
        description: "Secure and scenic farm plots ideal for weekend homes and long-term investment. Experience nature at its best.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
        category: "Gated Communities",
        title: "Luxury Living",
        description: "Safe, organized developments with clear boundaries, 24/7 security, and community access.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-secondary-600 font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
                    <h2 className="text-4xl font-serif font-bold text-primary-900 mt-2">Current Projects</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                        Discover our carefully curated selection of residential and farm land projects designed for high appreciation and quality living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium">View Details</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-secondary-600 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-xl font-bold text-primary-900 mt-2 mb-3 group-hover:text-secondary-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <button className="flex items-center gap-2 text-primary-900 font-bold text-sm group-hover:gap-3 transition-all">
                                    Show More <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
