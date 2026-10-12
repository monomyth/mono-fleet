const STATS = [
  { k: "25", v: "accounts" },
  { k: "560", v: "median followers" },
  { k: "56%", v: "robotics" },
  { k: "96%", v: "source had media" },
  { k: "4.6 h", v: "median delay" },
] as const;

export function TruffleExample() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
      <figure className="overflow-hidden rounded-lg bg-bg">
        <img
          src="/samples/truffle-playbook.jpg"
          alt="The Truffle Pig Playbook, the published breakdown of 25 introductions"
          className="max-h-[36rem] w-full object-cover object-top outline outline-1 -outline-offset-1 outline-fg/10"
        />
        <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
          Posted with the announcement. Sep 11 – Oct 11.
        </figcaption>
      </figure>
      <div className="rounded-lg bg-paper p-5 text-paper-ink">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
          What the intros had in common
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {STATS.map((row) => (
            <li key={row.v} className="rounded-sm bg-paper-ink/5 px-3 py-3">
              <p className="font-display text-3xl leading-none tracking-tight">{row.k}</p>
              <p className="mt-2 font-mono text-[11px] tracking-wide text-paper-ink/55 uppercase">
                {row.v}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed">
          Small accounts, real work on camera, caught inside a day. The digest
          leads with the account, then a draft intro line.
        </p>
        <p className="mt-3 font-mono text-[11px] leading-relaxed text-paper-ink/50">
          Counts from the published playbook. Not a new search.
        </p>
      </div>
    </div>
  );
}
