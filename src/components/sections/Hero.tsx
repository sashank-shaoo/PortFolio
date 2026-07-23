import React from "react";
import { ArrowUpRight, Mail, Globe, Cpu } from "lucide-react";
import SoftAurora from "../SoftAurora";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row bg-olive-100 overflow-clip pt-20">
      {/* Muted Aurora Background */}
      <div className="hidden md:block absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-multiply overflow-hidden">
        <SoftAurora enableMouseInteraction={true} mouseInfluence={0.3} />
      </div>

      {/* LEFT COLUMN: PRIMARY ANCHOR (65%) */}
      <div className="relative z-10 flex-[1.6] flex flex-col justify-center px-6 md:px-16 py-12 md:py-0 border-r border-zinc-200">
        <div className="space-y-6 md:space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] animate-fade-in">
            Available for New Projects
          </div>

          <h1 className="text-6xl md:text-[9rem] font-black text-zinc-900 leading-none tracking-tighter uppercase whitespace-nowrap">
            Sashank <br />
            <span className="text-zinc-400">Sahoo.</span>
          </h1>

          <div className="max-w-2xl space-y-8 animate-slide-up">
            <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed">
              Full-Stack Engineer specialized in architecting
              <span className="text-zinc-900">
                {" "}
                high-performance digital products{" "}
              </span>
              and fluid user experiences.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="#projects"
                className="h-14 px-10 bg-black text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
                View My Work
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="h-14 px-8 border border-zinc-200 text-zinc-700 font-medium shadow-lg rounded-full hover:bg-zinc-50 transition-all flex items-center gap-3 text-sm">
                 {`Let's Talk`}
                <Mail className="w-5 h-5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: METADATA & LINKS (35%) */}
      <div className="relative z-10 flex-1 flex flex-col divide-y divide-zinc-200">
        {/* BLOCK 1: LOCATION & TIME */}
        <div className="p-8 md:p-16 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase text-[10px] tracking-widest opaci">
            <Globe className="w-3 h-3" />
            Base Location
          </div>
          <h3 className="text-zinc-900 text-2xl font-bold tracking-tight">
            Bhubaneswar, Odisha, India
          </h3>
          <p className="text-zinc-600 text-sm">
            Currently Studying at Gita autonomous college, Bhubaneswar, Odisha, India. Pursuing MCA in Computer Science and Engineering.
          </p>
        </div>

        {/* BLOCK 2: EXPERIENCE SNAPSHOT */}
        <div className="p-8 md:p-16 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
            <Cpu className="w-3 h-3" />
            Core Expertise
          </div>
          <div className="space-y-1">
            <h3 className="text-zinc-900 text-2xl font-bold tracking-tight">
              Full-Stack Dev.
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Node.js", "AWS", "MongoDB", "Express.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* BLOCK 3: CONNECT */}
        <div className="p-8 md:p-16 flex-1 flex flex-col justify-end gap-10">
          <div className="space-y-4">
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
              Connect
            </p>
            <div className="flex gap-8">
              {/* GitHub SVG */}
              <a
                href="#"
                className="flex items-center gap-4 text-zinc-900 font-bold group">
                <div className="p-3 rounded-xl bg-zinc-100 border shadow-lg border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-2 transition-transform">
                  GitHub
                </span>
              </a>
              {/* LinkedIn SVG */}
              <a
                href="#"
                className="flex items-center gap-4 text-zinc-900 font-bold group">
                <div className="p-3 rounded-xl bg-zinc-100 border shadow-lg border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-2 transition-transform">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
