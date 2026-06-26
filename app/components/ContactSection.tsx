"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/app/data/profile";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";



export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
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
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--cyan)" }}>
                Contact
              </span>
            </div>

            <h2
              className="text-3xl xl:text-4xl font-bold mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)", color: "var(--text-primary)" }}
            >
              LET&apos;S{" "}
              <span className="gradient-text">CONNECT</span>
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {profile.contactDescription}
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--badge-subtle)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <Mail size={15} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-primary)" }}
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
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                    WhatsApp
                  </p>
                  <a
                    href={profile.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-primary)" }}
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
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                    Location
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-primary)" }}>{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
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
                background: "var(--bg-panel)",
                backdropFilter: "blur(20px)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 60px rgba(0,0,0,0.3)",
              }}
            >
              <h3
                className="text-lg font-bold mb-6 tracking-wide"
                style={{ fontFamily: "var(--font-jakarta)", color: "var(--text-primary)" }}
              >
                GET IN TOUCH
              </h3>

              <ContactForm />


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
