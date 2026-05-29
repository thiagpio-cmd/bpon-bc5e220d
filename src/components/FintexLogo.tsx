import logoLight from "@/assets/logo-fintex.png";
import logoDark from "@/assets/logo-fintex-dark.png";

interface FintexLogoProps {
  className?: string;
  variant?: "light" | "dark";
  height?: number;
}

/**
 * Fintex BPO oficial logo.
 * - variant="light" → versão sobre fundo escuro (header/footer).
 * - variant="dark"  → versão sobre fundo claro.
 */
const FintexLogo = ({ className = "", variant = "light", height = 32 }: FintexLogoProps) => {
  const src = variant === "light" ? logoLight : logoDark;
  return (
    <img
      src={src}
      alt="Fintex BPO"
      height={height}
      style={{ height: `${height}px`, width: "auto" }}
      className={`object-contain flex-shrink-0 ${className}`}
    />
  );
};

export default FintexLogo;
