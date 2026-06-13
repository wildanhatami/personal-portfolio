/**
 * ============================================================
 * PROJECTS DATA — Muhammad Wildan Hatami Portfolio
 * ============================================================
 * Edit this file to add, remove, or update projects.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the existing project objects below.
 * 2. Paste it at the end of the `projects` array.
 * 3. Fill in all the fields.
 * 4. Place the thumbnail in: public/images/projects/
 * 5. Set `featured: true` to show it in the Hero section.
 *
 * CATEGORIES (for filter tabs):
 * - "Web"         → Web development projects
 * - "Data & AI"   → Machine learning, data analysis
 * - "Programming" → Algorithms, systems, CLI tools
 * - "Tools"       → Configurations, utilities, setups
 * ============================================================
 */

export type ProjectCategory = "Web" | "Data & AI" | "Programming" | "Tools";

export interface Project {
  id: string;
  name: string;
  shortName?: string;
  category: ProjectCategory;
  description: string;
  /** List of technologies used. Replace placeholders with actual tech stack. */
  tech: string[];
  /** GitHub repository URL. Leave empty string "" if not available. */
  githubUrl: string;
  /** Live demo URL. Leave empty string "" if not available. */
  liveUrl: string;
  /**
   * Path to thumbnail image.
   * Place thumbnail at: public/images/projects/<filename>
   * Recommended: 1280×720px, 16:9 ratio, JPG/PNG/WebP
   */
  thumbnail: string;
  /** Set to true to show in the Featured Projects section on homepage */
  featured: boolean;
  /** Optional label shown when no URLs are available (e.g. "Private Project") */
  statusLabel?: string;
}

export const projects: Project[] = [
  // ── PROJECT 1 ──────────────────────────────────────────────
  {
    id: "desa-digital",
    name: "KMS Desa Digital Indonesia",
    shortName: "Desa Digital Indonesia",
    category: "Web",
    description:
      "A Knowledge Management System platform to support the management of knowledge and information related to digital villages in Indonesia.",
    tech: ["Add technologies used"],
    githubUrl: "", // Not available on personal GitHub yet
    liveUrl: "",   // No live demo yet
    thumbnail: "/images/projects/desa-digital.jpg",
    featured: true,
    statusLabel: "Private Project",
  },

  // ── PROJECT 2 ──────────────────────────────────────────────
  {
    id: "logicore-help-center",
    name: "IPB Logicore Help Center",
    category: "Web",
    description:
      "A help center website designed to help users find information and guidance on using services in a more structured way.",
    tech: ["React", "Tailwind CSS", "Vercel"], // Add technologies used
    githubUrl: "https://github.com/Cokgdsatria/IPB_Logicore_Help_Center",
    liveUrl: "https://ipb-logicore-help-center.vercel.app",
    thumbnail: "/images/projects/logicore-help-center.jpg",
    featured: true,
  },

  // ── PROJECT 3 ──────────────────────────────────────────────
  {
    id: "crop-harvest-predictor",
    name: "Crop Harvest Predictor",
    category: "Data & AI",
    description:
      "A crop harvest prediction project that determines harvest feasibility based on agronomic features using a machine learning approach.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning"],
    githubUrl: "https://github.com/wildanhatami/crop-harvest-predictor",
    liveUrl: "",
    thumbnail: "/images/projects/crop-harvest-predictor.jpg",
    featured: true,
  },

  // ── PROJECT 4 ──────────────────────────────────────────────
  {
    id: "baserow-setup",
    name: "Baserow Setup",
    category: "Tools",
    description:
      "Configuration and exploration of Baserow to support more structured data management.",
    tech: ["Add technologies used"],
    githubUrl: "https://github.com/wildanhatami/baserow-setup",
    liveUrl: "",
    thumbnail: "/images/projects/baserow-setup.jpg",
    featured: false,
  },

  // ── PROJECT 5 ──────────────────────────────────────────────
  {
    id: "course-registration-system",
    name: "Course Registration System",
    category: "Programming",
    description:
      "A course registration system implementing programming concepts and academic data management.",
    tech: ["C++"],
    githubUrl: "https://github.com/wildanhatami/course-registration-system",
    liveUrl: "",
    thumbnail: "/images/projects/course-registration-system.jpg",
    featured: false,
  },
];

/** Helper: get only featured projects */
export const featuredProjects = projects.filter((p) => p.featured);

/** Helper: get projects by category */
export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);
