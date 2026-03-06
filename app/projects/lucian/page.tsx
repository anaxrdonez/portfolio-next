import Link from "next/link";

export default function LucianPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/#games"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 px-8 py-16 text-white shadow-lg md:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-violet-100">
            Narrative Game Project
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Lucian
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-200">
            A graphic adventure centered on choices, mystery, and fate.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Discover more
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

      <section
        id="about"
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
            Story
          </h2>
          <p className="leading-7 text-neutral-600">
            Lucian is a graphic adventure about a young man trapped between
            worlds, forced to face difficult choices while uncovering a mystery
            that could change his fate forever.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Narrative
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Adventure
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Mystery
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
              Worldbuilding
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Art Book
          </div>

            <div className="mt-4 flex flex-col items-center gap-4">
            <p className="text-center leading-7 text-neutral-600 max-w-md">
                Explore concepts, characters, and the creative process behind Lucian in the
                project’s art book.
            </p>

            <a
                href="https://heyzine.com/flip-book/29108fcb29.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
                Open Art Book
            </a>
            </div>

          <p className="mt-4 text-center leading-7 text-neutral-600">
            Explore concepts, characters, and the creative process behind
            Lucian through the project’s art book.
          </p>
        </article>
      </section>

      <section
        id="video"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-5">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Project Video
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Video
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A short look at the atmosphere, visuals, and tone of the project.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
          <video controls className="w-full" preload="metadata">
            <source src="/Assets/Lucian/videoLucian.mp4" type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </section>

      <section
        id="tech"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Technology
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Technology Used
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            Main tools used for the visual development and implementation of the
            project.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <h3 className="text-lg font-semibold text-neutral-900">Blender</h3>
            <p className="mt-2 leading-7 text-neutral-600">
              Modeling and animation.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <h3 className="text-lg font-semibold text-neutral-900">Unity</h3>
            <p className="mt-2 leading-7 text-neutral-600">
              Game engine and interactive implementation.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <h3 className="text-lg font-semibold text-neutral-900">
              Photoshop
            </h3>
            <p className="mt-2 leading-7 text-neutral-600">
              Texture design and visual asset work.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <h3 className="text-lg font-semibold text-neutral-900">C#</h3>
            <p className="mt-2 leading-7 text-neutral-600">
              Gameplay logic and behavior programming.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}