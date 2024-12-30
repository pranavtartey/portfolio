import AppTag from "@/sections/AppTag";
import Backend from "@/sections/Backend";
import Experience from "@/sections/Experience";
import FooterTag from "@/sections/FooterTag";
import Frontend from "@/sections/Frontend";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import SignMeUp from "@/sections/SignMeUp";

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
      <Backend />
      <SignMeUp />
      <FooterTag />
    </>
  );
}
