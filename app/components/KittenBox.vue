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
        <!-- Kitten, drawn like the cat: a grey tabby with blue kitten eyes. -->
        <span class="p spring" :style="`left:10px;top:26px;width:60px;height:52px;transform:translateY(${open ? 0 : 66}px)`">
          <span v-for="e in ears" :key="e.left" class="p" :style="`left:${e.left}px;top:0;width:20px;height:21px;transform:rotate(${e.rot}deg)`">
            <span class="p" :style="`inset:0;background:${K};clip-path:${TRI};border-radius:3px`" />
            <span class="p" :style="`left:2.5px;top:3.5px;right:2.5px;bottom:1px;background:${G};clip-path:${TRI}`" />
            <span class="p" :style="`left:6.5px;top:8px;right:6.5px;bottom:1px;background:${PK};clip-path:${TRI}`" />
          </span>
          <span class="p" :style="`left:0;top:9px;width:60px;height:42px;background:${G};border:${B};border-radius:50% 50% 46% 46% / 60% 60% 40% 40%`">
            <span v-for="st in stripes" :key="st.left" class="p" :style="`left:${st.left}px;top:${st.top}px;width:2.5px;height:${st.h}px;border-radius:2px;background:${GD}`" />
            <span class="p" :style="`left:15.5px;top:19px;width:24px;height:17px;border-radius:50%;background:${W}`" />
            <span v-for="x in [9, 34]" :key="x" class="p" :style="`left:${x}px;top:11px;width:12px;height:13px;border-radius:50%;background:${EYE};border:2px solid ${K};animation:blink 4s infinite;overflow:hidden`">
              <span class="p" :style="`left:2.25px;top:1px;width:3.5px;height:8px;border-radius:3px;background:${K}`" />
              <span class="p" style="left:1px;top:1px;width:3px;height:3px;border-radius:50%;background:#fff" />
              <span class="p" style="left:5px;top:6.5px;width:1.6px;height:1.6px;border-radius:50%;background:#fff" />
            </span>
            <span class="p" style="left:24.5px;top:23.5px;width:6px;height:4.5px;background:#f08aa0;border-radius:45% 45% 50% 50% / 35% 35% 65% 65%" />
            <span v-if="mewing" class="p" :style="`left:25px;top:28px;width:5px;height:5px;border-radius:50%;background:#c2475f;border:1.5px solid ${K}`" />
            <template v-else>
              <span v-for="x in [22.5, 27.2]" :key="x" class="p" :style="`left:${x}px;top:26.5px;width:5.5px;height:4px;border-bottom:1.75px solid ${K};border-radius:0 0 50% 50%`" />
            </template>
            <span v-for="x in [3, 43]" :key="x" class="p" :style="`left:${x}px;top:26px;width:9px;height:5px;border-radius:50%;background:${PK};opacity:.75`" />
            <span v-for="w in whiskers" :key="w.join()" class="p" :style="`left:${w[0]}px;top:${w[1]}px;width:12px;height:1.5px;border-radius:2px;background:${K};transform:rotate(${w[2]}deg)`" />
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
  const K = '#17141a', W = '#fffaf4', PK = '#f6b2bf', B = '2.5px solid #17141a'
  const G = '#aab2c0', GD = '#7b8494', EYE = 'oklch(0.8 0.1 230)'
  const CB = '#d9a66a', IN = '#6e4a26'
  const TRI = 'polygon(50% 0, 100% 100%, 0 100%)'
  const ears = [{ left: 2, rot: -16 }, { left: 38, rot: 16 }]
  const stripes = [{ left: 22.25, top: 1, h: 6 }, { left: 26.25, top: 0, h: 7.5 }, { left: 30.25, top: 1, h: 6 }]
  const whiskers = [[-7, 26, 6], [-7, 30, -4], [50, 26, -6], [50, 30, 4]]

  const { mew } = useSounds()
  const open = ref(false)
  const mewing = ref(false)
  let timers: ReturnType<typeof setTimeout>[] = []

  function toggle() {
    timers.forEach(clearTimeout)
    timers = []
    mewing.value = false
    if (!open.value) {
      // The mouth opens while the mew plays.
      timers.push(setTimeout(() => { mew(); mewing.value = true }, 220))
      timers.push(setTimeout(() => { mewing.value = false }, 700))
    }
    open.value = !open.value
  }

  onBeforeUnmount(() => timers.forEach(clearTimeout))
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
