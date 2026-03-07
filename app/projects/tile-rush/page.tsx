import Link from "next/link";

const screenshots = [
  "/Assets/tileRush/tr_1.png",
  "/Assets/tileRush/tr_2.png",
  "/Assets/tileRush/tl_2.2.png",
  "/Assets/tileRush/tr_3.png",
  "/Assets/tileRush/tr_4.png",
  "/Assets/tileRush/tr_5.png",
];

const features = [
  {
    icon: "🕹️",
    title: "Integrated Gravity",
    description:
      "Tiles fall from above, adding a fresh spatial layer to classic 2048-style gameplay.",
  },
  {
    icon: "🎨",
    title: "Style Variations",
    description:
      "Different visual themes help give the experience a more playful and customizable feel.",
  },
  {
    icon: "⏳",
    title: "Move Counter",
    description:
      "Every move matters, encouraging planning and more strategic decision-making.",
  },
];

export default function TileRushPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-sky-900 via-blue-700 to-cyan-500 px-8 py-16 text-white shadow-lg md:px-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-blue-100">
              Puzzle / Logic Game
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tile Rush
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-100">
              A reimagining of 2048 with gravity-based placement, new mechanics,
              and a more strategic rhythm of play.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                Discover more
              </a>

              <a
                href="#screens"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                View screenshots
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Overview
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            What is Tile Rush?
          </h2>
          <p className="mt-3 max-w-4xl leading-8 text-neutral-600">
            <strong className="text-neutral-900">Tile Rush</strong> is a logic
            game inspired by 2048, but redesigned with additional mechanics that
            make it more dynamic. Tiles appear one by one at the top of the
            board and must be dropped into a chosen column, after which the
            player combines values by sliding like in the classic formula. The
            addition of <strong className="text-neutral-900">gravity</strong>{" "}
            and a <strong className="text-neutral-900">move counter</strong>{" "}
            creates a more strategic and tactical version of the genre.
          </p>
        </section>

        <section
          id="features"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Key ideas behind the game
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="howto"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            How to play
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Slide, combine, and keep the board alive
          </h2>

          <p className="mt-3 max-w-4xl leading-8 text-neutral-600">
            In Tile Rush, blocks fall from above with gravity, so each new piece
            immediately adds pressure to the board. While the tiles are dropping,
            the player must{" "}
            <strong className="text-neutral-900">
              slide a finger to the left or right
            </strong>{" "}
            to position them more effectively and prepare future combinations.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-neutral-600">
            The goal is to{" "}
            <strong className="text-neutral-900">
              merge blocks and increase their value
            </strong>
            , just like in 2048, while managing the space available on the
            board. If you do not combine efficiently, the grid fills up quickly
            and you can end up with no room left to continue.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-neutral-600">
            Good play comes from balancing quick reactions with planning ahead:
            guide the falling pieces, create larger merges, and{" "}
            <strong className="text-neutral-900">
              avoid getting stuck without empty spaces
            </strong>
            .
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="text-lg font-semibold text-sky-900">
                1. Watch the fall
              </h3>
              <p className="mt-2 leading-7 text-sky-800/80">
                New blocks keep dropping from above, so the board is always
                changing.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="text-lg font-semibold text-cyan-900">
                2. Slide sideways
              </h3>
              <p className="mt-2 leading-7 text-cyan-800/80">
                Move your finger left or right while blocks fall to guide their
                position.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="text-lg font-semibold text-blue-900">
                3. Merge and survive
              </h3>
              <p className="mt-2 leading-7 text-blue-800/80">
                Combine values, free up space, and stop the board from filling
                completely.
              </p>
            </div>
          </div>
        </section>

        <section
          id="screens"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Screenshots
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Visuals
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
              A quick look at the board, interface, and visual variations of
              Tile Rush.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="flex h-[560px] items-center justify-center bg-neutral-50 p-4">
                  <img
                    src={src}
                    alt="Tile Rush screenshot"
                    className="max-h-full max-w-full object-contain transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Share your ideas
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                Feedback and suggestions are very valuable during development.
                Feel free to reach out with thoughts, ideas, or improvements.
              </p>
            </div>

            <a
              href="mailto:anaordonez.prac@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Send Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}