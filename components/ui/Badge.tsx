import { cn } from "@/components/utils/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-panel/70 px-3 py-1 text-xs text-muted shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

