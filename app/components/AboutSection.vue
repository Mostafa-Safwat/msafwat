<template>
  <section class="about">
    <h2 class="h2">About</h2>
    <div class="body">
      <p v-for="(parts, i) in paragraphs" :key="i">
        <template v-for="(part, j) in parts" :key="j">
          <mark v-if="j % 2">{{ part }}</mark>
          <template v-else>{{ part }}</template>
        </template>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { about } from '~/data/site'

  // Odd entries are the ==highlighted== phrases.
  const paragraphs = about.map((p) => p.split(/==(.+?)==/))
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
  mark {
    color: inherit;
    padding: 0 .15em;
    background: linear-gradient(transparent 38%, var(--pink) 38%, var(--pink) 78%, transparent 78%);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
</style>
