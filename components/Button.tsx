import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonComponentProps = {
  variant: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonComponentProps> = ({ className, children, variant }) => {
  return (
    <button
      className={twMerge(
        "py-1 px-4 sm:py-2 sm:px-6 rounded-full backdrop-blur hover:tracking-wide sm:text-lg hover:scale-105 transition",
        variant === "primary" && "bg-black text-white",
        variant === "secondary" && "border border-black/60 hover:border-black", className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
