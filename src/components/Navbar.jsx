"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Why Us", href: "#features" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-md border-slate-200 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col">
                    <span className={cn("text-2xl font-serif font-bold tracking-tight transition-colors", isScrolled ? "text-primary-900" : "text-white")}>
                        Harsham
                    </span>
                    <span className={cn("text-xs font-medium tracking-widest uppercase transition-colors", isScrolled ? "text-secondary-600" : "text-slate-200")}>
                        Residences
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary-500",
                                isScrolled ? "text-slate-700" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2 text-sm font-bold text-white bg-secondary-600 rounded-full hover:bg-secondary-700 transition-colors shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-slate-800" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-800" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="container flex flex-col py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-800 hover:text-primary-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">+91 [Phone Number]</span>
                                </div>
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">[Project Location]</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
