import Education from "@/sections/Education";
import HeroSection from "@/sections/HeroSection";
import Project from "@/sections/Project";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Education />
      <Project />
      <Skills />
    </div>
  );
}
