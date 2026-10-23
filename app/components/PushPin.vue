<template>
  <span class="pin" aria-hidden="true">
    <svg viewBox="0 0 36 36" width="46" height="46">
      <circle class="shadow" cx="20" cy="20" r="12" />
      <circle class="head" cx="17" cy="17" r="12" :fill="color" />
      <ellipse cx="13" cy="12.5" rx="4" ry="2.6" fill="#fff" opacity=".6" transform="rotate(-35 13 12.5)" />
    </svg>
  </span>
</template>

<script setup lang="ts">
  defineProps<{ color: string }>()
</script>

<style scoped>
  .pin {
    position: absolute;
    top: -23px;
    left: 50%;
    width: 46px;
    height: 46px;
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  svg { display: block; overflow: visible }
  .shadow { fill: var(--ink) }
  .head { stroke: var(--ink); stroke-width: 2 }
</style>
