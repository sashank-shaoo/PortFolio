"use client";
import React, { useState } from "react";
import { ArrowRight, MapPin, CheckCircle2, XCircle } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

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
      className="relative w-full bg-white border-t border-zinc-200 px-6 md:px-16 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.6fr_1fr] gap-12 md:gap-16">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex flex-col items-center">
          <span className="text-zinc-200 font-black text-6xl rotate-90 origin-center whitespace-nowrap mt-24 tracking-tighter opacity-100">
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
              Let's Build <br />
              <AuroraText>Something New.</AuroraText>
            </h2>
            <div className="h-1 w-16 bg-zinc-200 rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
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
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
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
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400 resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="h-14 px-10 bg-black text-white font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group/btn disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />}
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
            <div className="space-y-4">
              <p className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.5em]">
                Direct Channels
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:[EMAIL_ADDRESS]"
                  className="block text-2xl text-zinc-900 font-bold tracking-tight hover:text-zinc-600 transition-colors">
                  sashanksahoo2@gmail.com
                </a>
                <div className="flex items-center gap-2 text-zinc-600 font-medium text-sm">
                  <MapPin className="w-4 h-4" />
                  Bhubaneswar, India (IST)
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
