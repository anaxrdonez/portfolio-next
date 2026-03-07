"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function SpeakerParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    detectRetina: true,
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 38,
        density: {
          enable: true,
          width: 1400,
          height: 900,
        },
      },
      color: {
        value: ["#ff4fd8", "#b620ff", "#7c3aed", "#ffffff"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.2, max: 0.55 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
        },
      },
      size: {
        value: { min: 4, max: 18 },
        animation: {
          enable: true,
          speed: 2.4,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 180,
        color: "#d946ef",
        opacity: 0.18,
        width: 1.2,
        triangles: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
        },
        onClick: {
          enable: false,
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 220,
          links: {
            opacity: 0.35,
          },
        },
        bubble: {
          distance: 180,
          size: 26,
          duration: 2,
          opacity: 0.7,
        },
      },
    },
  };

  if (!ready) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="cyber-grid" />
      <div className="cyber-glow cyber-glow-1" />
      <div className="cyber-glow cyber-glow-2" />
      <div className="cyber-glow cyber-glow-3" />

      <div className="beat-ring beat-ring-1" />
      <div className="beat-ring beat-ring-2" />
      <div className="beat-ring beat-ring-3" />

      <Particles
        id="bouba-cyber-particles"
        className="absolute inset-0"
        options={options}
      />
    </div>
  );
}