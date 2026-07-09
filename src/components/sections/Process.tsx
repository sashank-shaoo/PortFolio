"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AuroraText } from "../ui/aurora-text";
import {
  MessageCircle,
  FileText,
  Settings,
  Rocket,
  User,
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    label?: string;
    labelPosition?: "top" | "bottom";
  }
>(({ className, children, label, labelPosition = "bottom" }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2 group transition-all duration-300">
      {label && labelPosition === "top" && (
        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest text-center">
          {label}
        </span>
      )}
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-9 md:size-10 lg:size-12 items-center justify-center rounded-full border-2 border-white/10 bg-[#09090B] p-1 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]",
          className,
        )}>
        {children}
      </div>
      {label && labelPosition === "bottom" && (
        <span className="text-[8px] md:text-[10px] font-black text-zinc-600 uppercase tracking-widest text-center max-w-[80px] md:max-w-[100px]">
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for every node in the sequence
  const meRef = useRef<HTMLDivElement>(null);
  const brainstormRef = useRef<HTMLDivElement>(null);
  const perplexityRef = useRef<HTMLDivElement>(null);
  const otherAiRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const vscodeRef = useRef<HTMLDivElement>(null);
  const antigravityRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);

  // Responsive hook to detect mobile for beam adjustment
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="process"
      className="relative w-full bg-[#09090B] border-t border-white/5 px-6 md:px-16 py-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* SECTION HEADER */}
        <div className="text-center space-y-4">
          <p className="text-zinc-600 font-black uppercase text-[10px] tracking-[0.6em]">
            The Engineering Lifecycle
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Architectural <AuroraText>Process.</AuroraText>
          </h2>
        </div>

        {/* BEAM CONTAINER */}
        <div
          className="relative flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full items-center justify-center rounded-3xl border border-white/5 bg-zinc-950/20 p-4 md:p-10 lg:p-20"
          ref={containerRef}>
          {/* DIAMOND GRID LAYOUT */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4 lg:gap-14 w-full">
            {/* COLUMN 1: ME */}
            <div className="md:mb-20">
              <Circle ref={meRef} label="Me" labelPosition="top">
                <User className="text-white" />
              </Circle>
            </div>

            {/* COLUMN 2: BRAINSTORM */}
            <div className="md:mt-20">
              <Circle ref={brainstormRef} label="BrainStorm">
                <img src="/invention-icon.svg" alt="invention-icon" className="w-full h-full object-contain"/>
              </Circle>
            </div>

            {/* COLUMN 3: AI RESEARCH BRANCH */}
            <div className="flex flex-row md:flex-col gap-12 md:gap-24">
              <Circle
                ref={perplexityRef}
                label="Perplexity"
                labelPosition="top"
                className="p-2.5"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-white"
                >
                  <title>Perplexity</title>
                  <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"></path>
                </svg>
              </Circle>
              <Circle ref={otherAiRef} label="Other AI">
                <MessageCircle className="text-zinc-400" />
              </Circle>
            </div>

            {/* COLUMN 4: DOCUMENTATION (MERGE POINT) */}
            <div className="md:mt-0">
              <Circle ref={docsRef} label="Documentation">
                <FileText className="text-zinc-400" />
              </Circle>
            </div>

            {/* COLUMN 5: TOOL BRANCH */}
            <div className="flex flex-row md:flex-col gap-12 md:gap-24">
              <Circle ref={vscodeRef} label="VS Code" labelPosition="top" className="p-2 md:p-2.5">
                <img src="/visual-studio-code-icon.svg" alt="visual-studio-code-icon" className="w-full h-full object-contain" />
              </Circle>
              <Circle ref={antigravityRef} label="Antigravity" className="p-1.5 md:p-2">
                <img src="/antigravity-color.svg" alt="antigravity-color" className="w-full h-full object-contain"/>
              </Circle>
            </div>

            {/* COLUMN 6: OPTIMIZATION (MERGE POINT) */}
            <div className="md:mt-0">
              <Circle ref={toolsRef} label="Tool Selection & Optimization">
                <Settings className="text-zinc-400" />
              </Circle>
            </div>

            {/* COLUMN 7: THE PHASE */}
            <div className="md:mt-0">
              <Circle ref={devRef} label="Development Phase">
                <Rocket className="text-white group-hover:text-zinc-200" />
              </Circle>
            </div>
          </div>

          {/* ANIMATED BEAMS - MIDNIGHT PROFESSIONAL THEME */}

          {/* Me to Brainstorm */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={meRef}
            toRef={brainstormRef}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />

          {/* Brainstorm to Research Branch */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={brainstormRef}
            toRef={perplexityRef}
            curvature={isMobile ? -10 : -40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={brainstormRef}
            toRef={otherAiRef}
            curvature={isMobile ? 10 : 40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />

          {/* Branch to Documentation */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={perplexityRef}
            toRef={docsRef}
            curvature={isMobile ? -10 : -40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={otherAiRef}
            toRef={docsRef}
            curvature={isMobile ? 10 : 40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />

          {/* Documentation to Tool Branch */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={docsRef}
            toRef={vscodeRef}
            curvature={isMobile ? -10 : -40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={docsRef}
            toRef={antigravityRef}
            curvature={isMobile ? 10 : 40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />

          {/* Branch to Optimization */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={vscodeRef}
            toRef={toolsRef}
            curvature={isMobile ? -10 : -40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={antigravityRef}
            toRef={toolsRef}
            curvature={isMobile ? 10 : 40}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />

          {/* Optimization to Dev Phase */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={toolsRef}
            toRef={devRef}
            duration={6}
            repeatDelay={1}
            vertical={isMobile}
          />
        </div>

        {/* DESCRIPTIVE FOOTER (Editorial consistency) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5 opacity-80">
          <div className="space-y-2">
            <p className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              I. Research
            </p>
            <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-wider">
              Ideating through structured brainstorming and AI research.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              II. Architecture
            </p>
            <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-wider">
              Consolidating insights into technical documentation and logic
              flow.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              III. Stack selection
            </p>
            <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-wider">
              Choosing the right IDE and agents for specialized build phases.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              IV. Production
            </p>
            <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-wider">
              Final development and deployment of high-fidelity products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
