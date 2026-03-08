"use client";

import Link from "next/link";
import SpeakerParticles from "@/components/SpeakerParticles";

const enemyCards = [
  {
    title: "Bouba 1",
    image: "/Assets/boubaDistrict/Bouba1.png",
    description:
      "A gelatinous creature with an adorable appearance, but more dangerous than it first seems.",
    accent: "from-pink-400/30 to-fuchsia-500/10",
  },
  {
    title: "Bouba 2",
    image: "/Assets/boubaDistrict/Bouba2.png",
    description:
      "A shy blue bouba with a nervous personality and unpredictable behavior.",
    accent: "from-cyan-400/30 to-sky-500/10",
  },
  {
    title: "Bouba 3",
    image: "/Assets/boubaDistrict/Bouba3.png",
    description:
      "A vibrant green bouba with a striking visual identity and chaotic energy.",
    accent: "from-lime-400/30 to-emerald-500/10",
  },
  {
    title: "Bouba 4",
    image: "/Assets/boubaDistrict/Bouba4.png",
    description:
      "A yellow bouba known for clumsiness, odd behavior, and surprising charm.",
    accent: "from-yellow-300/35 to-orange-400/10",
  },
  {
    title: "Bouba 5",
    image: "/Assets/boubaDistrict/Bouba5.png",
    description:
      "An amorphous blue bouba that feels unstable, energetic, and volatile.",
    accent: "from-indigo-400/30 to-cyan-400/10",
  },
  {
    title: "Bouba 6",
    image: "/Assets/boubaDistrict/Bouba6.png",
    description:
      "A square-shaped bouba with a strange geometric look and unusual movement.",
    accent: "from-violet-400/30 to-pink-400/10",
  },
];

const characterCards = [
  {
    title: "Kiki — Vocals",
    image: "/Assets/boubaDistrict/kiki.png",
    description:
      "The soul of the band, with a voice powerful enough to rally the city.",
    accent: "from-pink-400/30 to-rose-400/10",
  },
  {
    title: "Kike — Guitar",
    image: "/Assets/boubaDistrict/kike.png",
    description:
      "The rhythmic heart of the group, bringing energy and musical precision.",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    title: "Kiko — Drums",
    image: "/Assets/boubaDistrict/kiko.png",
    description:
      "The engine of the band, driving the action with powerful beats.",
    accent: "from-yellow-300/35 to-fuchsia-400/10",
  },
];

const galleryTop = [
  "/Assets/boubaDistrict/captura1.jpg",
  "/Assets/boubaDistrict/captura2.jpg",
  "/Assets/boubaDistrict/captura3.jpg",
];

const gameplayShots = [
  "/Assets/boubaDistrict/1.png",
  "/Assets/boubaDistrict/2.png",
  "/Assets/boubaDistrict/3.png",
  "/Assets/boubaDistrict/4.png",
];

const howToPlaySteps = [
  {
    title: "Follow the beat",
    description:
      "Listen to the music and keep track of the rhythm pattern during each encounter.",
    color: "from-pink-400 to-fuchsia-500",
  },
  {
    title: "Press the right buttons",
    description:
      "Hit the correct keys at the right moment to perform attacks and maintain your combo.",
    color: "from-cyan-400 to-sky-500",
  },
  {
    title: "Defeat the Boubas",
    description:
      "Successful rhythmic inputs turn the band’s performance into attacks that defeat the Bouba enemies and protect the district.",
    color: "from-yellow-300 to-orange-400",
  },
];

const gifs = [
  { title: "Dance", image: "/Assets/boubaDistrict/dance.gif" },
  { title: "Punch", image: "/Assets/boubaDistrict/punch.gif" },
  { title: "Kick", image: "/Assets/boubaDistrict/kick.gif" },
  { title: "Samba", image: "/Assets/boubaDistrict/samba.gif" },
];

const sectionClass =
  "relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-8";

const cardClass =
  "group relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-fuchsia-300/30 hover:shadow-[0_0_40px_rgba(217,70,239,0.22)]";

