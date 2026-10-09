<template>
  <figure ref="frame" class="frame" :class="{ dark }" :style="{ '--s': scale }">
    <figcaption class="sr-only">Live preview of the Snipscribe landing page. The light and dark mode switch works.</figcaption>
    <div class="canvas">
      <div class="bar">
        <span class="logo" aria-hidden="true">
          <img class="logo-light" src="/images/snipscribe/logo-light.webp" alt="" width="218" height="56" loading="lazy">
          <img class="logo-dark" src="/images/snipscribe/logo-dark.webp" alt="" width="218" height="56" loading="lazy">
        </span>
        <div class="actions">
          <span class="mui-btn" aria-hidden="true">Start Now</span>
          <span class="mui-btn" aria-hidden="true">Sign In</span>
          <button
            type="button"
            class="switch"
            role="switch"
            :aria-checked="dark"
            aria-label="Snipscribe dark mode"
            @click="dark = !dark"
          >
            <span class="track" />
            <span class="base"><span class="thumb" /></span>
          </button>
          <span class="burger" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" /></svg>
          </span>
        </div>
      </div>

      <div class="hero" aria-hidden="true">
        <div class="copy">
          <p class="headline">
            <span class="info">Watch Less </span>& Learn More AI Summarization for<span class="warning"> Smarter Viewing</span>
          </p>
          <p class="sub">Maximize Efficiency with instant video summaries ideal for</p>
          <div class="roles">
            <span v-for="r in roles" :key="r.label" class="role">
              <img :src="r.img" alt="" width="32" height="32" loading="lazy">{{ r.label }}
            </span>
          </div>
          <span class="mui-btn cta">Upload Your Video Now</span>
        </div>
        <div class="art">
          <img src="/images/snipscribe/hero.svg" alt="" width="552" height="423" loading="lazy">
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
  const CANVAS_WIDTH = 1440
  const DESKTOP_SCALE = 1067 / CANVAS_WIDTH

  const roles = [
    { label: 'Professionals', img: '/images/snipscribe/professional.webp' },
    { label: 'Students', img: '/images/snipscribe/student.webp' },
    { label: 'Researchers', img: '/images/snipscribe/researcher.webp' },
  ]

  const dark = ref(false)
  const frame = ref<HTMLElement>()
  const scale = ref(DESKTOP_SCALE)
  let observer: ResizeObserver | undefined

  onMounted(() => {
    observer = new ResizeObserver(([entry]) => {
      if (entry) scale.value = entry.contentRect.width / CANVAS_WIDTH
    })
    if (frame.value) observer.observe(frame.value)
  })
  onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
  .frame {
    --bg: #f3e5f5;
    --text: rgba(0, 0, 0, .87);
    --text-2: rgba(0, 0, 0, .6);
    --primary: #7e57c2;
    --on-primary: #fff;
    --track-on: #c2b0e2;
    --info: #29b6f6;
    --warning: #ffb300;
    --bar-overlay: none;
    --e1: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    --e2: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    --e3: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);

    position: relative;
    margin: 0;
    container-type: inline-size;
    aspect-ratio: 1440 / 648;
    overflow: hidden;
    background: var(--bg);
  }
  .frame.dark {
    --bg: #1a1a2e;
    --text: #fff;
    --text-2: rgba(255, 255, 255, .7);
    --primary: #b39ddb;
    --on-primary: rgba(0, 0, 0, .87);
    --info: #81d4fa;
    --warning: #ffca28;
    --bar-overlay: linear-gradient(rgba(255, 255, 255, .07), rgba(255, 255, 255, .07));
  }

  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 1440px;
    height: 648px;
    transform: scale(var(--s));
    transform-origin: 0 0;
    font: 16px / 1.5 "Poppins", Helvetica, Arial, sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }
  .canvas,
  .canvas * { transition: background-color .3s ease, color .3s ease, box-shadow .3s ease }
  .canvas p { margin: 0 }

  .bar {
    position: absolute;
    z-index: 1;
    inset: 0 0 auto;
    height: 88px;
    padding: 16px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg);
    background-image: var(--bar-overlay);
    box-shadow: var(--e2);
  }
  .logo { display: grid }
  .logo img { grid-area: 1 / 1; width: 218px; height: 56px }
  .logo-dark,
  .dark .logo-light { visibility: hidden }
  .dark .logo-dark { visibility: visible }
  .actions { display: flex; align-items: center; gap: 16px }

  .mui-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    border-radius: 24px;
    background-color: var(--primary);
    color: var(--on-primary);
    box-shadow: var(--e2);
    font-weight: 700;
    line-height: 28px;
    text-transform: uppercase;
    user-select: none;
  }

  .switch {
    position: relative;
    width: 62px;
    height: 34px;
    margin: 8px;
    padding: 7px;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .switch::after { content: ''; position: absolute; inset: -40px -64px -40px -20px }
  .switch:focus-visible { outline: 3px solid var(--info); outline-offset: 4px; border-radius: 20px }
  .track {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--primary);
  }
  .dark .track { background-color: var(--track-on) }
  .base {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1px;
    transform: translateX(6px);
    transition: transform 150ms cubic-bezier(.4, 0, .2, 1);
  }
  .dark .base { transform: translateX(22px) }
  .thumb {
    position: relative;
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);
    box-shadow: var(--e1);
  }
  .thumb::before {
    content: '';
    position: absolute;
    inset: 0;
    background: center / 20px 20px no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>');
  }
  .dark .thumb::before {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="rgba(0%2C%200%2C%200%2C%200.87)" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
  }

  .hero {
    position: absolute;
    top: 160px;
    left: 50%;
    width: 1152px;
    margin-left: -576px;
    display: grid;
    grid-template-columns: 552px 552px;
    column-gap: 48px;
    align-items: center;
  }
  .copy { display: flex; flex-direction: column; gap: 32px }
  .headline { font-weight: 700; font-size: 48px; line-height: 1.2 }
  .info { color: var(--info) }
  .warning { color: var(--warning) }
  .sub { font-weight: 300; font-size: 28px; line-height: 1.5; color: var(--text-2) }
  .roles { display: flex; align-items: center; gap: 16px; font-weight: 300; font-size: 24px; line-height: 1.6 }
  .role { display: flex; align-items: center; gap: 8px }
  .role img { width: 32px; height: 32px }
  .cta {
    align-self: flex-start;
    height: 48px;
    padding: 6px 32px;
    font-size: 22px;
    line-height: 38.5px;
  }
  .art img {
    width: 552px;
    height: 423px;
    object-fit: cover;
    border-radius: 36px;
    box-shadow: var(--e3);
  }
  .burger { display: none }

  @media (max-width: 639px) {
    .frame { aspect-ratio: auto }
    .canvas { position: relative; width: auto; height: auto; transform: none }
    .bar { position: relative; height: 64px; padding: 12px 16px }
    .logo img { width: 156px; height: 40px }
    .actions { gap: 0 }
    .actions .mui-btn { display: none }
    .switch::after { inset: 0 }
    .burger {
      display: inline-flex;
      padding: 12px;
      color: var(--warning);
    }
    .hero {
      position: static;
      width: auto;
      margin: 0;
      padding: 32px 16px;
      grid-template-columns: minmax(0, 1fr);
    }
    .headline { font-size: 32px }
    .sub { font-size: 20px }
    .roles { flex-direction: column; font-size: 18px }
    .cta {
      padding: 6px 20px;
      font-size: clamp(14px, 7cqi - 5.3px, 18px);
      line-height: 31.5px;
      white-space: nowrap;
    }
    .art { display: none }
  }
  @container (max-width: 314px) {
    .burger { display: none }
  }
</style>
