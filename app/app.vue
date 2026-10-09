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
