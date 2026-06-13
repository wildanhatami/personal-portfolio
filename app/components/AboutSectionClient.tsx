"use client";

import { motion } from "framer-motion";
import { profile } from "@/app/data/profile";
import SkillsGrid from "./SkillsGrid";
import Timeline from "./Timeline";
import GitHubStats from "./GitHubStats";
import { GitHubUserStats, GitHubRepoStats } from "@/app/lib/githubStats";

interface Props {
  user: GitHubUserStats | null;
  repos: GitHubRepoStats;
  username: string;
}

export default function AboutSectionClient({ user, repos, username }: Props) {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
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
          <span className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
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
            background: "rgba(5,15,35,0.65)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(34,211,238,0.12)",
            boxShadow: "0 4px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Top: About text + Skills */}
          <div className="flex flex-col lg:flex-row gap-10 mb-10">
            {/* Left: About text */}
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ABOUT{" "}
                <span className="gradient-text">ME</span>
              </h2>

              <div className="space-y-4">
                <p className="text-[#8ca0bc] text-sm leading-relaxed">
                  {profile.aboutParagraph1}
                </p>
                <p className="text-[#8ca0bc] text-sm leading-relaxed">
                  {profile.aboutParagraph2}
                </p>
              </div>

              {/* Quick info */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#4a5c74] w-20 shrink-0 text-xs uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-[#e2eaf4] text-sm">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#4a5c74] w-20 shrink-0 text-xs uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-[#22d3ee] hover:text-white transition-colors text-sm"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#4a5c74] w-20 shrink-0 text-xs uppercase tracking-wider">
                    Status
                  </span>
                  <span className="text-sm flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
                      style={{
                        background: "#22d3ee",
                        boxShadow: "0 0 6px #22d3ee",
                      }}
                    />
                    <span className="text-[#e2eaf4]">
                      Open to opportunities
                    </span>
                  </span>
                </div>
              </div>

              {/* GitHub Stats — below quick info */}
              <GitHubStats user={user} repos={repos} username={username} />
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
                "linear-gradient(90deg, rgba(34,211,238,0.2), rgba(168,85,247,0.15), transparent)",
            }}
          />

          {/* Bottom: Timeline */}
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
}
