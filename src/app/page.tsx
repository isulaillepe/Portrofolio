import { ComponentProps } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { getMdxContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { 
  Spacer, ProjectShowcase, GlassCard, ParallaxText, 
  TextColumn, TechStackCloud, TechItem,
  FadeIn, Badge, ButtonGroup, Button,
  TimelineOrbit, GlassNode, TimelineConnector, Quote
} from "@/components/mdx-components";

const mdxComponents = {
  Spacer,
  ProjectShowcase,
  GlassCard,
  ParallaxText,
  TextColumn,
  TechStackCloud,
  TechItem,
  FadeIn,
  Badge,
  ButtonGroup,
  Button,
  TimelineOrbit,
  GlassNode,
  TimelineConnector,
  Quote,
  h1: (props: ComponentProps<'h1'>) => <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className="font-serif text-3xl text-white mb-6 uppercase tracking-wider" {...props} />,
  p: (props: ComponentProps<'p'>) => <p className="text-white/60 font-light leading-relaxed mb-6" {...props} />,
};

export default function Home() {
  const indexMdx = getMdxContent("index");
  const aboutMdx = getMdxContent("about");
  const experienceMdx = getMdxContent("experience");
  const projectsMdx = getMdxContent("projects");

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative">
      <Navbar />
      <Hero>
        {indexMdx && <MDXRemote source={indexMdx.content} components={mdxComponents} />}
      </Hero>
      
      {aboutMdx && (
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <MDXRemote source={aboutMdx.content} components={mdxComponents} />
        </section>
      )}

      {experienceMdx && (
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">{experienceMdx.frontmatter.title}</h2>
          </div>
          <MDXRemote source={experienceMdx.content} components={mdxComponents} />
        </section>
      )}

      {projectsMdx && (
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">{projectsMdx.frontmatter.title}</h2>
          </div>
          <MDXRemote source={projectsMdx.content} components={mdxComponents} />
        </section>
      )}
    </main>
  );
}
