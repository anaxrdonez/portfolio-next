"use client";

import { useEffect, useState } from "react";

const words = ["design", "development", "automation"];

export default function AnimatedWords() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 250);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block font-semibold text-violet-600 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      {words[index]}
    </span>
  );
}