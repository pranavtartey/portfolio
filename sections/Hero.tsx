"use client";
import HeroParticles from "@/components/HeroParticles";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <section className="relative ">
        <HeroParticles id="particles" className="absolute -z-10 h-full w-full" />
        <p className=""></p>
      </section>
    </>
  );
};

export default Hero;
