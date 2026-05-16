const FloatingXMark = () => {
  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className="fixed bottom-8 right-8 z-40 w-12 h-12 hidden md:flex items-center justify-center group"
    >
      <span className="absolute inset-0 border border-primary/40 group-hover:border-primary transition-colors" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative">
        <path
          d="M3 3 L17 17 M17 3 L3 17"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="square"
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </svg>
    </a>
  );
};

export default FloatingXMark;
