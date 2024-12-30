import { FC } from "react";
import FrontendCard from "../components/FrontendCard";
import { frontendProjects } from "@/constants/frontend";

const Frontend: FC = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12 space-y-4">
          <h2 className="uppercase text-4xl sm:text-6xl text-center tracking-widest font-medium  bg-gradient-to-t from-black to-slate-600 bg-clip-text text-transparent">
            frontend
          </h2>
          <p className="text-sm sm:text-xl tracking-wider max-w-lg mx-auto text-neutral-600 text-center font-medium">
            These projects uses TypeScript, NextJS, TailwindCSS, Framer-Motion
          </p>
        </div>
        <div className="md:flex gap-4 max-md:space-y-4">
          {frontendProjects.map((project, idx) => (
            <FrontendCard {...project} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frontend;
