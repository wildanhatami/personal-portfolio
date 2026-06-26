"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data/skills";
import { useTheme } from "@/app/context/ThemeContext";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPython,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiVercel,
  SiAlpinedotjs,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  SiHtml5,
  SiCss3: SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPython,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiVercel,
  SiAlpinedotjs,
  SiScikitlearn,
  SiJupyter,
};

export default function SkillsGrid() {
  const { theme } = useTheme();

  return (
    <div>
      <h3
        className="text-sm font-bold tracking-widest uppercase mb-4 pl-4"
        style={{ fontFamily: "var(--font-jakarta)", color: "var(--text-primary)" }}
      >
        Skills & Tech Stack
      </h3>
      
      {/* Marquee Track */}
      <div className="flex w-max gap-3 py-2 animate-marquee">
        {[...skills, ...skills].map((skill, i) => {
          const isTargetSkill = skill.id === "nextjs" || skill.id === "github";
          const skillColor = theme === "light" && isTargetSkill ? "#000000" : skill.color;

          const IconComponent =
            skill.iconType === "react-icon" && skill.iconKey
              ? iconMap[skill.iconKey]
              : null;

          return (
            <div
              key={`${skill.id}-${i}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full transition-colors duration-300 shadow-sm"
              style={{
                background: "var(--badge-subtle)",
                border: "1px solid var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = `linear-gradient(135deg, ${skillColor}15, var(--badge-subtle))`;
                el.style.borderColor = `${skillColor}50`;
                el.style.boxShadow = `0 0 15px ${skillColor}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--badge-subtle)";
                el.style.borderColor = "var(--border-subtle)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              {IconComponent ? (
                <IconComponent size={16} style={{ color: skillColor }} />
              ) : (
                <span
                  className="text-[10px] font-black uppercase tracking-wider"
                  style={{ color: skillColor }}
                >
                  {skill.abbr}
                </span>
              )}

              {/* Text */}
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--text-primary)" }}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
