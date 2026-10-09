<template>
  <section class="skills">
    <h2 class="h2">Skills</h2>
    <div class="grid">
      <div v-for="g in skills" :key="g.k" class="skill">
        <span class="k">{{ g.k }}</span>
        <span>{{ g.v }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { skills } from '~/data/site'
</script>

<style scoped>
  .skills { display: flex; flex-direction: column; gap: 28px }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 14px;
  }
  .skill {
    background: var(--card);
    border: 2px solid var(--ink);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .k { font-weight: 700; color: var(--gtext); font-size: 14px }
</style>
