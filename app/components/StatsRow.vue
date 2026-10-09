<template>
  <section class="stats" aria-label="Highlights">
    <div v-for="s in stats" :key="s.n" class="stat">
      <div class="n">{{ s.n }}</div>
      <div class="l">{{ s.l }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { stats } from '~/data/site'
</script>

<style scoped>
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    gap: 18px;
  }
  .stat {
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 5px 5px 0 var(--pink);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .n { font-family: var(--display); font-size: 34px; line-height: 1.1 }
  .l { color: var(--mut); font-size: 15px; line-height: 1.4 }
</style>
