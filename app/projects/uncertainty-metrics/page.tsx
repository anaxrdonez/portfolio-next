import Link from "next/link";

export default function UncertaintyMetricsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <header className="mb-12">
        <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
          AI / ML Project
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          Uncertainty{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Metrics
          </span>{" "}
          Lab
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          Hands-on lab exploring practical uncertainty signals for multiclass
          classification: confidence, entropy, and ensemble disagreement.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/anaxrdonez/lab-uncertainty-metrics"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            GitHub Repo
          </a>

          <span className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
            Multiclass classification
          </span>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="leading-7 text-neutral-600">
            The goal is to understand how uncertainty behaves across predictions
            and how to convert it into simple decisions: automate, guide the
            user, or escalate.
          </p>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            What’s inside
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>Top-1 confidence</li>
            <li>Normalized entropy</li>
            <li>Ensemble disagreement</li>
            <li>Operational decision policy</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Why it matters
          </h2>
          <p className="leading-7 text-neutral-600">
            In real systems, raw predictions are not enough. This lab helps
            translate model uncertainty into practical product decisions, making
            AI behavior easier to trust, monitor, and improve.
          </p>
        </article>
      </section>
    </main>
  );
}