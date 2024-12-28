import AppTag from "@/sections/AppTag";
import Experience from "@/sections/Experience";
import Frontend from "@/sections/Frontend";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <AppTag />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Experience />
      <Projects />
      <Frontend />
    </>
  );
}
