"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <span className="text-2xl font-serif font-bold text-white tracking-tight">Harsham</span>
                        <span className="text-xs font-medium tracking-widest uppercase text-secondary-500">Residences</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Creating high-quality residential layouts and farm land projects that combine modern living with nature. Trusted by hundreds of families.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-secondary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-secondary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-secondary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-secondary-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#home" className="hover:text-secondary-500 transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-secondary-500 transition-colors">About Us</Link></li>
                        <li><Link href="#projects" className="hover:text-secondary-500 transition-colors">Our Projects</Link></li>
                        <li><Link href="#features" className="hover:text-secondary-500 transition-colors">Why Choose Us</Link></li>
                        <li><Link href="#contact" className="hover:text-secondary-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Projects */}
                <div>
                    <h4 className="text-white font-bold mb-6">Projects</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#" className="hover:text-secondary-500 transition-colors">Residential Layouts</Link></li>
                        <li><Link href="#" className="hover:text-secondary-500 transition-colors">Farm Lands</Link></li>
                        <li><Link href="#" className="hover:text-secondary-500 transition-colors">Gated Communities</Link></li>
                        <li><Link href="#" className="hover:text-secondary-500 transition-colors">Weekend Homes</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-secondary-500 shrink-0" />
                            <span>[Project Location Address Here, City, State, Zip]</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary-500 shrink-0" />
                            <span>+91 [Phone Number]</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-secondary-500 shrink-0" />
                            <span>info@harshamresidences.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Harsham Residences. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
