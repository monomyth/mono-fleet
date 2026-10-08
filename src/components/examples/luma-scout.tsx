const ROWS = [
  {
    when: "Thu 19:00",
    where: "4 mi",
    gate: "Free · open",
    act: "RSVP. On the calendar. Alert sent.",
  },
  {
    when: "Fri 18:00",
    where: "38 mi",
    gate: "Free · open",
    act: "Too far. Left.",
  },
  {
    when: "Sat 11:00",
    where: "8 mi",
    gate: "Paid",
    act: "Alert only. No RSVP.",
  },
] as const;

export function LumaScoutExample() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <figure className="overflow-hidden rounded-lg bg-bg">
        <img
          src="/samples/luma-scout-cover.jpg"
          alt="A blank card, a pen, and a map pin on a dark table"
          className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
        />
        <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
          Daily pass. Nearby, free, and open — or it stays put.
        </figcaption>
      </figure>
      <div className="rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
            Morning pass
          </p>
          <p className="font-mono text-[11px] text-paper-ink/45">Reconstructed</p>
        </div>
        <ul className="mt-4 divide-y divide-paper-ink/10">
          {ROWS.map((row) => (
            <li key={row.when} className="grid gap-1 py-3 sm:grid-cols-[6.5rem_1fr]">
              <div>
                <p className="font-mono text-[11px] text-paper-ink/70">{row.when}</p>
                <p className="font-mono text-[11px] text-paper-ink/45">{row.where}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide uppercase text-paper-ink/55">
                  {row.gate}
                </p>
                <p className="mt-1 text-sm leading-snug">{row.act}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-paper-ink/50">
          From the published job. Not a captured Luma calendar.
        </p>
      </div>
    </div>
  );
}
