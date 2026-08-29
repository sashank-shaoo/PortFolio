"use client";
import React, { useState } from "react";
import { ArrowRight, MapPin, CheckCircle2, XCircle, Mail, Phone } from "lucide-react";

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
      className="dark relative w-full bg-background text-foreground border-t border-border px-6 md:px-12 py-16 md:py-24 overflow-clip">
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 max-w-[1400px]">
        {/* SIDE MARGIN: SECTION INDICATOR */}
        <div className="hidden md:flex w-24 shrink-0 justify-center">
          <span className="text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase [writing-mode:vertical-rl] whitespace-nowrap mt-4">
            04 / CONTACT
          </span>
        </div>

        {/* LEFT COLUMN: THE CALL TO ACTION (65%) */}
        <div className="flex-[1.6] space-y-12">
          <div className="space-y-6">
            <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-[0.6em]">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-7xl font-heading text-foreground uppercase tracking-tight leading-none font-normal">
              {"Let's"} Build <br />
              Something New.
            </h2>
            <div className="h-px w-16 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl group font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-secondary/30 border border-border p-4 text-foreground text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-secondary/30 border border-border p-4 text-foreground text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full bg-secondary/30 border border-border p-4 text-foreground text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-14 px-10 bg-primary text-primary-foreground border border-border font-bold uppercase text-xs tracking-widest hover:bg-primary/80 transition-colors flex items-center gap-3 group/btn disabled:opacity-70">
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                )}
              </button>

              {status === "success" && (
                <span className="flex items-center gap-2 text-sm font-bold text-emerald-600 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" /> Sent!
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-sm font-bold text-destructive animate-fade-in">
                  <XCircle className="w-4 h-4" /> Failed to send.
                </span>
              )}
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: DIRECT CHANNELS (35%) */}
        <div className="flex-1 flex flex-col gap-12 md:border-l border-border md:pl-12 py-4">
          <div className="space-y-10">
            {/* CONTACT LIST */}
            <div className="text-xl md:text-2xl lg:text-2xl font-heading font-semibold text-foreground uppercase tracking-tight leading-none">
              Sashank . Dev
            </div>
            <div className="space-y-6 font-sans">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Email
                  </p>
                  <a
                    href="mailto:sashanksahoo2@gmail.com"
                    className="text-sm md:text-base text-foreground font-semibold hover:text-foreground/70 transition-colors break-words">
                    sashanksahoo2@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Phone
                  </p>
                  <a
                    href="tel:+917750939733"
                    className="text-sm md:text-base text-foreground font-semibold hover:text-foreground/70 transition-colors">
                    +91 7750939733
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Location
                  </p>
                  <span className="text-sm md:text-base text-foreground font-semibold">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* FIND ME ONLINE */}
            <div className="space-y-4 font-sans">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Find Me Online
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/sashank-shaoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-secondary border border-border hover:bg-primary transition-colors group">
                  <GithubIcon className="w-5 h-5 text-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      GitHub
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground/80 truncate">
                      sashank-sahoo
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sashank-sahoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-secondary border border-border hover:bg-primary transition-colors group">
                  <LinkedinIcon className="w-5 h-5 text-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      LinkedIn
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground/80 truncate">
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
