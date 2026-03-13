import logoBpon from "@/assets/logo-bpon.png";

interface BPOnLogoProps {
  className?: string;
  /** Use "light" on dark backgrounds to apply brightness filter */
  variant?: "default" | "light";
  height?: number;
}

const BPOnLogo = ({ className = "", variant = "default", height = 36 }: BPOnLogoProps) => {
  return (
    <img
      src={logoBpon}
      alt="BPOn Consultoria Financeira"
      height={height}
      style={{ height: `${height}px`, width: "auto" }}
      className={`object-contain flex-shrink-0 ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
};

export default BPOnLogo;
