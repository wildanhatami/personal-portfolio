/**
 * ============================================================
 * PROFILE DATA — Muhammad Wildan Hatami Portfolio
 * ============================================================
 * Edit this file to update your personal information.
 * All changes here will reflect across the entire website.
 * ============================================================
 */

export const profile = {
  // ── Personal Info ──────────────────────────────────────────
  /** Full name, displayed in Footer and About section */
  fullName: "Muhammad Wildan Hatami",

  /** Short display name for the Navbar logo */
  displayName: "WILDAN HATAMI",

  /** Subtitle shown below your name in the Hero section */
  subtitle: "Computer Science Student & Web Developer",

  /** Your current city and country */
  location: "Bogor, Indonesia",

  // ── Contact ────────────────────────────────────────────────
  /** Primary contact email */
  email: "wildanhatami0305@gmail.com",

  // ── Social Media ───────────────────────────────────────────
  /** Replace placeholder URLs with your actual profile URLs */
  social: {
    github: "https://github.com/wildanhatami",
    linkedin: "https://linkedin.com/in/wildanhatami", // Replace with your actual LinkedIn URL
    instagram: "https://instagram.com/wildanhatami",  // Replace with your actual Instagram URL
  },

  // ── Hero Section ───────────────────────────────────────────
  /** Main heading in the Hero section (supports line breaks via array) */
  heroHeading: ["BUILDING DIGITAL", "EXPERIENCES THAT MATTER"],

  /** Words in the heading that receive neon gradient styling */
  heroHighlightWords: ["DIGITAL", "MATTER"],

  /** Description paragraph shown below the heading */
  heroDescription:
    "I'm a Computer Science student passionate about building modern, responsive, and user-friendly websites. I enjoy creating digital solutions that help solve real-world problems.",

  // ── About Section ──────────────────────────────────────────
  /** First paragraph of the About section */
  aboutParagraph1:
    "I'm a Computer Science student with a passion for web development, UI design, and using technology to solve real-world problems. I enjoy learning new technologies, collaborating on team projects, and building digital products that are intuitive and enjoyable to use.",

  /** Second paragraph of the About section */
  aboutParagraph2:
    "I'm currently expanding my experience through academic projects and web development. I'm eager to keep growing my skills in web development, software engineering, and data exploration.",

  // ── Work Section ───────────────────────────────────────────
  workDescription:
    "A collection of projects I've worked on in web development, programming, data, and technology exploration.",

  // ── Contact Section ────────────────────────────────────────
  contactDescription:
    "Have an idea, a collaboration opportunity, or just want to talk about a project? Feel free to reach out.",

  // ── Profile Image ──────────────────────────────────────────
  /**
   * Path to your profile photo.
   * Place your photo at: public/images/profile.jpg
   * Recommended: 800×800px or larger, 1:1 ratio, JPG/PNG/WebP
   */
  profileImage: "/images/profile.jpg",
  profileImageAlt: "Muhammad Wildan Hatami",
};

export type Profile = typeof profile;
