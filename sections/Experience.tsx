import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/constants/experience";
import { FC } from "react";

const Experience: FC = () => {
  return (
    <section id="experience" className="py-[72px]">
      <div className="container">
        <h2 className="uppercase text-4xl sm:text-6xl text-center tracking-widest font-medium mb-12 bg-gradient-to-t from-black to-slate-600 bg-clip-text text-transparent">
          experience
        </h2>
        <div className="px-6 py-4 relative overflow-hidden rounded-lg space-y-4">
          <div className="absolute left-1/2 -top-[25%] -translate-x-1/2 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,172,109,0.8)_0%,rgba(226,189,161,0)_100%)] blur-3xl animate-pulse" />
          <div className="absolute right-0 translate-x-1/2 w-[200px] h-[400px] md:w-[400px] md:h-[600px] rounded-[100%] bg-[radial-gradient(farthest-side,rgba(161,205,226,0.7)_100%,rgba(161,205,226,0)_0%)] blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 translate-y-[25%] h-[400px] w-[400px] md:h[600px] md:w-[600px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(226,165,161,0.7)_0%,rgba(226,165,161,0)_100%)] blur-3xl animate-pulse" />
          <div className="absolute left-0 -translate-x-1/2 w-[200px] h-[400px] md:w-[400px] md:h-[600px] rounded-[100%] bg-[radial-gradient(farthest-side,rgba(255,221,50,0.703)_100%,rgba(255,221,50,0.235)_0%)] blur-3xl animate-pulse" />
          {experiences.map((exp, idx) => (
            <ExperienceCard {...exp} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
