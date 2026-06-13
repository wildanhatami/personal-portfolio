"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/app/data/profile";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

/** Abstract map / grid decoration panel */
function MapDecoration() {
  return (
    <div
      className="relative rounded-xl overflow-hidden flex-1 min-h-[120px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(34,211,238,0.04), rgba(168,85,247,0.04))",
        border: "1px solid rgba(34,211,238,0.08)",
      }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-[rgba(34,211,238,0.15)]"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[rgba(168,85,247,0.15)]"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-glow-pulse"
        style={{
          background: "rgba(34,211,238,0.6)",
          boxShadow: "0 0 16px rgba(34,211,238,0.8)",
        }}
      />

      {/* Location label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div
          className="px-3 py-1 rounded-full text-[10px] font-medium text-[#22d3ee] whitespace-nowrap"
          style={{
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.2)",
          }}
        >
          📍 {profile.location}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 xl:w-96 shrink-0"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-1 h-6 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #22d3ee, #a855f7)",
                }}
              />
              <span className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
                Contact
              </span>
            </div>

            <h2
              className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              LET&apos;S{" "}
              <span className="gradient-text">CONNECT</span>
            </h2>

            <p className="text-[#8ca0bc] text-sm leading-relaxed mb-8">
              {profile.contactDescription}
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.15)",
                  }}
                >
                  <Mail size={15} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-[#4a5c74] uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-[#e2eaf4] hover:text-cyan-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.15)",
                  }}
                >
                  <MessageCircle size={15} className="text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-[#4a5c74] uppercase tracking-wider mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href={profile.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#e2eaf4] hover:text-green-400 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}
                >
                  <MapPin size={15} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-[#4a5c74] uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-[#e2eaf4]">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] text-[#4a5c74] uppercase tracking-wider mb-3">
                Social Media
              </p>
              <SocialLinks size="md" variant="pill" />
            </div>
          </motion.div>

          {/* Right: Form panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 w-full"
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(5,15,35,0.65)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(34,211,238,0.12)",
                boxShadow: "0 4px 60px rgba(0,0,0,0.4)",
              }}
            >
              <h3
                className="text-lg font-bold text-white mb-6 tracking-wide"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                GET IN TOUCH
              </h3>

              <ContactForm />

              {/* Map decoration */}
              <div className="mt-6">
                <MapDecoration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