export default function BoubaDistrictPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#4c1d95_0%,_#312e81_22%,_#1e1b4b_45%,_#111827_75%,_#09090b_100%)] text-white">
      <SpeakerParticles />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-7rem] top-[-5rem] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-6rem] top-[8rem] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-8rem] left-[20%] h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.18)_70%,_rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 px-8 py-14 text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl md:px-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%),linear-gradient(135deg,rgba(236,72,153,0.18),rgba(139,92,246,0.15),rgba(34,211,238,0.10),rgba(250,204,21,0.08))]" />
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <div className="absolute bottom-[-2rem] right-[10%] h-28 w-28 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 blur-sm" />

          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 px-4 py-1.5 text-sm font-semibold text-fuchsia-100 shadow-[0_0_20px_rgba(217,70,239,0.25)]">
              ✦ Rhythm Combat Game
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-pink-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                Bouba District
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Cute chaos, musical battles, and colorful rhythm-powered combat in
              a city full of Boubas.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Rhythm", "Combat", "Cute Chaos", "Band Energy"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/85 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://syncstudios-games.itch.io/bouba-district"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(217,70,239,0.35)] transition hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Play on Itch.io
              </a>

              <a
                href="#how-to-play"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                How to Play
              </a>

              <a
                href="#trailer"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </section>

        <section id="about" className={`mt-10 ${sectionClass}`}>
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Introduction
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              What is Bouba District?
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              Bouba District is a rhythm game with action-driven combat. Players
              must react to the music, press the correct buttons at the right
              time, and use rhythm as a weapon to defeat waves of cute but
              dangerous Bouba creatures.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
              <img
                src="/Assets/boubaDistrict/Caratula.jpg"
                alt="Bouba District cover art"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
                <img
                  src="/Assets/boubaDistrict/Caratula2.png"
                  alt="Bouba District secondary cover"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="rounded-[1.75rem] border border-fuchsia-300/20 bg-gradient-to-r from-fuchsia-400/15 to-cyan-400/10 p-5">
                <p className="text-lg font-medium text-fuchsia-100">
                  Music is not just style here — it is the way you fight back.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://syncstudios-games.itch.io/bouba-district"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Open Itch.io
            </a>
          </div>
        </section>

        <section id="how-to-play" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              How to Play
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Feel the rhythm, hit the buttons, defeat the Boubas
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              Bouba District is a rhythm game in which the player must press the
              correct buttons in sync with the music. Every successful input
              turns the band’s performance into an attack, helping you defeat
              the Bouba enemies and protect the district.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {howToPlaySteps.map((step, index) => (
              <article key={step.title} className={cardClass}>
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-xl font-black text-white shadow-[0_0_24px_rgba(255,255,255,0.12)]`}
                >
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-white/75">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="trailer" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Trailer
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Watch the game in action
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              A quick look at the musical combat, visual style, and overall
              energy of Bouba District.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-black/40 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
            <video
              autoPlay
              loop
              controls
              className="max-h-[560px] w-full object-cover"
            >
              <source src="/Assets/boubaDistrict/trailer.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section className={`mt-10 ${sectionClass}`}>
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
                Art Book
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Explore the project book
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/75">
                Click the book cover to open the interactive flipbook and
                explore the concept, visuals, and development material behind
                Bouba District.
              </p>
            </div>

            <a
              href="https://heyzine.com/flip-book/b6a276aead.html"
              target="_blank"
              rel="noreferrer"
              className="group mx-auto block max-w-[220px]"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition duration-300 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_0_40px_rgba(217,70,239,0.22)]">
                <img
                  src="/Assets/boubaDistrict/P2.jpg"
                  alt="Bouba District art book cover"
                  className="h-auto w-full object-contain"
                />
              </div>
            </a>
          </div>
        </section>

        <section id="concept" className={`mt-10 ${sectionClass}`}>
          <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
            Concept
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Rhythm meets defense
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-white/75">
            Bouba District mixes rhythm-game interaction with defense mechanics.
            The main objective is to stop the creatures from invading the city
            by entering key sequences in time with the music.
          </p>
        </section>

        <section id="story" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Story & Enemies
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              The world of the Boubas
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              A failed experiment created the Boubas: adorable but dangerous
              creatures threatening the city. Kiki must use rhythm and music to
              fight back and protect the district.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {enemyCards.map((enemy) => (
              <article key={enemy.title} className={cardClass}>
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${enemy.accent} blur-2xl`}
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                  <img
                    src={enemy.image}
                    alt={enemy.title}
                    className="relative z-10 h-64 w-full object-contain transition duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {enemy.title}
                </h3>
                <p className="mt-2 leading-7 text-white/75">
                  {enemy.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Main Characters
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Meet the band
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              The boyband behind the fight against the Bouba invasion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {characterCards.map((character) => (
              <article key={character.title} className={cardClass}>
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${character.accent} blur-2xl`}
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                  <img
                    src={character.image}
                    alt={character.title}
                    className="relative z-10 h-72 w-full object-contain transition duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {character.title}
                </h3>
                <p className="mt-2 leading-7 text-white/75">
                  {character.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Gallery
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Visuals & Gameplay
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {galleryTop.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={src}
                  alt="Bouba District gallery"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-white">
            Gameplay Screens
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {gameplayShots.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={src}
                  alt="Bouba District gameplay screenshot"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Animations
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Character GIFs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {gifs.map((gif) => (
              <article
                key={gif.title}
                className="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {gif.title}
                </h3>
                <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                  <img
                    src={gif.image}
                    alt={gif.title}
                    className="h-56 w-full object-contain transition duration-300 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="videos" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              Gameplay Videos
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              More footage
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              A closer look at the intro and tutorial flow of the project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Game Start
              </h3>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/40 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                <video controls className="w-full">
                  <source src="/Assets/boubaDistrict/Inicio.mp4" type="video/mp4" />
                  Your browser does not support the video.
                </video>
              </div>
              <p className="mt-3 leading-7 text-white/75">
                Intro sequence and first look into the world of Bouba District.
              </p>
            </article>

            <article>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Tutorial
              </h3>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/40 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                <video controls className="w-full">
                  <source
                    src="/Assets/boubaDistrict/Tutorial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video.
                </video>
              </div>
              <p className="mt-3 leading-7 text-white/75">
                Learn the rhythm mechanics and how the interaction loop works.
              </p>
            </article>
          </div>
        </section>

        <section id="novedades" className={`mt-10 ${sectionClass}`}>
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              News
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Upcoming content
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-white/75">
              A small preview of new characters and environments planned for the
              project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className={cardClass}>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                <img
                  src="/Assets/boubaDistrict/Kika.png"
                  alt="Kika"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Kika</h3>
              <p className="mt-2 leading-7 text-white/75">
                A new band arrives in Bouba District, bringing fresh energy and
                new abilities into the fight.
              </p>
            </article>

            <article className={cardClass}>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                <img
                  src="/Assets/boubaDistrict/nuevoEscenario.png"
                  alt="New stage"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                New Stage
              </h3>
              <p className="mt-2 leading-7 text-white/75">
                A colorful and more challenging environment planned for future
                updates.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className={`mt-10 ${sectionClass}`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/75">
                Got questions, feedback, or ideas about the project? I’d love
                to hear from you.
              </p>
            </div>

            <a
              href="mailto:anaordonez.prac@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.32)] transition hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Send Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}