"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.to(".line-left", {
      x: "-100%",
      opacity: 0,
      ease: "power2.inOut",
    }).to(
      ".line-right",
      {
        x: "100%",
        opacity: 0,
        ease: "power2.inOut",
      },
      "<", // sync
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default HeroAnimation;
