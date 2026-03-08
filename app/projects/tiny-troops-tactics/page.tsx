import Link from "next/link";

const screenshots = [
  { src: "/Assets/TinyTroopsTactics/1.png", alt: "Tiny Troops Tactics screenshot 1" },
  { src: "/Assets/TinyTroopsTactics/2.png", alt: "Tiny Troops Tactics screenshot 2" },
  { src: "/Assets/TinyTroopsTactics/3.png", alt: "Tiny Troops Tactics screenshot 3" },
  { src: "/Assets/TinyTroopsTactics/4.png", alt: "Tiny Troops Tactics screenshot 4" },
];

const features = [
  "Two-player local multiplayer matches",
  "Territory conquest as the main objective",
  "Fast tactical decisions in real time",
  "Competitive gameplay with a soft cozy feel",
];

const conquestPoints = [
  "Expand your control across the map before your rival does.",
  "Balance speed, pressure, and positioning in every match.",
  "Short rounds keep the tension high and the gameplay approachable.",
  "A playful visual style makes competition feel friendly and inviting.",
];

export default function TinyTroopsTacticsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f9f6ee_0%,#eef7ea_48%,#f4fbf7_100%)] text-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d8e5d2] bg-white/85 px-4 py-2 text-sm font-medium text-[#4f6b52] shadow-[0_8px_24px_rgba(120,150,110,0.10)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#35523a]"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-[#dbe8d5] bg-[linear-gradient(135deg,#f7efdc_0%,#edf6e8_45%,#e7f4ee_100%)] px-8 py-16 shadow-[0_24px_70px_rgba(128,160,120,0.16)] md:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-70px] top-[-50px] h-56 w-56 rounded-full bg-[#fff2c7]/70 blur-3xl" />
            <div className="absolute right-[-40px] top-[20%] h-52 w-52 rounded-full bg-[#cfead6]/70 blur-3xl" />
            <div className="absolute bottom-[-70px] left-[15%] h-56 w-56 rounded-full bg-[#d9ecff]/60 blur-3xl" />
            <div className="absolute bottom-0 right-[8%] h-40 w-40 rounded-full bg-[#e8ddb9]/50 blur-3xl" />

            <div className="absolute left-[6%] top-[18%] h-16 w-16 rounded-[1.25rem] border border-white/40 bg-white/20 rotate-12" />
            <div className="absolute left-[12%] bottom-[16%] h-12 w-12 rounded-[1rem] border border-white/40 bg-white/20 -rotate-6" />
            <div className="absolute right-[12%] top-[14%] h-14 w-14 rounded-[1rem] border border-white/40 bg-white/20 rotate-6" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#cfe0c7] bg-white/70 px-3 py-1 text-sm font-medium text-[#587254]">
                Cozy Tactical Duel
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-[#2f3d2f] md:text-6xl">
                Tiny Troops Tactics
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d6b5d]">
                A local 1 vs 1 strategy game where two players race to conquer
                the map tile by tile. Tiny Troops Tactics blends territorial
                control, quick decisions, and a gentle handcrafted atmosphere
                that makes competition feel playful, warm, and inviting.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://spinacastudio.itch.io/tiny-troops-tactics"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#6ea56f] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(110,165,111,0.24)] transition hover:-translate-y-0.5 hover:bg-[#5f9660] hover:shadow-[0_14px_30px_rgba(110,165,111,0.30)]"
                >
                  Play on Itch.io
                </a>

                <a
                  href="#video"
                  className="rounded-xl border border-[#d8e5d2] bg-white/70 px-5 py-3 text-sm font-semibold text-[#4a5d49] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Watch Gameplay
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/80 bg-white/72 p-5 shadow-[0_10px_25px_rgba(130,160,120,0.10)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(130,160,120,0.16)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6e7] text-lg">
                      {index === 0 ? "⚑" : index === 1 ? "🗺️" : index === 2 ? "🌿" : "🎮"}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6a8264]">
                      Territory
                    </p>
                  </div>

                  <p className="mt-3 text-base font-medium leading-7 text-[#465346]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[#dde8d8] bg-white/85 p-6 shadow-[0_12px_30px_rgba(130,160,120,0.10)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(130,160,120,0.14)]">
            <div className="mb-3 inline-flex rounded-full border border-[#d8e8d3] bg-[#f3f9ef] px-3 py-1 text-sm font-medium text-[#64815c]">
              Overview
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#2f3d2f]">
              A tiny battlefield with a warm atmosphere
            </h2>

            <p className="mt-4 leading-8 text-[#667266]">
              Tiny Troops Tactics turns territorial conquest into a compact,
              accessible, and visually friendly duel. Instead of leaning into a
              harsh military tone, the game frames map domination through soft
              colors, readable shapes, and a miniature-board-game feeling that
              makes every match feel competitive without losing its charm.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#d7e5f1] bg-[#eef7ff] px-3 py-1 text-sm text-[#5b7992]">
                Local Multiplayer
              </span>
              <span className="rounded-full border border-[#d8ead4] bg-[#f1f9ee] px-3 py-1 text-sm text-[#62815f]">
                Territory Control
              </span>
              <span className="rounded-full border border-[#e8dfc5] bg-[#faf4e7] px-3 py-1 text-sm text-[#927951]">
                Cozy Strategy
              </span>
              <span className="rounded-full border border-[#d6e8de] bg-[#edf8f3] px-3 py-1 text-sm text-[#567d6b]">
                Real-Time
              </span>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d9e7d3] bg-[linear-gradient(180deg,#fffdf8_0%,#f2f8ee_100%)] p-6 shadow-[0_12px_30px_rgba(130,160,120,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(130,160,120,0.14)]">
            <div className="mb-3 inline-flex rounded-full border border-[#e3dcc5] bg-[#faf5e8] px-3 py-1 text-sm font-medium text-[#8d7855]">
              Conquest Loop
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#2f3d2f]">
              Friendly visuals, competitive decisions
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-[#667266]">
              {conquestPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 text-[#7fa676]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-[#dbe7d7] bg-white/85 p-6 shadow-[0_12px_30px_rgba(130,160,120,0.10)]"
        >
          <div className="mb-5">
            <div className="mb-3 inline-flex rounded-full border border-[#dbe8d5] bg-[#f3f9ef] px-3 py-1 text-sm font-medium text-[#64815c]">
              Gameplay
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#2f3d2f]">
              Watch the territory battle unfold
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#667266]">
              A short gameplay clip showing the pace of the duel, the board
              readability, and how both players compete to spread influence and
              secure more ground across the map.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#dce7d8] bg-[#edf4ea] shadow-sm">
            <video controls className="w-full" preload="metadata">
              <source src="/Assets/tttVideo.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="gallery"
          className="mt-10 rounded-[2rem] border border-[#dbe8d5] bg-white/85 p-6 shadow-[0_12px_30px_rgba(130,160,120,0.10)]"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-[#dbe8d5] bg-[#f3f9ef] px-3 py-1 text-sm font-medium text-[#64815c]">
              Gallery
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#2f3d2f]">
              Tiny maps, soft colors, tactical pressure
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#667266]">
              Screenshots highlighting the game’s miniature battlefield feeling,
              territorial expansion, and cozy visual presentation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="group overflow-hidden rounded-[1.5rem] border border-[#d8e6d3] bg-[#f7fbf4] shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(130,160,120,0.14)]"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#dbe8d5] bg-[linear-gradient(90deg,#f8f2df_0%,#eef7ea_52%,#edf8f5_100%)] p-6 shadow-[0_12px_30px_rgba(130,160,120,0.10)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/70 bg-white/70 px-3 py-1 text-sm font-medium text-[#64815c]">
                Play
              </div>

              <h2 className="text-2xl font-semibold text-[#2f3d2f]">
                Step into the cozy showdown
              </h2>

              <p className="mt-2 leading-7 text-[#667266]">
                Play the latest available version on Itch.io and challenge
                another player in this small-scale territorial duel.
              </p>
            </div>

            <a
              href="https://spinacastudio.itch.io/tiny-troops-tactics"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#6ea56f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5f9660] hover:shadow-[0_14px_30px_rgba(110,165,111,0.28)]"
            >
              Open Itch.io
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}