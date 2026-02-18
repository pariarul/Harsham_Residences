"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Image from "next/image";


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
                    ? "py-3 shadow-md"
                    : "bg-transparent py-5"
            )}
            style={isScrolled ? { backgroundColor: "#1a4a2e" } : {}}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
<Link href="/" className="flex items-center gap-3 z-50">
  <Image
    src="/full_logo.png"
    alt="Haarsham Farms & Developers Logo"
    width={150}
    height={60}
    priority
    className="object-contain"
  />
</Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors",
                                pathname === link.href
                                    ? "font-semibold"
                                    : "hover:opacity-80"
                            )}
                            style={{
                                color: pathname === link.href ? "#c9a227" : "rgba(255,255,255,0.9)"
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        href="/contact"
                        variant="gold"
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
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
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
                            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                            style={{ backgroundColor: "#1a4a2e" }}
                        >
                            {/* Mobile Logo */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md"
                                    style={{ backgroundColor: "#c9a227", color: "#1a4a2e" }}
                                >
                                    H
                                </div>
                                <div>
                                    <p className="font-bold text-xl" style={{ color: "#c9a227" }}>Haarsham</p>
                                    <p className="text-white text-sm">Farms &amp; Developers</p>
                                </div>
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-semibold transition-colors hover:opacity-80"
                                    style={{
                                        color: pathname === link.href ? "#c9a227" : "white"
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="/contact" onClick={() => setIsOpen(false)} variant="gold">
                                Book Site Visit
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
