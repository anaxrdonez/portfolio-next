import Link from "next/link";

const tiles = [
  { src: "/Assets/Tiles/Árboles.png", title: "Trees" },
  { src: "/Assets/Tiles/Camping.png", title: "Camping" },
  { src: "/Assets/Tiles/Granja.png", title: "Farm" },
  { src: "/Assets/Tiles/GranjaAnimales.png", title: "Animal Farm" },
  { src: "/Assets/Tiles/Molino.png", title: "Mill" },
  { src: "/Assets/Tiles/Montañas2.png", title: "Mountains" },
  { src: "/Assets/Tiles/Prado.png", title: "Meadow" },
  { src: "/Assets/Tiles/Pueblo.png", title: "Town" },
  { src: "/Assets/Tiles/Shadow.png", title: "Shadow" },
  { src: "/Assets/Tiles/trigo.png", title: "Wheat" },
];

const gameplaySteps = [
  {
    icon: "🌾",
    title: "Harvest wheat",
    description:
      "Tap and gather wheat to grow your resources little by little.",
  },
  {
    icon: "🪵",
    title: "Unlock new land",
    description:
      "Spend what you collect to open up more cozy parts of the ranch.",
  },
  {
    icon: "🏡",
    title: "Grow your world",
    description:
      "Discover new structures, paths, and charming illustrated areas.",
  },
];

