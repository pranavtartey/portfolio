import { FC } from "react";
import FrontendCard from "../components/FrontendCard";
import { frontendProjects } from "@/constants/frontend";

const Frontend: FC = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <h2 className="uppercase text-center text-4xl tracking-widest font-medium mb-14">
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
