import Link from "next/link";
import FbxViewer from "@/components/FbxViewer";


const characters3D = [
  {
    name: "Lucian",
    file: "/Assets/Lucian/lucianFinal.fbx",
    description:
      "A fragile and introspective protagonist shaped by uncertainty and quiet determination.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#f1f3f5)]",
  },
  {
    name: "Milo",
    file: "/Assets/Lucian/miloFinal.fbx",
    description:
      "Quick-witted and energetic, Milo brings chaos, humor, and relentless curiosity.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#eef1f4)]",
  },
  {
    name: "Mirelda",
    file: "/Assets/Lucian/mireldaFinal.fbx",
    description:
      "A mysterious matriarch whose calm authority hides a deep intuitive power.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#f2f2f2)]",
  },
  {
    name: "Tug",
    file: "/Assets/Lucian/tugFinal.fbx",
    description:
      "A strong and loyal protector whose warm nature balances his imposing strength.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f4f6)]",
  },
  {
    name: "Tullio",
    file: "/Assets/Lucian/tullioFinal.fbx",
    description:
      "An eccentric inventor with a sharp mind and an absent-minded charm.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#f0f2f4)]",
  },
  {
    name: "Umbrálido",
    file: "/Assets/Lucian/umbralido.fbx",
    description:
      "A disturbing creature presence connected to the dark forces surrounding Dustville.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#fcfcfc,_#eceff1)]",
  },
  {
    name: "Velka",
    file: "/Assets/Lucian/velkaFinal.fbx",
    description:
      "Quiet, enigmatic, and emotionally distant, Velka carries a powerful inner world.",
    bgClass: "bg-[radial-gradient(circle_at_top,_#ffffff,_#f4f5f7)]",
  },
];

const renders = [
  {
    src: "/Assets/Lucian/renders/Lucian1.png",
    title: "Lucian Portrait I",
    character: "Lucian",
  },
  {
    src: "/Assets/Lucian/renders/Lucian2.png",
    title: "Lucian Portrait II",
    character: "Lucian",
  },
  {
    src: "/Assets/Lucian/renders/lucianFinal21.png",
    title: "Lucian Final Render I",
    character: "Lucian",
  },
  {
    src: "/Assets/Lucian/renders/lucianFinal31.png",
    title: "Lucian Final Render II",
    character: "Lucian",
  },
  {
    src: "/Assets/Lucian/renders/miloFinal.png",
    title: "Milo Render I",
    character: "Milo",
  },
  {
    src: "/Assets/Lucian/renders/miloFinal3.png",
    title: "Milo Render II",
    character: "Milo",
  },
  {
    src: "/Assets/Lucian/renders/miloFinal5.png",
    title: "Milo Render III",
    character: "Milo",
  },
  {
    src: "/Assets/Lucian/renders/tugFinal.png",
    title: "Tug Render I",
    character: "Tug",
  },
  {
    src: "/Assets/Lucian/renders/tugFinal1112.png",
    title: "Tug Render II",
    character: "Tug",
  },
  {
    src: "/Assets/Lucian/renders/tullioFinal4.png",
    title: "Tullio Render",
    character: "Tullio",
  },
  {
    src: "/Assets/Lucian/renders/tullioIdle.png",
    title: "Tullio Idle Pose",
    character: "Tullio",
  },
  {
    src: "/Assets/Lucian/renders/velkafinal23.png",
    title: "Velka Render",
    character: "Velka",
  },
];

const highlights = [
  "Narrative-driven experience",
  "Mystery and choice",
  "Atmospheric worldbuilding",
  "Dark fantasy tone",
];

const techStack = [
  {
    name: "Blender",
    description: "3D modeling, scene building, and visual development.",
  },
  {
    name: "Unity",
    description: "Game engine used for implementation and interactive flow.",
  },
  {
    name: "Photoshop",
    description: "Texture work, visual editing, and concept support.",
  },
  {
    name: "C#",
    description: "Gameplay systems, interaction logic, and scripting.",
  },
];

