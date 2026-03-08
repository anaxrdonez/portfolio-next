"use client";

import Link from "next/link";
import { Silkscreen } from "next/font/google";
import { useEffect, useState } from "react";
import DownloadRequestForm from "@/components/DownloadRequestForm";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type SpriteAnimationProps = {
  frames: string[];
  alt: string;
  width?: number;
  height?: number;
  fps?: number;
  className?: string;
  loop?: boolean;
};

function SpriteAnimation({
  frames,
  alt,
  width = 220,
  height = 220,
  fps = 8,
  className = "",
  loop = true,
}: SpriteAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!frames.length) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev === frames.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frames, fps, loop]);

  if (!frames.length) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <img
        src={frames[currentFrame]}
        alt={alt}
        className="h-full w-full object-contain pixelated"
        draggable={false}
      />
    </div>
  );
}

type ImageCarouselProps = {
  images: string[];
  alt?: string;
  autoPlay?: boolean;
  interval?: number;
};

function ImageCarousel({
  images,
  alt = "Carousel image",
  autoPlay = true,
  interval = 3200,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images.length) return null;

  return (
    <div className="relative overflow-hidden rounded-md border-4 border-[#4a3322] bg-[#e9d4a9] shadow-[6px_6px_0_#4a3322]">
      <div className="aspect-[16/9] w-full">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="h-full w-full object-cover pixelated"
        />
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className={`${silkscreen.className} absolute left-3 top-1/2 -translate-y-1/2 rounded-md border-2 border-[#4a3322] bg-[#ffe39a] px-3 py-2 text-xs text-[#2b1d12] shadow-[3px_3px_0_#4a3322] transition hover:-translate-y-[52%] hover:bg-[#ffecb8]`}
        aria-label="Previous image"
      >
        ◀
      </button>

      <button
        type="button"
        onClick={goToNext}
        className={`${silkscreen.className} absolute right-3 top-1/2 -translate-y-1/2 rounded-md border-2 border-[#4a3322] bg-[#ffe39a] px-3 py-2 text-xs text-[#2b1d12] shadow-[3px_3px_0_#4a3322] transition hover:-translate-y-[52%] hover:bg-[#ffecb8]`}
        aria-label="Next image"
      >
        ▶
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-md border-2 border-[#4a3322] bg-[#f8ecd4]/95 px-3 py-2 shadow-[3px_3px_0_#4a3322]">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 border-2 border-[#4a3322] ${
              current === index ? "bg-[#d9a441]" : "bg-[#fff3cc]"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const panelClass =
  "rounded-md border-4 border-[#4a3322] bg-[#f8ecd4] p-6 shadow-[6px_6px_0_#4a3322]";
const smallPanelClass =
  "rounded-md border-4 border-[#4a3322] bg-[#f3dfbb] p-5 shadow-[4px_4px_0_#4a3322] transition hover:-translate-y-1 hover:bg-[#fae8c5] hover:shadow-[6px_6px_0_#4a3322]";
const badgeClass =
  "inline-flex rounded-md border-2 border-[#4a3322] bg-[#ffe39a] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#3a2818]";
const buttonPrimaryClass =
  "rounded-md border-4 border-[#4a3322] bg-[#d9a441] px-5 py-3 text-sm font-bold text-[#2b1d12] shadow-[4px_4px_0_#4a3322] transition hover:-translate-y-0.5 hover:bg-[#e5b34f] active:translate-y-[2px] active:shadow-[2px_2px_0_#4a3322]";
const buttonSecondaryClass =
  "rounded-md border-4 border-[#4a3322] bg-[#fff1c7] px-5 py-3 text-sm font-bold text-[#2b1d12] shadow-[4px_4px_0_#4a3322] transition hover:-translate-y-0.5 hover:bg-[#fff5d9] active:translate-y-[2px] active:shadow-[2px_2px_0_#4a3322]";

const dipperFrames = [
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d1m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d2M copia.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d3m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d4m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d5m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d6m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d7m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d8m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d9m.png",
  "/Assets/gravityfalls/DIPPER/marron/DIPPER MARRON/derecha_izq/d10m.png",
];

const mabelWalkRightFrames = [
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha1.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha2.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha3.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha4.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha5.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha6.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha7.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha8.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha9.png",
  "/Assets/gravityfalls/MABEL/Caminando derecha/derecha10.png",
];

const witchFrames = [
  "/Assets/gravityfalls/BRUJA/Capa 1.png",
  "/Assets/gravityfalls/BRUJA/Capa 2.png",
  "/Assets/gravityfalls/BRUJA/Capa 3.png",
  "/Assets/gravityfalls/BRUJA/Capa 4.png",
  "/Assets/gravityfalls/BRUJA/Capa 5.png",
  "/Assets/gravityfalls/BRUJA/Capa 6.png",
  "/Assets/gravityfalls/BRUJA/Capa 7.png",
];

const crashFrames = [
  "/Assets/gravityfalls/Crash Bandicoot/Capa 1.png",
  "/Assets/gravityfalls/Crash Bandicoot/Capa 2.png",
  "/Assets/gravityfalls/Crash Bandicoot/Capa 3.png",
  "/Assets/gravityfalls/Crash Bandicoot/Capa 4.png",
  "/Assets/gravityfalls/Crash Bandicoot/Capa 5.png",
  "/Assets/gravityfalls/Crash Bandicoot/Capa 6.png",
];

const elYescaFrames = [
  "/Assets/gravityfalls/EL YESCA/Capa 1.png",
  "/Assets/gravityfalls/EL YESCA/Capa 2.png",
  "/Assets/gravityfalls/EL YESCA/Capa 3.png",
  "/Assets/gravityfalls/EL YESCA/Capa 4.png",
  "/Assets/gravityfalls/EL YESCA/Capa 5.png",
  "/Assets/gravityfalls/EL YESCA/Capa 6.png",
  "/Assets/gravityfalls/EL YESCA/Capa 7.png",
  "/Assets/gravityfalls/EL YESCA/Capa 8.png",
  "/Assets/gravityfalls/EL YESCA/Capa 9.png",
  "/Assets/gravityfalls/EL YESCA/Capa 10.png",
  "/Assets/gravityfalls/EL YESCA/Capa 11.png",
  "/Assets/gravityfalls/EL YESCA/Capa 12.png",
  "/Assets/gravityfalls/EL YESCA/Capa 13.png",
  "/Assets/gravityfalls/EL YESCA/Capa 14.png",
  "/Assets/gravityfalls/EL YESCA/Capa 15.png",
  "/Assets/gravityfalls/EL YESCA/Capa 16.png",
  "/Assets/gravityfalls/EL YESCA/Capa 17.png",
  "/Assets/gravityfalls/EL YESCA/Capa 18.png",
  "/Assets/gravityfalls/EL YESCA/Capa 19.png",
  "/Assets/gravityfalls/EL YESCA/Capa 20.png",
  "/Assets/gravityfalls/EL YESCA/Capa 21.png",
  "/Assets/gravityfalls/EL YESCA/Capa 22.png",
];

const roomImages = [
  "/Assets/gravityfalls/room1.png",
  "/Assets/gravityfalls/room2.png",
  "/Assets/gravityfalls/rom3.png",
  "/Assets/gravityfalls/room4.png",
  "/Assets/gravityfalls/room5.png",
  "/Assets/gravityfalls/room6.png",
  "/Assets/gravityfalls/room7.png",
  "/Assets/gravityfalls/room8.png",
  "/Assets/gravityfalls/room9.png",
];

const featureCards = [
  {
    title: "Narrative Adventure",
    description:
      "A mystery-driven prototype inspired by Gravity Falls, built around playful storytelling and readable progression.",
  },
  {
    title: "Exploration & Interaction",
    description:
      "Players inspect rooms, talk to characters, and search for useful clues across different locations.",
  },
  {
    title: "Light Puzzle Solving",
    description:
      "Progression is based on simple adventure-game logic: observation, item use, and dialogue-guided actions.",
  },
];

const gameplaySteps = [
  {
    step: "01",
    title: "Explore",
    description:
      "Move through each area and inspect the environment for clues, objects, and interactive details.",
  },
  {
    step: "02",
    title: "Talk to Characters",
    description:
      "NPC dialogue provides guidance, flavor, and the information needed to understand the next objective.",
  },
  {
    step: "03",
    title: "Collect & Use Items",
    description:
      "Find useful objects and use them in the right context to solve small progression puzzles.",
  },
  {
    step: "04",
    title: "Recover the Books",
    description:
      "Advance chapter by chapter by obtaining the three magical books needed to rescue Mabel.",
  },
];

const chapterCards = [
  {
    title: "Chapter 1 — Stan’s House",
    description:
      "The opening chapter introduces investigation, clue reading, and object-based progression inside a suspicious interior space.",
  },
  {
    title: "Chapter 2 — Botanical Area",
    description:
      "A new environment focused on interaction, environmental observation, and a simple item exchange puzzle.",
  },
  {
    title: "Chapter 3 — Workshop",
    description:
      "The final progression segment combines collected items and a more deliberate puzzle flow before the ending.",
  },
];

const recruiterCards = [
  {
    title: "Game Design Thinking",
    description:
      "Clear progression, chapter structure, interaction logic, and player guidance.",
  },
  {
    title: "Narrative Structure",
    description:
      "A complete playable setup with premise, objectives, escalation, and resolution.",
  },
  {
    title: "Visual Presentation",
    description:
      "Pixel-art-inspired sprites, animated characters, and room-based environments.",
  },
  {
    title: "Cross-Disciplinary Work",
    description:
      "A blend of storytelling, visual design, interaction planning, and prototype presentation.",
  },
];

const spriteCards = [
  { title: "Dipper", frames: dipperFrames, fps: 8, size: 220 },
  { title: "Mabel", frames: mabelWalkRightFrames, fps: 8, size: 220 },
  { title: "Witch", frames: witchFrames, fps: 7, size: 220 },
  { title: "Crash Bandicoot", frames: crashFrames, fps: 7, size: 220 },
  { title: "El Yesca", frames: elYescaFrames, fps: 10, size: 220 },
];

export default function FindingMabelPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3e2bf] text-[#3a2818]">
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(74,51,34,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(74,51,34,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,245,214,0.8),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(217,164,65,0.16),_transparent_35%)]" />

      <div className="mx-auto max-w-6xl px-6 py-16">

      <Link
        href="/#games"
        className={`${silkscreen.className} mb-8 inline-flex items-center gap-2 rounded-md border-4 border-[#4a3322] bg-[#fff1c7] px-4 py-2 text-xs text-[#2b1d12] shadow-[4px_4px_0_#4a3322] transition hover:-translate-y-0.5 hover:bg-[#fff6dd] active:translate-y-[2px] active:shadow-[2px_2px_0_#4a3322]`}
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-md border-4 border-[#4a3322] bg-[linear-gradient(180deg,#f8df9a_0%,#efc36b_48%,#cf8d46_100%)] shadow-[8px_8px_0_#4a3322]">
        <div className="grid gap-10 px-8 py-12 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className={`${silkscreen.className} ${badgeClass}`}>
              Pixel Adventure Demo
            </div>

            <h1
              className={`${silkscreen.className} mt-5 text-4xl leading-tight text-[#2f1e12] md:text-6xl`}
            >
              Finding Mabel
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a3322] md:text-xl">
              My first adventure game prototype, inspired by the mystery and
              humor of Gravity Falls. The project combines exploration,
              dialogue, item-based interaction, and light puzzle solving in a
              story where Dipper must recover three magical books to rescue
              Mabel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#video" className={buttonPrimaryClass}>
                Watch Intro
              </a>
              <a href="#gallery" className={buttonSecondaryClass}>
                View Rooms
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-md border-4 border-[#4a3322] bg-[#f8ecd4] p-3 shadow-[6px_6px_0_#4a3322]">
              <img
                src="/Assets/gravityfalls/cover.png"
                alt="Finding Mabel cover art"
                className="max-h-[420px] w-auto object-contain pixelated"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className={smallPanelClass}>
            <h2
              className={`${silkscreen.className} text-lg leading-tight text-[#2f1e12]`}
            >
              {card.title}
            </h2>
            <p className="mt-3 leading-7 text-[#4a3322]">{card.description}</p>
          </article>
        ))}
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>Story Log</div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          A pixelated mystery adventure
        </h2>

        <div className="mt-4 h-2 w-24 bg-[#4a3322]" />

        <p className="mt-4 max-w-4xl leading-7 text-[#4a3322]">
          The story begins when Dipper becomes trapped inside a strange
          pixelated game world. Mabel has disappeared, and the only way to
          bring her back is to recover three magical books hidden across
          different locations.
        </p>

        <p className="mt-3 max-w-4xl leading-7 text-[#4a3322]">
          From there, the player explores rooms, interacts with characters,
          finds objects, and solves small puzzles while progressing through a
          playful adventure with a nostalgic cartoon tone.
        </p>
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>How to Play</div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          Core gameplay loop
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#4a3322]">
          Finding Mabel is built around readable adventure-game logic:
          exploration, dialogue, item interaction, and simple progression
          puzzles.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gameplaySteps.map((item) => (
            <article key={item.step} className={smallPanelClass}>
              <span
                className={`${silkscreen.className} text-xs tracking-[0.2em] text-[#9b5d1b]`}
              >
                {item.step}
              </span>
              <h3
                className={`${silkscreen.className} mt-2 text-base leading-tight text-[#2f1e12]`}
              >
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-[#4a3322]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>
          Quest Structure
        </div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          Three locations, three magical books
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {chapterCards.map((chapter) => (
            <article key={chapter.title} className={smallPanelClass}>
              <h3
                className={`${silkscreen.className} text-base leading-tight text-[#2f1e12]`}
              >
                {chapter.title}
              </h3>
              <p className="mt-3 leading-7 text-[#4a3322]">
                {chapter.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>
          Character Sprites
        </div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          Animated characters and creatures
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#4a3322]">
          These sprite sequences showcase some of the characters and enemies
          created for the prototype, presented as frame-by-frame animations.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {spriteCards.map((sprite) => (
            <article key={sprite.title} className={smallPanelClass}>
              <h3
                className={`${silkscreen.className} mb-4 text-base leading-tight text-[#2f1e12]`}
              >
                {sprite.title}
              </h3>

              <div className="flex justify-center rounded-md border-4 border-[#4a3322] bg-[#fff5de] p-4 shadow-[3px_3px_0_#4a3322]">
                <SpriteAnimation
                  frames={sprite.frames}
                  alt={`${sprite.title} animation`}
                  width={sprite.size}
                  height={sprite.size}
                  fps={sprite.fps}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="video" className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>Intro Video</div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          Project introduction
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#4a3322]">
          A short video presenting the atmosphere, visual direction, and
          narrative setup of the adventure demo.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border-4 border-[#4a3322] bg-[#2b1d12] shadow-[6px_6px_0_#4a3322]">
          <video controls className="w-full pixelated" preload="metadata">
            <source src="/Assets/gravityfalls/videointro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section id="gallery" className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>
          Environment Gallery
        </div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          Room showcase
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#4a3322]">
          A selection of rooms from the game, presented in a carousel to show
          the visual style and environment variety of the prototype.
        </p>

        <div className="mt-6">
          <ImageCarousel
            images={roomImages}
            alt="Finding Mabel room"
            autoPlay={true}
            interval={3500}
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roomImages.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-md border-4 border-[#4a3322] bg-[#fff5de] shadow-[4px_4px_0_#4a3322]"
            >
              <img
                src={image}
                alt="Finding Mabel room preview"
                className="h-32 w-full object-cover pixelated transition duration-300 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className={panelClass}>
          <div className={`${silkscreen.className} ${badgeClass}`}>
            Puzzle Design
          </div>

          <h2
            className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
          >
            Readable adventure-game logic
          </h2>

          <p className="mt-3 leading-7 text-[#4a3322]">
            The prototype focuses on accessible puzzle design based on
            observation, dialogue hints, item collection, and contextual object
            use. The goal was to make progression feel clear while maintaining
            the playful tone of the story.
          </p>

          <div className="mt-5 space-y-3 text-[#4a3322]">
            <p>◆ Environmental clue reading</p>
            <p>◆ Inventory-based progression</p>
            <p>◆ Dialogue-guided objectives</p>
            <p>◆ Simple multi-step puzzle flow</p>
          </div>
        </article>

        <article className={panelClass}>
          <div className={`${silkscreen.className} ${badgeClass}`}>Finale</div>

          <h2
            className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
          >
            A complete narrative arc
          </h2>

          <p className="mt-3 leading-7 text-[#4a3322]">
            After collecting the three magical books, the player reaches the
            final confrontation and completes the rescue mission. This gives the
            demo a sense of closure and makes it feel like a compact but
            complete adventure rather than just a visual prototype.
          </p>

          <p className="mt-3 leading-7 text-[#4a3322]">
            The result is a small project with a clear beginning, middle, and
            end, designed to communicate narrative intent as well as gameplay
            structure.
          </p>
        </article>
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className={`${silkscreen.className} ${badgeClass}`}>
          Project Snapshot
        </div>

        <h2
          className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
        >
          What this project demonstrates
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {recruiterCards.map((item) => (
            <article key={item.title} className={smallPanelClass}>
              <h3
                className={`${silkscreen.className} text-sm leading-tight text-[#2f1e12]`}
              >
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-[#4a3322]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`mt-10 ${panelClass}`}>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className={`${silkscreen.className} ${badgeClass}`}>
              Playable Build
            </div>

            <h2
              className={`${silkscreen.className} mt-4 text-3xl leading-tight text-[#2f1e12]`}
            >
              Request a download
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#4a3322]">
              The playable build of <strong>Finding Mabel</strong> is available
              on request. If you would like to explore the prototype directly,
              you can submit a request below.
            </p>

            <p className="mt-3 max-w-2xl leading-7 text-[#4a3322]">
              Once the request is received, I will review it and share the ZIP
              build manually.
            </p>

            <div className="mt-6 rounded-md border-4 border-[#4a3322] bg-[#ffe39a] p-4 text-sm leading-6 text-[#3a2818] shadow-[4px_4px_0_#4a3322]">
              This helps keep track of downloads and share the build in a more
              controlled way.
            </div>
          </div>

          <div className="[&_form]:rounded-md [&_form]:border-4 [&_form]:border-[#4a3322] [&_form]:bg-[#f3dfbb] [&_form]:shadow-[6px_6px_0_#4a3322] [&_input]:rounded-md [&_input]:border-4 [&_input]:border-[#4a3322] [&_input]:bg-[#fff7e2] [&_input]:text-[#2f1e12] [&_textarea]:rounded-md [&_textarea]:border-4 [&_textarea]:border-[#4a3322] [&_textarea]:bg-[#fff7e2] [&_textarea]:text-[#2f1e12] [&_button]:rounded-md [&_button]:border-4 [&_button]:border-[#4a3322] [&_button]:bg-[#d9a441] [&_button]:text-[#2b1d12] [&_button]:shadow-[4px_4px_0_#4a3322] hover:[&_button]:bg-[#e5b34f]">
            <DownloadRequestForm />
          </div>
        </div>
      </section>
     </div>
    </main>
  );
}