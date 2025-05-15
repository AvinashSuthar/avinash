import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full lg:mb-0 md:mb-[50px] mb-[100px] pb-10 "
      id="contact"
    >
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:avinashsuthar19hmh@gmail.com" title="mail">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-16 justify-between items-center text-center md:text-left">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-purple">Avinash Suthar</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
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
