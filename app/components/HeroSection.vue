<template>
  <section class="hero">
    <div class="intro">
      <span class="badge">Mostafa Safwat · Asyut, Egypt · remote</span>
      <h1 class="title">Full Stack <span class="accent">Developer</span></h1>
      <p class="lead">I build web applications in TypeScript, from the Vue or React frontend to the NestJS backend and the database.</p>
      <div class="ctas">
        <a :href="`mailto:${links.email}`" class="btn btn-pink">Get in touch</a>
        <a href="#experience" class="btn btn-card">View my work</a>
        <a :href="links.cv" download class="cv">Download CV</a>
      </div>
      <div class="socials">
        <a :href="links.linkedin">LinkedIn</a>
        <a :href="links.github">GitHub</a>
        <a :href="`mailto:${links.email}`">{{ links.email }}</a>
      </div>
    </div>
    <div class="card-wrap">
      <ProfileCard />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { links } from '~/data/site'
</script>

<style scoped>
  .hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: 48px;
    align-items: center;
    padding-top: 40px;
  }
  .intro { display: flex; flex-direction: column; gap: 22px }
  .badge {
    align-self: flex-start;
    background: var(--yel);
    color: #17141a;
    padding: 4px 12px;
    font-weight: 700;
    font-size: 14px;
    transform: rotate(-2deg);
  }
  .title {
    margin: 0;
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(46px, 8vw, 92px);
    line-height: .95;
  }
  .accent { color: var(--gtext) }
  .lead {
    margin: 0;
    font-size: 20px;
    max-width: 32ch;
    color: var(--mut);
    text-wrap: pretty;
  }
  .ctas { display: flex; gap: 12px; flex-wrap: wrap }
  .btn-pink { background: var(--pink) }
  .btn-card { background: var(--card) }
  .cv { padding: 12px 6px; font-weight: 700 }
  .socials {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    font-size: 15px;
    font-weight: 500;
    color: var(--mut);
  }
  .card-wrap { display: flex; justify-content: center; padding: 100px 20px 20px }
</style>
