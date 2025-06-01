import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import OpenToWorkBadge from "./OpenToWorkBadge";
import Drag from "./ui/Animation/Drag";

const Footer = () => {
  return (
    <footer
      className="w-full lg:mb-0 md:mb-[50px] mb-[100px] pb-10 bg-black-100 "
      id="contact"
    >
      <div
        className="flex flex-col items-center h-[90vh] justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/cta.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
radial-gradient(circle at center, rgba(0,3,25,0.8) 20%, rgba(0,3,25,1) 100%)

      `,
            pointerEvents: "none",
          }}
        />

        <div />

        <div className="z-10 text-6xl text-center mb-10">
          <h1 className="mb-4">
            FROM CONCEPT TO <span className="font-bold"> CREATION </span>{" "}
          </h1>{" "}
          <h1>
            {" "}
            LET's MAKE IT <span className="font-bold"> HAPPEN!</span>
          </h1>
        </div>
        <OpenToWorkBadge />
        <a href="mailto:avinashsuthar19hmh@gmail.com" title="mail">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="z-10 text-center mt-10">
          <h3 className="text-2xl mb-5 font-semibold">
            I'm available for full-time roles & freelance projects.
          </h3>
          <h6 className="font-thin text-lg text-neutral-300 px-6">
            I thrive on crafting dynamic web applications, and <br /> delivering
            seamless user experiences.
          </h6>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-16 justify-between items-center text-center md:text-left px-3">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-purple">Avinash Suthar</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6 px-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10  mt-10 lg:mt-0 md:mt-0  h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={
                  info.link.startsWith("http")
                    ? info.link
                    : `https://${info.link}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
