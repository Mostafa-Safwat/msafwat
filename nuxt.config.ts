const description = 'Mostafa Safwat, a full stack developer building web applications in TypeScript, from the Vue or React frontend to the NestJS backend and the database.'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-30',
  devtools: { enabled: false },
  css: [
    '@fontsource/dela-gothic-one/400.css',
    '@fontsource/zen-kaku-gothic-new/400.css',
    '@fontsource/zen-kaku-gothic-new/500.css',
    '@fontsource/zen-kaku-gothic-new/700.css',
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Mostafa Safwat · Full Stack Developer',
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#fff7ec' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'msafwat.dev' },
        { property: 'og:url', content: 'https://msafwat.dev/' },
        { property: 'og:title', content: 'Mostafa Safwat · Full Stack Developer' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: 'https://msafwat.dev/images/mostafa.webp' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://msafwat.dev/' },
      ],
    },
  },
  runtimeConfig: {
    resendApiKey: '',
    contactTo: '',
    contactFrom: 'msafwat.dev <hello@msafwat.dev>',
    contactTransport: 'resend',
  },
})
