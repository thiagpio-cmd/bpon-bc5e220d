import { useEffect, useRef } from "react";

/**
 * Attach scroll-reveal to elements with class "reveal".
 * Call in a top-level component (e.g. Index) so it covers all sections.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);
};
