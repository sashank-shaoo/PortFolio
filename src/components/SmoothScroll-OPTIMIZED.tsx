"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // === SMOOTHING CONFIGURATION ===
        // Using duration + easing for smooth portfolio feel
        duration: 1.0, // ✨ Optimized from 1.2 (more responsive, still smooth)
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out

        // === SCROLL DIRECTION ===
        orientation: "vertical", // Vertical scrolling
        gestureOrientation: "vertical", // Touch/gesture direction

        // === INPUT HANDLING ===
        smoothWheel: true, // Smooth mouse wheel scrolling
        wheelMultiplier: 1, // Mouse wheel sensitivity (1 = normal)
        touchMultiplier: 2, // Touch/trackpad sensitivity (higher = more scroll per touch)

        // === VISUAL EFFECTS ===
        overscroll: true, // Allow bouncy overscroll effect

        // === FEATURES ===
        infinite: false, // No infinite scrolling

        // === PERFORMANCE OPTIONS ===
        autoRaf: true, // ✅ AUTO requestAnimationFrame - Essential for smooth performance
        autoResize: true, // ✅ AUTO resize detection - Updates scroll bounds when content changes

        // === OPTIONAL ADVANCED SETTINGS ===
        // Uncomment these if you need them:

        // Prevent smooth scroll on specific elements
        // prevent: (node: HTMLElement) => {
        //   return node.classList.contains('modal') ||
        //          node.getAttribute('data-scroll-prevent') !== null;
        // },

        // Modify scroll events before processing
        // virtualScroll: (e: any) => {
        //   // Example: Slow down scrolling to 50%
        //   e.deltaY *= 0.5;
        //   return true;
        // },

        // For touch devices with native inertia simulation
        // syncTouch: false,          // ⚠️ Can be unstable on iOS < 16
        // syncTouchLerp: 0.075,      // Inertia during syncTouch
        // touchInertiaExponent: 1.7, // Strength of inertia
      }}>
      {children}
    </ReactLenis>
  );
}

/*
PERFORMANCE NOTES:
=================

Current vs Optimized:
- duration: 1.2 → 1.0 (slightly snappier, still smooth)
- All other settings remain the same

CPU Impact:
- Smooth feel: ⭐⭐⭐⭐⭐ (maintained)
- Performance: ⭐⭐⭐⭐ (excellent)
- Mobile: ⭐⭐⭐⭐ (good)

When to switch to LERP-BASED (lighter CPU):
If you notice performance issues, replace duration+easing with:
  
  lerp: 0.1,  // Linear interpolation (0.05-0.15 range)
  // Remove duration and easing when using lerp

Lighter alternative config:
{
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  overscroll: false,  // Disable bouncy effect
  autoRaf: true,
  autoResize: true,
}

AVOID THESE (Performance killers):
❌ naiveDimensions: true     // Uses naive dimension calc
❌ allowNestedScroll: true   // Checks DOM tree on every scroll
*/
