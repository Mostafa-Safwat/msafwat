<template>
  <section id="experience" class="experience">
    <h2 class="h2">Experience</h2>
    <div class="card">
      <KittenBox />
      <div class="head">
        <div>
          <div class="company">{{ jimber.company }}</div>
          <div class="blurb">{{ jimber.blurb }}</div>
        </div>
        <div class="when">{{ jimber.when }}</div>
      </div>
      <div class="timeline">
        <div v-for="r in jimber.roles" :key="r.title" class="role">
          <span class="dot" :class="{ current: r.current }" />
          <span class="title">{{ r.title }}</span>
          <span class="dates">{{ r.dates }}</span>
        </div>
      </div>
      <ul class="work">
        <li v-for="w in jimber.work" :key="w">{{ w }}</li>
      </ul>
      <div class="tags">
        <span v-for="t in jimber.tech" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { jimber } from '~/data/site'
</script>

<style scoped>
  .experience {
    scroll-margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .card {
    position: relative;
    margin-top: 84px;
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 8px 8px 0 var(--ink);
    padding: clamp(22px, 4vw, 40px);
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    align-items: baseline;
  }
  .company { font-family: var(--display); font-size: 30px }
  .blurb { color: var(--mut) }
  .when { font-weight: 700 }
  /* Dots are centered on the title line; the rail runs dot-center to dot-center. */
  .timeline {
    --dot: 14px;
    --dot-top: 7px;
    display: flex;
    flex-direction: column;
    padding-left: 32px;
  }
  .role {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .role:not(:last-child) { padding-bottom: 16px }
  .role:not(:last-child)::before {
    content: '';
    position: absolute;
    left: calc(-32px + var(--dot) / 2 - 1.5px);
    top: calc(var(--dot-top) + var(--dot) / 2);
    bottom: calc(-1 * (var(--dot-top) + var(--dot) / 2));
    width: 3px;
    background: var(--ink);
  }
  .dot {
    position: absolute;
    z-index: 1;
    left: -32px;
    top: var(--dot-top);
    width: var(--dot);
    height: var(--dot);
    border-radius: 50%;
    background: var(--card);
    border: 2.5px solid var(--ink);
  }
  .dot.current { background: var(--pink) }
  .title { font-weight: 700; font-size: 18px }
  .dates { color: var(--mut); font-size: 15px }
  .work {
    margin: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 78ch;
  }
</style>
