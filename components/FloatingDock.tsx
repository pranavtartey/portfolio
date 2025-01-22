"use client";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
  IconHome,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { FC, useRef, useState } from "react";

type Link = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const FloatingDock: FC = () => {
  return (
    <div>
      <FloatingDockCore />
    </div>
  );
};

const FloatingDockCore = () => {
  const links: Link[] = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-900" />,
      href: "#hero",
    },
    {
      title: "Resume",
      icon: <IconFileCv className="h-full w-full text-neutral-900" />,
      href: "https://drive.google.com/file/d/1rZ5gAj7GAmbLxlfvcWUI2PEpsiqK1F-8/view?usp=sharing",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-900" />,
      href: "https://x.com/pranav_tartey",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-900" />,
      href: "https://www.linkedin.com/in/pranavtartey/",
    },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full text-neutral-900" />,
      href: "https://github.com/pranavtartey",
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed h-16 bottom-10 inset-x-0 mx-auto flex items-center justify-center gap-4 bg-neutral-100/30 backdrop-blur-md w-fit px-4 rounded-lg z-50"
    >
      {links.map((el) => (
        <IconContainer key={el.title} mouseX={mouseX} el={el} />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  el,
  mouseX,
}: {
  el: Link;
  mouseX: MotionValue<number>;
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link
      target="_blank"
      href={el.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className="flex items-center justify-center gap-4 bg-neutral-300 rounded-full relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                x: "-50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute text-xs left-1/2 -translate-x-1/2 -top-8 py-0.5 px-2 whitespace-pre bg-neutral-100 rounded-md text-neutral-800"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className=""
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FloatingDock;
