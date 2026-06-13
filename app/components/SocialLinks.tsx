"use client";

import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaThreads, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/app/data/profile";

interface SocialLinksProps {
  size?: "sm" | "md";
  variant?: "default" | "pill";
}

const socialLinks = [
  {
    key: "github",
    href: profile.social.github,
    icon: FaGithub,
    label: "GitHub",
    color: "#ffffff",
  },
  {
    key: "linkedin",
    href: profile.social.linkedin,
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    key: "instagram",
    href: profile.social.instagram,
    icon: FaInstagram,
    label: "Instagram",
    color: "#e1306c",
  },
  {
    key: "whatsapp",
    href: profile.social.whatsapp,
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "#25d366",
  },
  {
    key: "facebook",
    href: profile.social.facebook,
    icon: FaFacebookF,
    label: "Facebook",
    color: "#1877f2",
  },
  {
    key: "threads",
    href: profile.social.threads,
    icon: FaThreads,
    label: "Threads",
    color: "#ffffff",
  },
  {
    key: "x",
    href: profile.social.x,
    icon: FaXTwitter,
    label: "X (Twitter)",
    color: "#ffffff",
  },
];

export default function SocialLinks({
  size = "md",
  variant = "default",
}: SocialLinksProps) {
  const iconSize = size === "sm" ? 14 : 18;
  const padding = size === "sm" ? "p-1.5" : "p-2.5";

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ key, href, icon: Icon, label, color }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${padding} rounded-xl text-[#8ca0bc] hover:text-white transition-all duration-200 hover:scale-110`}
          style={{
            background:
              variant === "pill"
                ? "rgba(255,255,255,0.06)"
                : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = `${color}40`;
            el.style.boxShadow = `0 0 10px ${color}30`;
            el.style.color = color;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "rgba(255,255,255,0.08)";
            el.style.boxShadow = "none";
            el.style.color = "#8ca0bc";
          }}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
