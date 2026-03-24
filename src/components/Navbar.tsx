"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-4 left-4 right-4 z-50 flex items-center justify-between",
        "px-6 py-4 rounded-2xl glass max-w-7xl mx-auto"
      )}
    >
      <div className="font-serif text-xl font-bold tracking-wide">ISULA ILLEPERUMA.</div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
        <a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">About</a>
        <a href="#experience" className="hover:text-white transition-colors duration-200 cursor-pointer">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors duration-200 cursor-pointer">Projects</a>
      </div>
      <button className="md:hidden text-white/80 cursor-pointer">
        Menu
      </button>
    </motion.nav>
  );
}