export default function LucianPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#11111b] via-[#151528] to-[#26183d] px-8 py-16 shadow-2xl md:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-80px] top-[-80px] h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="absolute bottom-[-100px] right-[-60px] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200">
                Narrative Game Project
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Lucian
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                A dark narrative adventure centered on choices, mystery, and the
                fragile boundary between fate and free will. Lucian explores a
                more atmospheric and introspective approach to storytelling,
                blending visual worldbuilding with emotional tension.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#artbook"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  Explore the Art Book
                </a>

                <a
                  href="#models3d"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View 3D Models
                </a>

                <a
                  href="#renders"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Renders
                </a>

                <a
                  href="#video"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Watch Video
                </a>

                <a
                  href="#details"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Project Details
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-200/80">
                    Lucian
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        <section
          id="models3d"
          className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101019] to-[#171726] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
              3D Models
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Character Viewer
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-white/70">
              Explore the characters of Lucian in 3D. Rotate and inspect each model
              directly in the browser.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {characters3D.map((character) => (
              <article
                key={character.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <FbxViewer path={character.file} className={character.bgClass} />
                
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">
                    {character.name}
                  </h3>
                  <p className="mt-2 leading-7 text-white/65">
                    {character.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section
            id="renders"
            className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101019] to-[#171726] p-6 shadow-sm"
          >
            <div className="mb-6">
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
                Character Renders
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white">
                Render Gallery
              </h2>

              <p className="mt-3 max-w-3xl leading-8 text-white/70">
                A curated selection of character renders showcasing silhouette, materials,
                expressions, and the visual identity developed for Lucian.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {renders.map((render) => (
                <article
                  key={render.src}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <img
                      src={render.src}
                      alt={render.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-medium uppercase tracking-[0.14em] text-violet-200/70">
                      {render.character}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {render.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

        <section
          id="artbook"
          className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <a
            href="https://heyzine.com/flip-book/29108fcb29.html"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[2rem] border border-violet-300/10 bg-gradient-to-br from-[#141422] to-[#1d1630] p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="inline-flex rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200">
                  Featured
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Lucian Art Book
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70 transition group-hover:bg-white/10 group-hover:text-white">
                Open ↗
              </span>
            </div>

            <p className="max-w-2xl leading-8 text-white/70">
              The art book is the central piece of this project. It brings
              together concept development, atmosphere exploration, character
              ideas, visual references, and the creative direction behind
              Lucian’s world. Click the cover to open the full interactive book.
            </p>

          <div className="flex justify-center">
            <img
              src="/Assets/Lucian/lucian_libro.png"
              alt="Lucian art book cover"
              className="max-h-[80vh] w-auto rounded-xl border border-white/10 shadow-2xl object-contain"            />
          </div>
          </a>

          <div className="flex flex-col gap-6">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
                Overview
              </div>

              <h3 className="text-2xl font-semibold text-white">
                A project built around mood and story
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Lucian was conceived as a graphic adventure focused on narrative
                depth, visual atmosphere, and emotional decision-making. Rather
                than relying on fast-paced action, the project emphasizes tone,
                mystery, and the feeling of gradually uncovering something
                hidden beneath the surface.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
                Core Themes
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">
                  Narrative
                </span>
                <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">
                  Mystery
                </span>
                <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">
                  Choices
                </span>
                <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">
                  Atmosphere
                </span>
                <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">
                  Worldbuilding
                </span>
              </div>
            </article>
          </div>
        </section>
        
        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101019] to-[#171726] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
              Video
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Project Atmosphere
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-white/70">
              A short visual glimpse into the tone and atmosphere of Lucian,
              showcasing the mood and narrative direction of the project.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-lg">
            <video
              controls
              className="w-full"
              preload="metadata"
            >
              <source
                src="/Assets/Lucian/videoLucian.mp4"
                type="video/mp4"
              />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="details"
          className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12121d] to-[#181827] p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
              Story
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Between worlds and uncertain choices
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              Lucian follows a young man caught between realities, forced to
              confront difficult decisions while uncovering a mystery that may
              reshape his destiny. The project explores uncertainty, identity,
              and the tension between what is chosen and what feels inevitable.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#131320] to-[#1b1b2b] p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
              Creative Direction
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Visual identity and development focus
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              The project combines dark fantasy influences, stylized visual
              development, and narrative design. Much of its identity comes from
              the mood established through concept work, environment ideas, and
              the curated presentation gathered inside the art book.
            </p>
          </article>
        </section>

        <section
          id="tech"
          className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101019] to-[#171726] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
              Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Tools used in the project
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-white/70">
              Main tools used for the visual creation and interactive
              implementation of Lucian.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 leading-7 text-white/65">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}