"use client";
import React, { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="flex justify-between items-center bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl relative">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-zinc-300 transition-colors"
          aria-label="Toggle Menu">
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <EllipsisVertical className="w-5 h-5" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-md font-medium text-zinc-300">
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>

        <a
          href="#contact"
          className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-3 transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}>
        <div className="bg-zinc-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-4 text-md font-medium text-zinc-300 items-center">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors w-full text-center py-2 border-b border-white/5 last:border-0">
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors w-full text-center py-2 border-b border-white/5 last:border-0">
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors w-full text-center py-2 border-b border-white/5 last:border-0">
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors w-full text-center py-2 border-b border-white/5 last:border-0">
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
