import { site } from "@/components/content/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-label="About">
      <SectionHeading
        eyebrow="About"
        title={site.about.title}
        subtitle="Blending strong software engineering experience with hands-on embedded systems, electronics, and IoT."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="space-y-4 text-muted">
            {site.about.paragraphs.map((p) => (
              <p key={p} className="text-pretty leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          {site.about.strengths.map((s) => (
            <Card key={s.title} className="relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent/70 via-accent-2/70 to-accent/70"
                aria-hidden
              />
              <p className="text-sm font-semibold text-text">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

