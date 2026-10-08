import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message = errorMessage(error);
  return (
    <main className="grid-paper flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <TriangleAlert className="size-8 text-ink" strokeWidth={1.75} aria-hidden="true" />
      <h1 className="font-display text-3xl tracking-tight">Something went wrong</h1>
      <p className="max-w-md text-sm leading-relaxed break-words text-muted">{message}</p>
      <Button
        type="button"
        onClick={() => {
          window.location.assign("/");
        }}
      >
        Reload the desk
      </Button>
    </main>
  );
}
