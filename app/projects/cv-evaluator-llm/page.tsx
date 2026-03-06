import Link from "next/link";

export default function CvEvaluatorPage() {
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
          AI / LLM Project
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          CV{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Evaluator
          </span>{" "}
          LLM
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          An LLM pipeline that evaluates resumes against a role, generates
          structured feedback, surfaces missing signals, and suggests
          improvements with consistent scoring.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/anaxrdonez/cv-evaluator-llm"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            GitHub Repo
          </a>

          <span className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
            Resume evaluation
          </span>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="leading-7 text-neutral-600">
            This project focuses on building a practical evaluator that outputs
            actionable, structured results rather than vague AI feedback. It’s
            designed to be extended into a web tool or internal HR assistant.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              LLM
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Structured Output
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Evaluation
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Prompting
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Key outputs
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              <strong className="text-neutral-900">Fit score</strong> and
              rationale aligned to the role.
            </li>
            <li>
              <strong className="text-neutral-900">Strengths</strong> and{" "}
              <strong className="text-neutral-900">gaps</strong> (missing
              signals).
            </li>
            <li>
              <strong className="text-neutral-900">Recommendations</strong> to
              improve the CV for the target job.
            </li>
            <li>
              <strong className="text-neutral-900">Structured JSON</strong>{" "}
              (easy to integrate into apps).
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            How it works
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>Input: CV text + job description (or role requirements).</li>
            <li>
              Normalization: extract key sections and entities such as skills,
              experience, and education.
            </li>
            <li>
              Evaluation: criteria-based scoring with calibrated explanations.
            </li>
            <li>Output: formatted report + JSON schema for automation.</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Next improvements
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>Add rubric tuning per industry (SWE, Data, Product, etc.).</li>
            <li>
              Bias and safety layer: avoid sensitive inference and focus on
              job-relevant content.
            </li>
            <li>
              Optional: RAG with role-specific standards and competency
              frameworks.
            </li>
            <li>Deploy a minimal web demo with Streamlit or FastAPI.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}