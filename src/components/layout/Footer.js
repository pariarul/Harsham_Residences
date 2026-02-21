"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-16 pb-8 text-white" style={{ backgroundColor: "#1a4a2e" }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                                style={{ backgroundColor: "#c9a227", color: "#1a4a2e" }}
                            >
                                H
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight block" style={{ color: "#c9a227" }}>
                                    Haarsham
                                </span>
                                <span className="text-white text-xs font-medium">Farms &amp; Developers</span>
                            </div>
                        </Link>
                        <p className="text-green-200 mb-6 leading-relaxed">
                            Creating sustainable residential and farm land communities that blend modern living with nature. Trusted for quality, transparency, and long-term value.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6" style={{ color: "#c9a227" }}>Quick Links</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/projects" label="Projects" />
                            <FooterLink href="/infra-developments" label="Infra & Developments" />
                            <FooterLink href="/why-choose-us" label="Why Choose Us" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6" style={{ color: "#c9a227" }}>Our Projects</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/projects" label="Residential Layouts" />
                            <FooterLink href="/projects" label="Farm Lands" />
                            <FooterLink href="/projects" label="Gated Communities" />
                            <FooterLink href="/projects" label="Upcoming Projects" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6" style={{ color: "#c9a227" }}>Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-green-200">
                                <MapPin className="w-5 h-5 shrink-0 mt-1" style={{ color: "#c9a227" }} />
                                <span>123 Green Valley Road, Eco City, 560001</span>
                            </li>
                            <li className="flex items-center gap-3 text-green-200">
                                <Phone className="w-5 h-5 shrink-0" style={{ color: "#c9a227" }} />
                                <span>+91 9342339001</span>
                            </li>
                            <li className="flex items-center gap-3 text-green-200">
                                <Mail className="w-5 h-5 shrink-0" style={{ color: "#c9a227" }} />
                                <span>info@haarshamfarms.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
                    style={{ borderColor: "rgba(201,162,39,0.3)", color: "rgba(255,255,255,0.6)" }}
                >
                    <p>&copy; {new Date().getFullYear()} Haarsham Farms &amp; Developers. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:opacity-80 transition-opacity" style={{ color: "#c9a227" }}>Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:opacity-80 transition-opacity" style={{ color: "#c9a227" }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "#c9a227" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#c9a227"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(201,162,39,0.2)"}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }) {
    return (
        <li>
            <Link
                href={href}
                className="text-green-200 hover:text-white transition-colors flex items-center gap-2 group"
            >
                <span
                    className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ backgroundColor: "#c9a227" }}
                />
                {label}
            </Link>
        </li>
    );
}
