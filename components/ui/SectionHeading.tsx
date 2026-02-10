export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-2xl font-semibold text-text sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-pretty text-muted">{subtitle}</p> : null}
    </div>
  );
}

