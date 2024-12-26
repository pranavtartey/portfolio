"use client";
import HeroParticles from "@/components/HeroParticles";
import Tag from "@/components/Tag";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Hero: FC = () => {
  return (
    <>
      <section className="relative py-[72px]">
        <HeroParticles
          id="particles"
          className="absolute top-0 -z-10 h-full w-full"
        />
        <div className="container flex flex-col justify-center ">
          <Tag variant="base">✨Full-Stack💻</Tag>
          <div className="flex items-center justify-center">
            <div className="relative">
              <h1 className="font-sacramento text-6xl text-center font-bold leading-none sm:text-7xl">
                Pranav Tartey
              </h1>
              <h3 className="text-end font-semibold text-4xl pr-8 uppercase bg-[linear-gradient(to_right,#f542fe,#f54aae,#f9b93a,#79f54c,#1ad1fa,#f241fb,#fc59b8,#f6bb47,#74fe42,#15d0fa)] bg-clip-text text-transparent tracking-wide leading-none">
                building
              </h3>
            </div>
          </div>
          <p className="text-xl text-center mt-8 font-medium text-zinc-700 leading-relaxed sm:max-w-lg lg:max-w-xl mx-auto">
            Currently pursuing bachelor's degree in Science and Engineering with
            a cgpa of 7.71. Actively looking for freshers & intern opportunities
            in MERN Stack.
          </p>
          <div className="space-x-4 mt-6 flex items-center justify-center">
            <button className="border border-black py-2 px-6 rounded-full text-lg bg-black text-white hover:tracking-wide hover:scale-105 transition">
              Hire Me
            </button>
            <button className="border border-black/60 py-2 px-6 rounded-full backdrop-blur black hover:tracking-wide text-lg hover:scale-105 transition">
              View my work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
