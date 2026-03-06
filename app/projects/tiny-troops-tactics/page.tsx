import Link from "next/link";

const screenshots = [
  { src: "/Assets/TinyTroopsTactics/1.png", alt: "Tiny Troops Tactics screenshot 1" },
  { src: "/Assets/TinyTroopsTactics/2.png", alt: "Tiny Troops Tactics screenshot 2" },
  { src: "/Assets/TinyTroopsTactics/3.png", alt: "Tiny Troops Tactics screenshot 3" },
  { src: "/Assets/TinyTroopsTactics/4.png", alt: "Tiny Troops Tactics screenshot 4" },
];

export default function TinyTroopsTacticsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/#games"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-900 via-neutral-800 to-violet-900 px-8 py-16 text-white shadow-lg md:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-violet-100">
            Game Project
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tiny Troops Tactics
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-200">
            Local real-time multiplayer game where two players compete to
            conquer the map before their opponent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://spinacastudio.itch.io/tiny-troops-tactics"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Play on Itch.io
            </a>

            <a
              href="#video"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Watch video
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Overview
          </h2>
          <p className="leading-7 text-neutral-600">
            Tiny Troops Tactics is a local multiplayer experience where two
            players battle in real time to control the map. The game focuses on
            pressure, positioning, and quick decision-making.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Local Multiplayer
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Real-Time
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Strategy
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Competitive
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Highlights
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
            <li>Two-player local competitive gameplay.</li>
            <li>Fast matches built around map control.</li>
            <li>Immediate, readable strategy decisions.</li>
            <li>Arcade-style pacing with tactical pressure.</li>
          </ul>
        </article>
      </section>

      <section
        id="video"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-5">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Gameplay
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Gameplay Video
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A short gameplay clip showing the core loop and the pace of the
            match.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
          <video controls className="w-full" preload="metadata">
            <source src="/Assets/tttVideo.mp4" type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </section>

      <section
        id="gallery"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Gallery
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Screenshots
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A quick look at the game’s visual style, maps, and gameplay moments.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((shot) => (
            <div
              key={shot.src}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
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

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Try the game
            </h2>
            <p className="mt-2 leading-7 text-neutral-600">
              Play the latest available version on Itch.io.
            </p>
          </div>

          <a
            href="https://spinacastudio.itch.io/tiny-troops-tactics"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Open Itch.io
          </a>
        </div>
      </section>
    </main>
  );
}