import Link from "next/link";
import { cn } from "@/components/utils/cn";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-soft hover:translate-y-[-1px] hover:bg-accent/90"
      : "border border-border bg-panel/60 text-text hover:bg-panel";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}

