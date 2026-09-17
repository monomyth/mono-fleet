import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-sm px-2 font-mono text-[11px] tracking-wider text-muted uppercase",
        "shadow-[0_0_0_1px_rgba(236,234,227,0.1)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
