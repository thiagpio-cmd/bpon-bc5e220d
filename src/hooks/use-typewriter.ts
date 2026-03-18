import { useEffect, useState } from "react";

/**
 * Cycles through an array of words with a typewriter effect.
 * @param words  - list of strings to cycle
 * @param speed  - ms per character when typing
 * @param pause  - ms to hold the full word before erasing
 */
export const useTypewriter = (words: string[], speed = 60, pause = 2200) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (!erasing && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (!erasing && charIndex === current.length) {
      const t = setTimeout(() => setErasing(true), pause);
      return () => clearTimeout(t);
    }

    if (erasing && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }

    if (erasing && charIndex === 0) {
      setErasing(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
  }, [charIndex, erasing, wordIndex, words, speed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return displayed;
};
