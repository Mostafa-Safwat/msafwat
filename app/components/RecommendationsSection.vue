<template>
  <section class="recommendations">
    <h2 class="h2">Testimonials</h2>
    <div class="quotes">
      <figure v-for="r in recommendations" :key="r.name" class="quote">
        <span class="mark" aria-hidden="true">“</span>
        <blockquote class="text">
          <p v-for="p in r.quote" :key="p">{{ p }}</p>
        </blockquote>
        <figcaption class="who">
          <span class="name">{{ r.name }}</span>
          <span class="role">{{ r.role }}</span>
          <a v-if="r.link" :href="r.link" class="link" target="_blank" rel="noopener">Read on LinkedIn →<span class="sr-only"> ({{ r.name }}'s recommendation, opens in a new tab)</span></a>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { recommendations } from '~/data/site'
</script>

<style scoped>
  .recommendations {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .quotes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
    gap: 28px;
  }
  .quote {
    margin: 0;
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 6px 6px 0 var(--yel);
    padding: clamp(22px, 3vw, 32px);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .quote:nth-child(even) { box-shadow: 6px 6px 0 var(--pink) }
  .mark {
    font-family: var(--display);
    font-size: 64px;
    line-height: 1;
    height: 34px;
  }
  .text {
    margin: 0;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-wrap: pretty;
  }
  .text p { margin: 0 }
  /* Pushes the name to the bottom so both cards line up when one quote is shorter. */
  .who {
    margin-top: auto;
    padding-top: 14px;
    border-top: 2px solid var(--ink);
    display: flex;
    flex-direction: column;
  }
  .name { font-weight: 700 }
  .role { color: var(--mut); font-size: 16px }
  .link { align-self: flex-start; margin-top: 8px; font-weight: 700; font-size: 16px }
</style>
