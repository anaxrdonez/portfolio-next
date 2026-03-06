"use client";

import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "experience";
};

const items: TimelineItem[] = [
  {
    year: "2021 — 2025",
    title: "Degree in Video Game Design & Development",
    subtitle: "Universidad Rey Juan Carlos",
    description:
      "Foundation in interactive systems, design, development, and digital product creation.",
    type: "education",
  },
  {
    year: "2024 — 2025",
    title: "Workplace Engineering Intern",
    subtitle: "Avanade Spain",
    description:
      "Technical support, incident resolution, technical documentation, and project coordination.",
    type: "experience",
  },
  {
    year: "2025 — 2026",
    title: "AI Engineering Intern",
    subtitle: "Dekano AI Solutions",
    description:
      "Python scripting, process automation, API integrations, data processing, and support in AI projects.",
    type: "experience",
  },
  {
    year: "2026",
    title: "Master’s Degree in Artificial Intelligence",
    subtitle: "Universidad Politécnica de Madrid",
    description:
      "Advanced specialization in artificial intelligence, machine learning, and intelligent systems.",
    type: "education",
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-[1fr_80px_1fr] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700`}
    >
      <div className={`hidden md:block ${isLeft ? "pr-10 pb-10" : "pb-10"}`}>
        {isLeft && (
          <article className="rounded-[1.5rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                item.type === "education"
                  ? "border border-violet-200 bg-violet-50 text-violet-700"
                  : "border border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              {item.type === "education" ? "Education" : "Experience"}
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {item.year}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-1 text-base font-medium text-neutral-600">{item.subtitle}</p>
            <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
          </article>
        )}
      </div>

      <div className="relative flex justify-start md:justify-center">
        <div className="relative h-full min-h-[220px] w-8 md:w-full">
          <div className="absolute left-[15px] top-0 h-full w-[2px] bg-neutral-200 md:left-1/2 md:-translate-x-1/2" />
          <div className="absolute left-[9px] top-8 z-10 h-5 w-5 rounded-full border-4 border-white bg-violet-500 shadow md:left-1/2 md:-translate-x-1/2" />
        </div>
      </div>

      <div className={`pl-12 pb-10 md:pl-10 ${!isLeft ? "" : ""}`}>
        <article className="rounded-[1.5rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-xl md:hidden">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              item.type === "education"
                ? "border border-violet-200 bg-violet-50 text-violet-700"
                : "border border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {item.type === "education" ? "Education" : "Experience"}
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {item.year}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-neutral-900">{item.title}</h3>
          <p className="mt-1 text-base font-medium text-neutral-600">{item.subtitle}</p>
          <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
        </article>

        {!isLeft && (
          <article className="hidden rounded-[1.5rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-xl md:block">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                item.type === "education"
                  ? "border border-violet-200 bg-violet-50 text-violet-700"
                  : "border border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              {item.type === "education" ? "Education" : "Experience"}
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {item.year}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-1 text-base font-medium text-neutral-600">{item.subtitle}</p>
            <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
          </article>
        )}
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height + windowHeight;
      const current = windowHeight - rect.top;
      const value = Math.max(0, Math.min(1, current / total));

      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section id="journey" className="mb-24">
      <div className="mb-10">
        <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
          Journey
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Education & Experience Timeline
        </h2>

        <p className="mt-3 max-w-2xl text-neutral-600">
          A visual overview of my path across game development, engineering,
          automation, and artificial intelligence.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        <div className="pointer-events-none absolute left-[15px] top-0 h-full w-[2px] bg-neutral-200 md:left-1/2 md:-translate-x-1/2" />
        <div
          className="pointer-events-none absolute left-[15px] top-0 w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-sky-400 to-emerald-400 transition-[height] duration-200 md:left-1/2 md:-translate-x-1/2"
          style={{ height: `${progress * 100}%` }}
        />

        <div className="space-y-0">
          {items.map((item, index) => (
            <TimelineCard key={`${item.year}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}