-- Public Grok Bot catalog. Unowned rows (auth off): world-readable via list,
-- writable only through the scan upsert (no bulk delete).
create table if not exists fleet_bots (
  id            text primary key,
  slug          text unique not null,
  name          text not null,
  description   text not null,
  share_url     text not null,
  source_url    text,
  og_image      text,
  announced_at  timestamptz,
  category      text not null default 'Unsorted',
  payload       jsonb not null default '{}'::jsonb,
  last_seen_at  timestamptz not null default now(),
  created_at    timestamptz not null default now()
);

create index if not exists fleet_bots_announced_idx on fleet_bots (announced_at desc nulls last);

create table if not exists fleet_scans (
  id           serial primary key,
  scanned_at   timestamptz not null default now(),
  source       text not null,
  found_count  integer not null default 0,
  notes        text
);
