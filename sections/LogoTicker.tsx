"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import JavaScriptLogo from "@/assets/javascript-png.png";
import TypeScriptLogo from "@/assets/typescript-png.png";
import NodeJsLogo from "@/assets/nodejs-png.png";
import MongoDBLogo from "@/assets/mongodb-png.png";
import PostmanLogo from "@/assets/postman-png.png";
import ReactLogo from "@/assets/react-png.png";
import PostgreSQLLogo from "@/assets/postgres-png.png";
import NextJSLogo from "@/assets/nextjs-png.png";
import PrismaLogo from "@/assets/prisma-png.png";
import TailwindLogo from "@/assets/tailwind-png.png";
import ExpressLogo from "@/assets/express-png.png";
import DockerLogo from "@/assets/docker-png.png";
import Image from "next/image";

const LogoTicker: FC = () => {
  return (
    <section className="py-8 md:py-12 bg-stone-50">
      <p className="font-semibold text-neutral-400 text-center mb-10">
        Can be trusted with these technologies
      </p>
      <div className="container">
        <div className="flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex items-center gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={JavaScriptLogo}
              alt="javascript-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={TypeScriptLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={NodeJsLogo}
              alt="type-logo"
              width={120}
              className="w-24"
            />
            <Image
              src={MongoDBLogo}
              alt="type-logo"
              width={120}
              className="w-24"
            />
            <Image
              src={PostmanLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={ReactLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={PostgreSQLLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={NextJSLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={PrismaLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={TailwindLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={ExpressLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={DockerLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={JavaScriptLogo}
              alt="javascript-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={TypeScriptLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={NodeJsLogo}
              alt="type-logo"
              width={120}
              className="w-24"
            />
            <Image
              src={MongoDBLogo}
              alt="type-logo"
              width={120}
              className="w-24"
            />
            <Image
              src={PostmanLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={ReactLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={PostgreSQLLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={NextJSLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={PrismaLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={TailwindLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={ExpressLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
            <Image
              src={DockerLogo}
              alt="type-logo"
              width={70}
              className="w-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
