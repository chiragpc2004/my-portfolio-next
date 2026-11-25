import Navbar from "@/components/Navbar";
import Cover from "@/sections/Cover";
import FieldLog from "@/sections/FieldLog";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
        <FieldLog />
        {/* Phase 2 replaces these with the Experiments write-ups. */}
        <Projects />
        <Contact />
      </main>
    </>
  );
}
