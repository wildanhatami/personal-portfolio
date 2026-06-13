# Muhammad Wildan Hatami — Portfolio Website

Live Demo: [portfolio-wildanhatami.vercel.app](https://portfolio-wildanhatami.vercel.app)

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Dark futuristic cyber-style design with glassmorphism effects.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons

---

## ✏️ How to Edit Your Data

All personal data is stored in separate files inside `app/data/`. You do **not** need to touch any component files to update your information.

### Edit Profile Info → `app/data/profile.ts`
- Full name, display name, subtitle, location, email
- Social media URLs (GitHub, LinkedIn, Instagram, WhatsApp, Facebook, Threads, X)
- Hero heading and description
- About section paragraphs

### Edit Projects → `app/data/projects.ts`
- Add, remove, or update any project
- Set `featured: true` to show a project in the Hero section
- Leave `githubUrl: ""` or `liveUrl: ""` blank if not available (no broken buttons)

### Edit Skills → `app/data/skills.ts`
- Add or remove skills from the grid
- Each skill has a `color` for its hover glow effect

### Edit Timeline → `app/data/timeline.ts`
- Add or update timeline milestones
- Available icons: `GraduationCap`, `BookOpen`, `Code2`, `Rocket`, `Briefcase`, `Star`

---

## 🖼️ How to Replace Images

### Profile Photo

1. Prepare your photo:
   - **Format**: JPG, PNG, or WebP (recommended: JPG)
   - **Size**: Minimum **800 × 800 px**, 1:1 ratio (square)
   - **Tips**: Use a photo with a clean background for best results

2. Place the file here:
   ```
   public/images/profile.jpg
   ```

3. The website will automatically display it. No code changes needed.

> **Note**: If the file is missing, a placeholder with your initials "WH" will appear automatically.

---

### Project Thumbnails

1. Prepare your thumbnails:
   - **Format**: JPG, PNG, or WebP (recommended: JPG)
   - **Size**: Minimum **1280 × 720 px**, 16:9 ratio (landscape)

2. Place each file in the correct location:

   | Project | File Path |
   |---------|-----------|
   | KMS Desa Digital Indonesia | `public/images/projects/desa-digital.jpg` |
   | IPB Logicore Help Center | `public/images/projects/logicore-help-center.jpg` |
   | Crop Harvest Predictor | `public/images/projects/crop-harvest-predictor.jpg` |
   | Baserow Setup | `public/images/projects/baserow-setup.jpg` |
   | Course Registration System | `public/images/projects/course-registration-system.jpg` |

3. The thumbnail will automatically appear. If missing, a gradient placeholder is shown.

---

## ➕ How to Add a New Project

1. Open `app/data/projects.ts`
2. Copy one of the existing project objects
3. Paste it at the end of the `projects` array
4. Fill in all the fields:
   ```ts
   {
     id: "unique-project-id",           // e.g. "my-new-project"
     name: "My New Project",
     category: "Web",                   // "Web" | "Data & AI" | "Programming" | "Tools"
     description: "Short description.",
     tech: ["React", "Node.js"],
     githubUrl: "https://github.com/wildanhatami/my-repo",
     liveUrl: "",                        // Leave empty if no live demo
     thumbnail: "/images/projects/my-new-project.jpg",
     featured: false,                    // Set to true for Hero section
   }
   ```
5. Place the thumbnail in `public/images/projects/`

---

## 🔗 How to Add GitHub URL or Live Demo URL to a Project

1. Open `app/data/projects.ts`
2. Find the project you want to update
3. Fill in the `githubUrl` and/or `liveUrl` fields:
   ```ts
   githubUrl: "https://github.com/wildanhatami/your-repo",
   liveUrl: "https://your-demo.vercel.app",
   ```
4. The buttons will appear automatically on the project card.

> If both are empty, a "Private Project" label will be shown instead.

---

## 🔗 How to Update Social Media Links

Open `app/data/profile.ts` and update the `social` object:
```ts
social: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  instagram: "https://instagram.com/your-handle",
  whatsapp: "https://wa.me/your-number",
  facebook: "https://facebook.com/your-profile",
  threads: "https://threads.net/your-profile",
  x: "https://x.com/your-profile",
},
```

---

## 🎯 How to Update Skills

Open `app/data/skills.ts`. Each skill has:
```ts
{
  id: "skill-id",
  name: "Skill Name",
  category: "Frontend",       // "Frontend" | "Backend" | "Language" | "Tool" | "Design"
  iconType: "react-icon",     // "react-icon" | "abbr"
  iconKey: "SiReact",         // React Icons key from react-icons/si
  color: "#61dafb",           // Hex color for hover glow
}
```

To add a skill with a text abbreviation (no icon):
```ts
{
  id: "my-skill",
  name: "My Skill",
  category: "Language",
  iconType: "abbr",
  abbr: "MS",                 // Text shown in the card
  color: "#ffffff",
}
```

---

## 📬 Contact Form Integration

The contact form currently uses `mailto:` as a fallback. To integrate a real email service:

### Option 1: EmailJS (No backend needed)
```bash
npm install @emailjs/browser
```
Update `app/components/ContactForm.tsx` and follow the integration comment inside the file.

### Option 2: API Route (with Resend or Nodemailer)
Create `app/api/contact/route.ts` and update the fetch call in `ContactForm.tsx`.

---

## 🌐 Deploy to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will automatically detect Next.js and configure everything
4. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`

### Custom Domain
In your Vercel project settings → Domains → Add your custom domain.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          ← All UI components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── WorkSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsGrid.tsx
│   │   ├── Timeline.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── Footer.tsx
│   │   └── BackgroundDecoration.tsx
│   ├── data/                ← Edit these files to update content
│   │   ├── profile.ts       ← Personal info, bio, social links
│   │   ├── projects.ts      ← All projects
│   │   ├── skills.ts        ← Skills grid
│   │   └── timeline.ts      ← Timeline milestones
│   ├── globals.css          ← Design tokens, utilities
│   ├── layout.tsx           ← Root layout + SEO metadata
│   └── page.tsx             ← Main page (assembles components)
└── public/
    └── images/
        ├── profile.jpg      ← Upload your photo here
        └── projects/        ← Upload project thumbnails here
```

---

## 📝 Notes

- The website works perfectly even if image files are not uploaded yet — placeholders are shown automatically
- All sections support smooth scroll navigation via the navbar
- The navbar highlights the currently visible section automatically
- Responsive design: works on mobile, tablet, and desktop
- Supports `prefers-reduced-motion` for users who prefer no animations
