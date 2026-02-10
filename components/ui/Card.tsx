import { cn } from "@/components/utils/cn";

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-panel/70 p-5 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-panel/55",
        className
      )}
    >
      {children}
    </div>
  );
}

