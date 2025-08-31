import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/HeroSection";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Testimonies from "@/components/sections/Testimonies";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Education />
      <Project />
      <Experience />
      <Testimonies />
      <Skills />
    </div>
  );
}
