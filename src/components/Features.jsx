"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, TrendingUp, Construction, BadgeDollarSign, HeadphonesIcon } from "lucide-react";

const features = [
    {
        icon: <CheckCircle className="w-8 h-8 text-secondary-600" />,
        title: "Clear Title & Legal Approval",
        description: "100% verified documents and government approvals ensure a hassle-free ownership experience.",
    },
    {
        icon: <MapPin className="w-8 h-8 text-secondary-600" />,
        title: "Strategic Locations",
        description: "Our projects are situated in prime growth corridors, ensuring excellent connectivity and convenience.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-secondary-600" />,
        title: "High Appreciation Potential",
        description: "Properties chosen for their rapid growth potential, making them ideal for smart investors.",
    },
    {
        icon: <Construction className="w-8 h-8 text-secondary-600" />,
        title: "Quality Infrastructure",
        description: "Wide roads, drainage, street lights, and more - we deliver top-notch infrastructure.",
    },
    {
        icon: <BadgeDollarSign className="w-8 h-8 text-secondary-600" />,
        title: "Transparent Pricing",
        description: "No hidden costs. We believe in honest pricing and straightforward transactions.",
    },
    {
        icon: <HeadphonesIcon className="w-8 h-8 text-secondary-600" />,
        title: "Dedicated Customer Support",
        description: "From site visit to registration and beyond, our team is with you every step of the way.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-primary-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-500 via-primary-950 to-primary-950" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
                    <h2 className="text-4xl font-serif font-bold text-white mt-2">The Harsham Advantage</h2>
                    <p className="text-primary-100 max-w-2xl mx-auto mt-4">
                        We don't just sell land; we build relationships. Here is why hundreds of families trust us with their dreams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="bg-white/10 p-4 rounded-xl w-fit mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-primary-100 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
