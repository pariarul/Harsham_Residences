"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, TreePine, ShieldCheck, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { StatCounter, TestimonialCard } from "@/components/home/HomeComponents";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(15,45,28,0.75), rgba(15,45,28,0.5), rgba(15,45,28,0.85))' }} />
          {/* Placeholder for Hero Image - In a real app, use a real image */}
          <div className="w-full h-full bg-slate-800 relative">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
              alt="Green landscape"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-20 text-center text-white relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
          >
            Trusted Residential & <br className="hidden md:block" />
            <span style={{ color: '#c9a227' }}>Farm Land Developments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Legally approved residential layouts and farm lands designed for long-term value and peaceful living. Invest in your future with Haarsham Farms &amp; Developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/projects" variant="gold" className="text-lg px-8 py-4">
              View Projects
            </Button>
          <Button
  href="https://wa.me/919876543210"
  variant="white"
  className="text-lg px-8 py-4"
  target="_blank"
>
  Book Site Visit
</Button>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop"
                alt="Modern Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium tracking-wide uppercase mb-3" style={{ color: '#1a4a2e' }}>Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-6">
                Premium Real Estate with Integrity & Clear Titles
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Haarsham Farms &amp; Developers is a trusted real-estate development company specializing in DTCP / RERA-approved residential layouts and farm land projects. We prioritize modern infrastructure, transparent documentation, and sustainable living environments.
              </p>
              <Button href="/about" variant="outline" className="group">
                Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Highlights */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We are committed to delivering high-quality developments with complete transparency and legal compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HighlightCard
              icon={<ShieldCheck className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
              title="DTCP / RERA Approved"
              description="All our projects come with necessary legal approvals ensuring a safe investment."
            />
            <HighlightCard
              icon={<CheckCircle2 className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
              title="Clear Title"
              description="100% transparent documentation giving you complete peace of mind and ownership assurance."
            />
            <HighlightCard
              icon={<MapPin className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
              title="Strategic Locations"
              description="Handpicked locations with high growth potential and excellent connectivity."
            />
            <HighlightCard
              icon={<TrendingUp className="w-10 h-10" style={{ color: '#1a4a2e' }} />}
              title="High Appreciation"
              description="Designed to offer substantial returns on investment over the long term."
            />
          </div>
        </div>
      </Section>

<Section
  className="py-16 bg-[#0f3d2e]"
>
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#d4af37] [&_*]:!text-[#d4af37]">
      <StatCounter end={12} title="Years of Experience" />
      <StatCounter end={50} suffix="+" title="Completed Projects" />
      <StatCounter end={150} suffix="+" title="Happy Customers" />
      <StatCounter end={100} suffix="%" title="Legal Compliance" />
    </div>
  </div>
</Section>



      {/* Testimonials */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Client Speak</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hear what our satisfied customers have to say about their investment journey with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Software Engineer"
              content="Investing with Haarsham Farms & Developers was the best decision I made. Their clear documentation and professional guidance gave me complete confidence throughout the process."
            />
            <TestimonialCard
              name="karthi"
              role="Business Owner"
              content="I was searching for a peaceful farm land investment. The location recommended by Haarsham is beautiful and has shown excellent appreciation within just two years."
            />
          <TestimonialCard
  name="Mani"
  role="College Student"
  content="Haarsham guided me clearly through the investment process. Their transparency and support made it easy even for a first-time investor."
/>

          </div>
        </div>
      </Section>

      {/* Projects Preview */}
      <Section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-medium tracking-wide uppercase mb-3" style={{ color: '#c9a227' }}>Our Projects</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Find Your Perfect Plot</h3>
            </div>
            <Button href="/projects" variant="white" className="hidden md:flex">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Residential Layouts"
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop"
              desc="Premium plots with black-top roads and modern amenities."
            />
            <ProjectCard
              title="Farm Lands"
              image="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2942&auto=format&fit=crop"
              desc="Fertile land for agriculture and weekend getaways."
            />
            <ProjectCard
              title="Gated Communities"
              image="https://images.unsplash.com/photo-1582268611958-abfd38471bc6?q=80&w=2940&auto=format&fit=crop"
              desc="Secure, organized living with controlled access."
            />
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button href="/projects" variant="white">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="" style={{ backgroundColor: '#1a4a2e' }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Looking for a safe land investment?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to explore our latest projects and book a site visit. Your dream property awaits.
          </p>
          <Button href="/contact" variant="white" className="text-lg px-10 py-4 shadow-xl">
            Contact Us Today
          </Button>
        </div>
      </Section>
    </>
  );
}

function HighlightCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
    >
      <div className="mb-6 w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ title, image, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl h-[400px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {desc}
        </p>
        <span className="inline-flex items-center font-medium group-hover:underline" style={{ color: '#c9a227' }}>
          Explore <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}
