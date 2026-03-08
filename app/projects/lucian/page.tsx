import Link from "next/link";
import FbxViewer from "@/components/FbxViewer";

const characters3D = [
  {
    name: "Lucian",
    file: "/Assets/Lucian/lucianFinal.fbx",
    description:
      "A fragile and introspective protagonist shaped by uncertainty and quiet determination.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(171,154,255,0.06),_rgba(8,9,18,0.95))]",
  },
  {
    name: "Milo",
    file: "/Assets/Lucian/miloFinal.fbx",
    description:
      "Quick-witted and energetic, Milo brings chaos, humor, and relentless curiosity.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(125,173,255,0.07),_rgba(8,9,18,0.95))]",
  },
  {
    name: "Mirelda",
    file: "/Assets/Lucian/mireldaFinal.fbx",
    description:
      "A mysterious matriarch whose calm authority hides a deep intuitive power.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(215,186,255,0.06),_rgba(8,9,18,0.95))]",
  },
  {
    name: "Tug",
    file: "/Assets/Lucian/tugFinal.fbx",
    description:
      "A strong and loyal protector whose warm nature balances his imposing strength.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(255,209,159,0.06),_rgba(8,9,18,0.95))]",
  },
  {
    name: "Tullio",
    file: "/Assets/Lucian/tullioFinal.fbx",
    description:
      "An eccentric inventor with a sharp mind and an absent-minded charm.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(198,241,255,0.06),_rgba(8,9,18,0.95))]",
  },
  {
    name: "Umbrálido",
    file: "/Assets/Lucian/umbralido.fbx",
    description:
      "A disturbing creature presence connected to the dark forces surrounding Dustville.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(145,126,255,0.05),_rgba(4,4,10,0.98))]",
  },
  {
    name: "Velka",
    file: "/Assets/Lucian/velkaFinal.fbx",
    description:
      "Quiet, enigmatic, and emotionally distant, Velka carries a powerful inner world.",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(194,168,255,0.06),_rgba(8,9,18,0.95))]",
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
  "Narrative-driven journey",
  "Mystery and consequence",
  "Atmospheric worldbuilding",
  "Dark fantasy sensibility",
];

const techStack = [
  {
    name: "Blender",
    description: "Character modeling, look development, and visual scene construction.",
  },
  {
    name: "Unity",
    description: "Narrative implementation, interactive flow, and in-engine presentation.",
  },
  {
    name: "Photoshop",
    description: "Paintovers, texture support, and visual refinement across the project.",
  },
  {
    name: "C#",
    description: "Interaction logic, gameplay systems, and scene behavior scripting.",
  },
];

