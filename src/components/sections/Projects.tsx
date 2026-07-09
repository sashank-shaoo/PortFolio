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
    "group relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-3xl transition-all duration-700 hover:border-white/20",
    featured ? "md:h-[600px]" : "md:h-[290px]",
    className
  )}>
    {/* Background Image */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent z-0 opacity-80" />

    {/* Content */}
    <div className="relative z-10 h-full p-8 flex flex-col justify-end gap-4 overflow-hidden">
      <div className="flex justify-between items-start">
        <span className="text-zinc-600 font-bold tracking-widest text-xs uppercase">{index} / Project</span>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
           <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className={cn(
          "text-white font-bold tracking-tighter leading-none transition-all uppercase",
          featured ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
        )}>
          {title}
        </h3>
        <p className="text-zinc-400 text-sm max-w-md line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
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
    <section id="projects" className="relative w-full bg-[#09090B] border-t border-white/5 px-6 md:px-16 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-8 md:gap-12">
        
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-800 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-24 tracking-tighter opacity-50">
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