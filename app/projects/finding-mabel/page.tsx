"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DownloadRequestForm from "@/components/DownloadRequestForm";

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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-100 shadow-sm">
      <div className="aspect-[16/9] w-full">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/75"
        aria-label="Previous image"
      >
        ←
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/75"
        aria-label="Next image"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 backdrop-blur">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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

const catWalkFrames = [
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-0.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-1.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-2.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-3.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-4.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-5.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-6.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-7.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-8.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-9.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-10.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-11.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-12.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-13.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-14.png",
  "/Assets/gravityfalls/GATO/andar/sacha-riviere-9-marche-15.png",
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
      "A story-driven prototype inspired by the mystery, humor, and charm of Gravity Falls.",
  },
  {
    title: "Exploration & Interaction",
    description:
      "Players inspect rooms, talk to characters, and search for clues hidden across different environments.",
  },
  {
    title: "Light Puzzle Solving",
    description:
      "The progression is built around simple readable puzzles, object use, and dialogue-based guidance.",
  },
];

const gameplaySteps = [
  {
    step: "01",
    title: "Explore",
    description:
      "Move through each location and inspect the environment to discover clues, props, and interactive elements.",
  },
  {
    step: "02",
    title: "Talk to Characters",
    description:
      "NPCs provide information, hints, and direction while helping build the world and tone of the adventure.",
  },
  {
    step: "03",
    title: "Collect & Use Items",
    description:
      "Pick up useful objects and use them in the right context to unlock new paths and solve progression puzzles.",
  },
  {
    step: "04",
    title: "Recover the Books",
    description:
      "Advance chapter by chapter by finding the three magical books needed to rescue Mabel.",
  },
];

const chapterCards = [
  {
    title: "Chapter 1 — Stan’s House",
    description:
      "The adventure begins with investigation, dialogue, and clue reading inside a room full of suspicious details and hidden answers.",
  },
  {
    title: "Chapter 2 — Botanical Area",
    description:
      "The player explores a new environment, interacts with characters, and uses objects to complete a small environmental puzzle.",
  },
  {
    title: "Chapter 3 — Workshop",
    description:
      "The final progression segment introduces a more crafted puzzle flow based on gathering items and using them correctly.",
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
      "Pixel-art-inspired characters, animated sprites, and stylized room-based environments.",
  },
  {
    title: "Cross-Disciplinary Work",
    description:
      "A mix of storytelling, visual design, interaction planning, and prototype presentation.",
  },
];

const spriteCards = [
  {
    title: "Dipper",
    frames: dipperFrames,
    fps: 8,
    size: 220,
  },
  {
    title: "Mabel",
    frames: mabelWalkRightFrames,
    fps: 8,
    size: 220,
  },
  {
    title: "Cat",
    frames: catWalkFrames,
    fps: 10,
    size: 220,
  },
  {
    title: "Witch",
    frames: witchFrames,
    fps: 7,
    size: 220,
  },
  {
    title: "Crash Bandicoot",
    frames: crashFrames,
    fps: 7,
    size: 220,
  },
  {
    title: "El Yesca",
    frames: elYescaFrames,
    fps: 10,
    size: 220,
  },
];

