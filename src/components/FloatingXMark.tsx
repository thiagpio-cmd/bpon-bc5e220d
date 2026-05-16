import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingXMark = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-card border border-border shadow-md hidden md:flex items-center justify-center text-headline hover:text-primary hover:border-primary/40 transition-all ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp size={16} />
    </a>
  );
};

export default FloatingXMark;
