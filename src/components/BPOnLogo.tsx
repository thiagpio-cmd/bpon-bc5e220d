const BPOnLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <div className="relative w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="32" height="32" rx="7" fill="hsl(217 91% 60% / 0.15)" />
          <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" stroke="hsl(217 91% 60% / 0.4)" strokeWidth="1" />
          {/* B shape */}
          <path
            d="M8 8h6.5c2.5 0 4 1.2 4 3.2 0 1.2-.6 2.1-1.6 2.6 1.4.5 2.1 1.5 2.1 2.9 0 2.2-1.6 3.3-4.3 3.3H8V8zm2.4 4.8h3.8c1.1 0 1.7-.5 1.7-1.4 0-.9-.6-1.4-1.7-1.4h-3.8v2.8zm0 5.2h4c1.2 0 1.9-.5 1.9-1.6 0-1-.7-1.5-1.9-1.5h-4V18z"
            fill="hsl(217 91% 60%)"
          />
          {/* line accent */}
          <path d="M20 24h4" stroke="hsl(189 94% 43%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 21h2" stroke="hsl(189 94% 43% / 0.5)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-[15px] tracking-wider text-headline">BP<span className="text-gradient-primary">On</span></span>
        <span className="font-body text-[9px] tracking-[0.12em] text-muted-foreground uppercase mt-0.5">Consultoria Financeira</span>
      </div>
    </div>
  );
};

export default BPOnLogo;
