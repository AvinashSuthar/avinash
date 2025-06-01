"use client";
import { useEffect } from "react";
import gsap from "gsap";

const RGBAnimator = () => {
  useEffect(() => {
    gsap.to(`.RGB-Text`, {
      backgroundPosition: "100% 10%",
      duration: 30,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return null;
};

export default RGBAnimator;
