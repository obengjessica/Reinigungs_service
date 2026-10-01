# ReinigungsService-Göttingen

Marketing website for ReinigungsService-Göttingen, an independent cleaning
service covering staircases, offices, buildings and communal areas in
Göttingen and the surrounding area.

**Live site:** https://reinigungs-service.vercel.app/

---

## Features

- 🇩🇪 / 🇬🇧 German-first bilingual UI with a persistent language switcher
- ☀️ / 🌙 Light and dark theme, persisted per visitor
- 🖱️ Interactive drag/swipe **before-and-after** comparison slider
- 📱 Mobile-first layout with a sticky call/quote bar on small screens
- ✉️ Contact form wired to an SMTP-backed API route
- ⚡ Built on the Next.js App Router, styled with Tailwind CSS

## Tech stack

| Layer      | Choice                                   |
| ---------- | ----------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router) |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) |
| Animation  | [Framer Motion](https://www.framer.com/motion/) |
| Icons      | [Lucide](https://lucide.dev/) |
| Email      | [Nodemailer](https://nodemailer.com/) via SMTP |
| Hosting    | [Vercel](https://vercel.com/) |

## Project structure

```
app/                   Routes (App Router) — one folder per page
  api/contact/         Contact form submission endpoint
components/
  atoms/                Smallest building blocks (Button, Input, Typography...)
  molecules/             Composed UI pieces (ServiceCard, BeforeAfterSlider...)
  organisms/              Page sections (HomeSections, ContactForm, SharedSections)
  layout/                  SiteShell (header/footer/nav) and page-level layout
  providers/                ThemeProvider (light/dark)
lib/
  business.ts            Business contact details (single source of truth)
  photos.ts               Image asset references
  i18n/                    Language dictionary + LanguageProvider
  server/                   Server-only helpers (contactMailer.ts)
public/
  images/                 Client-provided photography used across the site
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or newer
- npm (comes with Node)

### Installation

```bash
npm install
```

### Environment variables

The contact form sends email via SMTP. Copy the example file and fill in
real credentials:

```bash
cp .env.example .env.local
```

| Variable                 | Description                                   |
| ------------------------- | ---------------------------------------------- |
| `SMTP_HOST`               | SMTP server hostname                           |
| `SMTP_PORT`                | SMTP port (usually `587`)                      |
| `SMTP_SECURE`               | `true` for port 465, otherwise `false`         |
| `SMTP_USER`                  | SMTP account username                          |
| `SMTP_PASS`                   | SMTP account password / app password           |
| `SMTP_FROM_EMAIL`              | "From" address on outgoing mail               |
| `CONTACT_RECEIVER_EMAIL`        | Inbox that receives contact form submissions  |

Without these set, the site runs fine — only the contact form's send step
will fail until they're configured.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Every push to
`main` triggers an automatic build and deploy. Environment variables must
be added separately under **Project → Settings → Environment Variables**
in the Vercel dashboard — they are not read from `.env.local`.

## Content & business information

Business contact details (name, address, phone, email) live in a single
place: [`lib/business.ts`](./lib/business.ts). Update them there rather
than hunting through individual pages.

Legal pages (`/impressum`, `/datenschutz`) contain the business's legal
notice and privacy policy. **The operator's full legal name is still a
placeholder in the Impressum** — German law (§5 TMG) requires the full
name of the responsible natural or legal person; update this before
relying on the page for compliance.

## License

Private project — all rights reserved by ReinigungsService-Göttingen.
