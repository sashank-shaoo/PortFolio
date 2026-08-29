import React from "react";
import {
  Code2,
  Server,
  Wrench,
  GraduationCap,
  Calendar,
  CheckCircle2,
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => (
  <div className="space-y-6 group font-sans">
    <div className="flex items-center gap-3 pb-4 border-b border-border/50">
      <div className="p-2 bg-secondary border border-border text-foreground transition-colors duration-500 group-hover:bg-primary">
        {icon}
      </div>
      <h3 className="text-foreground font-semibold tracking-widest uppercase text-xs">
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill} className="flex items-center gap-2 group/item">
          <CheckCircle2 className="w-3 h-3 text-muted-foreground group-hover/item:text-foreground transition-colors" />
          <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
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
  <div className="relative pl-8 border-l border-border pb-10 last:pb-0 font-sans group/edu">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-secondary border border-border group-hover/edu:bg-foreground transition-colors" />
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase text-[9px] tracking-widest">
        <Calendar className="w-3 h-3" />
        {period}
      </div>
      <h4 className="text-foreground font-heading font-semibold tracking-tight leading-none text-xl uppercase">
        {degree}
      </h4>
      <p className="text-foreground/80 text-sm font-medium">{institution}</p>
      <p className="text-sm text-muted-foreground leading-relaxed pt-2 opacity-0 group-hover/edu:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="dark relative w-full bg-background text-foreground border-t border-border px-6 md:px-12 py-16 md:py-24 overflow-clip">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-[1400px]">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex w-24 shrink-0 justify-center">
          <span className="text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase [writing-mode:vertical-rl] whitespace-nowrap mt-4">
            03 / SKILLS
          </span>
        </div>

        {/* LEFT COLUMN: SKILLS MAPPING (65%) */}
        <div className="flex-[1.6] space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-heading text-foreground uppercase tracking-tight leading-none font-normal">
              Expertise <br />
              Map.
            </h2>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
            <SkillCategory
              title="Frontend Dev."
              icon={<Code2 className="w-4 h-4" />}
              skills={[
                "React",
                "Next.js",
                "Tailwind",
                "TypeScript",
              ]}
            />
            <SkillCategory
              title="Backend Dev."
              icon={<Server className="w-4 h-4" />}
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
              icon={<Wrench className="w-4 h-4" />}
              skills={["Git", "Docker", "AWS"]}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: EDUCATION ROADMAP (35%) */}
        <div className="flex-1 flex flex-col gap-12 md:border-l border-border md:pl-12 py-4">
          <div className="space-y-10 group">
            <div className="flex items-center gap-3 text-muted-foreground font-bold uppercase text-[10px] tracking-[0.5em]">
              <GraduationCap className="w-4 h-4" />
              Academic Base
            </div>

            <div className="space-y-4">
              <EducationItem
                degree="MERN Stack Development"
                institution="Appna College"
                period="2024 — 2025"
                description="Specialized in full-stack development with MERN stack"
              />
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
