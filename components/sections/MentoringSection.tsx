import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MentoringSection() {
  return (
    <section id="mentoring" aria-label="Mentoring">
      <SectionHeading
        eyebrow="Mentoring"
        title="Teaching that builds confidence"
        subtitle="I mentor kids using Scratch and Python. Teaching keeps my fundamentals sharp, and it’s also part of how I give back."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <p className="text-sm font-semibold text-text">Scratch</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Fun, visual projects that teach sequencing, loops, events, and problem-solving—without intimidation.
          </p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-text">Python</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Beginner-friendly Python sessions focused on clarity, small wins, and building real programs step by step.
          </p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-text">Why it matters</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Great engineers communicate well. Mentoring strengthens how I explain concepts, document work, and collaborate.
          </p>
        </Card>
      </div>
    </section>
  );
}

