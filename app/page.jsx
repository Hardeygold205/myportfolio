import Education from "@/components/sections/Education";
import HeroSection from "@/components/sections/HeroSection";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

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
