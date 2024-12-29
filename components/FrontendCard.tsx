"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import GithubImage from "@/assets/github-image.png";
import WindowImage from "@/assets/bi_window.png";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type FrontendCardProps = {
  title: string;
  description: string;
  live: string;
  github: string;
};

const FrontendCard: FC<FrontendCardProps> = ({
  title,
  description,
  github,
  live,
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(250px 250px at ${offSetX}px ${offSetY}px, black,transparent)`;

  useEffect(() => {
    const updateBorderValue = (event: MouseEvent) => {
      const border = borderRef.current?.getBoundingClientRect();
      offSetX.set(event.x - border!.x);
      offSetY.set(event.y - border!.y);
    };

    window.addEventListener("mousemove", updateBorderValue);

    return () => {
      window.removeEventListener("mousemove", updateBorderValue);
    };
  });

  return (
    <div className="relative p-8 space-y-6 max-w-xs border border-neutral-400 rounded-2xl mx-auto flex-1 hover:shadow-lg transition overflow-hidden">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 -z-10 border-2 border-purple-800 rounded-2xl"
        style={{
          maskImage,
        }}
      ></motion.div>
      <div className="space-y-2">
        <h3 className="text-lg text-center font-semibold tracking-wide">
          {title}
        </h3>
        <p className="tracking-wide text-center text-neutral-600 ">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <a href={github} target="_blank">
          <Image
            src={GithubImage}
            alt="github-image"
            height={20}
            width={30}
            className=""
          />
        </a>
        <a href={live} target="_blank">
          <Image src={WindowImage} alt="window-image" height={20} width={25} />
        </a>
      </div>
      
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      
    </div>
  );
};

export default FrontendCard;
