"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="w-full px-6 md:px-12 h-16 flex justify-between items-center relative">
        
        {/* Logo/Title */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-foreground rounded-full" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
          <a href="#" className="font-heading text-2xl tracking-[0.15em] uppercase text-foreground">
            Sashank
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-foreground/70 transition-colors"
          aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-10 text-sm font-medium text-foreground/80 tracking-wide">
            <li className="hover:text-foreground transition-colors cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-foreground transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-foreground transition-colors cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-foreground transition-colors cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground text-xs font-bold px-5 py-2 border border-border hover:bg-primary/80 transition-colors uppercase tracking-widest">
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out origin-top border-t border-border ${
          isOpen
            ? "max-h-[300px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}>
        <div className="bg-background px-6 py-4 flex flex-col gap-4 text-sm font-medium text-foreground items-start">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-foreground/70 transition-colors w-full py-2 border-b border-border/10">
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-foreground/70 transition-colors w-full py-2 border-b border-border/10">
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-foreground/70 transition-colors w-full py-2 border-b border-border/10">
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-foreground/70 transition-colors w-full py-2 border-b border-border/10">
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 border border-border hover:bg-primary/80 transition-colors uppercase tracking-widest w-full text-center">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
