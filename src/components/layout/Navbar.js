"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Home,
  Info,
  Building,
  Construction,
  Star,
  Phone,
} from "lucide-react";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 shadow-md" : "py-5"
      )}
      style={{ backgroundColor: isScrolled ? "#1a4a2e" : "transparent" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors",
                pathname === link.href ? "font-semibold" : "hover:opacity-80"
              )}
              style={{
                color:
                  pathname === link.href
                    ? "#c9a227"
                    : "rgba(255,255,255,0.9)",
              }}
            >
              {link.name}
            </Link>
          ))}

          <Button
            href="https://wa.me/919342339001"
            target="_blank"
            variant="white"
            className="px-5 py-2 text-sm"
          >
            Book Site Visit
          </Button>
        </div>

        {/* Mobile Toggle Button (ONLY ONE) */}
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
      </div>

      {/* Mobile Menu */}
{/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
      style={{ backgroundColor: "#1a4a2e" }}
    >

      {/* 🔹 Navigation Links */}
      <div className="flex flex-col gap-7">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Home className="w-6 h-6 text-[#c9a227]" />
          Home
        </Link>

        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Info className="w-6 h-6 text-[#c9a227]" />
          About Us
        </Link>

        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Building className="w-6 h-6 text-[#c9a227]" />
          Projects
        </Link>

        <Link
          href="/infra-developments"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Construction className="w-6 h-6 text-[#c9a227]" />
          Infra & Developments
        </Link>

        <Link
          href="/why-choose-us"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Star className="w-6 h-6 text-[#c9a227]" />
          Why Choose Us
        </Link>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 text-xl font-semibold text-white hover:scale-105 transition"
        >
          <Phone className="w-6 h-6 text-[#c9a227]" />
          Contact
        </Link>
      </div>

      {/* 🔹 WhatsApp CTA */}
      <motion.a
        href="https://wa.me/919342339001?text=Hello%20I%20would%20like%20to%20book%20a%20site%20visit"
        target="_blank"
        onClick={() => setIsOpen(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg"
      >
        <MessageCircle size={22} />
        Book Site Visit
      </motion.a>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}