<template>
  <button type="button" class="cat" title="Click to pet" aria-label="Pet the cat" @click="pet">
    <span class="p" :class="{ purring }" style="inset:0">
      <svg width="150" height="122" viewBox="0 0 150 122" aria-hidden="true">
        <path :d="TAIL" fill="none" :stroke="K" stroke-width="19" stroke-linecap="round" />
        <path :d="TAIL" fill="none" :stroke="O" stroke-width="13.5" stroke-linecap="round" />
        <path :d="TAIL" fill="none" :stroke="OD" stroke-width="13.5" stroke-dasharray="5 15" stroke-dashoffset="-42" />
      </svg>
      <span class="p" :style="`left:24px;top:54px;width:82px;height:68px;background:${O};border:${B};border-radius:50% 50% 28% 28% / 72% 72% 28% 28%`">
        <span class="p" :style="`left:22px;top:6px;width:34px;height:48px;border-radius:50%;background:${W}`" />
        <span class="p" :style="`left:4px;top:30px;width:12px;height:4px;border-radius:3px;background:${OD};transform:rotate(-20deg)`" />
        <span class="p" :style="`left:62px;top:30px;width:12px;height:4px;border-radius:3px;background:${OD};transform:rotate(20deg)`" />
      </span>
      <span v-for="x in [36, 62]" :key="x" class="p" :style="`left:${x}px;top:106px;width:24px;height:16px;background:${W};border:${B};border-radius:12px 12px 6px 6px`" />
      <span v-for="e in ears" :key="e.left" class="p" :style="`left:${e.left}px;top:0;width:36px;height:38px;transform:rotate(${e.rot}deg)`">
        <span class="p" :style="`inset:0;background:${K};clip-path:${TRI};border-radius:4px`" />
        <span class="p" :style="`left:4px;top:6px;right:4px;bottom:2px;background:${O};clip-path:${TRI}`" />
        <span class="p" :style="`left:11px;top:14px;right:11px;bottom:2px;background:${PK};clip-path:${TRI}`" />
      </span>
      <span class="p" :style="`left:6px;top:16px;width:114px;height:70px;background:${O};border:${B};border-radius:50% 50% 46% 46% / 60% 60% 40% 40%`">
        <span class="p" :style="`left:47px;top:2px;width:4px;height:12px;border-radius:3px;background:${OD}`" />
        <span class="p" :style="`left:54px;top:0;width:4px;height:14px;border-radius:3px;background:${OD}`" />
        <span class="p" :style="`left:61px;top:2px;width:4px;height:12px;border-radius:3px;background:${OD}`" />
        <span class="p" :style="`left:34px;top:34px;width:42px;height:30px;border-radius:50%;background:${W}`" />
        <template v-for="x in [24, 68]" :key="x">
          <span v-if="purring" class="p" :style="`left:${x}px;top:30px;width:18px;height:10px;border-top:3px solid ${K};border-radius:50% 50% 0 0 / 100% 100% 0 0`" />
          <span v-else class="p" :style="`left:${x}px;top:24px;width:18px;height:20px;border-radius:50%;background:oklch(0.74 0.17 145);border:2.5px solid ${K};animation:blink 5s infinite;overflow:hidden`">
            <span class="p" :style="`left:4.5px;top:2px;width:5px;height:12px;border-radius:4px;background:${K}`" />
            <span class="p" style="left:2px;top:2px;width:4px;height:4px;border-radius:50%;background:#fff" />
            <span class="p" style="left:8px;top:10px;width:2.5px;height:2.5px;border-radius:50%;background:#fff" />
          </span>
        </template>
        <span class="p" style="left:50px;top:42px;width:11px;height:8px;background:#f08aa0;border-radius:45% 45% 50% 50% / 35% 35% 65% 65%" />
        <span v-for="x in [46, 55]" :key="x" class="p" :style="`left:${x}px;top:47px;width:10px;height:7px;border-bottom:2px solid ${K};border-radius:0 0 50% 50%`" />
        <span v-for="x in [10, 84]" :key="x" class="p" :style="`left:${x}px;top:44px;width:16px;height:9px;border-radius:50%;background:${PK};opacity:${purring ? 1 : 0.75}`" />
        <span v-for="w in whiskers" :key="w.join()" class="p" :style="`left:${w[0]}px;top:${w[1]}px;width:24px;height:2px;border-radius:2px;background:${K};transform:rotate(${w[2]}deg)`" />
      </span>
    </span>
    <template v-if="purring">
      <span v-for="h in hearts" :key="h.left" class="p heart" :style="`left:${h.left}px;animation-delay:${h.delay}s`" aria-hidden="true">♥</span>
    </template>
  </button>
</template>

<script setup lang="ts">
  const K = '#17141a', O = '#f4a64a', OD = '#d27a26', W = '#fffaf2', PK = '#f6b2bf', B = '2.5px solid #17141a'
  const TRI = 'polygon(50% 0, 100% 100%, 0 100%)'
  const TAIL = 'M90 115 C 126 120, 146 100, 138 74'
  const ears = [{ left: 10, rot: -16 }, { left: 78, rot: 16 }]
  const whiskers = [[-14, 44, 6], [-14, 51, -4], [99, 44, -6], [99, 51, 4]]
  const hearts = [{ left: 30, delay: 0 }, { left: 64, delay: 0.4 }, { left: 96, delay: 0.8 }]

  const { purr } = useSounds()
  const purring = ref(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function pet() {
    clearTimeout(timer)
    purring.value = true
    timer = setTimeout(() => { purring.value = false }, 2600)
    purr()
  }

  onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
  .cat {
    appearance: none;
    background: none;
    border: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    position: absolute;
    bottom: 100%;
    right: 56px;
    width: 132px;
    height: 122px;
    margin-bottom: -3px;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    transform-origin: 100% 100%;
  }
  .p { position: absolute; box-sizing: border-box }
  .purring { animation: purr .08s linear infinite }
  svg { position: absolute; left: 0; top: 0; overflow: visible }
  .heart {
    top: -6px;
    color: #f08aa0;
    font-size: 18px;
    font-weight: 700;
    animation: float 1.3s ease-out infinite;
    opacity: 0;
  }

  @media (max-width: 639px) {
    .cat { right: 0; transform: scale(.8) }
  }
</style>
