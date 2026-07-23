import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#09090B] border-t border-white/5 px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT COLUMN: COPYRIGHT & TAGLINE */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
            © 2026 Sashank Sahoo.
          </p>
          <p className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.4em]">
            Building the Future of Digital Products.
          </p>
        </div>



        {/* RIGHT COLUMN: NAVIGATION BACK TO TOP */}
        <div className="group">
          <a 
            href="#" 
            className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="p-2 rounded-full border border-white/5 group-hover:border-white/20 transition-all bg-white/5">
              <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;