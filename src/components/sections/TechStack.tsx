import React from "react";
import { AuroraText } from "../ui/aurora-text";
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-30 h-30"
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
        className="w-30 h-30"
      />
    ),
    url: "https://www.credly.com/badges/a6ecd12e-dca6-4749-98ac-e4372cdfa4e7/linked_in?t=tg20mt",
  },
];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative w-full bg-olive-100 px-6 md:px-16 py-20 overflow-clip gap-5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.6em]">
              Powered By Modern Tech
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              My Technology <AuroraText>Stack.</AuroraText>
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-xs font-medium">
            Selected tools and frameworks that i have used in my various
            projects so far.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {icons.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center ">
              <div className="text-zinc-900">{item.icon}</div>
              <span className="mt-4 text-[10px] font-black text-zinc-900 uppercase tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              My <AuroraText>ACHIVEMENTS.</AuroraText>
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-xs font-medium">
            Achivements throughout my journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {achivements.map((item, i) => (
            <Link href={item.url} target="_blank" key={i}>
              <div className="group relative flex flex-col items-center justify-center ">
                <div className="text-zinc-900">{item.icon}</div>
                <span className="mt-4 text-[10px] font-black text-zinc-900 uppercase tracking-widest">
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
