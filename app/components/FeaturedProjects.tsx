"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "@/app/data/projects";

function ProjectThumbnail({
  src,
  alt,
  shortName,
}: {
  src: string;
  alt: string;
  shortName: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,20,45,0.9), rgba(34,211,238,0.08), rgba(168,85,247,0.08))",
        }}
      >
        <div className="text-center p-4">
          <div className="text-xs font-semibold gradient-text tracking-wider leading-tight">
            {shortName}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setImgError(true)}
    />
  );
}

export default function FeaturedProjects() {
  const handleScrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-0">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: "linear-gradient(180deg, #22d3ee, #a855f7)",
              }}
            />
            <h2
              className="text-lg font-bold text-white tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              My Projects
            </h2>
          </div>
          <button
            onClick={handleScrollToWork}
            className="text-xs text-[#22d3ee] hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            View all
            <ExternalLink
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </motion.div>

        {/* Featured project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                "--hover-shadow": "0 0 20px rgba(34,211,238,0.15)",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 24px rgba(34,211,238,0.15), 0 8px 24px rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(34,211,238,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(34,211,238,0.12)";
              }}
            >
              {/* Thumbnail */}
              <div className="relative h-40 overflow-hidden">
                <ProjectThumbnail
                  src={project.thumbnail}
                  alt={project.name}
                  shortName={project.shortName || project.name}
                />
                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                    style={{
                      background: "rgba(34,211,238,0.15)",
                      border: "1px solid rgba(34,211,238,0.3)",
                      color: "#22d3ee",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-xs text-[#8ca0bc] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-2 mt-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#8ca0bc] hover:text-white transition-colors"
                      aria-label={`GitHub — ${project.name}`}
                    >
                      <FaGithub size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#8ca0bc] hover:text-cyan-400 transition-colors"
                      aria-label={`Live demo — ${project.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
