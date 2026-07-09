import React from "react";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#09090B] border-t border-white/5 px-6 md:px-16 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-12 md:gap-20">
        
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-800 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-24 tracking-tighter opacity-50">
            04 / CONTACT
          </span>
        </div>

        {/* LEFT COLUMN: THE CALL TO ACTION (65%) */}
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-zinc-600 font-black uppercase text-[10px] tracking-[0.6em]">Get in Touch</p>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Let's Build <br />
              <AuroraText>Something New.</AuroraText>
            </h2>
            <div className="h-1 w-16 bg-white/10 rounded-full" />
          </div>

          <form className="space-y-6 max-w-xl group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest pl-1">Name</label>
                 <input 
                   type="text" 
                   placeholder="Your Name" 
                   className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700" 
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest pl-1">Email</label>
                 <input 
                   type="email" 
                   placeholder="hello@example.com" 
                   className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700" 
                 />
               </div>
            </div>
            <div className="space-y-2">
                 <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest pl-1">Message</label>
                 <textarea 
                   rows={5}
                   placeholder="Your Message" 
                   className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700 resize-none" 
                 />
            </div>
            
            <button className="h-14 px-10 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group/btn">
               Send Message
               <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: DIRECT CHANNELS (35%) */}
        <div className="flex flex-col gap-12 md:border-l border-white/5 md:pl-16 py-4">
          <div className="space-y-10">
             <div className="space-y-4">
                <p className="text-zinc-600 font-black uppercase text-[10px] tracking-[0.5em]">Direct Channels</p>
                <div className="space-y-2">
                   <a href="mailto:hello@sashank.dev" className="block text-2xl text-white font-bold tracking-tight hover:text-zinc-400 transition-colors">
                      hello@sashank.dev
                   </a>
                   <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm">
                      <MapPin className="w-4 h-4" />
                      Mumbai, India (GMT+5:30)
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;