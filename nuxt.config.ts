const description = 'Mostafa Safwat, a full stack developer building web applications in TypeScript, from the Vue or React frontend to the NestJS backend and the database.'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-30',
  devtools: { enabled: false },
  css: [
    '@fontsource/dela-gothic-one/latin-400.css',
    '@fontsource/zen-kaku-gothic-new/latin-400.css',
    '@fontsource/zen-kaku-gothic-new/latin-500.css',
    '@fontsource/zen-kaku-gothic-new/latin-700.css',
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
        { property: 'og:image', content: 'https://msafwat.dev/images/og.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Mostafa Safwat, Full Stack Developer: TypeScript, Vue, React, NestJS, MySQL' },
        { name: 'twitter:card', content: 'summary_large_image' },
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
