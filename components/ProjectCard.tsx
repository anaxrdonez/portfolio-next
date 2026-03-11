import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tags = [],
  image,
}: ProjectCardProps) {
  const isResearch = slug === "gemini-confidence-inspector";

  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative block overflow-hidden rounded-[2rem] border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isResearch
          ? "border-violet-300 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white ring-2 ring-violet-200/70"
          : "border-neutral-200 bg-white/80"
      }`}
    >
      {isResearch && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(217,70,239,0.14),_transparent_30%)] opacity-100 transition duration-300 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
            <span>🧠</span>
            <span>Research Highlight</span>
          </div>

          <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full bg-violet-400/20 blur-2xl transition duration-300 group-hover:scale-125 group-hover:bg-fuchsia-400/25" />
        </>
      )}

      <div className="relative z-10">
        {image ? (
          <div
            className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border ${
              isResearch
                ? "border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white"
                : "border-neutral-200 bg-neutral-100"
            }`}
          >
            <img
              src={image}
              alt={title}
              className={`h-full w-full object-cover transition duration-500 ${
                isResearch ? "group-hover:scale-[1.03]" : "group-hover:scale-105"
              }`}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            {isResearch && (
              <div className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">
                Featured AI Project
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <ProjectVisual slug={slug} title={title} tags={tags} />

            {isResearch && (
              <div className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">
                Featured AI Project
              </div>
            )}
          </div>
        )}

        <div className="px-1 pb-2 pt-5">
          <h3
            className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
              isResearch
                ? "text-violet-900 group-hover:text-fuchsia-700"
                : "text-neutral-900 group-hover:text-violet-700"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-3 text-base leading-7 ${
              isResearch ? "text-neutral-700" : "text-neutral-600"
            }`}
          >
            {description}
          </p>

          {isResearch && (
            <div className="mt-5 rounded-2xl border border-violet-200 bg-white/80 px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                Research Project
              </p>
              <p className="mt-1 text-sm text-neutral-700">
                Confidence analysis, uncertainty signals and multi-metric LLM
                evaluation.
              </p>
            </div>
          )}

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    isResearch
                      ? "border border-violet-200 bg-violet-50 text-violet-700"
                      : "border border-neutral-200 bg-neutral-50 text-neutral-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}