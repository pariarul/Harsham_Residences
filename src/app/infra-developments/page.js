"use client";

import { motion } from "framer-motion";
import { 
  Road, 
  Droplets, 
  Lightbulb, 
  Shield, 
  TreePine, 
  Wifi,
  Construction,
  Fence
} from "lucide-react";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function InfraDevelopments() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(15,45,28,0.8), rgba(15,45,28,0.4))' }} />
 <Image
  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  alt="Infrastructure Development"
  fill
  unoptimized
  className="object-cover"
  priority
/>
        </div>

        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-[#c9a227] text-[#c9a227] font-medium text-sm mb-6 backdrop-blur-md"
          >
            WORLD-CLASS STANDARDS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Infra & <span className="text-[#c9a227]">Developments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-light"
          >
            We don&apos;t just sell plots; we build foundations for a lifetime. Our infrastructure sets us apart.
          </motion.p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900 mb-8">
              Engineering <span className="text-[#1a4a2e]">Excellence</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Our development philosophy centers on creating future-proof infrastructure. Every Harsham project undergoes rigorous planning for drainage, electrification, and road connectivity, ensuring a seamless living experience from day one.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Infrastructure Features Grid */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InfraCard 
              icon={<Construction />} 
              title="Wide Bitumen Roads" 
              desc="Internal 40ft and 30ft black-top roads constructed to industrial standards for durability." 
            />
            <InfraCard 
              icon={<Droplets />} 
              title="Storm Water Drainage" 
              desc="Underground RCC drains designed to prevent water-logging even during peak monsoon." 
            />
            <InfraCard 
              icon={<Lightbulb />} 
              title="Electrical Network" 
              desc="Underground cabling system with high-quality street lighting and dedicated transformer capacity." 
            />
            <InfraCard 
              icon={<TreePine />} 
              title="Avenue Plantation" 
              desc="Strategically planned green corridors with local flora to enhance air quality and aesthetics." 
            />
            <InfraCard 
              icon={<Shield />} 
              title="Secure Compound Wall" 
              desc="Gated communities with 7ft high masonry compound walls and 24/7 security outposts." 
            />
            <InfraCard 
              icon={<Droplets />} 
              title="Overhead Water Tank" 
              desc="Centralized water storage with pressurized delivery lines to every individual plot." 
            />
          </div>
        </div>
      </Section>

      {/* Visual Showcase */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
<Image 
  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  alt="Road Development" 
  fill 
  unoptimized
  className="object-cover transition-transform duration-700 group-hover:scale-110" 
/>
              <div className="absolute inset-0 bg-black/40 flex items-end p-12">
                <h4 className="text-white text-2xl font-bold">Planned Grid Layouts</h4>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop" 
                  alt="Park Development" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xl uppercase tracking-widest border-b-2 border-[#c9a227]">Landscape Parks</span>
                </div>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
                  alt="Security Infrastructure" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xl uppercase tracking-widest border-b-2 border-[#c9a227]">Smart Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">Experience Our Quality Standards</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
            Schedule a site visit today and see the Harsham difference for yourself. Our infrastructure is built for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#c9a227] text-white font-bold rounded-full hover:bg-[#b08d1e] transition-colors shadow-lg shadow-gold/20">
              Request Brochure
            </button>
            <button className="px-10 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Book Site Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfraCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all h-full"
    >
      <div className="w-16 h-16 bg-[#1a4a2e]/5 text-[#1a4a2e] flex items-center justify-center rounded-2xl mb-8">
        <div className="w-10 h-10">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
