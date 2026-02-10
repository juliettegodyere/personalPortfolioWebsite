import { SidebarNav } from "@/components/SidebarNav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          <SidebarNav />

          <main id="content" className="min-w-0">
            <div className="space-y-16">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

