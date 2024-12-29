import { FC } from "react";
import FrontendCard from "../components/FrontendCard";
import { frontendProjects } from "@/constants/frontend";

const Frontend: FC = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <h2 className="uppercase text-4xl sm:text-6xl text-center tracking-widest font-medium mb-12 bg-gradient-to-t from-black to-slate-600 bg-clip-text text-transparent">
          frontend
        </h2>
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
