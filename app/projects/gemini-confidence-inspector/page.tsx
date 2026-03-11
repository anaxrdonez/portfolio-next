import Link from "next/link";

const keyFindings = [
  {
    title: "Token-level confidence is local",
    description:
      "A high probability for the next token reflects local decoding preference, not necessarily factual correctness or document-grounded extraction.",
  },
  {
    title: "Confidence can saturate",
    description:
      "In structured extraction, token-level metrics may drift toward near-maximum confidence values even when the extracted field is still wrong or unstable.",
  },
  {
    title: "Structure can dominate the signal",
    description:
      "JSON formatting and structural tokens can artificially inflate average token confidence, masking true semantic uncertainty in the field value itself.",
  },
  {
    title: "Agreement across passes is more informative",
    description:
      "Cross-pass agreement introduces a stability signal that often reveals uncertainty better than isolated token probabilities.",
  },
];

const literaturePoints = [
  "Modern neural networks are often overconfident rather than well calibrated.",
  "LLM internal probabilities do not always align with factual correctness.",
  "Token-level confidence does not guarantee sequence-level correctness.",
  "Probability-based metrics alone can overestimate reliability in generative tasks.",
];

const tokenLevelVsReality = [
  { label: "Chosen token confidence", value: 99.9 },
  { label: "Top-gap impression", value: 98.7 },
  { label: "Entropy-based confidence", value: 97.8 },
  { label: "Actual reliability", value: 58 },
];

const disagreementData = [
  { label: "Pass 1 token confidence", value: 99.99 },
  { label: "Pass 2 token confidence", value: 99.93 },
  { label: "Final confidence", value: 58 },
  { label: "Risk score", value: 57 },
];

function HorizontalBarChart({
  title,
  subtitle,
  data,
  accent = "violet",
}: {
  title: string;
  subtitle: string;
  data: { label: string; value: number }[];
  accent?: "violet" | "fuchsia" | "emerald";
}) {
  const accentClass =
    accent === "fuchsia"
      ? "from-fuchsia-500 to-pink-500"
      : accent === "emerald"
      ? "from-emerald-500 to-teal-500"
      : "from-violet-500 to-purple-500";

  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h2 className="mb-2 text-2xl font-semibold text-neutral-900">{title}</h2>
      <p className="mb-6 leading-7 text-neutral-600">{subtitle}</p>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-neutral-700">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-neutral-900">
                {item.value}%
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${accentClass}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ReliabilityComparisonCard() {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
      <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
        Evidence from prior research
      </h2>

      <p className="leading-7 text-neutral-600">
        Prior work on calibration has shown that modern neural models often
        assign higher confidence than their real success rate. This is the core
        pattern behind overconfidence: the model appears more certain than it
        should be.
      </p>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-neutral-900">
          Reliability diagram intuition
        </h3>
        <p className="mb-6 text-sm leading-7 text-neutral-600">
          A well-calibrated model would align predicted confidence with actual
          accuracy. In overconfident systems, predicted confidence stays above
          real performance.
        </p>

        <div className="space-y-5">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700">
                Predicted confidence
              </span>
              <span className="text-sm font-semibold text-neutral-900">90%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-200">
              <div className="h-3 w-[90%] rounded-full bg-violet-500" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700">
                Actual accuracy
              </span>
              <span className="text-sm font-semibold text-neutral-900">70%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-200">
              <div className="h-3 w-[70%] rounded-full bg-fuchsia-500" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-neutral-600">
          This same gap motivates the present project: very high token-level
          confidence in Gemini can coexist with lower real reliability when
          outputs disagree or fail to remain stable across passes.
        </p>
      </div>
    </article>
  );
}

function MiniScatterCard() {
  const points = [
    { left: "12%", bottom: "18%" },
    { left: "18%", bottom: "68%" },
    { left: "22%", bottom: "74%" },
    { left: "28%", bottom: "32%" },
    { left: "35%", bottom: "80%" },
    { left: "41%", bottom: "72%" },
    { left: "50%", bottom: "40%" },
    { left: "56%", bottom: "84%" },
    { left: "61%", bottom: "76%" },
    { left: "69%", bottom: "48%" },
    { left: "76%", bottom: "86%" },
    { left: "83%", bottom: "44%" },
  ];

  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
      <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
        Confidence does not always imply correctness
      </h2>

      <p className="leading-7 text-neutral-600">
        A useful way to think about overconfidence is to compare confidence with
        correctness directly. In practice, some incorrect generations still
        receive very high confidence, which weakens confidence as a standalone
        reliability signal.
      </p>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="mb-4 flex items-center justify-between text-sm text-neutral-500">
          <span>Low correctness</span>
          <span>High correctness</span>
        </div>

        <div className="relative h-72 rounded-2xl border border-neutral-200 bg-white">
          <div className="absolute bottom-10 left-10 right-6 h-px bg-neutral-300" />
          <div className="absolute bottom-10 left-10 top-6 w-px bg-neutral-300" />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-neutral-500">
            Correctness
          </div>

          <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-neutral-500">
            Confidence
          </div>

          {points.map((point, index) => (
            <div
              key={index}
              className="absolute h-3 w-3 rounded-full bg-violet-500 shadow-sm"
              style={{
                left: point.left,
                bottom: point.bottom,
              }}
            />
          ))}
        </div>

        <p className="mt-4 text-sm leading-7 text-neutral-600">
          The visual intuition is simple: several points remain high on the
          confidence axis despite not being strongly aligned with correctness.
        </p>
      </div>
    </article>
  );
}

