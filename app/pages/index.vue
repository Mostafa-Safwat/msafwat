<template>
  <SiteHeader />
  <main class="main">
    <HeroSection />
    <StatsRow />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
  import { education, jimber, links } from '~/data/site'

  const profile = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: 'https://msafwat.dev/',
    name: 'Mostafa Safwat · Full Stack Developer',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://msafwat.dev/#person',
      name: 'Mostafa Safwat',
      jobTitle: 'Full Stack Developer',
      url: 'https://msafwat.dev/',
      image: 'https://msafwat.dev/images/mostafa.webp',
      address: { '@type': 'PostalAddress', addressLocality: 'Asyut', addressCountry: 'EG' },
      worksFor: { '@type': 'Organization', name: jimber.company },
      alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
      knowsAbout: ['TypeScript', 'JavaScript', 'Vue', 'React', 'NestJS', 'Node.js', 'MySQL', 'PostgreSQL', 'Prisma', 'Playwright', 'Docker'],
      sameAs: [links.linkedin, links.github],
    },
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(profile) }],
  })
</script>

<style scoped>
  .main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px 100px;
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
</style>
