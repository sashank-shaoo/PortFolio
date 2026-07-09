import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  className?: string;
  featured?: boolean;
}

const ProjectCard = ({ index, title, description, tech, image, className, featured }: ProjectCardProps) => (
  <div className={cn(
    "group relative overflow-hidden bg-white border border-zinc-200 rounded-3xl transition-all duration-700 hover:border-zinc-300",
    featured ? "md:h-[600px]" : "md:h-[290px]",
    className
  )}>
    {/* Background Image */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-30 group-hover:opacity-50"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-0 opacity-90" />

    {/* Content */}
    <div className="relative z-10 h-full p-8 flex flex-col justify-end gap-4 overflow-hidden">
      <div className="flex justify-between items-start">
          <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase">{index} / Project</span>
          <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className={cn(
          "text-zinc-900 font-bold tracking-tighter leading-none transition-all uppercase",
          featured ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
        )}>
          {title}
        </h3>
        <p className="text-zinc-600 text-sm max-w-md line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map(t => (
            <span key={t} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-8 md:gap-12">
        
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-24 tracking-tighter opacity-100">
            02 / PROJECTS
          </span>
        </div>

        {/* LEFT COLUMN: FEATURED PROJECT (65%) */}
        <div className="md:col-span-1">
          <ProjectCard 
            index="01"
            featured
            title="Nexus AI Hub"
            description="Highly scalable SaaS platform for AI workflow management and distributed computing orchestration."
            tech={['React', 'Next.js', 'PostgreSQL', 'WebSockets']}
            image="/nexus_ai_mockup_1775187648108.png"
          />
        </div>

        {/* RIGHT COLUMN: SECONDARY PROJECTS (35%) */}
        <div className="flex flex-col gap-6 md:gap-8 justify-between">
           <ProjectCard 
             index="02"
             title="Veloce Commerce"
             description="High-performance commerce engine with 100ms response times and global edge caching."
             tech={['Node.js', 'Redis', 'Tailwind', 'Stripe']}
             image="/veloce_commerce_mockup_1775187664440.png"
           />
           <ProjectCard 
             index="03"
             title="Atlas Analytics"
             description="Real-time data visualization tool for tracking infrastructure metrics and user behavior clusters."
             tech={['TypeScript', 'D3.js', 'Rust', 'AWS']}
             image="/atlas_analytics_mockup_1775187681438.png"
           />
        </div>
      </div>
    </section>
  );
};

export default Projects;