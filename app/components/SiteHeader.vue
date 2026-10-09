<template>
  <header class="header">
    <span class="logo">MOSTAFA<span class="dot">.</span></span>

    <a v-for="item in nav" :key="item.href" :href="item.href" class="paw-link">{{ item.label }}</a>

    <button
      type="button"
      class="menu-btn"
      :class="{ open }"
      aria-label="Menu"
      :aria-expanded="open"
      aria-controls="mobile-nav"
      @click="open = !open"
    >
      {{ open ? 'Close' : 'Menu' }}
    </button>

    <nav v-if="open" id="mobile-nav" class="mobile-nav">
      <a v-for="item in nav" :key="item.href" :href="item.href" class="mobile-link" @click="open = false">
        {{ item.label }}<span class="mobile-n">{{ item.n }}</span>
      </a>
      <a :href="links.cv" download class="mobile-cv">Download CV</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { links, nav } from '~/data/site'

  const open = ref(false)
</script>

<style scoped>
  .header {
    position: relative;
    z-index: 20;
    max-width: 1120px;
    margin: 0 auto;
    padding: 18px 24px;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 700;
  }
  .logo { font-family: var(--display); margin-right: auto; font-size: 18px }
  .dot { color: var(--gtext) }

  .paw-link {
    text-decoration: none;
    padding: 4px 2px 4px 24px;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2024%2024%27%3E%3Cg%20fill%3D%27%233f9a55%27%3E%3Cellipse%20cx%3D%2712%27%20cy%3D%2716.2%27%20rx%3D%275.6%27%20ry%3D%274.6%27%2F%3E%3Cellipse%20cx%3D%274.8%27%20cy%3D%2710.4%27%20rx%3D%272.2%27%20ry%3D%272.9%27%20transform%3D%27rotate%28-25%204.8%2010.4%29%27%2F%3E%3Cellipse%20cx%3D%279.2%27%20cy%3D%275.8%27%20rx%3D%272.3%27%20ry%3D%273.1%27%20transform%3D%27rotate%28-8%209.2%205.8%29%27%2F%3E%3Cellipse%20cx%3D%2714.8%27%20cy%3D%275.8%27%20rx%3D%272.3%27%20ry%3D%273.1%27%20transform%3D%27rotate%288%2014.8%205.8%29%27%2F%3E%3Cellipse%20cx%3D%2719.2%27%20cy%3D%2710.4%27%20rx%3D%272.2%27%20ry%3D%272.9%27%20transform%3D%27rotate%2825%2019.2%2010.4%29%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: 0 55%;
    background-size: 0 0;
    transition: background-size .18s ease-out, color .15s;
  }
  .paw-link:hover,
  .paw-link:focus-visible {
    background-size: 18px 18px;
    color: var(--gtext);
    opacity: 1;
  }

  .menu-btn {
    display: none;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    font-size: 15px;
    background: oklch(0.85 0.15 145);
    color: #17141a;
    border: 2.5px solid #17141a;
    box-shadow: 3px 3px 0 #17141a;
    padding: 8px 14px;
    min-height: 44px;
  }
  .menu-btn.open { background: #ffd43b }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 16px;
    right: 16px;
    background: var(--card);
    border: 2.5px solid var(--ink);
    box-shadow: 6px 6px 0 var(--ink);
    padding: 6px 18px 14px;
    flex-direction: column;
  }
  .mobile-link {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 4px;
    border-bottom: 2px solid var(--ink);
    font-size: 22px;
    font-family: var(--display);
    font-weight: 400;
  }
  .mobile-n {
    font-family: var(--body);
    font-size: 14px;
    font-weight: 700;
    color: var(--gtext);
  }
  .mobile-cv {
    margin-top: 14px;
    text-decoration: none;
    text-align: center;
    background: oklch(0.85 0.15 145);
    color: #17141a;
    padding: 12px;
    font-weight: 700;
    border: 2.5px solid #17141a;
    box-shadow: 3px 3px 0 #17141a;
  }

  @media (max-width: 639px) {
    .paw-link { display: none }
    .menu-btn { display: block }
    .mobile-nav { display: flex }
  }
</style>
