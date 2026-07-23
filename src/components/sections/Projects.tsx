import { AuroraText } from "../ui/aurora-text";
import Image from "next/image";
import { Globe } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-olive-100 border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24 overflow-clip">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-8 md:gap-16">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex  flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-30 tracking-tighter opacity-100">
            02 / PROJECTS
          </span>
        </div>

        {/* LEFT COLUMN: FEATURED PROJECT (65%) */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
            Featured <br />
            <AuroraText>Projects.</AuroraText>
          </h2>
          <div className="h-1 w-16 bg-zinc-200 rounded-full border" />

          {/* Project Card 1 */}
          <div className="rounded-lg p-5 ">
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              RepoDocs - A Github repos annalyzer . &nbsp; &nbsp; &nbsp; &nbsp;  <span className="text-sm text-zinc-400">Currently On Development Stage !</span>
            </h3>
            <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:gap-5">
              <div className="relative mt-2 w-full overflow-hidden rounded-lg shadow-xl aspect-[16/10] md:mt-0 md:w-[40%] md:aspect-[5/3]">
                <Image
                  src="/photos/RepoDoc/RepoDoc.png"
                  alt="Project One"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain object-center rounded-md border border-zinc-200"
                  loading="eager"
                />
              </div>
              <p className="w-full text-md leading-relaxed text-zinc-700 mt-4 md:mt-0 md:w-[60%]">
                RepoDocs is a powerful GitHub repository analysis platform that
                simplifies code exploration and project understanding. It
                transforms complex repository data into clean, visual insights,
                helping developers and teams quickly grasp project structure,
                dependencies, and usage patterns.
              </p>
            </div>
            <div className="flex gap-8 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-black">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-3 rounded-xl bg-zinc-100 border shadow-lg border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-2 transition-transform">
                    Browser
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/sashank-shaoo/Project-1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-black">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-3 rounded-xl bg-zinc-100 border shadow-lg border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <span className="group-hover:translate-x-2 transition-transform">
                    Source Code
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN: MINOR PROJECTS (35%) */}
        <div className="flex flex-col gap-10 md:border-l border-zinc-200 md:pl-16 py-4">
          <h4 className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.5em]">
            Minor Projects
          </h4>
          <div className="flex flex-col gap-8">
            {/* Minor Project 1 */}
            <div className="group flex flex-col gap-2 border-b border-zinc-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                Instagram Clone - (Mobile First View)
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                A mobile-first Instagram clone featuring a scalable
                microservices architecture and core social media
                functionalities.
              </p>
              <a
                href="https://github.com/sashank-shaoo/InstagramClone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700">
                Source Code
              </a>
            </div>

            {/* Minor Project 2 */}
            <div className="group flex flex-col gap-2 border-b border-zinc-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                Resume Hub - Resume Analyzer Platform
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                An AI-powered platform for generating ATS-friendly resumes and
                analyzing existing documents for actionable feedback.
              </p>
              <a
                href="https://github.com/sashank-shaoo/ResumeAnnalyser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700">
                Source Code
              </a>
            </div>

            {/* Minor Project 3 */}
            <div className="group flex flex-col gap-2 border-b border-zinc-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 text-zinc-900 font-bold tracking-tight">
                SwiftMart - Ecommerce
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                A high-performance e-commerce storefront featuring dynamic
                filtering, secure checkout, and optimized state management.
              </p>
              <a
                href="https://github.com/sashank-shaoo/SwiftMart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700">
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
