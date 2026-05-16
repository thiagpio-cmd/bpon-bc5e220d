interface FintexLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: number;
}

/**
 * Fintex BPO wordmark — SVG-based for crisp rendering at any size.
 * The X mark is always electric blue; the wordmark color follows `variant`.
 */
const FintexLogo = ({ className = "", variant = "light", size = 28 }: FintexLogoProps) => {
  const wordColor = variant === "light" ? "hsl(214 27% 97%)" : "hsl(180 7% 4%)";
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Fintex BPO">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 5 L27 27 M27 5 L5 27"
          stroke="hsl(214 100% 54%)"
          strokeWidth="4.5"
          strokeLinecap="square"
        />
      </svg>
      <span
        className="font-display font-bold tracking-tight leading-none"
        style={{ color: wordColor, fontSize: `${size * 0.7}px` }}
      >
        fintex<span style={{ color: "hsl(214 100% 54%)" }}>.</span>
        <span style={{ opacity: 0.75, marginLeft: 4, fontWeight: 500 }}>bpo</span>
      </span>
    </div>
  );
};

export default FintexLogo;
