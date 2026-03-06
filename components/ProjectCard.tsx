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
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-[2rem] border border-neutral-200 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Visual / Image */}
      {image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      ) : (
        <ProjectVisual slug={slug} title={title} tags={tags} />
      )}

      {/* Content */}
      <div className="px-1 pb-2 pt-5">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-violet-700">
          {title}
        </h3>

        <p className="mt-3 text-base leading-7 text-neutral-600">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}