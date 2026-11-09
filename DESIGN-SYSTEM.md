# CamerStars design system

## Direction

Retain the original CamerStars wordmark and its coral-to-magenta identity while making the experience more direct, readable, and welcoming. The homepage follows a color-forward editorial recruitment journey: a full-screen portrait hero, a pink-to-purple advantage strip, immersive image-led opportunity panels, a parallax interlude, saturated commission and setup sections, an image-backed earning story, FAQ, and a prominent application path. Orange-coral, pink, magenta, and plum-purple ambient light ties the portraits into broad, softly fading image edges. Its continuous color blocks and photo-led scroll take broad inspiration from international modeling-agency sites without copying their branding, assets, text, or exact layout. Internal pages keep their CamerStars content and use consistent photographic titles, accessible text widths, and clear sections.

## Brand colors

| Token | Value | Use |
|---|---|---|
| CamerStars pink-red | `#FC1738` | Primary actions, fine accents, focus states |
| Deep berry | `#7E1835` | Full-color section foundation and secondary accents |
| Editorial berry | `#AE1238` | High-contrast FAQ section |
| Logo coral | `#FF6547` | Homepage ambient light and gradient accent |
| Logo magenta | `#D91179` | Homepage ambient light and gradient accent |
| Plum purple | `#190A2E` | Homepage dark foundation and image-blend field |
| Charcoal | `#282327` | Primary text and dark footer |
| Muted mauve-gray | `#746B70` | Secondary text |
| Warm ivory | `#FBF8F5` | Internal-page background and select neutral surfaces |
| Soft blush | `#F3E6E7` | Limited neutral contrast |
| White | `#FFFFFF` | Cards, fields, and raised surfaces |
| Border | `#E7DFDC` | Dividers and controls |

The deep berry and neutrals complement, rather than replace, the original pink-red. The source also contains green (`#20B038`) on a contact-related element; it is not used as a primary brand color.

## Typography

- **Playfair Display**: expressive editorial headlines, section headings, and selected callouts.
- **DM Sans**: navigation, body copy, form labels, buttons, and supporting content.

Both use `font-display: swap`. The site respects reduced-motion preferences.

## Layout and components

- Header: understated navigation layered over image-led feature scenes, original wordmark rendered in white on transparency, circular menu control that opens a full-screen route list, contact link, and high-contrast apply CTA; compact menu on mobile. The menu presents primary site navigation without onboarding.
- Homepage hero: full-height editorial portrait with a clear webcam-model opportunity headline, dark text-safe treatment, coral-pink-purple ambient light, broad soft image edges that dissolve gradually into the background, automatic crossfading portraits, manual selection, and pause control. The header logo stays white.
- Homepage advantage strip: four concise, icon-led benefits sit directly after the hero and link to remote/studio options, training, support, and commission details; the band continues the berry color field.
- Homepage information flow: full-image opportunity panels, an editorial parallax interlude, high-contrast commission tiers, a photo-led setup checklist, an image-backed earning story, FAQ, and application/contact calls to action.
- Internal page heroes: local photography with the site-wide coral, pink, and purple palette, broad radial feathering, color-matched lighting, a text-safe overlay, concise breadcrumb, high-impact page title, supporting introduction, and a small CamerStars page signature. Privacy and onboarding use the same gradient field without a photo.
- Homepage motion: automatically crossfading portraits (never sliding), manual portrait selection, a pause control, scroll parallax in an editorial interlude, scroll-triggered section reveals, and restrained staggered image/card reveals. The photo rotation and parallax stop for reduced-motion preferences.
- Opportunity section: a light editorial gallery with full-bleed image tiles, disciplined captions, and subtle image-scale/arrow interactions.
- Sections: the homepage and all interior routes use high-contrast plum, violet, magenta, pink, and coral scenes. Editorial panels stay translucent and legible, with forms and content fields styled to fit their surrounding gradient.
- Cards: homepage opportunity cards use full-height editorial photography with legible image overlays; other role, policy, and information content retains square corners, fine rules, and deliberate hover transitions.
- Buttons: coral-to-magenta-to-purple primary gradients, translucent outlined secondary actions, modest corners, and visible hover/focus states.
- Forms: translucent plum-gradient panels, legible white labels, light high-contrast controls, pink focus rings, gradient submit actions, clear status messages, and no sensitive onboarding fields in the public interface.
- Footer: charcoal foundation, original logo, practical route grouping, and contact link, repeated consistently across all routes.
- Photography: locally hosted Unsplash imagery, selected for editorial portraits and page context. Homepage portraits use coral-pink-purple color grading, layered ambient-light blends, and wide radial feathering so the image edges transition gradually into each section. Source pages: [blonde studio portrait](https://unsplash.com/photos/woman-in-black-blazer-standing-6fAlS0h9vU8), [red-background portrait](https://unsplash.com/photos/a-woman-with-an-afro-standing-in-front-of-a-red-background-HyoTmwZQwWU), [Asian fashion portrait](https://unsplash.com/photos/a-woman-in-a-long-dress-is-posing-for-a-picture-hT5xc_4IE8k), [home-working portrait](https://unsplash.com/photos/woman-sitting-on-floor-and-leaning-on-couch-using-laptop-Nv-vx3kUR2A), [team collaboration](https://unsplash.com/photos/selective-focus-photography-of-people-sits-in-front-of-table-inside-room-sggw4-qDD54), and [photography studio](https://unsplash.com/photos/black-camera-on-tripod-in-grayscale-photography-2F3JgwHM0nU). Images are locally hosted; crop and alt text remain relevant to each context.

## Accessibility

- Semantic landmarks, one page H1, ordered headings, skip link, descriptive image text, keyboard-operable `<details>` menus/FAQs, and visible focus styles.
- Mobile navigation exposes `aria-expanded` and a descriptive control label.
- The hero's photo rotation fades between local images without translating them; visitors can choose a portrait or pause rotation. Reduced-motion preferences keep the first image static.
- Interior title scenes animate gently on entry; the main navigation opens as a keyboard-dismissable full-screen route menu and retains the apply and contact actions.
- Parallax motion is driven by passive scroll listeners in the secondary photo scene, with movement capped, reduced on mobile, and disabled for reduced-motion preferences.
- Reveal effects use IntersectionObserver and only run after hydration; reduced-motion users see content immediately.
- Reduced-motion media query disables nonessential animation and smooth scrolling.
- Forms use native validation, explicit consent, live status feedback, and avoid sending identity/bank documents through unconfigured channels.
