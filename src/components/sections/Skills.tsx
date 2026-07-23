import React from "react";
import {
  Code2,
  Server,
  Wrench,
  GraduationCap,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => (
  <div className="space-y-6 group">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-zinc-100 border shadow-md border-zinc-200 rounded-lg text-zinc-600 group-hover:text-zinc-900 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-zinc-900 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {skills.map((skill) => (
        <div key={skill} className="flex items-center gap-2 group/item">
          <CheckCircle2 className="w-3 h-3 text-zinc-300 group-hover/item:text-emerald-500 transition-colors" />
          <span className="text-sm text-zinc-600 group-hover/item:text-zinc-900 transition-colors">
            {skill}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const EducationItem = ({
  degree,
  institution,
  period,
  description,
}: {
  degree: string;
  institution: string;
  period: string;
  description: string;
}) => (
  <div className="relative pl-8 border-l border-zinc-200 pb-10 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-300 border border-zinc-200 group-hover:bg-zinc-900 transition-colors" />
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
        <Calendar className="w-3 h-3" />
        {period}
      </div>
      <h4 className="text-zinc-900 font-bold tracking-tight leading-none text-lg uppercase">
        {degree}
      </h4>
      <p className="text-zinc-600 text-sm font-medium">{institution}</p>
      <p className="text-xs text-zinc-500 leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {description}
      </p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-olive-100 border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24 overflow-clip">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-12 md:gap-16">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-24 tracking-tighter opacity-100">
            03 / SKILLS
          </span>
        </div>

        {/* LEFT COLUMN: SKILLS MAPPING (65%) */}
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              Expertise <br />
              <AuroraText>Map.</AuroraText>
            </h2>
            <div className="h-1 w-16 bg-zinc-200 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
            <SkillCategory
              title="Frontend Dev."
              icon={<Code2 className="w-5 h-5" />}
              skills={[
                "React",
                "Next.js",
                "Tailwind",
                "TypeScript",
              ]}
            />
            <SkillCategory
              title="Backend Dev."
              icon={<Server className="w-5 h-5" />}
              skills={[
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "GraphQL",
                "Express",
              ]}
            />
            <SkillCategory
              title="Tools & Cloud"
              icon={<Wrench className="w-5 h-5" />}
              skills={["Git", "Docker", "AWS"]}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: EDUCATION ROADMAP (35%) */}
        <div className="flex flex-col gap-12 md:border-l border-zinc-200 md:pl-16 py-4">
          <div className="space-y-10 group">
            <div className="flex items-center gap-3 text-zinc-500 font-black uppercase text-[10px] tracking-[0.5em]">
              <GraduationCap className="w-4 h-4" />
              Academic Base
            </div>

            <div className="space-y-2">
              <EducationItem
                degree="MCA Computer Science"
                institution="Gandhi Institute of Technology and Advancment"
                period="2025 — 2027"
                description="Specialized in Distributed Systems and Software Architecture. Graduated with Honors."
              />
              <EducationItem
                degree="AWS Cloud Practitioner"
                institution="Amazon Web Services (Certification)"
                period="2025"
                description="Certified professional for designing and deploying scalable cloud architectures."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
