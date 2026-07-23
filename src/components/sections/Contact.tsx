"use client";
import React, { useState } from "react";
import { ArrowRight, MapPin, CheckCircle2, XCircle, Globe, Mail, Phone } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "9ce13833-b67d-4359-ba49-b7f6f535675d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        console.error("Web3Forms API returned an error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("Fetch request failed:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-olive-100 border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24 overflow-clip">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-12 md:gap-16">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl [writing-mode:vertical-rl] whitespace-nowrap mt-16 tracking-tighter opacity-100">
            04 / CONTACT
          </span>
        </div>

        {/* LEFT COLUMN: THE CALL TO ACTION (65%) */}
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.6em]">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              {"Let's"} Build <br />
              <AuroraText>Something New.</AuroraText>
            </h2>
            <div className="h-1 w-16 bg-zinc-200 rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 ">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full shadow-lg bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-zinc-50 shadow-lg border border-zinc-200 rounded-lg p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full bg-zinc-50 shadow-lg border border-zinc-200 rounded-lg p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400 resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-14 px-10 bg-black shadow-lg text-white font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group/btn disabled:opacity-70 disabled:hover:scale-100">
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                )}
              </button>

              {status === "success" && (
                <span className="flex items-center gap-2 text-sm font-bold text-green-600 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" /> Sent!
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-sm font-bold text-red-600 animate-fade-in">
                  <XCircle className="w-4 h-4" /> Failed to send.
                </span>
              )}
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: DIRECT CHANNELS (35%) */}
        <div className="flex flex-col gap-12 md:border-l border-zinc-200 md:pl-16 py-4">
          <div className="space-y-10">
            {/* CONTACT LIST */}
            <div className="text-xl md:text-2xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              Sashank . Dev
            </div>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/60 border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    Email
                  </p>
                  <a
                    href="mailto:subahsishnayak38@gmail.com"
                    className="text-sm md:text-base text-zinc-900 font-bold hover:text-zinc-600 transition-colors break-words">
                    sashanksahoo2@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/60 border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    Phone
                  </p>
                  <a
                    href="tel:+917750096113"
                    className="text-sm md:text-base text-zinc-900 font-bold hover:text-zinc-600 transition-colors">
                    +91 7750939733
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/60 border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    Location
                  </p>
                  <span className="text-sm md:text-base text-zinc-900 font-bold">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* FIND ME ONLINE */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                Find Me Online
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/sashank-shaoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center shadow-lg gap-3 p-4 rounded-lg bg-white/40 border border-zinc-200 hover:bg-white hover:shadow-md transition-all group">
                  <GithubIcon className="w-5 h-5 text-zinc-600 group-hover:text-black shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900 truncate">
                      GitHub
                    </p>
                    <p className="text-xs text-zinc-500 truncate">
                      sashank-sahoo
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sashank-sahoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center shadow-lg gap-3 p-4 rounded-lg bg-white/40 border border-zinc-200 hover:bg-white hover:shadow-md transition-all group">
                  <LinkedinIcon className="w-5 h-5 text-zinc-600 group-hover:text-[#0077b5] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900 truncate">
                      LinkedIn
                    </p>
                    <p className="text-xs text-zinc-500 truncate">
                      Sashank Sahoo
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
