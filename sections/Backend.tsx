"use client";
import { FC, useRef } from "react";
import SmallImage from "@/assets/postman-ss-for-smaller-portfolio.png";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { backendProjects } from "@/constants/backend";
import BackendCard from "@/components/BackendCard";

const Backend: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-14">
          <h2 className="uppercase text-4xl sm:text-6xl text-center tracking-widest font-medium mb-4 bg-gradient-to-t from-black to-slate-600 bg-clip-text text-transparent">
            backend
          </h2>
          <p className="text-sm sm:text-xl tracking-wider text-neutral-600 text-center font-medium">
            This Postman image has something to say
          </p>
        </div>
        <div className="">
          <motion.div
            ref={imageRef}
            style={{
              opacity,
              rotateX,
              transformPerspective: "800px",
            }}
            className=""
          >
            <Image
              src={SmallImage}
              alt="postman-image"
              className="mx-auto rounded-xl [mask-image:linear-gradient(to_bottom,black_90%,transparent)] border-2 border-yellow-400 shadow-yellow-300  lg:w-[900px]"
            />
          </motion.div>
          <div className="mt-10">
            <div className="lg:flex gap-4 max-lg:space-y-4">
              {backendProjects.map((project, idx) => (
                <BackendCard {...project} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
