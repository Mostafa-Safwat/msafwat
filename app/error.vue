<template>
  <main class="error">
    <a href="/" class="logo">MOSTAFA<span class="dot">.</span></a>
    <div class="card">
      <p class="code">{{ error.statusCode }}</p>
      <h1 class="h2">{{ notFound ? 'Page not found.' : 'Something went wrong.' }}</h1>
      <p class="msg">
        {{ notFound ? "This page doesn't exist. The portfolio is all on one page." : 'Please try again in a moment.' }}
      </p>
      <a href="/" class="btn btn-home">Back to the homepage</a>
    </div>
  </main>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps<{ error: NuxtError }>()
  const notFound = computed(() => props.error.statusCode === 404)

  useHead({
    title: notFound.value ? 'Page not found · Mostafa Safwat' : 'Error · Mostafa Safwat',
    meta: [{ name: 'robots', content: 'noindex' }],
  })
</script>

<style scoped>
  .error {
    max-width: 1120px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 18px 24px 100px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  .logo { align-self: flex-start; font-family: var(--display); font-size: 18px; font-weight: 700; text-decoration: none }
  .dot { color: var(--gtext) }
  .card {
    align-self: center;
    width: min(100%, 560px);
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 8px 8px 0 var(--pink);
    padding: clamp(28px, 6vw, 48px);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .code {
    margin: 0;
    font-family: var(--display);
    font-size: clamp(64px, 14vw, 112px);
    line-height: 1;
    color: var(--gtext);
  }
  .msg { margin: 0; color: var(--mut) }
  .btn-home { align-self: flex-start; margin-top: 8px; background: var(--pink) }
</style>
