<template>
  <section class="about">
    <h2 class="h2">About</h2>
    <div class="body">
      <p v-for="p in about" :key="p">{{ p }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { about } from '~/data/site'
</script>

<style scoped>
  .about {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 32px;
  }
  .body {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 66ch;
    text-wrap: pretty;
  }
  .body p { margin: 0 }
</style>