export default function FindingMabelPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute right-[-80px] top-44 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-20 left-[10%] h-72 w-72 rounded-full bg-yellow-200/25 blur-3xl" />
      </div>

      <Link
        href="/#games"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200/60 bg-[radial-gradient(circle_at_top,_#fff2cc,_#ffe2b8_42%,_#ffd6a5_100%)] shadow-lg">
        <div className="grid gap-10 px-8 py-12 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-amber-300 bg-white/60 px-3 py-1 text-sm font-medium text-amber-900 backdrop-blur">
              Narrative Adventure Demo
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
              Finding Mabel
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
              My first adventure game prototype, inspired by the mystery and
              humor of Gravity Falls. The project combines exploration, dialogue,
              item-based interaction, and light puzzle solving in a story where
              Dipper must recover three magical books to rescue Mabel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#video"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Watch intro
              </a>

              <a
                href="#gallery"
                className="rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-white"
              >
                View rooms
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-4 shadow-lg">
              <img
                src="/Assets/gravityfalls/cover.png"
                alt="Finding Mabel cover art"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-neutral-900">
              {card.title}
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              {card.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Story Premise
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            A pixelated mystery adventure
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-neutral-600">
            The story begins when Dipper becomes trapped inside a strange
            pixelated game world. Mabel has disappeared, and the only way to
            bring her back is to recover three magical books hidden across
            different locations.
          </p>

          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            From there, the player explores rooms, interacts with characters,
            finds objects, and solves small puzzles while progressing through a
            playful adventure with a nostalgic cartoon tone.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            How to Play
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Core gameplay loop
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            Finding Mabel is built around readable adventure-game logic:
            exploration, dialogue, item interaction, and simple progression
            puzzles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gameplaySteps.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-amber-700">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Chapter Design
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Three locations, three magical books
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {chapterCards.map((chapter) => (
            <article
              key={chapter.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {chapter.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-600">
                {chapter.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Character Sprite Animations
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Animated characters and creatures
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            These sprite sequences showcase some of the characters and enemies
            created for the prototype, presented as frame-by-frame animations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {spriteCards.map((sprite) => (
            <article
              key={sprite.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                {sprite.title}
              </h3>

              <div className="flex justify-center rounded-2xl border border-neutral-200 bg-white p-4">
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

      <section
        id="video"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-5">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Intro Video
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Project introduction
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A short video presenting the atmosphere, visual direction, and
            narrative setup of the adventure demo.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-950 shadow-sm">
          <video controls className="w-full" preload="metadata">
            <source src="/Assets/gravityfalls/videointro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section
        id="gallery"
        className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Environment Gallery
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Room showcase
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            A selection of rooms from the game, presented in a carousel to show
            the overall visual style and environment variety of the prototype.
          </p>
        </div>

        <ImageCarousel
          images={roomImages}
          alt="Finding Mabel room"
          autoPlay={true}
          interval={3500}
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roomImages.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
            >
              <img
                src={image}
                alt="Finding Mabel room preview"
                className="h-32 w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Puzzle Design
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Readable adventure-game logic
          </h2>

          <p className="mt-3 leading-7 text-neutral-600">
            The prototype focuses on accessible puzzle design based on
            observation, dialogue hints, item collection, and contextual object
            use. The goal was to make progression feel clear while maintaining
            the playful tone of the story.
          </p>

          <div className="mt-5 space-y-3 text-neutral-600">
            <p>• Environmental clue reading</p>
            <p>• Inventory-based progression</p>
            <p>• Dialogue-guided objectives</p>
            <p>• Simple multi-step puzzle flow</p>
          </div>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Finale
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            A complete narrative arc
          </h2>

          <p className="mt-3 leading-7 text-neutral-600">
            After collecting the three magical books, the player reaches the
            final confrontation and completes the rescue mission. This gives the
            demo a sense of closure and makes it feel like a compact but
            complete adventure rather than just a visual prototype.
          </p>

          <p className="mt-3 leading-7 text-neutral-600">
            The result is a small project with a clear beginning, middle, and
            end, designed to communicate narrative intent as well as gameplay
            structure.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
            Recruiter Snapshot
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            What this project demonstrates
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {recruiterCards.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
        
      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
              Playable Build
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Request a download
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              The playable build of <strong>Finding Mabel</strong> is available on
              request. If you would like to explore the prototype directly, you can
              submit a request below.
            </p>

            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Once the request is received, I will review it and share the ZIP build
              manually.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              This helps keep track of downloads and share the build in a more
              controlled way.
            </div>
          </div>

          <DownloadRequestForm />
        </div>
      </section>
    </main>
  );
}