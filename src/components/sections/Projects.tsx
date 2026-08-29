import Image from "next/image";
import { Globe } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-background border-t border-border px-6 md:px-12 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-[1400px]">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex w-24 shrink-0 justify-center">
          <span className="text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase [writing-mode:vertical-rl] whitespace-nowrap mt-4">
            02 / PROJECTS
          </span>
        </div>

        {/* LEFT COLUMN: FEATURED PROJECT (65%) */}
        <div className="flex-[1.6] space-y-6">
          <h2 className="text-4xl md:text-7xl font-heading text-foreground uppercase tracking-tight leading-none font-normal">
            Featured <br />
            Projects.
          </h2>
          <div className="h-px w-16 bg-border" />

          {/* Project Card 1 */}
          <div className="border border-border p-6 bg-secondary/30">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              RepoDocs - A Github repos analyzer . &nbsp; &nbsp; &nbsp; &nbsp;  <span className="text-sm font-sans font-normal text-muted-foreground">Currently On Development Stage !</span>
            </h3>
            <div className="flex flex-col gap-4 py-4 md:flex-row md:items-start md:justify-between md:gap-6 border-t border-b border-border/50 my-4">
              <div className="relative w-full overflow-hidden border border-border aspect-[16/10] md:w-[45%]">
                <Image
                  src="/photos/RepoDoc/RepoDoc.png"
                  alt="Project One"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain object-center"
                  loading="eager"
                />
              </div>
              <p className="w-full text-sm font-sans leading-relaxed text-foreground/80 md:w-[55%]">
                RepoDocs is a powerful GitHub repository analysis platform that
                simplifies code exploration and project understanding. It
                transforms complex repository data into clean, visual insights,
                helping developers and teams quickly grasp project structure,
                dependencies, and usage patterns.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors flex-1 md:flex-none">
                <div className="flex justify-center items-center gap-3 px-4 py-2 border border-border bg-secondary hover:bg-primary transition-colors">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Browser
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/sashank-shaoo/Project-1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors flex-1 md:flex-none">
                <div className="flex justify-center items-center gap-3 px-4 py-2 border border-border bg-secondary hover:bg-primary transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Source Code
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MINOR PROJECTS (35%) */}
        <div className="flex-1 flex flex-col gap-10 md:border-l border-border md:pl-12 py-4">
          <h4 className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest">
            Minor Projects
          </h4>
          <div className="flex flex-col gap-8 font-sans">
            {/* Minor Project 1 */}
            <div className="group flex flex-col gap-2 border-b border-border/50 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight">
                Instagram Clone - (Mobile First View)
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A mobile-first Instagram clone featuring a scalable
                microservices architecture and core social media
                functionalities.
              </p>
              <a
                href="https://github.com/sashank-shaoo/InstagramClone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors mt-2">
                Source Code
              </a>
            </div>

            {/* Minor Project 2 */}
            <div className="group flex flex-col gap-2 border-b border-border/50 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight">
                Resume Hub - Resume Analyzer Platform
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An AI-powered platform for generating ATS-friendly resumes and
                analyzing existing documents for actionable feedback.
              </p>
              <a
                href="https://github.com/sashank-shaoo/ResumeAnnalyser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors mt-2">
                Source Code
              </a>
            </div>

            {/* Minor Project 3 */}
            <div className="group flex flex-col gap-2 border-b border-border/50 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-foreground font-semibold tracking-tight">
                SwiftMart - Ecommerce
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A high-performance e-commerce storefront featuring dynamic
                filtering, secure checkout, and optimized state management.
              </p>
              <a
                href="https://github.com/sashank-shaoo/SwiftMart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors mt-2">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
