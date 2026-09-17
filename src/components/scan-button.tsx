import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scanFleet } from "@/lib/fleet/api";

export function ScanButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        try {
          const result = await scanFleet();
          toast(result.notes);
          await router.invalidate();
        } catch {
          toast("Scan failed. The seeded catalog is still here.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <RefreshCw className={busy ? "animate-spin" : ""} />
      {busy ? "Scanning X" : "Scan timeline"}
    </Button>
  );
}
