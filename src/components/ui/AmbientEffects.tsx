interface GlowConfig {
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  color?: "neon" | "neon-light";
  opacity?: number;
  blur?: number;
}

interface AmbientEffectsProps {
  glows?: GlowConfig[];
  noise?: boolean;
}

const DEFAULT_GLOWS: GlowConfig[] = [
  {
    size: 600,
    position: { top: "-15%", left: "-10%" },
    color: "neon",
    opacity: 0.06,
  },
  {
    size: 500,
    position: { bottom: "-10%", right: "-8%" },
    color: "neon-light",
    opacity: 0.05,
  },
];

export default function AmbientEffects({
  glows = DEFAULT_GLOWS,
  noise = true,
}: AmbientEffectsProps) {
  return (
    <>
      {glows.map((glow, i) => {
        const rgb =
          glow.color === "neon-light"
            ? "var(--neon-light-rgb)"
            : "var(--neon-rgb)";
        return (
          <div
            key={i}
            className="section-glow"
            aria-hidden="true"
            style={{
              width: glow.size,
              height: glow.size,
              ...glow.position,
              filter: `blur(${glow.blur ?? 100}px)`,
              background: `radial-gradient(circle, rgba(${rgb}, ${glow.opacity ?? 0.06}) 0%, transparent 70%)`,
            }}
          />
        );
      })}
      {noise && <div className="section-noise" aria-hidden="true" />}
    </>
  );
}
