"use client";

import Link from "next/link";
import SpeakerParticles from "@/components/SpeakerParticles";

const enemyCards = [
  {
    title: "Bouba 1",
    image: "/Assets/boubaDistrict/Bouba1.png",
    description:
      "A gelatinous creature with an adorable appearance, but more dangerous than it first seems.",
  },
  {
    title: "Bouba 2",
    image: "/Assets/boubaDistrict/Bouba2.png",
    description:
      "A shy blue bouba with a nervous personality and unpredictable behavior.",
  },
  {
    title: "Bouba 3",
    image: "/Assets/boubaDistrict/Bouba3.png",
    description:
      "A vibrant green bouba with a striking visual identity and chaotic energy.",
  },
  {
    title: "Bouba 4",
    image: "/Assets/boubaDistrict/Bouba4.png",
    description:
      "A yellow bouba known for clumsiness, odd behavior, and surprising charm.",
  },
  {
    title: "Bouba 5",
    image: "/Assets/boubaDistrict/Bouba5.png",
    description:
      "An amorphous blue bouba that feels unstable, energetic, and volatile.",
  },
  {
    title: "Bouba 6",
    image: "/Assets/boubaDistrict/Bouba6.png",
    description:
      "A square-shaped bouba with a strange geometric look and unusual movement.",
  },
];

const characterCards = [
  {
    title: "Kiki — Vocals",
    image: "/Assets/boubaDistrict/kiki.png",
    description:
      "The soul of the band, with a voice powerful enough to rally the city.",
  },
  {
    title: "Kike — Guitar",
    image: "/Assets/boubaDistrict/kike.png",
    description:
      "The rhythmic heart of the group, bringing energy and musical precision.",
  },
  {
    title: "Kiko — Drums",
    image: "/Assets/boubaDistrict/kiko.png",
    description:
      "The engine of the band, driving the action with powerful beats.",
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
  },
  {
    title: "Press the right buttons",
    description:
      "Hit the correct keys at the right moment to perform attacks and maintain your combo.",
  },
  {
    title: "Defeat the Boubas",
    description:
      "Successful rhythmic inputs turn the band’s performance into attacks that defeat the Bouba enemies and protect the district.",
  },
];

const gifs = [
  { title: "Dance", image: "/Assets/boubaDistrict/dance.gif" },
  { title: "Punch", image: "/Assets/boubaDistrict/punch.gif" },
  { title: "Kick", image: "/Assets/boubaDistrict/kick.gif" },
  { title: "Samba", image: "/Assets/boubaDistrict/samba.gif" },
];

