# CamerStars website

Premium, responsive multi-page site for CamerStars, built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

1. Use Node.js 20.9 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Optional for local form integration, copy `.env.example` to `.env.local` and supply the service values described below.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

Run `npm run lint` and `npm run build` before deployment.

## Routes

The site preserves the source paths:

- `/` (canonical homepage) and `/home` (permanent redirect)
- `/about-us`
- `/work-from-home`
- `/jobs`
- `/apply-now`
- `/partnership`
- `/onboarding-1`
- `/partnership-application`
- `/privacy`

## Secure submission setup

Application, job, contact, and partnership forms use `POST /api/submissions`. The endpoint returns an explicit `503` until its security configuration is present and `SUBMISSIONS_ENABLED=true`; it does not pretend a submission succeeded. After securely storing a submission, it emails the form details to `dms.designart@gmail.com` through Resend. Applicant photos remain in private storage and are not emailed.

1. Create a Supabase project and run [`supabase/schema.sql`](./supabase/schema.sql).
2. Confirm that the `camerstars-private-applications` bucket is private. The SQL creates it as private, limits uploads to JPEG/PNG/WebP, and sets a 1 MB per-file limit. Do not add public bucket/object policies.
3. Configure Cloudflare Turnstile for the exact local, preview, or production hostname.
4. Create a Resend account, verify the sender domain, and choose a sender address on that verified domain.
5. Set the environment values in `.env.local` for local work and in Vercel Project Settings for deployment:

   | Variable | Purpose |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | Exact origin used for same-origin submission checks |
   | `SUBMISSIONS_ENABLED` | Explicit owner-controlled gate; must remain `false` until privacy, retention, access, and storage are tested |
   | `RESEND_API_KEY` | Server-only Resend API key used to send submission notifications |
   | `SUBMISSIONS_FROM_EMAIL` | Sender address on the domain verified with Resend |
   | `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public Turnstile widget key |
   | `TURNSTILE_SECRET_KEY` | Server-only Turnstile verification key |
   | `SUPABASE_URL` | Supabase project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | Server-only service-role key; never expose or commit |
   | `SUPABASE_APPLICATIONS_BUCKET` | Private upload bucket; defaults to `camerstars-private-applications` |

6. Before enabling production submission, CamerStars must set and test access controls, who may review applicant records, a data-retention/deletion schedule, incident handling, and current privacy disclosures. Review legal requirements for each target jurisdiction.
7. Submit test records and photos on a non-production environment, verify database access, private object access, and email delivery, and delete test data before launch.

Application photos are limited to exactly two 1 MB JPEG/PNG/WebP images and stored in the private bucket. The API validates form fields, file extensions by MIME type and file signature, consent, same-origin requests, minimum form completion time, and Turnstile. It never writes applicant data into public files or application logs. Secure onboarding is intentionally informational only: no bank information or ID documents are collected by this site until a separate owner-approved secure flow is ready.

The public form route is not operational until the required server secrets and Turnstile keys are configured. Never put Supabase service-role or Turnstile secret keys in `NEXT_PUBLIC_*` variables or browser code.

## Deployment to Vercel

1. Import this project into Vercel.
2. Set environment variables for Preview and Production separately, using matching Turnstile hostnames and `NEXT_PUBLIC_SITE_URL`.
3. Deploy a Preview, test all pages and secure forms, then deploy Production after privacy, retention, access, and claim reviews are complete.
4. Add `camerstars.com` and any `www` redirect in Vercel only after the owner has reviewed the deployment. DNS/GoDaddy settings are not changed by this project.

The canonical site origin is currently set to `https://camerstars.com`. No deployment or DNS changes have been made.

## Photography and brand assets

- `public/camerstars-logo.png` and `public/favicon.jpg` are the original CamerStars assets retrieved from the current public site.
- The three editorial portraits in `public/editorial-*.jpg` are locally hosted Unsplash images. Their use is subject to the [Unsplash License](https://unsplash.com/license). Review the live license and record any attribution or consent requirements before publication.

## Documents

- [`WEBSITE-AUDIT.md`](./WEBSITE-AUDIT.md): source-site routes, content, form fields, claims, and unresolved details.
- [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md): approved brand direction and reusable visual tokens.
- [`SEO-REPORT.md`](./SEO-REPORT.md): metadata, sitemap, structured data, and pre-launch checks.
