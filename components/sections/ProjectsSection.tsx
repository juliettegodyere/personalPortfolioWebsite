import { site, type Project } from "@/components/content/site";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const embeddedProjects = site.projects.filter((p) =>
    p.tags.some((tag) => tag.toLowerCase().includes("embedded") || tag.toLowerCase().includes("iot"))
  );
  const softwareProjects = site.projects.filter((p) =>
    p.tags.some((tag) => tag.toLowerCase().includes("software"))
  );

  const renderProjectCard = (p: Project) => (
    <Card key={p.title} className="group">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-text">{p.title}</h3>
          <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {p.tags.map((t) => (
            <Badge key={t} className="border-border/70">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {p.imageSrc ? (
        <div className="mt-4">
          <a
            href={p.imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-panel/60 px-3 py-1.5 text-sm font-medium text-text transition hover:border-accent/50 hover:bg-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            View schema
          </a>
        </div>
      ) : null}

      <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted">{p.description}</p>

      {p.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-text underline decoration-border underline-offset-4 transition group-hover:decoration-accent hover:decoration-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );

  return (
    <section id="projects" aria-label="Projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A curated snapshot across embedded/IoT and software engineering, with room to explore more of my work."
      />

      <div className="space-y-8">
        {embeddedProjects.length > 0 && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Embedded &amp; IoT
              </h3>
              <a
                href="/projects"
                className="text-xs font-medium text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
              >
                See more embedded work
              </a>
            </div>
            <div className="grid gap-5">{embeddedProjects.slice(0, 2).map(renderProjectCard)}</div>
          </div>
        )}

        {softwareProjects.length > 0 && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Software engineering
              </h3>
              <a
                href="/projects"
                className="text-xs font-medium text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
              >
                See more software projects
              </a>
            </div>
            <div className="grid gap-5">{softwareProjects.slice(0, 2).map(renderProjectCard)}</div>
          </div>
        )}
      </div>
    </section>
  );
}

