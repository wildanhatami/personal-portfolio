"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/app/data/profile";
import { projects, ProjectCategory } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All"
  );

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section layout: left column + right grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 xl:w-80 shrink-0"
          >
            <div className="lg:sticky lg:top-24">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #22d3ee, #a855f7)",
                  }}
                />
                <span className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
                  Portfolio
                </span>
              </div>

              <h2
                className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                MY
                <br />
                <span className="gradient-text">WORK</span>
              </h2>

              <p className="text-[#8ca0bc] text-sm leading-relaxed mb-6">
                {profile.workDescription}
              </p>

              {/* Filter pills */}
              <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

              {/* Count */}
              <p className="text-xs text-[#4a5c74] mt-4">
                {filtered.length} project
                {filtered.length !== 1 ? "s" : ""}
              </p>
            </div>
          </motion.div>

          {/* Right: Project Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="flex items-center justify-center h-48 glass-card rounded-2xl">
                <p className="text-[#4a5c74] text-sm">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
