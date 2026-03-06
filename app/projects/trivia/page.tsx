import Link from "next/link";

export default function TriviaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/#games"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-pink-900 via-fuchsia-700 to-violet-600 px-8 py-16 text-white shadow-lg md:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-pink-100">
            Mobile App / Quiz Game
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Trivia Cultura Pop
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-100">
            A quiz app focused on pop culture knowledge, from music and movies
            to video games and entertainment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Discover more
            </a>

            <a
              href="#apk"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Download APK
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Introduction
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              What is Trivia Cultura Pop?
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-neutral-600">
              Trivia Cultura Pop is a quiz application where players can test
              how much they know about popular culture. From music and films to
              video games, the experience is designed to be playful, familiar,
              and easy to jump into.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm text-pink-700">
                Mobile App
              </span>
              <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm text-pink-700">
                Quiz
              </span>
              <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm text-pink-700">
                Pop Culture
              </span>
              <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm text-pink-700">
                Casual Game
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <img
              src="/Assets/trivia/triviaCaratula.jpg"
              alt="Trivia Cultura Pop cover"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="video" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            App Video
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Watch the app in action
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A quick look at the interface, flow, and interaction style of the
            application.
          </p>
        </div>

        <div className="mx-auto max-w-[400px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
          <video controls className="aspect-[9/16] w-full object-cover">
            <source src="/Assets/trivia/video.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </section>

      <section id="apk" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              APK Download
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Download the application
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Download the Android build and try the game directly on your
              device.
            </p>
          </div>

          <a
            href="/Assets/trivia/TriviaCulturaPop.apk"
            download="TriviaCulturaPop.apk"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Download APK
          </a>
        </div>
      </section>

      <section id="contact" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Get in touch
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Questions, suggestions, or feedback are always welcome.
            </p>
          </div>

          <a
            href="mailto:syncstudiosgames@gmail.com"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
}