import Link from "next/link";

export default function MeetingMinutesPage() {
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
          Meeting Minutes{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Generator
          </span>
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          A LangGraph-based workflow that converts meeting transcripts (or
          audio/video via transcription) into structured minutes: participants,
          agenda, key topics, action items, minutes and an executive summary.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/anaxrdonez/langgraph-meeting-minutes-generator"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            GitHub Repo
          </a>

          <span className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
            LangGraph workflow
          </span>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="leading-7 text-neutral-600">
            This project focuses on reliability and structure. Instead of a
            generic summary, it extracts meeting artifacts that are directly
            useful for teams, especially action items and decisions.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              LangGraph
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              LLM
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Structured Output
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Automation
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Key outputs
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              <strong className="text-neutral-900">Participants</strong> and
              roles when available.
            </li>
            <li>
              <strong className="text-neutral-900">Agenda</strong> and meeting
              structure.
            </li>
            <li>
              <strong className="text-neutral-900">Topics</strong> and key
              discussion points.
            </li>
            <li>
              <strong className="text-neutral-900">Action items</strong> with
              owner and deadline when present.
            </li>
            <li>
              <strong className="text-neutral-900">Minutes</strong> and{" "}
              <strong className="text-neutral-900">
                executive summary
              </strong>.
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Workflow
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              <strong className="text-neutral-900">Input:</strong> transcript
              (paste text) or audio/video (transcribe first).
            </li>
            <li>
              <strong className="text-neutral-900">LangGraph orchestration:</strong>{" "}
              step-by-step extraction nodes.
            </li>
            <li>
              <strong className="text-neutral-900">Validation:</strong> enforce
              schema and formatting for consistent outputs.
            </li>
            <li>
              <strong className="text-neutral-900">Export:</strong> results ready
              for docs, tickets or follow-up emails.
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Why LangGraph
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              Modular nodes allow easy iteration (for example adding decisions
              or risks).
            </li>
            <li>
              Stateful workflow ensures predictable order and intermediate
              checkpoints.
            </li>
            <li>
              Provides better control compared to a single long prompt.
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Next improvements
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>Web UI (Streamlit or FastAPI) for a public demo.</li>
            <li>
              Calendar and ticket integrations (Jira / Trello) from action
              items.
            </li>
            <li>
              Speaker diarization support to improve participant extraction.
            </li>
            <li>Cost and latency optimizations (chunking and caching).</li>
          </ul>
        </article>
      </section>
    </main>
  );
}