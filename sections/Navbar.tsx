import { FC } from "react";
import TwitterLogo from "@/assets/prime_twitter.svg";
import LinkedInLogo from "@/assets/devicon-plain_linkedin.svg";
import GithubLogo from "@/assets/mdi_github.svg";
const Navbar: FC = () => {
  return (
    <section className="w-full flex items-center justify-center sticky top-4 z-50">
      <div className="flex items-center justify-center gap-4 py-2 px-4 rounded-full mt-4 border border-black backdrop-blur-md hover:scale-105 transition shadow-md">
        <a
          className="hover:cursor-pointer hover:scale-110 transition"
          //   target="_blank"
          //   href="https://x.com/pranav_tartey"
          href="#"
        >
          <TwitterLogo />
        </a>
        <a
          className="hover:cursor-pointer hover:scale-105 transition"
          //   target="_blank"
          //   href="https://www.linkedin.com/in/pranavtartey/"
          href="#"
        >
          <LinkedInLogo />
        </a>
        <a
          className="hover:cursor-pointer hover:scale-105 transition"
          //   target="_blank"
          //   href="https://github.com/pranavtartey"
          href="#"
        >
          <GithubLogo />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
