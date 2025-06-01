"use client";

import { frame, motion, useSpring } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  //@ts-ignore
  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        x.set(clientX - element.offsetWidth / 2);
        y.set(clientY - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

const ball = {
  width: 50,
  height: 50,
  boxShadow:
    "0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  position: "fixed", // Important for full-page
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none", // So it doesn’t block clicks
};
