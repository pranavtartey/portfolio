import AppTag from "@/sections/AppTag";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <AppTag />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Experience />
    </>
  );
}
