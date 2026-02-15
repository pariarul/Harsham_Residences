"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className={cn(
                        "text-2xl font-bold tracking-tight",
                        isScrolled ? "text-slate-900" : "text-white"
                    )}>
                        Harsham<span className="text-emerald-500">Residences</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors hover:text-emerald-500",
                                pathname === link.href
                                    ? "text-emerald-500"
                                    : isScrolled ? "text-slate-700" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        href="/contact"
                        variant={isScrolled ? "primary" : "white"}
                        className="px-5 py-2 text-sm"
                    >
                        Book Site Visit
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />
                    )}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-semibold transition-colors hover:text-emerald-400",
                                        pathname === link.href ? "text-emerald-500" : "text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="/contact" onClick={() => setIsOpen(false)} variant="primary">
                                Book Site Visit
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
