"use client";

import { motion } from "framer-motion";
import { GitHubUserStats, GitHubRepoStats } from "@/app/lib/githubStats";
import { FaGithub, FaStar } from "react-icons/fa";
import { Users, BookOpen, Code2 } from "lucide-react";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
};

interface Props {
  user: GitHubUserStats | null;
  repos: GitHubRepoStats;
  username: string;
}

function StatCard({
  icon,
  label,
  value,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1.5 p-4 rounded-xl text-center"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="text-[#22d3ee]">{icon}</div>
      <div
        className="text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="text-[10px] text-[#4a5c74] tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export default function GitHubStats({ user, repos, username }: Props) {
  if (!user) return null;

  const totalLangUsed = repos.topLanguages.reduce((a, b) => a + b.count, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-5 pb-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <FaGithub size={16} className="text-[#8ca0bc]" />
          <span className="text-xs font-semibold text-[#8ca0bc] tracking-widest uppercase">
            GitHub Activity
          </span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[#22d3ee] hover:text-white transition-colors"
        >
          @{username} ↗
        </a>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard
          icon={<BookOpen size={16} />}
          label="Public Repos"
          value={user.publicRepos}
          delay={0}
        />
        <StatCard
          icon={<Users size={16} />}
          label="Followers"
          value={user.followers}
          delay={0.1}
        />
        <StatCard
          icon={<FaStar size={14} />}
          label="Total Stars"
          value={repos.totalStars}
          delay={0.2}
        />
      </div>

      {/* Top languages */}
      {repos.topLanguages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Code2 size={13} className="text-[#4a5c74]" />
            <span className="text-[10px] text-[#4a5c74] tracking-wider uppercase font-semibold">
              Top Languages
            </span>
          </div>

          {/* Stacked bar */}
          <div
            className="h-2 rounded-full overflow-hidden flex mb-3"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {repos.topLanguages.map(({ language, count }) => (
              <div
                key={language}
                style={{
                  width: `${(count / totalLangUsed) * 100}%`,
                  background: languageColors[language] || "#8ca0bc",
                }}
                title={language}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {repos.topLanguages.map(({ language, count }) => (
              <div key={language} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: languageColors[language] || "#8ca0bc" }}
                />
                <span className="text-[11px] text-[#8ca0bc]">{language}</span>
                <span className="text-[10px] text-[#4a5c74]">
                  {Math.round((count / totalLangUsed) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
