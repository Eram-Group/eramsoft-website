interface SectionHeaderProps {
  label: string;
  title: string;
  accentWord: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  accentWord,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${textAlign}`}>
      <p className="section-label mb-4 text-xs font-bold tracking-[0.35em] uppercase animate-section-fadeUp [animation-delay:0.1s]">
        {label}
      </p>
      <h2 className="section-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl animate-section-fadeUp [animation-delay:0.25s]">
        {title}{" "}
        <span className="section-title-accent">{accentWord}</span>
      </h2>
      <div className="section-header-line mx-auto mb-6 h-px w-24 animate-section-lineExpand [animation-delay:0.45s]" />
      {subtitle && (
        <p className="section-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg animate-section-fadeUp [animation-delay:0.5s]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
