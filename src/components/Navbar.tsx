"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
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
        
        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 cursor-pointer relative w-7 h-5 flex flex-col justify-between items-end z-[60]"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white/80 rounded-full origin-center"
            style={{ width: "100%" }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-[70%] bg-white/80 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white/80 rounded-full origin-center"
            style={{ width: "100%" }}
          />
        </button>
      </motion.nav>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0C10]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Decorative glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <nav className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-serif text-4xl text-white/70 hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
