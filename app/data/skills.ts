/**
 * ============================================================
 * SKILLS DATA — Muhammad Wildan Hatami Portfolio
 * ============================================================
 * Edit this file to add, remove, or update skills.
 *
 * HOW TO ADD A SKILL:
 * 1. Add a new object to the `skills` array below.
 * 2. Set `name` to the technology name.
 * 3. Set `iconType` to either:
 *    - "react-icon" → use an icon from react-icons (set `iconKey`)
 *    - "abbr"       → display text abbreviation as fallback
 * 4. Set `color` for the glow/accent color of the skill card.
 * ============================================================
 */

export interface Skill {
  id: string;
  name: string;
  /** Category for grouping (optional) */
  category: "Frontend" | "Backend" | "Language" | "Tool" | "Design";
  /** Type of icon to render */
  iconType: "react-icon" | "abbr";
  /** React Icons key (e.g. "SiReact") — used when iconType is "react-icon" */
  iconKey?: string;
  /** Fallback abbreviation text — used when iconType is "abbr" */
  abbr?: string;
  /** Accent color for hover glow effect (Tailwind-compatible hex or CSS color) */
  color: string;
}

export const skills: Skill[] = [
  // ── Frontend ────────────────────────────────────────────────
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiHtml5",
    color: "#e34c26",
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiCss3",
    color: "#264de4",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiJavascript",
    color: "#f7df1e",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiTypescript",
    color: "#3178c6",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiReact",
    color: "#61dafb",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiNextdotjs",
    color: "#ffffff",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiTailwindcss",
    color: "#38bdf8",
  },

  // ── Backend ─────────────────────────────────────────────────
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    iconType: "react-icon",
    iconKey: "SiNodedotjs",
    color: "#339933",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    iconType: "react-icon",
    iconKey: "SiExpress",
    color: "#888888", // Neutral for dark mode
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Backend",
    iconType: "react-icon",
    iconKey: "SiMysql",
    color: "#4479A1",
  },

  // ── Tools ───────────────────────────────────────────────────
  {
    id: "git",
    name: "Git",
    category: "Tool",
    iconType: "react-icon",
    iconKey: "SiGit",
    color: "#f05032",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tool",
    iconType: "react-icon",
    iconKey: "SiGithub",
    color: "#ffffff",
  },

  {
    id: "vercel",
    name: "Vercel",
    category: "Tool",
    iconType: "react-icon",
    iconKey: "SiVercel",
    color: "#ffffff",
  },

  // ── Languages & ML ──────────────────────────────────────────
  {
    id: "python",
    name: "Python",
    category: "Language",
    iconType: "react-icon",
    iconKey: "SiPython",
    color: "#3572a5",
  },
  {
    id: "cpp",
    name: "C++",
    category: "Language",
    iconType: "abbr",
    abbr: "C++",
    color: "#00599c",
  },

  {
    id: "scikitlearn",
    name: "Scikit-learn",
    category: "Language",
    iconType: "react-icon",
    iconKey: "SiScikitlearn",
    color: "#f7931e",
  },
  {
    id: "jupyter",
    name: "Jupyter",
    category: "Tool",
    iconType: "react-icon",
    iconKey: "SiJupyter",
    color: "#f37626",
  },

  // ── Design & Frontend Extras ────────────────────────────────
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    iconType: "react-icon",
    iconKey: "SiFigma",
    color: "#f24e1e",
  },
  {
    id: "alpinejs",
    name: "Alpine.js",
    category: "Frontend",
    iconType: "react-icon",
    iconKey: "SiAlpinedotjs",
    color: "#8bc0d0",
  },
];
