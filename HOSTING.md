# Hosting Checklist

## 1) Configure environment variables

Copy `.env.example` to `.env.local` for local testing and set real values:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_EMAIL`
- `CONTACT_RECEIVER_EMAIL`

Set the same variables in your hosting provider (for example Vercel project settings).

## 2) Test locally

1. Run `npm run dev`
2. Open `http://localhost:3000/contact`
3. Submit the form and confirm the backend sends an email

## 3) Production checks

- `npm run build` passes
- Contact form returns success and email is delivered
- Rate limit is active on repeated requests
- Hidden honeypot field remains empty for real users

## 4) Deploy

- Connect repository to your hosting provider
- Add environment variables in the host dashboard
- Deploy and verify contact form end-to-end in production
