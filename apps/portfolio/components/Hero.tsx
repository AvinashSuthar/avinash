import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import RGBText from "./ui/Animation/RGBAnimate";
import HeroAnimation from "./ui/Animation/HeroAnimation";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 " id="home">
      <HeroAnimation />
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="blue" />
        <Spotlight
          className="h-[80vh] w-[50vw] top-40 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className=" line-left uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with <span className="text-purple"> Me </span>
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center line-right text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="line-left text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I<span className="text-purple">&apos;</span>m{" "}
            <span className="RGB-Text"> Avinash Suthar,</span> a Full Stack
            Developer <br /> based in India with a passion for code.
          </p>

          <a href="#about" title="Home" className="line-right">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <RGBText />
    </div>
  );
};

export default Hero;
