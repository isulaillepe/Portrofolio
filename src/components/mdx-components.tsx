"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

export const FadeIn = ({ duration = 1, delay = 0, translateY = "20px", children }: { duration?: number, delay?: number, translateY?: string, children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: translateY }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const Badge = ({ text, glow }: { text: ReactNode, glow?: string }) => (
  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/20 bg-white/5 backdrop-blur-md ${glow === 'gold' ? 'shadow-[0_0_20px_rgba(255,215,0,0.2)] text-[#FFD700]' : 'text-primary'}`}>
    {text}
  </div>
);

export const ButtonGroup = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
    {children}
  </div>
);

export const Button = ({ href, variant, children }: { href?: string, variant?: string, children: ReactNode }) => {
  const base = "px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 transform hover:-translate-y-1 inline-block text-center";
  const styles = variant === "glass-gilded" 
    ? "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:border-[#FFD700]/50" 
    : "bg-transparent border border-white/10 text-white/80 hover:bg-white/5 hover:text-white";
  return href ? (
    <Link href={href} className={`${base} ${styles}`}>{children}</Link>
  ) : (
    <button className={`${base} ${styles}`}>{children}</button>
  );
};

export const Spacer = ({ height }: { height: string }) => <div style={{ height }} />;

export const ProjectShowcase = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">{children}</div>
);

type GlassCardProps = {
  title: string;
  role?: string;
  category?: string;
  tech?: string[];
  link?: string;
  children: ReactNode;
};

export const GlassCard = ({ title, role, category, tech, link, children }: GlassCardProps) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(69,162,158,0.05)] hover:shadow-[0_0_60px_rgba(69,162,158,0.15)] transition-shadow duration-500 flex flex-col h-full"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    >
      {category && <div className="text-primary text-xs uppercase tracking-widest font-bold mb-3">{category}</div>}
      <h3 className="font-serif text-3xl text-white mb-2 leading-tight">{title}</h3>
      {role && <div className="text-white/60 text-sm font-medium mb-5">{role}</div>}
      
      <div className="text-white/70 font-light leading-relaxed mb-8 flex-grow">
        {children}
      </div>
      
      {tech && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t: string) => (
            <span key={t} className="bg-white/5 border border-white/10 text-white/80 text-xs px-4 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
      )}
      
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-primary hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold">
          View Details &rarr;
        </a>
      )}
    </motion.div>
  );
};

// Disabling eslint rule for speed prop as it's passed from MDX but unused structurally here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ParallaxText = ({ speed, children }: { speed?: number, children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-serif text-4xl md:text-5xl lg:text-6xl text-white/90 leading-tight"
    >
      {children}
    </motion.div>
  );
};

export const TextColumn = ({ children }: { children: ReactNode }) => (
  <div className="max-w-3xl text-lg md:text-xl text-white/60 font-light leading-relaxed space-y-6">
    {children}
  </div>
);

export const TechStackCloud = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap gap-4 mt-8">{children}</div>
);

export const TechItem = ({ children }: { children: ReactNode }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl text-white shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:bg-white/10 transition-colors duration-300">
    {children}
  </div>
);
