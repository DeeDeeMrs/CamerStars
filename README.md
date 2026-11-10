# CamerStars website

Premium, responsive multi-page site for CamerStars, built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

1. Use Node.js 20.9 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

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

## Contact CamerStars

The website has no inquiry or application forms. Contact and opportunity buttons open a WhatsApp chat with CamerStars at +40 750 424 671, sometimes with a short message prefilled. WhatsApp is an external service; visitors choose what information to share there. Do not send sensitive financial or identity documents in chat.

## Deployment to Netlify

1. Import this project into Netlify. The repository's `netlify.toml` sets `npm run build`, publishes Next.js output from `.next`, and enables the Netlify Next.js plugin.
2. Deploy a Preview and test all pages and WhatsApp links, then deploy Production after privacy and claim reviews are complete.
3. Add `camerstars.com` and any `www` redirect in Netlify only after the owner has reviewed the deployment. DNS/GoDaddy settings are not changed by this project.

The canonical site origin is currently set to `https://camerstars.com`. No deployment or DNS changes have been made.

## Photography and brand assets

- `public/camerstars-logo.png` and `public/favicon.jpg` are the original CamerStars assets retrieved from the current public site.
- The three editorial portraits in `public/editorial-*.jpg` are locally hosted Unsplash images. Their use is subject to the [Unsplash License](https://unsplash.com/license). Review the live license and record any attribution or consent requirements before publication.

## Documents

- [`WEBSITE-AUDIT.md`](./WEBSITE-AUDIT.md): source-site routes, content, form fields, claims, and unresolved details.
- [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md): approved brand direction and reusable visual tokens.
- [`SEO-REPORT.md`](./SEO-REPORT.md): metadata, sitemap, structured data, and pre-launch checks.
