create table if not exists public.website_submissions (
  id uuid primary key,
  type text not null check (type in ('application', 'job_application', 'partnership', 'contact')),
  payload jsonb not null,
  consent boolean not null default false,
  private_file_paths text[] not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.website_submissions enable row level security;
revoke all on public.website_submissions from anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'camerstars-private-applications',
  'camerstars-private-applications',
  false,
  1000000,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = false,
    file_size_limit = 1000000,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

-- Do not add public or authenticated object policies. Uploads are server-side only
-- and use the service-role key, which must never be exposed to a browser bundle.
