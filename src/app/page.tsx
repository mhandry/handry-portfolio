import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Articles />
      <Contact />
    </>
  );
}
