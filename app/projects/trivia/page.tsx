import Link from "next/link";

const categories = [
  "Music",
  "Movies",
  "Video Games",
  "Series",
  "Entertainment",
  "Pop Culture",
];

const highlights = [
  "Questions inspired by music, movies, games, and entertainment.",
  "A colorful mobile-first interface designed to feel playful and accessible.",
  "Fast quiz sessions that are easy to pick up anytime.",
  "A casual experience built around fun, familiarity, and discovery.",
];

export default function TriviaPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff8fc_0%,#f7f5ff_40%,#eef6ff_100%)] px-6 py-16 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-4 py-2 text-sm font-medium text-fuchsia-800 shadow-[0_8px_24px_rgba(180,120,220,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-fuchsia-900"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-fuchsia-200/60 bg-[linear-gradient(135deg,#ff8ccf_0%,#c084fc_45%,#60a5fa_100%)] px-8 py-16 text-white shadow-[0_24px_70px_rgba(168,85,247,0.24)] md:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-48 w-48 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute right-[-20px] top-[10%] h-56 w-56 rounded-full bg-pink-200/20 blur-3xl" />
            <div className="absolute bottom-[-40px] left-[20%] h-52 w-52 rounded-full bg-sky-200/20 blur-3xl" />

            <div className="absolute left-[8%] top-[20%] text-3xl opacity-70">✨</div>
            <div className="absolute right-[12%] top-[18%] text-4xl opacity-70">⭐</div>
            <div className="absolute right-[18%] bottom-[20%] text-3xl opacity-70">🎵</div>
            <div className="absolute left-[14%] bottom-[18%] text-3xl opacity-70">🎬</div>
            <div className="absolute left-[46%] top-[14%] text-3xl opacity-60">🎮</div>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-pink-50">
                Mobile App / Pop Quiz
              </div>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Trivia Cultura Pop
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                A quiz app focused on pop culture knowledge, from music and
                movies to video games and entertainment. Designed as a playful
                mobile experience, it turns familiar topics into colorful,
                fast-paced question rounds.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-fuchsia-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-fuchsia-50"
                >
                  Discover more
                </a>

                <a
                  href="#apk"
                  className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Download APK
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/20 bg-white/12 p-5 shadow-[0_12px_30px_rgba(80,30,120,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/16"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                      {index === 0 ? "🎤" : index === 1 ? "📱" : index === 2 ? "⚡" : "🧠"}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                      Trivia
                    </p>
                  </div>

                  <p className="mt-3 text-base leading-7 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-10 rounded-[2rem] border border-fuchsia-100 bg-white/85 p-6 shadow-[0_14px_30px_rgba(190,120,220,0.10)] backdrop-blur-sm"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-sm font-medium text-fuchsia-700">
                Introduction
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                What is Trivia Cultura Pop?
              </h2>

              <p className="mt-3 max-w-3xl leading-8 text-neutral-600">
                Trivia Cultura Pop is a mobile quiz application where players can
                test how much they know about popular culture. From music and
                films to video games and entertainment, the app is designed to
                feel lively, familiar, and easy to jump into.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-sm text-fuchsia-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-fuchsia-100 bg-[linear-gradient(180deg,#fff7fd_0%,#f7f3ff_100%)] p-3 shadow-sm">
              <div className="overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-sm">
                <img
                  src="/Assets/trivia/triviaCaratula.jpg"
                  alt="Trivia Cultura Pop cover"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-6 shadow-[0_14px_30px_rgba(120,160,220,0.10)]">
            <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Experience
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Fast, playful, and easy to explore
            </h2>

            <p className="mt-3 leading-8 text-neutral-600">
              The project is built around short and engaging quiz sessions,
              making it ideal for casual play on mobile. Its tone is bright and
              approachable, turning familiar pop culture topics into a lightweight
              and entertaining challenge.
            </p>
          </article>

          <article className="rounded-[2rem] border border-amber-100 bg-[linear-gradient(180deg,#fffdf7_0%,#fff7e8_100%)] p-6 shadow-[0_14px_30px_rgba(230,180,100,0.10)]">
            <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              Highlights
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              A colorful take on trivia
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-neutral-600">
              <li className="flex gap-3">
                <span className="mt-1 text-amber-500">•</span>
                <span>Pop culture topics make the experience instantly familiar.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-500">•</span>
                <span>The visual style feels vibrant, friendly, and app-oriented.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-500">•</span>
                <span>Designed for quick sessions and smooth mobile interaction.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-500">•</span>
                <span>Easy to pick up whether you play casually or competitively.</span>
              </li>
            </ul>
          </article>
        </section>

        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-fuchsia-100 bg-white/85 p-6 shadow-[0_14px_30px_rgba(190,120,220,0.10)]"
        >
          <div className="mb-5">
            <div className="mb-3 inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-sm font-medium text-fuchsia-700">
              App Video
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Watch the app in action
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
              A quick look at the interface, flow, and interaction style of the
              application, showing how the quiz feels on mobile.
            </p>
          </div>

          <div className="mx-auto max-w-[400px] overflow-hidden rounded-[1.75rem] border border-fuchsia-100 bg-[linear-gradient(180deg,#2a123d_0%,#12091e_100%)] p-2 shadow-sm">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
              <video controls className="aspect-[9/16] w-full object-cover">
                <source src="/Assets/trivia/video.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </section>

        <section
          id="apk"
          className="mt-10 rounded-[2rem] border border-sky-100 bg-[linear-gradient(90deg,#fff7fd_0%,#f7f3ff_45%,#eef6ff_100%)] p-6 shadow-[0_14px_30px_rgba(170,140,230,0.10)]"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-sm font-medium text-sky-700">
                APK Download
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Download the application
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                Download the Android build and try the app directly on your
                device.
              </p>
            </div>

            <a
              href="/Assets/trivia/TriviaCulturaPop.apk"
              download="TriviaCulturaPop.apk"
              className="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-fuchsia-700"
            >
              Download APK
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-[2rem] border border-amber-100 bg-white/90 p-6 shadow-[0_14px_30px_rgba(220,180,120,0.10)]"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                Contact
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Get in touch
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                Questions, suggestions, or feedback about the app are always
                welcome.
              </p>
            </div>

            <a
              href="mailto:syncstudiosgames@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Send Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}