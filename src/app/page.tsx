import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import FeaturedProjects from "@/components/featured-projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
