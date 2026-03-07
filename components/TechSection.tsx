"use client";

import {
  SiPython,
  SiMysql,
  SiGnubash,
  SiPandas,
  SiNumpy,
  SiJson,
  SiBlender,
  SiFlutter,
  SiHuggingface,
} from "react-icons/si";
import { Brain, BarChart3, Gamepad2, Palette, Code2 } from "lucide-react";

const techGroups = [
  {
    title: "Languages",
    icon: <Code2 size={18} />,
    items: [
      { name: "Python", icon: <SiPython size={22} color="#3776AB" /> },
      { name: "SQL", icon: <SiMysql size={22} /> },
      { name: "Bash", icon: <SiGnubash size={22} /> },
      { name: "JSON", icon: <SiJson size={22} /> },
    ],
  },
  {
    title: "AI / Data",
    icon: <Brain size={18} />,
    items: [
      { name: "Machine Learning", icon: <Brain size={22} /> },
      { name: "Data Analysis", icon: <BarChart3 size={22} /> },
      { name: "Pandas", icon: <SiPandas size={22} /> },
      { name: "NumPy", icon: <SiNumpy size={22} /> },
      { name: "Matplotlib", icon: <BarChart3 size={22} /> },
      { name: "REST APIs", icon: <Brain size={22} /> },
      { name: "Requests", icon: <Brain size={22} /> },
      { name: "Hugging Face", icon: <SiHuggingface size={22} /> },
    ],
  },
  {
    title: "Game Development",
    icon: <Gamepad2 size={18} />,
    items: [
      { name: "C#", icon: <Gamepad2 size={22} /> },
      { name: "Flutter", icon: <SiFlutter size={22} color="#02569B" /> },
      { name: "Assembly", icon: <Gamepad2 size={22} /> },
    ],
  },
  {
    title: "Design",
    icon: <Palette size={18} />,
    items: [
      { name: "Procreate", icon: <Palette size={22} /> },
      { name: "Blender", icon: <SiBlender size={22} color="#F5792A" /> },
      { name: "Illustrator", icon: <Palette size={22} /> },
    ],
  },
];

export default function TechSection() {
  return (
    <section id="technologies" className="mb-24">
      <div className="mb-8">
        <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
          Technologies
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Tools & Technologies
        </h2>

        <p className="mt-3 max-w-2xl text-neutral-600">
          A selection of languages, frameworks, and tools I use across artificial
          intelligence, data workflows, game development, and digital design.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {techGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                {group.icon}
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {group.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
                >
                  <span className="mb-2 text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}