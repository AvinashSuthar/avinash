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
  width: 20,
  height: 20,
  boxShadow:
    "0 0 0 2px rgba(255,255,255,0.2), 0 8px 24px 4px rgba(0,0,0,0.18), 0 0 40px 10px #a0e9ff80",
  background: "radial-gradient(circle at 30% 30%, #a0e9ff 60%, #38bdf8 100%)",
  borderRadius: "50%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none",
  transition: "box-shadow 0.2s, background 0.2s",
};
if (typeof window !== "undefined") {
  document.body.style.cursor = "none";
  document.body.addEventListener("pointermove", () => {
    document.body.style.cursor = "none";
  });
}
