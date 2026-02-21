"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone ,MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Image from "next/image";


const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Infra & Developments", href: "/infra-developments" },
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
                          href="https://wa.me/9342339001"
  variant="white"
  target="_blank"
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
{/* Mobile Navigation Overlay */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10 md:hidden"
      style={{ backgroundColor: "#1a4a2e" }}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-white hover:opacity-80"
      >
        <X size={28} />
      </button>

      {/* Navigation Links */}
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-2xl font-semibold tracking-wide transition-all hover:scale-105"
          style={{
            color: pathname === link.href ? "#c9a227" : "white",
          }}
        >
          {link.name}
        </Link>
      ))}

      {/* WhatsApp CTA */}
      <motion.a
        href="https://wa.me/919876543210?text=Hello%20I%20would%20like%20to%20book%20a%20site%20visit"
        target="_blank"
        onClick={() => setIsOpen(false)}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg"
      >
        <MessageCircle size={22} />
        Book Site Visit
      </motion.a>
    </motion.div>
  )}
</AnimatePresence>
            </div>
        </nav>
    );
}
