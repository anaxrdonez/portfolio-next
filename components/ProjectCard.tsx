import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  image: string;
  description: string;
};

export default function ProjectCard({
  slug,
  title,
  image,
  description,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {description}
        </p>
      </div>
    </Link>
  );
}