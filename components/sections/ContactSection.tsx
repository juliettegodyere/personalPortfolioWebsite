import { site } from "@/components/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something real"
        subtitle="If you’re hiring for embedded/IoT (or value a software engineer who’s expanding into devices), I’d love to connect."
      />

      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-sm text-muted underline decoration-border underline-offset-4 transition hover:decoration-accent"
            >
              {site.email}
            </a>
            <div className="mt-3 flex flex-wrap gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
            <ButtonLink href="#projects" variant="ghost">
              View projects
            </ButtonLink>
          </div>
        </div>
      </Card>

      <p className="mt-6 text-xs text-muted">
        Tip: update your email + links in <code className="rounded bg-panel/70 px-1 py-0.5">components/content/site.ts</code>.
      </p>
    </section>
  );
}

