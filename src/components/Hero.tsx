"use client";

import { ReactNode } from "react";

export default function Hero({ children }: { children?: ReactNode }) {
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
        {children}
      </div>
    </section>
  );
}
