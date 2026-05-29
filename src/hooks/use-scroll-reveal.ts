import { useEffect } from "react";

/**
 * Attach scroll-reveal to elements with class "reveal".
 * Call in a top-level component (e.g. Index) so it covers all sections.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observed = new WeakSet<Element>();

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

    const revealImmediatelyIfNeeded = (el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add("visible");
        observer.unobserve(el);
        return true;
      }

      return false;
    };

    const observeRevealElement = (el: Element) => {
      if (observed.has(el)) return;
      observed.add(el);

      if (!revealImmediatelyIfNeeded(el)) {
        observer.observe(el);
      }
    };

    const scanRevealElements = (root: ParentNode = document) => {
      root.querySelectorAll?.(".reveal").forEach(observeRevealElement);
    };

    scanRevealElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (node.classList.contains("reveal")) {
            observeRevealElement(node);
          }

          scanRevealElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
