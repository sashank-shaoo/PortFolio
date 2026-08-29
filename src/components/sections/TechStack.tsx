import React from "react";
import Link from "next/link";
import Image from "next/image";

const icons = [
  {
    name: "React",
    icon: (
      <Image
        src="/react-js-icon.svg"
        alt="React"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src="/nextjs-icon.svg"
        alt="Next.js"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity invert"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Image
        src="/node-js-icon.svg"
        alt="Node.js"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <Image
        src="/typescript-programming-language-icon.svg"
        alt="TypeScript"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <Image
        src="/tailwind-css-icon.svg"
        alt="Tailwind"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <Image
        src="/mongodb-icon.svg"
        alt="MongoDB"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Redis",
    icon: (
      <Image
        src="/redis-icon.svg"
        alt="Redis"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <Image
        src="/postgresql-icon.svg"
        alt="PostgreSQL"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Npm Packages",
    icon: (
      <Image
        src="/npm-icon.svg"
        alt="Npm Packages"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
      />
    ),
  },
];
const achivements = [
  {
    name: "Cloud 101 Badge",
    icon: (
      <Image
        src="/Cloud_101.png"
        alt="Cloud 101"
        width={120}
        height={120}
        className="w-30 h-30 border border-border"
      />
    ),
    url: "https://www.credly.com/badges/a18eca58-c299-47b5-9fc6-dad58b0ed04b/linked_in?t=thmsli",
  },
  {
    name: "Generative Ai",
    icon: (
      <Image
        src="/Generative_Ai.png"
        alt="Generative Ai"
        width={120}
        height={120}
        className="w-30 h-30 border border-border"
      />
    ),
    url: "https://www.credly.com/badges/a6ecd12e-dca6-4749-98ac-e4372cdfa4e7/linked_in?t=tg20mt",
  },
];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative w-full bg-background border-t border-border px-6 md:px-12 py-20 overflow-clip gap-5">
      <div className="max-w-[1400px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div className="space-y-4">
            <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-[0.6em]">
              Powered By Modern Tech
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-foreground uppercase tracking-tight leading-none">
              My Technology Stack.
            </h2>
          </div>
          <p className="text-foreground/80 font-sans text-sm max-w-xs font-medium">
            Selected tools and frameworks that I have used in my various
            projects so far.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
          {icons.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-8 border border-border bg-secondary/30 hover:bg-secondary transition-colors font-sans">
              <div className="text-foreground">{item.icon}</div>
              <span className="mt-4 text-[10px] font-bold text-foreground uppercase tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-foreground uppercase tracking-tight leading-none">
              My Achievements.
            </h2>
          </div>
          <p className="text-foreground/80 font-sans text-sm max-w-xs font-medium">
            Achievements throughout my journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
          {achivements.map((item, i) => (
            <Link href={item.url} target="_blank" key={i}>
              <div className="group relative flex flex-col items-center justify-center p-8 border border-border bg-secondary/30 hover:bg-secondary transition-colors font-sans h-full">
                <div className="text-foreground">{item.icon}</div>
                <span className="mt-6 text-[10px] font-bold text-foreground uppercase tracking-widest text-center">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