export default function BoubaDistrictPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpeakerParticles />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">

      <Link
        href="/#games"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-fuchsia-900 via-violet-900 to-slate-900 px-8 py-14 text-white shadow-lg md:px-12 md:py-16">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-fuchsia-100">
            Rhythm Combat Game
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Bouba District
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-200">
            A rhythm-based action game where players press buttons in time with
            the music to attack and defeat the Bouba enemies threatening the
            city.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://syncstudios-games.itch.io/bouba-district"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Play on Itch.io
            </a>

            <a
              href="#how-to-play"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              How to Play
            </a>

            <a
              href="#trailer"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Introduction
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            What is Bouba District?
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            Bouba District is a rhythm game with action-driven combat. Players
            must react to the music, press the correct buttons at the right
            time, and use rhythm as a weapon to defeat waves of cute but
            dangerous Bouba creatures.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <img
              src="/Assets/boubaDistrict/Caratula.jpg"
              alt="Bouba District cover art"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/Assets/boubaDistrict/Caratula2.png"
                alt="Bouba District secondary cover"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5">
              <p className="text-lg font-medium text-fuchsia-800">
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
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Open Itch.io
          </a>
        </div>
      </section>

      <section
        id="how-to-play"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            How to Play
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Feel the rhythm, hit the buttons, defeat the Boubas
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            Bouba District is a rhythm game in which the player must press the
            correct buttons in sync with the music. Every successful input turns
            the band’s performance into an attack, helping you defeat the Bouba
            enemies and protect the district.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {howToPlaySteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-lg font-bold text-fuchsia-700">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="trailer"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Trailer
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Watch the game in action
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            A quick look at the musical combat, visual style, and overall energy
            of Bouba District.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
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

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Art Book
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Explore the project book
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Click the book cover to open the interactive flipbook and explore
              the concept, visuals, and development material behind Bouba
              District.
            </p>
          </div>

          <a
            href="https://heyzine.com/flip-book/b6a276aead.html"
            target="_blank"
            rel="noreferrer"
            className="group mx-auto block max-w-[220px]"
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
              <img
                src="/Assets/boubaDistrict/P2.jpg"
                alt="Bouba District art book cover"
                className="h-auto w-full object-contain"
              />
            </div>
          </a>
        </div>
      </section>

      <section
        id="concept"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
          Concept
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Rhythm meets defense
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
          Bouba District mixes rhythm-game interaction with defense mechanics.
          The main objective is to stop the creatures from invading the city by
          entering key sequences in time with the music.
        </p>
      </section>

      <section
        id="story"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Story & Enemies
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            The world of the Boubas
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            A failed experiment created the Boubas: adorable but dangerous
            creatures threatening the city. Kiki must use rhythm and music to
            fight back and protect the district.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enemyCards.map((enemy) => (
            <article
              key={enemy.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <img
                  src={enemy.image}
                  alt={enemy.title}
                  className="h-64 w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                {enemy.title}
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                {enemy.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Main Characters
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Meet the band
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            The boyband behind the fight against the Bouba invasion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {characterCards.map((character) => (
            <article
              key={character.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <img
                  src={character.image}
                  alt={character.title}
                  className="h-72 w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                {character.title}
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                {character.description}
              </p>
            </article>
          ))}
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
            Visuals & Gameplay
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {galleryTop.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
            >
              <img
                src={src}
                alt="Bouba District gallery"
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
          Gameplay Screens
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {gameplayShots.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
            >
              <img
                src={src}
                alt="Bouba District gameplay screenshot"
                className="h-72 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Animations
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Character GIFs
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {gifs.map((gif) => (
            <article
              key={gif.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                {gif.title}
              </h3>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <img
                  src={gif.image}
                  alt={gif.title}
                  className="h-56 w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="videos"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Gameplay Videos
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            More footage
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            A closer look at the intro and tutorial flow of the project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Game Start
            </h3>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
              <video controls className="w-full">
                <source src="/Assets/boubaDistrict/Inicio.mp4" type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
            <p className="mt-3 leading-7 text-neutral-600">
              Intro sequence and first look into the world of Bouba District.
            </p>
          </article>

          <article>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Tutorial
            </h3>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
              <video controls className="w-full">
                <source
                  src="/Assets/boubaDistrict/Tutorial.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video.
              </video>
            </div>
            <p className="mt-3 leading-7 text-neutral-600">
              Learn the rhythm mechanics and how the interaction loop works.
            </p>
          </article>
        </div>
      </section>

      <section
        id="novedades"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            News
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Upcoming content
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            A small preview of new characters and environments planned for the
            project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <img
                src="/Assets/boubaDistrict/Kika.png"
                alt="Kika"
                className="h-72 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-900">
              Kika
            </h3>
            <p className="mt-2 leading-7 text-neutral-600">
              A new band arrives in Bouba District, bringing fresh energy and
              new abilities into the fight.
            </p>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <img
                src="/Assets/boubaDistrict/nuevoEscenario.png"
                alt="New stage"
                className="h-72 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-900">
              New Stage
            </h3>
            <p className="mt-2 leading-7 text-neutral-600">
              A colorful and more challenging environment planned for future
              updates.
            </p>
          </article>
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
              Get in touch
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Got questions, feedback, or ideas about the project? I’d love to
              hear from you.
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