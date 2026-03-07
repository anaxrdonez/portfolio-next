import ProjectCard from "@/components/ProjectCard";
import { aiProjects, gameProjects } from "@/data/projects";
import AnimatedWords from "@/components/AnimatedWords";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import { Github, Linkedin } from "lucide-react";
import SocialButton from "@/components/SocialButton";
import TechSection from "@/components/TechSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Full-screen animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-160px] h-[520px] w-[520px] rounded-full bg-violet-400/25 blur-3xl animate-[float_16s_ease-in-out_infinite]" />
        <div className="absolute right-[-180px] top-[120px] h-[460px] w-[460px] rounded-full bg-sky-400/20 blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-180px] left-[10%] h-[420px] w-[420px] rounded-full bg-fuchsia-300/20 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[8%] right-[12%] h-[260px] w-[260px] rounded-full bg-emerald-300/15 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* HERO */}
        <section className="mb-24 rounded-[2rem] border border-white/60 bg-white/65 p-8 shadow-sm backdrop-blur-xl md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                Portfolio
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl xl:text-7xl">
                Ana Ordóñez
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                I enjoy the <AnimatedWords /> of intelligent digital systems that combine 
                artificial intelligence, game development, and automation. My work explores 
                how modern technologies - from language models and AI workflows to interactive 
                game prototypes - can be used to build creative, efficient, and practical 
                digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <SocialButton
                  href="https://github.com/anaxrdonez"
                  icon={<Github size={18} strokeWidth={2} />}
                >
                  GitHub
                </SocialButton>

                <SocialButton
                  href="https://www.linkedin.com/in/ana-ord%C3%B3%C3%B1ez-gragera-677311298"
                  icon={<Linkedin size={18} strokeWidth={2} />}
                >
                  LinkedIn
                </SocialButton>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 lg:items-start">
              <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-lg">
                <img
                  src="/Assets/yo.png"
                  alt="Ana Ordóñez"
                  className="h-56 w-56 object-cover md:h-64 md:w-64"
                />
              </div>
            </div>
          </div>
        </section>

        <TimelineSection />
        
        <TechSection />

        {/* AI PROJECTS */}
        <section id="projects" className="mb-24">
          <div className="mb-8">
            <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
              AI & Automation
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              AI & Automation Projects
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600">
              LLM pipelines, structured outputs, orchestration workflows, and
              practical automation systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>

        {/* GAME PROJECTS */}
        <section id="games" className="mb-24">
          <div className="mb-8">
            <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Games
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Game Projects
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600">
              Gameplay prototypes, interactive experiments, and game design
              projects with a strong visual identity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gameProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
    </main>
  );
}