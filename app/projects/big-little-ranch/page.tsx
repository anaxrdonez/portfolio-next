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

export default function BigLittleRanchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-emerald-50 to-lime-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-700 px-8 py-16 text-white shadow-lg md:px-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-emerald-100">
              Game Project
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Big Little Ranch
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-100">
              An illustrated clicker game created in Illustrator and implemented
              in Adobe Animate, where players gather wheat, expand their land,
              and uncover new areas of the ranch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                Discover more
              </a>

              <a
                href="#how-to-play"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                How to play
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

        <section className="mt-10 grid gap-6 md:grid-cols-2" id="about">
          <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              Overview
            </h2>
            <p className="leading-7 text-neutral-600">
              Big Little Ranch is a clicker game project built around illustration,
              stylized environments, and a charming rural visual direction. The
              project combines asset design with interactive implementation in
              Adobe Animate.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Clicker
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Illustrator
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Adobe Animate
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Environment Art
              </span>
            </div>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              Focus
            </h2>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-neutral-600">
              <li>Illustrated tile-based worldbuilding.</li>
              <li>Playful and readable visual language.</li>
              <li>Resource collection and territory expansion.</li>
              <li>Asset consistency across the full environment set.</li>
            </ul>
          </article>
        </section>

        <section
          id="how-to-play"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              How to Play
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Gather resources and expand the ranch
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
              Big Little Ranch is a clicker game implemented in Adobe Animate.
              The core gameplay loop revolves around collecting wheat as a
              resource, using it to unlock new land, and gradually expanding
              the ranch to discover additional areas and structures.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-3 text-2xl">🌾</div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Collect wheat
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Click to gather wheat and build the resources needed to expand
                the ranch.
              </p>
            </article>

            <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-3 text-2xl">🗺️</div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Expand territory
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Spend wheat to unlock more land and continue growing your ranch.
              </p>
            </article>

            <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-3 text-2xl">🏕️</div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Discover new zones
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                As you expand, new illustrated tiles and areas appear,
                revealing more of the world.
              </p>
            </article>
          </div>
        </section>

        <section
          id="video"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur"
        >
          <div className="mb-5">
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Video
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Project Video
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
              A quick look at the interaction and tile style of the project.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
            <video controls className="w-full" preload="metadata">
              <source src="/Assets/Tiles/blrVideo.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="tiles"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Tiles
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Environment Assets
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
              A collection of illustrated tiles used to build the ranch world.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tiles.map((tile) => (
              <article
                key={tile.src}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <img
                    src={tile.src}
                    alt={tile.title}
                    className="h-64 w-full object-contain p-4 md:h-72"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 text-center text-base font-medium text-neutral-700">
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