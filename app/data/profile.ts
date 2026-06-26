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



  // ── Contact ────────────────────────────────────────────────
  /** Primary contact email */
  email: "wildanhatami0305@gmail.com",

  /** WhatsApp / Phone number for display */
  phone: "+62 857-1831-4942",

  web3FormsAccessKey: "004233fc-3964-40f6-9414-b3002448a191",

  // ── Social Media ───────────────────────────────────────────
  /** Replace placeholder URLs with your actual profile URLs */
  social: {
    github: "https://github.com/wildanhatami",
    linkedin: "https://www.linkedin.com/in/mwildanhatami",
    instagram: "https://www.instagram.com/wildanhtmi",
    whatsapp: "https://wa.me/6285718314942",
    facebook: "https://www.facebook.com/share/1Dtm25nUtf/",
    threads: "https://www.threads.com/@wildanhtmi",
    x: "https://x.com/HatamiWildan",
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
    "I am a Computer Science student at IPB University with a strong interest in Web Development, Software Engineering, and UI/UX design. I enjoy creating modern web applications that combine clean code, robust logic, and user-centric designs. Throughout my academic journey, I have enjoyed exploring how technology can be leveraged to solve real-world problems and build digital products that are intuitive and enjoyable for users.",

  /** Second paragraph of the About section */
  aboutParagraph2:
    "I am actively expanding my experience through personal and academic projects, collaborating with teams, and exploring emerging technologies. Currently, I am focused on mastering full-stack web development, learning new programming languages, and improving system design concepts. I am always open to exploring new frameworks and methodologies to grow as a software engineer.",

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
