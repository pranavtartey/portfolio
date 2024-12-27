"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import JavaScriptLogo from "@/assets/akar-icons_javascript-fill.svg";
import TypeScriptLogo from "@/assets/akar-icons_typescript-fill.svg";
import NodeJsLogo from "@/assets/logos_nodejs.svg";
import MongoDBLogo from "@/assets/logos_mongodb.svg";
import PostmanLogo from "@/assets/devicon-plain_postman.svg";
import ReactLogo from "@/assets/devicon_react-wordmark.svg";
import PostgreSQLLogo from "@/assets/devicon-plain_postgresql-wordmark.svg";
import NextJSLogo from "@/assets/logos_nextjs.svg";
import PrismaLogo from "@/assets/file-icons_prisma.svg";
import TailwindLogo from "@/assets/vscode-icons_file-type-tailwind.svg";
import ExpressLogo from "@/assets/simple-icons_express.svg";
import DockerLogo from "@/assets/devicon-plain_docker-wordmark.svg";

const LogoTicker: FC = () => {
  return (
    <section className="py-8 md:py-12 bg-stone-50">
      <p className="font-semibold text-neutral-400 text-center mb-10">Can be trusted with these technologies</p>
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
            <JavaScriptLogo />
            <TypeScriptLogo />
            <NodeJsLogo />
            <MongoDBLogo />
            <PostmanLogo />
            <ReactLogo />
            <PostgreSQLLogo />
            <NextJSLogo />
            <PrismaLogo />
            <TailwindLogo />
            <ExpressLogo />
            <DockerLogo />
            <JavaScriptLogo />
            <TypeScriptLogo />
            <NodeJsLogo />
            <MongoDBLogo />
            <PostmanLogo />
            <ReactLogo />
            <PostgreSQLLogo />
            <NextJSLogo />
            <PrismaLogo />
            <TailwindLogo />
            <ExpressLogo />
            <DockerLogo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
