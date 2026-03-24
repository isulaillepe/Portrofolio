import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { getMdxContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { 
  Spacer, ProjectShowcase, GlassCard, ParallaxText, 
  TextColumn, TechStackCloud, TechItem 
} from "@/components/mdx-components";

const mdxComponents = {
  Spacer,
  ProjectShowcase,
  GlassCard,
  ParallaxText,
  TextColumn,
  TechStackCloud,
  TechItem,
  h1: (props: any) => <h1 className="font-serif text-5xl md:text-6xl font-medium text-white mb-8" {...props} />,
  h2: (props: any) => <h2 className="font-serif text-3xl text-white mb-6 uppercase tracking-wider" {...props} />,
  p: (props: any) => <p className="text-white/60 font-light leading-relaxed mb-6" {...props} />,
};

export default function Home() {
  const aboutMdx = getMdxContent("about");
  const projectsMdx = getMdxContent("projects");

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative">
      <Navbar />
      <Hero />
      
      {aboutMdx && (
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <MDXRemote source={aboutMdx.content} components={mdxComponents} />
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
