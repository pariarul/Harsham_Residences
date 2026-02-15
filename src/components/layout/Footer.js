import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Harsham<span className="text-emerald-500">Residences</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
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
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/projects" label="Projects" />
                            <FooterLink href="/why-choose-us" label="Why Choose Us" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Projects</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/projects" label="Residential Layouts" />
                            <FooterLink href="/projects" label="Farm Lands" />
                            <FooterLink href="/projects" label="Gated Communities" />
                            <FooterLink href="/projects" label="Upcoming Projects" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                <span>123 Green Valley Road, Eco City, 560001</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>info@harshamresidences.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Harsham Residences. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
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
            className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors text-slate-400"
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
                className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
                {label}
            </Link>
        </li>
    );
}