export default function LucianPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,84,255,0.16),_transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(66,169,255,0.10),_transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.02),_transparent_18%,_rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/#games"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,16,28,0.96),rgba(21,20,38,0.95),rgba(28,17,44,0.95))] px-8 py-16 shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-5%] top-[-8%] h-64 w-64 rounded-full bg-violet-500/12 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-2%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.06]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200">
                Narrative Game Project
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Lucian
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                A dark narrative adventure about uncertainty, hidden truths, and
                the fragile line between destiny and choice. Lucian is built as
                an atmospheric world where character, mood, and visual storytelling
                carry as much weight as the plot itself.
              </p>

              <p className="mt-6 max-w-2xl border-l border-violet-300/20 pl-4 text-sm italic leading-7 text-white/55">
                “A world suspended between silence, omen, and revelation.”
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#artbook"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  Open the Art Book
                </a>

                <a
                  href="#models3d"
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Character Archive
                </a>

                <a
                  href="#renders"
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Visual Gallery
                </a>

                <a
                  href="#video"
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Atmosphere Reel
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-200/70">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="models3d"
          className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,24,0.96),rgba(15,16,27,0.96))] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Character Archive
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              3D Character Viewer
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-white/68">
              Explore the cast of Lucian in a more intimate way. Each model is
              presented as part of the project’s visual archive, revealing silhouette,
              presence, and personality through form.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {characters3D.map((character) => (
              <article
                key={character.name}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.055]"
              >
                <div className="overflow-hidden rounded-[1.25rem] border border-white/8">
                  <FbxViewer path={character.file} className={character.bgClass} />
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-200/60">
                    Archive Entry
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {character.name}
                  </h3>
                  <p className="mt-2 leading-7 text-white/62">
                    {character.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="renders"
          className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,24,0.96),rgba(15,16,27,0.96))] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Visual Gallery
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Render Collection
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-white/68">
              A curated selection of renders focused on mood, expression, materials,
              and the dramatic visual language behind the cast of Lucian.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {renders.map((render) => (
              <article
                key={render.src}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black/20">
                  <img
                    src={render.src}
                    alt={render.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,4,10,0.6),transparent_35%)]" />
                </div>

                <div className="p-4">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-violet-200/65">
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
            className="group block overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[linear-gradient(135deg,rgba(18,19,31,0.98),rgba(28,22,46,0.96))] p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="inline-flex rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200">
                  Featured Archive
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Lucian Art Book
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm font-medium text-white/70 transition group-hover:bg-white/[0.10] group-hover:text-white">
                Open ↗
              </span>
            </div>

            <p className="max-w-2xl leading-8 text-white/68">
              The art book is the central vessel of the project: a visual record
              of concepts, atmosphere studies, character exploration, references,
              and the narrative tone that shapes Lucian’s world.
            </p>

            <div className="mt-6 flex justify-center">
              <img
                src="/Assets/Lucian/lucian_libro.png"
                alt="Lucian art book cover"
                className="max-h-[80vh] w-auto rounded-xl border border-white/10 shadow-2xl object-contain transition duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </a>

          <div className="flex flex-col gap-6">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
                Overview
              </div>

              <h3 className="text-2xl font-semibold text-white">
                A project shaped by mood, memory, and tension
              </h3>

              <p className="mt-4 leading-8 text-white/68">
                Lucian was conceived as a graphic adventure where atmosphere is
                inseparable from story. Rather than relying on speed or spectacle,
                the project leans into silence, mystery, and the slow unveiling
                of what lies beneath its world.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
                Core Themes
              </div>

              <div className="flex flex-wrap gap-2">
                {["Narrative", "Mystery", "Choices", "Atmosphere", "Worldbuilding"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1 text-sm text-violet-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section
          id="video"
          className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,24,0.96),rgba(15,16,27,0.96))] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Atmosphere Reel
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              A glimpse into the world of Lucian
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-white/68">
              A short visual piece that introduces the project’s tone, emotional
              texture, and overall narrative mood.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-lg">
            <video controls className="w-full" preload="metadata">
              <source src="/Assets/Lucian/videoLucian.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </section>

        <section
          id="details"
          className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,18,29,0.96),rgba(19,21,33,0.96))] p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Story Axis
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Between worlds and irreversible decisions
            </h2>

            <p className="mt-4 leading-8 text-white/68">
              Lucian follows a young man caught between realities, drawn into a
              mystery that challenges his sense of identity and agency. The story
              revolves around doubt, revelation, and the uneasy weight of choice.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,17,32,0.96),rgba(24,20,39,0.96))] p-6 shadow-sm">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Creative Direction
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              A visual language built around unease and wonder
            </h2>

            <p className="mt-4 leading-8 text-white/68">
              The project brings together dark fantasy influences, stylized character
              work, and narrative design. Its identity emerges through atmosphere,
              symbolic imagery, and the careful curation of every visual element
              gathered in the art book.
            </p>
          </article>
        </section>

        <section
          id="tech"
          className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,24,0.96),rgba(15,16,27,0.96))] p-6 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/70">
              Creation Tools
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Built through visual and interactive craft
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-white/68">
              The main tools used to shape Lucian’s visual identity and interactive
              implementation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-violet-200/60">
                  Tool
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 leading-7 text-white/62">
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