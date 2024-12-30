import { FC } from "react";
import GithubLogo from "@/assets/github-signup-logo.png";
import TwitterLogo from "@/assets/twitter-signup-logo.png";
import MailLogo from "@/assets/mail-signup-logo.png";
import LinkedInLogo from "@/assets/linkedin-signup-logo.png";
import Image from "next/image";

const SignMeUp: FC = () => {
  const email = "example@example.com";
  const subject = "Impressive Portfolio";
  const body = `
    Dear [Recipient's Name],

    I recently came across your portfolio and was genuinely impressed with your work.
    I would love the opportunity to connect with you at your earliest convenience to discuss potential collaboration or shared interests.

    Please let me know a time that works for you.

    Best regards,
    [Your Name]
  `;

  return (
    <section className="bg-black py-[72px]">
      <div className="container">
        <div className=" px-4 py-4 max-w-3xl mx-auto relative overflow-hidden rounded-2xl">
          <div className="absolute h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,172,109,0.8)_0%,rgba(226,189,161,0)_100%)] blur-3xl" />
          <div className="absolute right-0 translate-x-16 h-[400px] w-[400px] md:h[600px] md:w-[600px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(226,165,161,0.7)_0%,rgba(226,165,161,0)_100%)] blur-3xl" />
          <div>
            <h2 className="text-neutral-400 text-2xl sm:text-4xl">
              Let&apos;s Connect
            </h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <a href="https://github.com/pranavtartey">
              <Image
                src={GithubLogo}
                alt="github-logo"
                height={30}
                width={40}
                className="w-6 sm:w-11 relative"
              />
            </a>
            <a href="https://x.com/pranav_tartey">
              <Image
                src={TwitterLogo}
                alt="twitter-logo"
                height={30}
                width={30}
                className="w-5 sm:w-8 relative"
              />
            </a>
            <a href="https://www.linkedin.com/in/pranavtartey/">
              <Image
                src={LinkedInLogo}
                alt="linkedin-logo"
                height={30}
                width={30}
                className="w-6 sm:w-9 relative"
              />
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
            >
              <Image
                src={MailLogo}
                alt="mail-logo"
                height={30}
                width={35}
                className="w-7 sm:w-10 relative"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignMeUp;
