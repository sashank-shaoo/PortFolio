"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

const lenisOptions = {
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  lerp: 0.08,
  overscroll: false,
  infinite: false,
  autoRaf: true,
  autoResize: true,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
