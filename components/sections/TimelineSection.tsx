import { site } from "@/components/content/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TimelineSection() {
  return (
    <section id="timeline" aria-label="Timeline">
      <SectionHeading
        eyebrow="Timeline"
        title="Progression over time"
        subtitle="A clear narrative: fundamentals → delivery experience → deeper engineering → focused embedded growth."
      />

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-2 h-[calc(100%-0.5rem)] w-px bg-border" aria-hidden />

        <div className="space-y-4">
          {site.timeline.map((t) => (
            <div key={`${t.year}-${t.title}`} className="relative pl-10">
              <div
                className="absolute left-[0.45rem] top-5 h-3 w-3 rounded-full border border-border bg-panel shadow-soft"
                aria-hidden
              />
              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-text">{t.title}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{t.year}</p>
                </div>
                {t.org ? <p className="mt-1 text-sm text-muted">{t.org}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

