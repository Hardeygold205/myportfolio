import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Testimonies from "@/components/Testimonies";

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
