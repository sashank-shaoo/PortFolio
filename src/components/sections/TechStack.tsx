import React from "react";
import {AuroraText} from "../ui/aurora-text";

const icons = [
  { name: "React", icon: (
    <img src="/react-js-icon.svg" alt="React" className="w-8 h-8" />
  )},
  { name: "Next.js", icon: (
    <img src="/nextjs-icon.svg" alt="Next.js" className="w-8 h-8" />
  )},
  { name: "Node.js", icon: (
    <img src="/node-js-icon.svg" alt="Node.js" className="w-8 h-8" />
  )},
  { name: "TypeScript", icon: (
    <img src="/typescript-programming-language-icon.svg" alt="TypeScript" className="w-8 h-8" />
  )},
  { name: "Tailwind", icon: (
    <img src="/tailwind-css-icon.svg" alt="Tailwind" className="w-8 h-8" />
  )},
  { name: "MongoDB", icon: (
    <img src="/mongodb-icon.svg" alt="MongoDB" className="w-8 h-8" />
  )},
  { name: "Redis", icon: (
    <img src="/redis-icon.svg" alt="Redis" className="w-8 h-8" />
  )},
  { name: "PostgreSQL", icon: (
    <img src="/postgresql-icon.svg" alt="PostgreSQL" className="w-8 h-8" />
  )},
  {
    name: "Npm Packages", icon : (
      <img src = "/npm-icon.svg" alt="Npm Packages" className="w-8 h-8" />
    )
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative w-full bg-[#09090B] px-6 md:px-16 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-4">
             <p className="text-zinc-600 font-black uppercase text-[10px] tracking-[0.6em]">Powered By Modern Tech</p>
             <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              My Technology <AuroraText>Stack.</AuroraText>
             </h2>
           </div>
           <p className="text-zinc-500 text-sm max-w-xs font-medium">Selected tools and frameworks that i have used in my various projects so far.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
           {icons.map((item, i) => (
             <div key={i} className="group relative flex flex-col items-center justify-center ">
                <div className="text-white">
                  {item.icon}
                </div>
                <span className="mt-4 text-[10px] font-black text-white uppercase tracking-widest">
                  {item.name}
                </span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
