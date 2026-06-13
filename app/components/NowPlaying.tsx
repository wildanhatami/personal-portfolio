"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NowPlayingData } from "@/app/lib/spotify";

function MusicBars() {
  return (
    <div className="flex items-end gap-[2px] h-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full"
          style={{
            background: "#1DB954",
            animation: `musicBar${i} 0.8s ease-in-out infinite`,
            animationDelay: `${(i - 1) * 0.15}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes musicBar1 {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
        @keyframes musicBar2 {
          0%, 100% { height: 8px; }
          50% { height: 4px; }
        }
        @keyframes musicBar3 {
          0%, 100% { height: 6px; }
          50% { height: 12px; }
        }
      `}</style>
    </div>
  );
}

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch("/api/spotify");
      if (res.ok) {
        const json: NowPlayingData = await res.json();
        setData(json);
      }
    } catch {
      // fail silently
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30_000);
    return () => clearInterval(interval);
  }, []);

  // Don't render if not playing
  if (!data?.isPlaying || !data.title) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-[260px]"
        >
          <a
            href={data.songUrl || "https://spotify.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-300"
            style={{
              background: "rgba(5,15,35,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(29,185,84,0.25)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(29,185,84,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(29,185,84,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(29,185,84,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
            }}
          >
            {/* Album art */}
            {data.albumImageUrl ? (
              <div className="relative w-9 h-9 shrink-0 rounded-md overflow-hidden">
                <Image
                  src={data.albumImageUrl}
                  alt="Album art"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="w-9 h-9 shrink-0 rounded-md flex items-center justify-center"
                style={{ background: "rgba(29,185,84,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
            )}

            {/* Song info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <MusicBars />
                <span className="text-[9px] text-[#1DB954] font-semibold tracking-wider uppercase">
                  Now Playing
                </span>
              </div>
              <p className="text-white text-xs font-semibold truncate leading-tight">
                {data.title}
              </p>
              <p className="text-[#8ca0bc] text-[10px] truncate">
                {data.artist}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="shrink-0 text-[#4a5c74] hover:text-white transition-colors ml-1"
              aria-label="Dismiss"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
