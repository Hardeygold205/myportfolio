import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Education />
      <Project />
      <Experience />
      <Skills />
    </div>
  );
}
