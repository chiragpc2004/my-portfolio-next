import Navbar from "@/components/Navbar";
import Cover from "@/sections/Cover";
import FieldLog from "@/sections/FieldLog";
import Projects from "@/sections/Projects";
import ProductWork from "@/sections/ProductWork";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
        <FieldLog />
        <Projects />
        <ProductWork />
        <Contact />
      </main>
    </>
  );
}
