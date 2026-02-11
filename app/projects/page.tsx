import { PageShell } from "@/components/PageShell";
import { site } from "@/components/content/site";

export default function ProjectsArchivePage() {
  const projects = [...site.projects].sort((a, b) => {
    if (!a.year && !b.year) return 0;
    if (!a.year) return 1;
    if (!b.year) return -1;
    return b.year.localeCompare(a.year);
  });

  return (
    <PageShell>
      <section aria-label="All projects">
        <div className="rounded-2xl border border-border bg-panel/60 p-6 shadow-soft sm:p-8">
          <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Projects</p>
              <h1 className="mt-2 text-2xl font-semibold text-text sm:text-3xl">All projects</h1>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                A more detailed view of my embedded/IoT and software engineering work.
              </p>
            </div>
            <a
              href="/#projects"
              className="text-xs font-medium text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
            >
              ← Back to main page
            </a>
          </header>

          <div className="overflow-x-auto rounded-2xl border border-border bg-panel/70">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-border bg-panel/80 text-xs uppercase tracking-[0.16em] text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Year</th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Made at</th>
                  <th className="px-4 py-3 font-semibold">Built with</th>
                  <th className="px-4 py-3 font-semibold">Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.title} className="border-b border-border/60 last:border-b-0">
                    <td className="whitespace-nowrap px-4 py-3 align-top text-xs text-muted sm:text-sm">
                      {p.year ?? "—"}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="text-sm font-medium text-text">{p.title}</div>
                      {p.subtitle ? (
                        <div className="mt-0.5 text-xs text-muted sm:text-[0.8rem]">{p.subtitle}</div>
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 align-top text-xs text-muted sm:text-sm">
                      {p.madeAt ?? "Personal"}
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-muted sm:text-sm">
                      {p.builtWith ?? p.tags.join(", ")}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 align-top text-xs sm:text-sm">
                      {p.links?.[0] ? (
                        <a
                          href={p.links[0].href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-text underline decoration-border underline-offset-4 transition hover:decoration-accent"
                        >
                          {p.links[0].label}
                        </a>
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

