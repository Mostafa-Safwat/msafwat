<template>
  <section id="projects" class="projects">
    <h2 class="h2">Projects</h2>
    <div class="featured">
      <OrangeCat />
      <div class="shot">
        <img :src="snipscribe.image" :alt="snipscribe.imageAlt" width="1200" height="750" loading="lazy">
      </div>
      <div class="info">
        <div class="info-head">
          <span class="label">{{ snipscribe.label }}</span>
          <h3 class="featured-title">{{ snipscribe.title }}</h3>
        </div>
        <ul class="points">
          <li v-for="b in snipscribe.points" :key="b">{{ b }}</li>
        </ul>
        <div class="info-meta">
          <div class="tags">
            <span v-for="t in snipscribe.tech" :key="t" class="tag">{{ t }}</span>
          </div>
          <a :href="snipscribe.repo" class="repo">GitHub →<span class="sr-only"> (Snipscribe)</span></a>
        </div>
      </div>
    </div>
    <div class="grid">
      <div v-for="p in projects" :key="p.name" class="project">
        <div class="note">{{ p.note }}</div>
        <h3 class="name">{{ p.name }}</h3>
        <p class="desc">{{ p.desc }}</p>
        <div class="tech">{{ p.tech }}</div>
        <a :href="p.repo" class="repo">GitHub →<span class="sr-only"> ({{ p.name }})</span></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { projects, snipscribe } from '~/data/site'
</script>

<style scoped>
  .projects {
    scroll-margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .featured {
    position: relative;
    margin-top: 56px;
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 8px 8px 0 var(--pink);
  }
  .shot {
    aspect-ratio: 2 / 1;
    border-bottom: 2.5px solid var(--ink);
    background: var(--bg);
    overflow: hidden;
  }
  .shot img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .info {
    padding: clamp(22px, 4vw, 36px);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "head" "points" "meta";
    gap: 14px;
  }
  .info-head { grid-area: head; display: flex; flex-direction: column; gap: 14px }
  .points { grid-area: points }
  .info-meta { grid-area: meta; display: flex; flex-direction: column; gap: 14px }

  @media (min-width: 900px) {
    .info {
      grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
      grid-template-areas: "head points" "meta points";
      grid-template-rows: auto 1fr;
      column-gap: 48px;
    }
    .info-meta { align-self: end }
  }
  .label {
    align-self: flex-start;
    background: var(--pink);
    color: #17141a;
    padding: 3px 10px;
    font-weight: 700;
    font-size: 13px;
  }
  .featured-title {
    margin: 0;
    font-family: var(--display);
    font-weight: 400;
    font-size: 26px;
    line-height: 1.15;
  }
  .points {
    margin: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
  }
  .info-meta .repo { align-self: flex-start }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
    gap: 18px;
  }
  .project {
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 5px 5px 0 var(--ink);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .note { font-size: 13px; font-weight: 700; color: var(--gtext) }
  .name {
    margin: 0;
    font-family: var(--display);
    font-weight: 400;
    font-size: 19px;
    line-height: 1.2;
  }
  .desc { margin: 0; font-size: 17px; color: var(--mut); flex: 1 }
  .tech { font-size: 13px; font-weight: 700 }
  .repo { font-weight: 700 }
</style>
