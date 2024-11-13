import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Project />
      <Skills />
    </div>
  );
}
