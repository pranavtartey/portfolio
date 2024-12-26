import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TagProps = {
  className?: string;
  children: ReactNode;
  variant: "background" | "rainbow" | "base";
};

const Tag: FC<TagProps> = ({ className, children, variant }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <p
        className={twMerge(
          "border border-black/50 backdrop-blur-md text-center py-0.5 px-4 tracking-widest rounded-full font-medium",
          variant === "background" && "bg-black text-white",
          variant === "rainbow" &&
            " bg-[linear-gradient(to_right,#f542fe,#f54aae,#f9b93a,#79f54c,#1ad1fa,#f241fb,#fc59b8,#f6bb47,#74fe42,#15d0fa)] text-transparent bg-clip-text",
          variant === "base" && "",
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default Tag;
