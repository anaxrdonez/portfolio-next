import type { ReactNode } from "react";

type SocialButtonProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
};

export default function SocialButton({
  href,
  children,
  icon,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-sky-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2">
        <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          {icon}
        </span>

        <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
          {children}
        </span>
      </span>
    </a>
  );
}