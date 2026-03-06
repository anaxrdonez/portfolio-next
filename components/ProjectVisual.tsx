import { Brain, FileText, Sigma, Workflow, BarChart3 } from "lucide-react";

type ProjectVisualProps = {
  slug: string;
  title: string;
  tags?: string[];
};

export default function ProjectVisual({
  slug,
  title,
  tags = [],
}: ProjectVisualProps) {
  const variants: Record<
    string,
    {
      icon: React.ReactNode;
      gradient: string;
      accent: string;
      badge: string;
    }
  > = {
    "uncertainty-metrics-lab": {
      icon: <BarChart3 className="h-14 w-14" />,
      gradient:
        "from-orange-100 via-white to-amber-50",
      accent: "text-orange-600",
      badge: "Uncertainty",
    },
    "cv-evaluator-llm": {
      icon: <FileText className="h-14 w-14" />,
      gradient:
        "from-sky-100 via-white to-violet-50",
      accent: "text-sky-600",
      badge: "LLM Review",
    },
    "meeting-minutes-generator": {
      icon: <Workflow className="h-14 w-14" />,
      gradient:
        "from-emerald-100 via-white to-cyan-50",
      accent: "text-emerald-600",
      badge: "Automation",
    },
  };

  const fallback = {
    icon: <Brain className="h-14 w-14" />,
    gradient: "from-violet-100 via-white to-fuchsia-50",
    accent: "text-violet-600",
    badge: "AI Project",
  };

  const theme = variants[slug] ?? fallback;

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br ${theme.gradient}`}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/60 blur-2xl" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
            {theme.badge}
          </span>

          <div
            className={`rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm ${theme.accent} transition duration-300 group-hover:scale-105 group-hover:-rotate-3`}
          >
            {theme.icon}
          </div>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}