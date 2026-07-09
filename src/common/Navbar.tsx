import React from 'react'
import { VideoText } from '@/components/ui/video-text'

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="flex justify-between items-center bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <VideoText 
          src="/video/need.mp4" 
          className="h-10 w-50 px-1" 
          fontSize="2.5rem"
          fontWeight="900"
        >
          Portfolio
        </VideoText>
        <div className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-zinc-400">
            <li className="hover:text-white transition-colors cursor-pointer"><a href="#">Home</a></li>
            <li className="hover:text-white transition-colors cursor-pointer"><a href="#about">About</a></li>
            <li className="hover:text-white transition-colors cursor-pointer"><a href="#projects">Projects</a></li>
            <li className="hover:text-white transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a href="#contact" className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
          Hire Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar