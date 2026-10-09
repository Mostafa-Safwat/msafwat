<template>
  <button
    type="button"
    class="kitten"
    :title="open ? 'Click to hide' : 'Click me'"
    :aria-label="open ? 'Hide the kitten' : 'Open the box'"
    :aria-pressed="open"
    @click="toggle"
  >
    <span class="p wiggle" :class="{ still: open }" style="inset:0">
      <span class="p" :style="`left:20px;top:40px;width:80px;height:10px;background:${IN};border:${B}`" />
      <span class="p" style="left:20px;top:-30px;width:80px;height:76px;overflow:hidden">
        <span class="p spring" :style="`left:14px;top:20px;width:54px;height:54px;transform:translateY(${open ? 0 : 66}px)`">
          <span v-for="e in ears" :key="e.left" class="p" :style="`left:${e.left}px;top:${e.top}px;width:18px;height:18px;transform:rotate(${e.rot}deg)`">
            <span class="p" :style="`inset:0;background:${K};clip-path:${TRI}`" />
            <span class="p" :style="`left:3.5px;top:6px;right:3.5px;bottom:1.5px;background:${e.fill};clip-path:${TRI}`" />
          </span>
          <span class="p" :style="`left:2px;top:16px;width:48px;height:40px;background:${W};border:${B};border-radius:50% 50% 46% 46% / 56% 56% 44% 44%;overflow:hidden`">
            <span class="p" :style="`left:-8px;top:-8px;width:24px;height:28px;border-radius:50%;background:${G}`" />
            <span class="p" :style="`left:26px;top:-10px;width:24px;height:18px;border-radius:50%;background:${C}`" />
            <span v-for="x in [10, 27]" :key="x" class="p" :style="`left:${x}px;top:13px;width:9px;height:11px;border-radius:50%;background:${K};animation:blink 4s infinite`">
              <span class="p" style="left:1.5px;top:1.5px;width:3.5px;height:3.5px;border-radius:50%;background:#fff" />
            </span>
            <span class="p" style="left:20px;top:24px;width:7px;height:5px;background:#f08aa0;border-radius:45% 45% 55% 55% / 35% 35% 65% 65%" />
            <span v-for="x in [16, 23]" :key="x" class="p" :style="`left:${x}px;top:27px;width:8px;height:5px;border-bottom:2px solid ${K};border-radius:0 0 50% 50%`" />
            <span v-for="x in [3, 35]" :key="x" class="p" :style="`left:${x}px;top:25px;width:9px;height:5px;border-radius:50%;background:${PK}`" />
          </span>
        </span>
      </span>
      <span class="p" :style="`left:20px;top:46px;width:80px;height:44px;background:${CB};border:${B};border-radius:0 0 3px 3px`">
        <span class="p" style="left:30px;top:-2px;width:16px;height:18px;background:#ecd2a8;opacity:.9" />
        <span class="p fragile">FRAGILE</span>
      </span>
      <span class="p flap" :style="`left:20px;transform-origin:0% 50%;transform:rotate(${open ? -146 : 0}deg)`" />
      <span class="p flap" :style="`left:59px;transform-origin:100% 50%;transform:rotate(${open ? 146 : 0}deg)`" />
      <span
        v-for="(x, i) in [33, 69]"
        :key="x"
        class="p spring"
        :style="`left:${x}px;top:39px;width:18px;height:13px;background:${W};border:${B};border-radius:50%;opacity:${open ? 1 : 0};transform:translateY(${open ? 0 : 8}px);transition-delay:${i * 0.05}s`"
      >
        <span class="p" style="left:4.5px;top:4px;width:1.5px;height:4px;background:#17141a;border-radius:1px" />
        <span class="p" style="left:8.5px;top:4px;width:1.5px;height:4px;background:#17141a;border-radius:1px" />
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
  const K = '#17141a', W = '#fffaf4', G = '#9ea7b8', C = '#f0cfa6', PK = '#f6b2bf', B = '2.5px solid #17141a'
  const CB = '#d9a66a', IN = '#6e4a26'
  const TRI = 'polygon(50% 0, 100% 100%, 0 100%)'
  const ears = [
    { left: 4, top: 6, rot: -18, fill: G },
    { left: 30, top: 4, rot: 16, fill: C },
  ]

  const { mew } = useSounds()
  const open = ref(false)

  function toggle() {
    if (!open.value) setTimeout(mew, 220)
    open.value = !open.value
  }
</script>

<style scoped>
  .kitten {
    appearance: none;
    background: none;
    border: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    position: absolute;
    bottom: 100%;
    right: 48px;
    width: 120px;
    height: 90px;
    margin-bottom: -3px;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    transform: scale(1.3);
    transform-origin: 100% 100%;
  }
  .p { position: absolute; box-sizing: border-box }
  .wiggle { transform-origin: 50% 100%; animation: bwiggle 4s ease-in-out infinite }
  .wiggle.still { animation: none }
  .spring { transition: transform .38s cubic-bezier(.3, 1.6, .5, 1), opacity .2s }
  .flap {
    top: 38px;
    width: 41px;
    height: 12px;
    background: #b9854a;
    border: 2.5px solid #17141a;
    border-radius: 2px;
    transition: transform .35s cubic-bezier(.3, 1.4, .5, 1);
    z-index: 3;
  }
  .fragile {
    left: 8px;
    bottom: 6px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .08em;
    color: #8a5a2b;
  }

  @media (max-width: 639px) {
    .kitten { right: 4px; transform: none }
  }
</style>
