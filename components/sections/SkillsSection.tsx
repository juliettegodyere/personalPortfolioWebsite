import { site } from "@/components/content/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills">
      <SectionHeading
        eyebrow="Skills"
        title="Two worlds, one toolkit"
        subtitle="I’m positioning my software background as leverage: stronger tooling, cleaner thinking, and a systems mindset for embedded + IoT."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {site.skills.map((group) => (
          <Card key={group.title}>
            <h3 className="text-base font-semibold text-text">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

