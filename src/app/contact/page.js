"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your enquiry. We will get back to you shortly!");
        setFormData({ name: "", phone: "", email: "", project: "", message: "" });
    };

    return (
        <>
            <section className="py-20 text-center relative overflow-hidden" style={{ backgroundColor: '#1a4a2e' }}>
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2942&auto=format&fit=crop"
                        alt="Contact"
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
                        Contact Us
                    </motion.h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Get in touch with us for site visits, project details, and bookings.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-8">
                                Get In Touch
                            </h2>
                            <div className="space-y-8">
                                <ContactItem
                                    icon={<MapPin className="w-6 h-6 text-white" />}
                                    title="Visit Office"
                                    content={<>No.11/2, Thirumalai Nagar<br />Behind Vailankanni School<br />Hosur - 635 109,<br />Krishnagiri Dt</>}
                                />
                                <ContactItem
                                    icon={<Phone className="w-6 h-6 text-white" />}
                                    title="Call Us"
                                    content="+91 98765 43210"
                                />
                                <ContactItem
                                    icon={<Mail className="w-6 h-6 text-white" />}
                                    title="Email Us"
                                    content="info@haarshamfarms.com"
                                />
                            </div>

<div className="mt-12 h-[300px] w-full bg-slate-100 rounded-2xl overflow-hidden relative">
  <a
    href="https://www.google.com/maps?q=12.7337637,77.817344"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
<Image
  src="https://maps.wikimedia.org/img/osm-intl,17,12.7337637,77.817344,600x400.png"
  alt="Map Location"
  fill
  unoptimized
  className="object-cover opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer"
/>
  </a>

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <p className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg font-medium text-slate-800">
      Click to Open in Google Maps
    </p>
  </div>
</div>
                        </div>

                        {/* Enquiry Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Enquiry Form</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Your Email Address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-1">Interested Project</label>
                                    <select
                                        id="project"
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                    >
                                        <option value="">Select a Project</option>
                                        <option value="Residential Layouts">Residential Layouts</option>
                                        <option value="Farm Lands">Farm Lands</option>
                                        <option value="Gated Communities">Gated Communities</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <Button type="submit" variant="primary" className="w-full">
                                    Submit Enquiry <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

function ContactItem({ icon, title, content }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full shadow-lg shrink-0" style={{ backgroundColor: '#1a4a2e' }}>
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{content}</p>
            </div>
        </div>
    );
}
