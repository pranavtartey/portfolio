"use client";
import Button from "@/components/Button";
import HeroParticles from "@/components/HeroParticles";

import Tag from "@/components/Tag";
import WordRotate from "@/components/ui/word-rotate";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Hero: FC = () => {
  return (
    <>
      <section id="hero" className="relative py-[72px]">
        <HeroParticles className="absolute top-0 -z-10 h-full w-full" />
        <div className="container flex flex-col justify-center ">
          <div className="flex items-center justify-center mb-4">
            <Tag variant="base">✨Full-Stack💻</Tag>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <h1 className="font-sacramento text-6xl text-center font-bold leading-none sm:text-7xl">
                Pranav Tartey
              </h1>

              <WordRotate
                className="text-end font-semibold text-2xl sm:text-4xl pr-8 uppercase bg-[linear-gradient(to_right,#f542fe,#f54aae,#f9b93a,#79f54c,#1ad1fa,#f241fb,#fc59b8,#f6bb47,#74fe42,#15d0fa)] bg-clip-text text-transparent tracking-wide leading-none"
                words={["designing", "building", "optimizing"]}
              />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-center mt-8 font-medium text-neutral-700 leading-relaxed max-w-sm sm:max-w-lg lg:max-w-xl mx-auto">
            Comfortable with complex monorepo and microservices architectures,
            crafting clean UIs, and writing optimized, reusable components in
            TypeScript for Next.js and MERN Stack projects.
          </p>
          <div className="space-x-4 mt-6 flex items-center justify-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Z0k9Lkx8yOLw2TQ4uFR0XlvY2gen6iqQ/view?usp=drive_link"
            >
              <Button variant="primary">Resume</Button>
            </a>
            <a href="#experience">
              <Button variant="secondary">View my work</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
