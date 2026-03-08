"use client";

import { useEffect, useState } from "react";

type SpriteAnimationProps = {
  frames: string[];
  alt: string;
  width?: number;
  height?: number;
  fps?: number;
  className?: string;
  loop?: boolean;
};

export default function SpriteAnimation({
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