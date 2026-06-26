"use client";

import { motion } from "framer-motion";
import { profile } from "@/app/data/profile";
import SkillsGrid from "./SkillsGrid";
import Timeline from "./Timeline";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div
            className="w-1 h-6 rounded-full"
            style={{
              background: "linear-gradient(180deg, #22d3ee, #a855f7)",
            }}
          />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--cyan)" }}>
            About
          </span>
        </motion.div>

        {/* Main glassmorphism panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-6 md:p-10"
          style={{
            background: "var(--bg-panel)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Top: About text + Skills */}
          <div className="flex flex-col lg:flex-row gap-10 mb-10">
            {/* Left: About text */}
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-jakarta)", color: "var(--text-primary)" }}
              >
                ABOUT{" "}
                <span className="gradient-text">ME</span>
              </h2>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {profile.aboutParagraph1}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {profile.aboutParagraph2}
                </p>
              </div>

              {/* Quick info */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0 text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Location
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0 text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                  className="text-sm hover:text-white transition-colors"
                    style={{ color: "var(--cyan)" }}>
                    {profile.email}
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Skills */}
            <div className="lg:w-64 xl:w-72 shrink-0">
              <SkillsGrid />
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-[1px] mb-10"
            style={{
              background:
                "linear-gradient(90deg, var(--border-subtle), var(--border-purple), transparent)",
            }}
          />

          {/* Bottom: Timeline */}
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
}
