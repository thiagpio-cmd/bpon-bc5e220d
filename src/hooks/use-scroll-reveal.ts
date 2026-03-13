import { useEffect, useRef } from "react";

/**
 * Attach scroll-reveal to elements with class "reveal".
 * Call in a top-level component (e.g. Index) so it covers all sections.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
