"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import GitHubImage from "@/assets/github-image.png";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
} from "framer-motion";

type BackendCardProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
};

const BackendCard: FC<BackendCardProps> = ({
  title,
  description,
  tech,
  github,
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
    <div className="relative border border-neutral-400 max-w-sm mx-auto rounded-2xl p-8 overflow-hidden hover:shadow-xl transition flex-1">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 -z-10 border-2 border-purple-800 rounded-2xl"
        style={{
          maskImage,
        }}
      ></motion.div>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
          <div className="w-fit">
            <a href={github} target="_blank">
              <Image
                src={GitHubImage}
                alt="github-icon"
                height={20}
                width={30}
              />
            </a>
          </div>
        </div>
        <p className="tracking-wide text-neutral-600">{description}</p>
      </div>
      <p className="font-medium mb-3">{tech}</p>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className=""></div>
    </div>
  );
};

export default BackendCard;