export default function GeminiConfidenceInspectorPage() {
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
          AI / LLM Research
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          Gemini{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Confidence
          </span>{" "}
          Inspector
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          Research project focused on confidence estimation in LLM outputs. It
          studies how Gemini token-level signals behave in structured extraction
          and why high internal probability does not always translate into real
          reliability.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/anaxrdonez/gemini-confidence-inspector"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            GitHub Repo
          </a>

          <span className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-sm text-violet-700">
            Research highlight
          </span>

          <span className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
            Private repository (for now)
          </span>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="leading-7 text-neutral-600">
            This project explores a core question in LLM evaluation: can
            token-level probabilities be trusted as a confidence signal? The
            work is grounded in structured document extraction and studies where
            local certainty appears high while true reliability remains limited.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              LLM
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Calibration
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Uncertainty
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              Gemini
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Research question
          </h2>
          <p className="leading-7 text-neutral-600">
            If Gemini assigns near-maximum token confidence to a generated
            output, does that really mean the extracted value is correct,
            grounded, and stable? The project shows that the answer is often no,
            especially in structured generation.
          </p>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Scientific rationale
          </h2>
          <p className="leading-7 text-neutral-600">
            The analysis is based on a simple but important distinction:
            token-level probability is a local decoding signal, while
            reliability is a global property involving factual correctness,
            semantic grounding, and structural consistency. In autoregressive
            models, those two levels do not necessarily align.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            {literaturePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <ReliabilityComparisonCard />

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
            Key findings from the study
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {keyFindings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <HorizontalBarChart
          title="Graph 1 — Local confidence vs actual reliability"
          subtitle="Illustrative view of the main problem: token-level indicators can suggest near-certain confidence while real reliability remains much lower."
          data={tokenLevelVsReality}
          accent="violet"
        />

        <HorizontalBarChart
          title="Graph 2 — Saturated token confidence under disagreement"
          subtitle="Even when both passes look extremely confident at the token level, disagreement across extractions can push final confidence down and reveal instability."
          data={disagreementData}
          accent="fuchsia"
        />

        <MiniScatterCard />

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Why overconfidence appears
          </h2>

          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              The model may strongly prefer one next token over alternatives
              even when the final field is not well grounded in the source
              document.
            </li>
            <li>
              Structural tokens such as JSON punctuation and formatting can
              raise the average confidence without improving semantic
              correctness.
            </li>
            <li>
              Very small negative log-probabilities near zero can create the
              appearance of near-perfect certainty.
            </li>
            <li>
              A sequence can be locally probable step by step and still be
              globally wrong.
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Example interpretation
          </h2>
          <p className="leading-7 text-neutral-600">
            In the study, token-level confidence can remain extremely high
            across two passes while the extracted values still disagree. That is
            exactly the kind of situation where overconfidence becomes visible:
            local probability says “safe”, but cross-pass stability says
            “uncertain”.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
              <p className="text-sm text-violet-700">Pass 1 token confidence</p>
              <p className="mt-2 text-2xl font-bold text-violet-900">0.9999</p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
              <p className="text-sm text-violet-700">Pass 2 token confidence</p>
              <p className="mt-2 text-2xl font-bold text-violet-900">0.9993</p>
            </div>

            <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-4">
              <p className="text-sm text-fuchsia-700">Final confidence</p>
              <p className="mt-2 text-2xl font-bold text-fuchsia-900">0.58</p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-sm text-rose-700">Risk score</p>
              <p className="mt-2 text-2xl font-bold text-rose-900">0.57</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Next improvements
          </h2>

          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>
              Add reliability diagrams and calibration curves from larger
              experiments.
            </li>
            <li>
              Separate semantic tokens from structural tokens more explicitly.
            </li>
            <li>
              Benchmark cross-pass agreement against factual correctness labels.
            </li>
            <li>
              Compare Gemini confidence behavior with other LLM providers.
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}