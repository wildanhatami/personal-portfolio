"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { profile } from "@/app/data/profile";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function ProfileImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-glow-pulse"
        style={{
          background:
            "conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee)",
          padding: "3px",
          borderRadius: "50%",
          boxShadow:
            "0 0 40px rgba(34,211,238,0.35), 0 0 80px rgba(168,85,247,0.2)",
        }}
      />

      {/* Glass backdrop circle */}
      <div
        className="absolute inset-[3px] rounded-full"
        style={{
          background: "rgba(5,15,35,0.8)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Gradient ring */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: "280px",
          height: "280px",
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(168,85,247,0.15))",
          border: "3px solid transparent",
          backgroundClip: "padding-box",
        }}
      >
        {/* Conic gradient border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee)",
            padding: "3px",
            borderRadius: "50%",
          }}
        />

        {/* Inner content */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#05121f]">
          {!imgError ? (
            <Image
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              fill
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover object-top"
              onError={() => setImgError(true)}
              priority
            />
          ) : (
            /* Placeholder: initials "WH" */
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(168,85,247,0.15))",
              }}
            >
              <div className="text-center select-none">
                <div
                  className="text-5xl font-bold gradient-text"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  WH
                </div>
                <div className="text-xs text-[#8ca0bc] mt-1 tracking-widest">
                  PHOTO
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative orbiting dots */}
      <div
        className="absolute top-4 right-2 w-3 h-3 rounded-full animate-glow-pulse"
        style={{
          background: "#22d3ee",
          boxShadow: "0 0 8px #22d3ee",
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute bottom-6 left-2 w-2 h-2 rounded-full animate-glow-pulse"
        style={{
          background: "#a855f7",
          boxShadow: "0 0 8px #a855f7",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full animate-glow-pulse"
        style={{
          background: "#22d3ee",
          boxShadow: "0 0 6px #22d3ee",
          animationDelay: "1s",
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center section-padding pt-36 md:pt-40 pb-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 glass"
              style={{ border: "1px solid rgba(34,211,238,0.2)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
                style={{ background: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }}
              />
              <span className="text-[#8ca0bc]">
                {profile.location} · Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {profile.heroHeading.map((line, i) => {
                const words = line.split(" ");
                return (
                  <span key={i} className="block">
                    {words.map((word, wi) => {
                      const isHighlighted =
                        profile.heroHighlightWords.includes(word);
                      return (
                        <span
                          key={wi}
                          className={
                            isHighlighted ? "gradient-text" : "text-white"
                          }
                        >
                          {word}
                          {wi < words.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="text-[#8ca0bc] text-base lg:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
            >
              {profile.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              {/* Primary button */}
              <button
                onClick={() => handleScrollTo("work")}
                className="group relative px-7 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, #0891b2, #a855f7)",
                  boxShadow:
                    "0 0 20px rgba(34,211,238,0.2), 0 0 40px rgba(168,85,247,0.1)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #22d3ee, #a855f7)",
                  }}
                />
              </button>

              {/* Secondary button */}
              <button
                onClick={() => handleScrollTo("contact")}
                className="group px-7 py-3 rounded-xl font-semibold text-sm text-[#e2eaf4] transition-all duration-300 hover:scale-[1.02] hover:text-white"
                style={{
                  background: "rgba(34,211,238,0.05)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  boxShadow: "0 0 0 0 rgba(34,211,238,0)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 16px rgba(34,211,238,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(34,211,238,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 0 0 rgba(34,211,238,0)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(34,211,238,0.25)";
                }}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Get In Touch
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 animate-float"
          >
            <div
              className="relative"
              style={{ width: "300px", height: "300px" }}
            >
              <ProfileImage />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
