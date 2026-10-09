# msafwat.dev

My portfolio: a full stack developer's one-pager on a dotted paper background, with a kingfisher perched on my profile card, a kitten hiding in a box on the experience card and a cat you can pet on the projects card.

Live at [msafwat.dev](https://msafwat.dev).

## A few details

- **Contact form:** messages are sent by email through [Resend](https://resend.com), with a honeypot and a per-visitor rate limit instead of a captcha.
- **Sounds:** the kitten's mew and the cat's purr are synthesized with the Web Audio API, no audio files.
- **Fonts:** Dela Gothic One and Zen Kaku Gothic New, self-hosted through Fontsource.

## Stack

Nuxt 4, Vue 3, TypeScript, zod and Resend. It runs as a single Docker container, and every push to `main` publishes `ghcr.io/mostafa-safwat/msafwat:latest`.

## Running it locally

```bash
npm install
cp .env.example .env
NUXT_CONTACT_TRANSPORT=log npm run dev
```

With `NUXT_CONTACT_TRANSPORT=log`, messages are printed to the console, so no Resend key is needed.

Other scripts:

```bash
npm run typecheck
npm run build
docker build -t msafwat .
```
