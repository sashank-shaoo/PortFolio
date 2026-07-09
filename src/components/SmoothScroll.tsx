"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        overscroll: true,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2.5,
        anchors: true,
        infinite: false,
        autoRaf: true,
        autoResize: true,
      }}>
      {children}
    </ReactLenis>
  );
}
