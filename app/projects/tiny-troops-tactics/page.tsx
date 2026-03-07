import Link from "next/link";

const screenshots = [
  { src: "/Assets/TinyTroopsTactics/1.png", alt: "Tiny Troops Tactics screenshot 1" },
  { src: "/Assets/TinyTroopsTactics/2.png", alt: "Tiny Troops Tactics screenshot 2" },
  { src: "/Assets/TinyTroopsTactics/3.png", alt: "Tiny Troops Tactics screenshot 3" },
  { src: "/Assets/TinyTroopsTactics/4.png", alt: "Tiny Troops Tactics screenshot 4" },
];

const features = [
  "Two-player local multiplayer matches",
  "Map control as the core objective",
  "Fast tactical decisions in real time",
  "Competitive gameplay with a cozy visual style",
];

export default function TinyTroopsTacticsPage() {
  return (
    <main className="min-h-screen bg-[#f4fbf8] text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-emerald-900"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-[#dff7f1] via-[#e9f7ff] to-[#d9efe6] px-8 py-16 shadow-[0_20px_60px_rgba(120,170,160,0.18)] md:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-80px] top-[-60px] h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute bottom-[-80px] right-[-40px] h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-300 bg-white/60 px-3 py-1 text-sm font-medium text-emerald-800">
                Cozy Strategy Game
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Tiny Troops Tactics
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                A local real-time multiplayer game where two players compete to
                conquer the map before their opponent. Tiny Troops Tactics mixes
                quick tactical decisions, territorial control, and a soft,
                colorful visual identity that keeps strategy approachable and fun.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://spinacastudio.itch.io/tiny-troops-tactics"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                >
                  Play on Itch.io
                </a>

                <a
                  href="#video"
                  className="rounded-xl border border-sky-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Watch Gameplay
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Tiny Troops
                  </p>
                  <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-emerald-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Overview
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Conquer the board, one decision at a time
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Tiny Troops Tactics is built around local competitive play, where
              two players battle in real time to dominate the map. The game
              focuses on positioning, timing, and territorial pressure, while
              keeping the experience readable, playful, and visually inviting.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
                Local Multiplayer
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Real-Time
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700">
                Strategy
              </span>
              <span className="rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-sm text-lime-700">
                Competitive
              </span>
            </div>
          </article>

          <article className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-[#f6fdff] to-[#eef8f3] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Highlights
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Fast, readable, and tactical
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-600">
              <li>Two-player local matches designed for direct competition.</li>
              <li>Map control and expansion drive the whole game loop.</li>
              <li>Short, dynamic rounds encourage quick adaptation.</li>
              <li>A cozy pastel presentation softens the competitive tension.</li>
            </ul>
          </article>
        </section>

        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-sky-200 bg-white/85 p-6 shadow-sm"
        >
          <div className="mb-5">
            <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Gameplay
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Gameplay Video
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              A short gameplay clip showing the pace of the matches, the visual
              clarity of the board, and the tension of competing for control of
              the map.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-emerald-200 bg-[#dfeee8] shadow-sm">
            <video controls className="w-full" preload="metadata">
              <source src="/Assets/tttVideo.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="gallery"
          className="mt-10 rounded-[2rem] border border-emerald-200 bg-white/85 p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Gallery
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Screenshots
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              A quick look at the game’s pastel-inspired aesthetic, map layouts,
              and the playful tension of each match.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-[1.5rem] border border-sky-200 bg-[#f4fbff] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-emerald-200 bg-gradient-to-r from-[#e6f8ef] via-[#effaf8] to-[#e7f4ff] p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-sm font-medium text-emerald-700">
                Play
              </div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Try the game
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Play the latest available version on Itch.io and jump straight
                into the map-control battle.
              </p>
            </div>

            <a
              href="https://spinacastudio.itch.io/tiny-troops-tactics"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
            >
              Open Itch.io
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}