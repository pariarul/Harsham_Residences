"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Shield,
  Award,
  Users,
  FileSearch,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Image from "next/image";

/* =========================
   MAIN ABOUT PAGE
========================= */
export default function About() {
  return (
    <>
      {/* ================= Page Header ================= */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: "#1a4a2e" }}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
            alt="Corporate building"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Building trust through quality developments and transparent practices.
          </p>
        </div>
      </section>

      {/* ================= Company Overview ================= */}
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2
                className="font-medium tracking-wide uppercase mb-3"
                style={{ color: "#1a4a2e" }}
              >
                Company Overview
              </h2>
              <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-6">
                Redefining Real Estate Standards
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Haarsham Farms & Developers is a professionally managed real-estate
                development company focused on creating legally compliant,
                well-planned residential and farm land communities.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our developments combine modern infrastructure with natural serenity,
                delivering long-term value and peaceful living for our customers.
              </p>
            </div>

            <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                alt="Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ================= Why Invest With Us ================= */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
              Why Invest With Us?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Secure investments, strategic locations, and transparent processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              title="Legally Secure Projects"
              desc="DTCP & RERA approved projects with complete legal compliance."
            />
            <InfoCard
              title="Strategic Locations"
              desc="High-growth locations near upcoming infrastructure corridors."
            />
            <InfoCard
              title="End-to-End Support"
              desc="Guidance from site visit to registration and after-sales."
            />
          </div>
        </div>
      </Section>

      {/* ================= Vision & Mission ================= */}
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VisionMissionCard
              icon={<Eye className="w-8 h-8 text-[#1a4a2e]" />}
              title="Our Vision"
              content="To create sustainable residential and farm land communities
              that deliver long-term value and harmonious living."
            />

            <VisionMissionCard
              icon={<Target className="w-8 h-8 text-[#1a4a2e]" />}
              title="Our Mission"
              list={[
                "Deliver DTCP / RERA approved projects",
                "Ensure clear titles and documentation",
                "Develop eco-friendly infrastructure",
                "Maintain ethical business practices",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ================= Our Commitment ================= */}
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#1a4a2e] rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Our Commitment
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed">
              We are committed to transparency, legal clarity, and delivering
              developments that stand the test of time. Your trust drives everything
              we build.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= Leadership Team ================= */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experienced professionals guiding our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            <TeamMember
              name="Ramesh Reddy"
              role="Managing Director"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2874&auto=format&fit=crop"
            />
            <TeamMember
              name="Suresh Kumar"
              role="Director - Operations"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
            />
            <TeamMember
              name="Priya Sharma"
              role="Head of Sales"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2876&auto=format&fit=crop"
            />
          </div>
        </div>
      </Section>

      {/* ================= Core Values ================= */}
      <Section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<Shield />} title="Integrity" desc="Honesty and ethics in every deal." />
            <ValueCard icon={<Award />} title="Quality" desc="Excellence in planning and execution." />
            <ValueCard icon={<FileSearch />} title="Transparency" desc="Clear processes, no hidden terms." />
            <ValueCard icon={<Users />} title="Customer Trust" desc="Long-term relationships built on trust." />
          </div>
        </div>
      </Section>

      {/* ================= CTA ================= */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Explore our premium residential and farm land projects today.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                className="px-8 py-3 rounded-full font-semibold text-white"
                style={{ backgroundColor: "#1a4a2e" }}
              >
                View Projects
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold border-2"
                style={{ borderColor: "#1a4a2e", color: "#1a4a2e" }}
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* =========================
   REUSABLE COMPONENTS
========================= */

function InfoCard({ title, desc }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </motion.div>
  );
}

function VisionMissionCard({ icon, title, content, list }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#c9a227]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-[#c9a227]/20">{icon}</div>
        <h3 className="text-2xl font-bold font-playfair text-slate-900">{title}</h3>
      </div>

      {content && <p className="text-slate-600 text-lg">{content}</p>}

      {list && (
        <ul className="space-y-3 text-slate-600 text-lg">
          {list.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function TeamMember({ name, role, image }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-80 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <p className="font-medium text-[#1a4a2e]">{role}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="w-20 h-20 rounded-full bg-[#1a4a2e] flex items-center justify-center mx-auto mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </motion.div>
  );
}
