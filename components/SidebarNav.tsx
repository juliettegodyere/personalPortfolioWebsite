import { site } from "@/components/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />;
}

export function SidebarNav() {
  return (
    <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
      <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-panel/55 p-5 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-panel/45">
        <div>
          {/* Mobile header */}
          <div className="mb-4 flex items-start justify-between gap-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 rounded-full border border-accent/40 bg-gradient-to-tr from-accent/20 via-panel to-accent-2/25 p-0.5 shadow-soft">
                <div className="h-full w-full overflow-hidden rounded-full bg-panel">
                  {/* Replace /avatar.jpg with your actual file name in /public */}
                  <img
                    src="/avatar.jpg"
                    alt="Portrait of Juliet Nkwor"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold leading-tight">{site.name}</p>
                <p className="mt-1 text-sm text-muted">{site.headline}</p>
              </div>
            </div>
            <Badge className="shrink-0">
              <Dot />
              Open to roles
            </Badge>
          </div>

          {/* Desktop header */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-full border border-accent/40 bg-gradient-to-tr from-accent/20 via-panel to-accent-2/25 p-0.5 shadow-soft">
                <div className="h-full w-full overflow-hidden rounded-full bg-panel">
                  {/* Replace /avatar.jpg with your actual file name in /public */}
                  <img
                    src="/avatar.jpg"
                    alt="Portrait of Juliet Nkwor"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <Badge>
                  <Dot />
                  {site.location}
                </Badge>
                <h1 className="mt-3 text-2xl font-semibold leading-tight text-text">{site.name}</h1>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted">{site.headline}</p>
          </div>

          {/* Nav */}
          <nav className="mt-5">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center rounded-xl border border-transparent px-3 py-2 text-sm text-muted transition hover:border-border hover:bg-panel/70 hover:text-text"
                  >
                    <span className="mr-2 hidden h-1.5 w-1.5 rounded-full bg-accent/70 lg:inline-block" aria-hidden />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonLink href="#projects">View projects</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-border pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
            >
              {site.email}
            </a>
            <span className="text-muted" aria-hidden>
              ·
            </span>
            <div className="flex items-center gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition hover:text-text"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            Built with Next.js + Tailwind. Styled to feel warm, but stay crisp and professional.
          </p>
        </div>
      </div>
    </aside>
  );
}

