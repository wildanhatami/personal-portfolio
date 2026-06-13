/**
 * ============================================================
 * TIMELINE DATA — Muhammad Wildan Hatami Portfolio
 * ============================================================
 * Edit this file to update your timeline entries.
 *
 * HOW TO ADD A TIMELINE ENTRY:
 * 1. Add a new object to the `timelineEntries` array.
 * 2. Entries are displayed in chronological order (left to right on desktop).
 * ============================================================
 */

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  /** Optional icon name from lucide-react */
  icon: "GraduationCap" | "BookOpen" | "Code2" | "Rocket" | "Briefcase" | "Star";
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "t1",
    year: "2023",
    title: "The Beginning",
    description: "Started my journey as a Computer Science student",
    icon: "GraduationCap",
  },
  {
    id: "t2",
    year: "2024",
    title: "Learning & Growing",
    description: "Mastering programming fundamentals and software development basics",
    icon: "BookOpen",
  },
  {
    id: "t3",
    year: "2025",
    title: "Project Exploration",
    description: "Working on various academic projects and exploring new technologies",
    icon: "Code2",
  },
  {
    id: "t4",
    year: "2026",
    title: "Web & Data",
    description: "Building web and data projects, including this personal portfolio",
    icon: "Rocket",
  },
];
