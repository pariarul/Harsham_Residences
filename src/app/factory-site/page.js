"use client";

import { motion } from "framer-motion";
import { 
  Factory, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Truck, 
  Cpu,
  CornerRightDown
} from "lucide-react";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function FactorySite() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-black/60" />
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
            alt="Manufacturing Facility"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Our <span className="text-[#c9a227]">Factory Site</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Precision manufacturing and high-quality material selection at our dedicated facility.
          </motion.p>
        </div>
      </section>

      {/* Core Manufacturing Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1a4a2e] font-semibold uppercase tracking-wider mb-4">Precision & Quality</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-6">
                Where Strength Meets <span className="text-[#c9a227]">Innovation</span>
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our factory site is the heart of our operations. Here, we process high-grade materials to ensure that every Harsham development stands the test of time. From brick production to finishing materials, our facility maintains the highest standards of quality control.
              </p>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<Zap className="w-6 h-6" />} 
                  title="Advanced Automation" 
                  desc="Utilizing modern machinery for consistent quality and precision." 
                />
                <FeatureItem 
                  icon={<ShieldCheck className="w-6 h-6" />} 
                  title="Quality Certification" 
                  desc="Strict 24/7 monitoring of production lines and material testing." 
                />
                <FeatureItem 
                  icon={<Cpu className="w-6 h-6" />} 
                  title="Smart Inventory" 
                  desc="Real-time tracking of raw materials and finished goods." 
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5f9c204c?q=80&w=2940&auto=format&fit=crop"
                alt="Production Line"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-[#1a4a2e] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock number="50,000" label="SQFT Area" />
            <StatBlock number="100+" label="Skilled Workers" />
            <StatBlock number="15+" label="Modern Machines" />
            <StatBlock number="24/7" label="Production" />
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Sustainability in Action</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We believe in building for the future without compromising the environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SustainabilityCard 
              icon={<Factory />}
              title="Solar Powered"
              desc="Our facility is partially powered by on-site solar installations, reducing our carbon footprint."
            />
            <SustainabilityCard 
              icon={<CornerRightDown />}
              title="Water Recycling"
              desc="We implement advanced water treatment systems to recycle 80% of factory water."
            />
            <SustainabilityCard 
              icon={<Settings />}
              title="Waste Management"
              desc="Zero-waste policy with comprehensive recycling programs for all production leftovers."
            />
          </div>
        </div>
      </Section>

      {/* Logistics Section */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white rounded-[2rem] p-8 md:p-16 border border-slate-100 shadow-xl">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-16 h-16 bg-[#c9a227]/10 flex items-center justify-center rounded-2xl mb-6 mx-auto md:mx-0">
                <Truck className="w-8 h-8 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Swift Logistics</h3>
              <p className="text-slate-600">Our dedicated transport fleet ensures that materials reach site locations without delay.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <LogisticsImage src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2680&auto=format&fit=crop" />
              <LogisticsImage src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2950&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-[#1a4a2e]/10 text-[#1a4a2e] flex items-center justify-center rounded-xl font-bold">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function StatBlock({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-[#c9a227] mb-2">{number}</div>
      <div className="text-slate-300 font-medium uppercase tracking-widest text-sm">{label}</div>
    </div>
  );
}

function SustainabilityCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#c9a227]">
      <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-full mb-6 text-[#1a4a2e]">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function LogisticsImage({ src }) {
  return (
    <div className="relative h-48 rounded-xl overflow-hidden">
      <Image src={src} alt="Logistics" fill className="object-cover" />
    </div>
  );
}
