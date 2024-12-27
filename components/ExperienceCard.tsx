"use client";
import { FC } from "react";
import Tag from "./Tag";

type ExperienceCardProps = {
  tag: string;
  title: string;
  date: string;
};

const ExperienceCard: FC<ExperienceCardProps> = ({ tag, title, date }) => {
  return (
    <div className="bg-[#181515] border border-white rounded-xl py-2 px-4 sm:max-w-xl mx-auto relative">
      <div className="mb-4 sm:mb-8">
        <div className="max-sm:flex items-center justify-center">
          <Tag variant="rainbow">{tag}</Tag>
        </div>
        <h3 className="max-sm:text-center sm:text-lg mt-2 sm:max-w-sm text-neutral-200 tracking-wide font-semibold">{title}</h3>
      </div>
      <div>
        <p className="max-sm:text-center text-end sm:text-lg font-light text-neutral-400">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
