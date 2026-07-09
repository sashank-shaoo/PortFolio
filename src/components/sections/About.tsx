import React from "react";
import { Zap, Layers, Smile, Target } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-8 md:gap-16">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-16 tracking-tighter opacity-100">
            01 / ABOUT
          </span>
        </div>

        {/* LEFT COLUMN: THE NARRATIVE (65%) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              The <br />
              <AuroraText>Architect.</AuroraText>
            </h2>
            <div className="h-1 w-16 bg-zinc-200 rounded-full" />
          </div>

          <div className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed">
              Based in Mumbai, I am a{" "}
              <span className="text-zinc-900">Full-Stack Engineer</span>{" "}
              dedicated to building digital experiences that are as performant
              as they are beautiful. My approach combines deep technical
              architecture with a sharp eye for minimalist design and ofcourse
              Security.
            </p>

            <p className="text-lg text-zinc-600 leading-relaxed">
              I specialize in the{" "}
              <span className="text-zinc-900">TypeScript ecosystem</span>,
              crafting highly scalable backend systems and fluid frontend
              interfaces. Whether it's optimizing database queries or perfecting
              a micro-interaction, my goal is always the same: excellence in
              every pixel and every line of code.
            </p>

            <div className="flex items-center gap-4 text-zinc-900 font-bold uppercase text-xs tracking-[0.3em] pt-2">
              <Target className="w-5 h-5 text-zinc-500" />
              Current Focus: High-Performance Self build products
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL FOCUS (35%) */}
        <div className="flex flex-col gap-10 md:border-l border-zinc-200 md:pl-12 py-4 overflow-hidden   ">
          <div className="space-y-8">
            <p className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.5em]">
              Professional Focus.
            </p>

            <div className="space-y-8">
              {/* FOCUS 1 */}
              <div className="group space-y-2">
                <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                  <Zap className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                  Performance-First
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Prioritizing speed and responsiveness in every layer of the
                  technology stack.
                </p>
              </div>

              {/* FOCUS 2 */}
              <div className="group space-y-2">
                <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                  <Layers className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                  High Scalability
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Architecting systems that grow seamlessly alongside your user
                  base and business needs.
                </p>
              </div>

              {/* FOCUS 3 */}
              <div className="group space-y-2">
                <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                  <Smile className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                  Design-Led Tech
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Ensuring that engineering decisions always elevate the
                  end-user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
