import React from "react";
import { Zap, Layers, Smile, Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="dark relative w-full bg-background text-foreground border-t border-border px-6 md:px-12 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-[1400px]">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex w-24 shrink-0 justify-center">
          <span className="text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase [writing-mode:vertical-rl] whitespace-nowrap mt-4">
            01 / ABOUT
          </span>
        </div>

        {/* LEFT COLUMN: THE NARRATIVE (65%) */}
        <div className="flex-[1.6] space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-heading text-foreground uppercase tracking-tight leading-none font-normal">
              The <br />
              Architect.
            </h2>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="space-y-6 max-w-2xl font-sans">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-heading">
              Based in Bhubaneswar, I am a{" "}
              <span className="text-foreground font-semibold">Full-Stack Engineer</span>{" "}
              dedicated to building digital experiences that are as performant
              as they are beautiful. My approach combines deep technical
              architecture with a sharp eye for minimalist design and ofcourse
              Security.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in the{" "}
              <span className="text-foreground font-medium">React ecosystem</span>,
              crafting highly scalable backend systems and fluid frontend
              interfaces. Whether {"it's"} optimizing database queries or perfecting
              a micro-interaction, my goal is always the same: excellence in
              every pixel and every line of code.
            </p>

            <div className="flex items-center gap-4 text-foreground font-bold uppercase text-[10px] tracking-widest pt-4 border-t border-border/50">
              <Target className="w-4 h-4 text-muted-foreground" />
              Current Focus: High-Performance Self build products
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL FOCUS (35%) */}
        <div className="flex-1 flex flex-col gap-10 md:border-l border-border md:pl-12 py-4">
          <div className="space-y-8">
            <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest">
              Professional Focus.
            </p>

            <div className="space-y-8 font-sans">
              {/* FOCUS 1 */}
              <div className="group space-y-2 pb-6 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight text-sm">
                  <Zap className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  Performance-First
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prioritizing speed and responsiveness in every layer of the
                  technology stack.
                </p>
              </div>

              {/* FOCUS 2 */}
              <div className="group space-y-2 pb-6 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight text-sm">
                  <Layers className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  High Scalability
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Architecting systems that grow seamlessly alongside your user
                  base and business needs.
                </p>
              </div>

              {/* FOCUS 3 */}
              <div className="group space-y-2 pb-6 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight text-sm">
                  <Smile className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  Design-Led Tech
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
