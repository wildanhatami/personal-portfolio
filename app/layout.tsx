import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NowPlaying from "@/app/components/NowPlaying";
import PageTransition from "@/app/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Wildan Hatami — Portfolio",
  description:
    "Portfolio pribadi Muhammad Wildan Hatami. Computer Science Student & Web Developer dari Bogor, Indonesia.",
  keywords: [
    "Muhammad Wildan Hatami",
    "Wildan Hatami",
    "portfolio",
    "web developer",
    "computer science",
    "Next.js",
    "React",
    "frontend developer",
    "Bogor",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Wildan Hatami" }],
  creator: "Muhammad Wildan Hatami",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-wildanhatami.vercel.app",
    title: "Muhammad Wildan Hatami — Portfolio",
    description:
      "Portfolio pribadi Muhammad Wildan Hatami. Computer Science Student & Web Developer.",
    siteName: "Wildan Hatami Portfolio",
    images: [
      {
        url: "https://portfolio-wildanhatami.vercel.app/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Muhammad Wildan Hatami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Wildan Hatami — Portfolio",
    description:
      "Portfolio pribadi Muhammad Wildan Hatami. Computer Science Student & Web Developer.",
    images: ["https://portfolio-wildanhatami.vercel.app/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        <PageTransition>{children}</PageTransition>
        {/* Spotify Now Playing — floating widget, shown globally */}
        <NowPlaying />
      </body>
    </html>
  );
}