export default function BigLittleRanchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#f8f3df_30%,#eef8df_65%,#e2f2c9_100%)]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-20 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
        <div className="absolute right-[10%] top-28 h-32 w-32 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute bottom-24 left-[8%] h-40 w-40 rounded-full bg-lime-200/30 blur-3xl" />
        <div className="absolute bottom-12 right-[12%] h-32 w-32 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="absolute left-[12%] top-24 rounded-full bg-white/80 px-6 py-3 shadow-sm">
          <span className="text-xl">☁️</span>
        </div>
        <div className="absolute right-[18%] top-36 rounded-full bg-white/80 px-6 py-3 shadow-sm">
          <span className="text-xl">☁️</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d9c9a7] bg-[#fffaf0]/90 px-4 py-2 text-sm font-semibold text-[#6b5b3e] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2.5rem] border border-[#e7d7b8] bg-[linear-gradient(135deg,#fff8e8_0%,#f9f0d2_35%,#eef6cf_100%)] px-8 py-14 shadow-[0_20px_60px_rgba(120,100,40,0.12)] md:px-12 md:py-16">
          <div className="absolute right-[-40px] top-[-30px] h-40 w-40 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute bottom-[-50px] left-[-20px] h-40 w-40 rounded-full bg-lime-200/40 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#e2c98f] bg-[#fff5cf] px-4 py-1.5 text-sm font-semibold text-[#8b6b2f]">
                Cozy Clicker Game
              </div>

              <h1 className="text-4xl font-black tracking-tight text-[#4e4025] md:text-6xl">
                Big Little Ranch
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6f6042]">
                A warm and charming clicker experience where players harvest
                wheat, unlock new pieces of land, and slowly build a peaceful
                little ranch full of illustrated personality.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="rounded-2xl border border-[#d8bf84] bg-[#f8d97a] px-5 py-3 text-sm font-bold text-[#5b4616] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  🌾 Discover more
                </a>

                <a
                  href="#how-to-play"
                  className="rounded-2xl border border-[#d9c9a7] bg-white/70 px-5 py-3 text-sm font-bold text-[#6b5b3e] shadow-sm transition hover:-translate-y-1 hover:bg-white"
                >
                  🐑 How to play
                </a>

                <a
                  href="#video"
                  className="rounded-2xl border border-[#d9c9a7] bg-white/70 px-5 py-3 text-sm font-bold text-[#6b5b3e] shadow-sm transition hover:-translate-y-1 hover:bg-white"
                >
                  🎥 Watch video
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-[#7a6a49]">
                <span className="rounded-full bg-white/75 px-4 py-2 shadow-sm">
                  + Wheat collection
                </span>
                <span className="rounded-full bg-white/75 px-4 py-2 shadow-sm">
                  + Land expansion
                </span>
                <span className="rounded-full bg-white/75 px-4 py-2 shadow-sm">
                  + Cozy exploration
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[2rem] border border-[#e7d7b8] bg-white/70 p-5 shadow-sm">
                <div className="mb-3 text-3xl">🌾</div>
                <h2 className="text-xl font-bold text-[#4e4025]">
                  Relaxed resource loop
                </h2>
                <p className="mt-2 leading-7 text-[#6f6042]">
                  Harvest, spend, unlock, repeat. A simple progression loop
                  that feels light, rewarding, and satisfying.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#e7d7b8] bg-white/70 p-5 shadow-sm">
                <div className="mb-3 text-3xl">🏡</div>
                <h2 className="text-xl font-bold text-[#4e4025]">
                  Handcrafted farm mood
                </h2>
                <p className="mt-2 leading-7 text-[#6f6042]">
                  Illustrated tiles, soft colors, and a playful rural setting
                  designed to feel welcoming and calm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2" id="about">
          <article className="rounded-[2rem] border border-[#e7d7b8] bg-[#fffaf0]/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-[#4e4025]">
              Overview
            </h2>
            <p className="leading-8 text-[#6f6042]">
              Big Little Ranch is a cozy clicker game project centered on
              illustrated environment design, soft progression, and a playful
              farm atmosphere. The project combines asset creation in
              Illustrator with interactive implementation in Adobe Animate.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Clicker", "Illustrator", "Adobe Animate", "Environment Art"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#ead9b5] bg-[#fff3cf] px-3 py-1 text-sm font-medium text-[#8b6b2f]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#e7d7b8] bg-[#fffaf0]/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-[#4e4025]">Cozy feel</h2>
            <ul className="space-y-3 leading-8 text-[#6f6042]">
              <li>🐣 Soft, friendly visual language.</li>
              <li>🌱 Gentle progression through collecting and expanding.</li>
              <li>🧺 Readable and cute tile-based worldbuilding.</li>
              <li>✨ A calm, collectible atmosphere with playful charm.</li>
            </ul>
          </article>
        </section>

        <section
          id="how-to-play"
          className="mt-10 rounded-[2rem] border border-[#e7d7b8] bg-[#fffaf0]/90 p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-[#ead9b5] bg-[#fff3cf] px-3 py-1 text-sm font-semibold text-[#8b6b2f]">
              How to Play
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#4e4025]">
              Small actions, cozy rewards
            </h2>

            <p className="mt-3 max-w-4xl leading-8 text-[#6f6042]">
              The gameplay loop is simple and satisfying: collect wheat, invest
              your resources, and gradually open up more of the ranch. The
              sense of progress comes from watching the world become larger,
              fuller, and more alive over time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {gameplaySteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-[#e7d7b8] bg-[linear-gradient(180deg,#fffdf7_0%,#f8f1df_100%)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{step.icon}</div>
                <h3 className="text-xl font-bold text-[#4e4025]">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-[#6f6042]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-[#e7d7b8] bg-[#fffaf0]/90 p-6 shadow-sm"
        >
          <div className="mb-5">
            <div className="mb-3 inline-flex rounded-full border border-[#ead9b5] bg-[#fff3cf] px-3 py-1 text-sm font-semibold text-[#8b6b2f]">
              Video
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#4e4025]">
              A peek into the ranch
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#6f6042]">
              A quick look at the game’s interaction, illustrated world, and
              gentle clicker rhythm.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[#decba1] bg-[#5f5137] shadow-sm">
            <video controls className="w-full" preload="metadata">
              <source src="/Assets/Tiles/blrVideo.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="tiles"
          className="mt-10 rounded-[2rem] border border-[#e7d7b8] bg-[#fffaf0]/90 p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-[#ead9b5] bg-[#fff3cf] px-3 py-1 text-sm font-semibold text-[#8b6b2f]">
              Unlockables
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#4e4025]">
              Ranch world collection
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#6f6042]">
              These illustrated tiles shape the identity of the ranch. Framing
              them as collectible unlockables makes the page feel more like a
              cozy clicker world.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tiles.map((tile, index) => (
              <article
                key={tile.src}
                className="group rounded-[1.75rem] border border-[#e7d7b8] bg-[linear-gradient(180deg,#fffdf8_0%,#f7efd9_100%)] p-4 shadow-sm transition duration-200 hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#f8d97a] px-3 py-1 text-xs font-bold text-[#5b4616]">
                    Unlock #{index + 1}
                  </span>
                  <span className="text-lg">✨</span>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-[#e7d7b8] bg-white">
                  <img
                    src={tile.src}
                    alt={tile.title}
                    className="h-56 w-full object-contain p-4 transition duration-300 group-hover:scale-105 md:h-64"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 text-center text-base font-bold text-[#5d4c2f]">
                  {tile.title}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}