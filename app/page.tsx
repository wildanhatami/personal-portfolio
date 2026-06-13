import BackgroundDecoration from "@/app/components/BackgroundDecoration";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import WorkSection from "@/app/components/WorkSection";
import AboutSection from "@/app/components/AboutSectionServer";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed animated background */}
      <BackgroundDecoration />

      {/* Sticky top navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero + Featured Projects (combined visual flow) */}
        <HeroSection />
        <FeaturedProjects />

        {/* Work section */}
        <WorkSection />

        {/* About, Skills, Timeline */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
