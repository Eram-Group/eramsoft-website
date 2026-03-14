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
      <p className="section-label mb-4 text-xs font-bold tracking-[0.35em] uppercase">
        {label}
      </p>
      <h2 className="section-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="section-title-accent">{accentWord}</span>
      </h2>
      <div className="section-header-line mx-auto mb-6 h-px w-24" />
      {subtitle && (
        <p className="section-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
