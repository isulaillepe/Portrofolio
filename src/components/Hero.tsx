"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 text-foreground">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-surface/30 rounded-full blur-[150px] pointer-events-none" />
      
      {/* SVG Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')` }}
      />
      
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            <span className="block text-white">Isula Illeperuma:</span>
            <span className="block text-muted/80">Engineering the Future.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-sans font-light tracking-wide mb-12"
          >
            Full-Stack Engineer & Product Marketing Leader specializing in high-performance, Techno-Minimalist solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-sans font-semibold rounded-full hover:bg-white transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(69,162,158,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1">
              View Experience
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-sans font-medium rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              Let's Connect
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
