import { site } from "@/components/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="pt-2">
      <div className="rounded-2xl border border-border bg-panel/55 p-6 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-panel/45 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-accent/25">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            Embedded &amp; IoT focused
          </Badge>
          <Badge className="border-accent2/25">
            <span className="h-2 w-2 rounded-full bg-accent-2" aria-hidden />
            Software + hardware mindset
          </Badge>
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{site.hero.intro}</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
          Building from <span className="text-accent">code</span> to <span className="text-accent-2">devices</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-muted sm:text-lg">{site.hero.blurb}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {site.hero.highlights.map((h) => (
            <Badge key={h}>{h}</Badge>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="#projects">Explore projects</ButtonLink>
          <ButtonLink href="#timeline" variant="ghost">
            View experience timeline
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

