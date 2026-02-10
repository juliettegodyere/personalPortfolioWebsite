import { site } from "@/components/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResumeSection() {
  return (
    <section id="resume" aria-label="Résumé">
      <SectionHeading
        eyebrow="Résumé"
        title="At a glance"
        subtitle="A concise snapshot of my experience across software engineering, electronics, and embedded/IoT. Download the full résumé for details."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <Card>
          <h3 className="text-sm font-semibold text-text">Summary</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Software Engineer with 5+ years of experience, a Physics with Electronics background, and an MSc in
            Electronics &amp; Computer Engineering. I&apos;m now focused on embedded systems, electronics, and IoT —
            using my software foundation to design, debug, and ship reliable device-level systems.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            I enjoy working end-to-end: from understanding requirements and constraints, to designing architecture,
            implementing features, and communicating clearly with teams and stakeholders.
          </p>
        </Card>

        <div className="space-y-3">
          <Card>
            <h3 className="text-sm font-semibold text-text">Highlights</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              <li>• 5 years professional software engineering experience</li>
              <li>• MSc Electronics &amp; Computer Engineering (University of Birmingham, UK)</li>
              <li>• Transitioning into embedded systems, electronics, and IoT with hands-on projects</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-text">Full résumé</h3>
            <p className="mt-2 text-sm text-muted">
              View the full PDF résumé for detailed roles, responsibilities, and technical skills.
            </p>
            <div className="mt-3">
              <ButtonLink href={site.resumeUrl} variant="primary">
                View full résumé (PDF)
              </ButtonLink>
            </div>
            <p className="mt-2 text-xs text-muted">
              Tip: place your PDF at <code className="rounded bg-panel/70 px-1 py-0.5">public/resume.pdf</code> or update{" "}
              <code className="rounded bg-panel/70 px-1 py-0.5">site.resumeUrl</code>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

