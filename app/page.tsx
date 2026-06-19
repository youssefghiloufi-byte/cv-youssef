import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
