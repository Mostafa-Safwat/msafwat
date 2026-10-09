<template>
  <section class="education">
    <div class="col">
      <h2 class="h2">Education</h2>
      <div class="school-card">
        <div class="school">{{ education.school }}</div>
        <div class="degree">{{ education.degree }}</div>
      </div>
    </div>
    <div class="col">
      <h2 class="h2">Certifications</h2>
      <div class="certs">
        <div v-for="c in certs" :key="c.n" class="cert">
          <span class="cert-name">{{ c.n }}</span><span class="cert-by">, {{ c.d }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { certs, education } from '~/data/site'
</script>

<style scoped>
  .education {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: 40px;
  }
  .col { display: flex; flex-direction: column; gap: 20px }
  .school-card {
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 5px 5px 0 var(--yel);
    padding: 22px;
  }
  .school { font-weight: 700; font-size: 19px }
  .degree { color: var(--mut) }
  .certs { display: flex; flex-direction: column }
  .cert { padding: 9px 0; border-bottom: 2px solid var(--ink) }
  .cert-name { font-weight: 700 }
  .cert-by { color: var(--mut) }
</style>
