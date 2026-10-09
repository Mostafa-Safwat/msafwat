<template>
  <div class="bird" aria-hidden="true">
    <svg viewBox="0 0 180 245" width="74" height="100">
      <g transform="translate(180 0) scale(-1 1)">
        <path d="M13 72 C 2 105, 5 150, 48 222 L 140 212 C 112 170, 92 120, 97 72 Z" :fill="TN" />
        <path d="M97 70 C 130 100, 152 130, 150 175 C 149 192, 152 210, 155 240 C 140 210, 105 160, 97 72 Z" :fill="BL" />
        <path d="M95 72 C 90 100, 92 130, 100 150 C 120 180, 140 200, 152 222 C 150 170, 140 120, 110 72 Z" :fill="BD" />
        <path d="M100 132 C 120 152, 142 185, 155 240 L 140 214 C 120 190, 106 165, 100 132 Z" :fill="CH" />
        <path d="M13 72 C 22 30, 55 2, 85 5 C 98 7, 108 12, 115 20 L 175 18 C 140 30, 112 38, 88 40 C 62 30, 36 42, 13 72 Z" :fill="BL" />
        <path d="M38 42 C 55 28, 80 28, 115 20 L 175 18 C 140 24, 110 30, 88 40 C 70 32, 52 34, 38 42 Z" :fill="BD" />
        <path d="M20 62 C 40 45, 65 32, 88 40 C 70 42, 45 50, 18 72 Z" :fill="TN" />
        <path d="M14 66 C 22 56, 30 50, 38 44 C 44 44, 46 52, 40 56 C 30 60, 20 68, 13 74 Z" :fill="WH" />
        <path d="M13 76 C 35 60, 60 46, 88 40 C 84 52, 70 58, 50 62 C 35 64, 22 70, 13 80 Z" :fill="BL" />
        <path d="M52 62 C 70 58, 84 52, 88 40 C 100 36, 110 37, 120 41 C 112 50, 112 62, 116 73 C 90 74, 68 70, 52 62 Z" :fill="WH" />
        <path d="M88 40 C 115 30, 145 24, 175 18 C 158 28, 138 34, 120 41 C 110 38, 98 37, 88 40 Z" :fill="CH" />
        <path d="M44 228 C 52 214, 72 206, 96 208 L 96 216 C 74 214, 58 222, 50 234 Z" :fill="FT" />
        <path d="M56 216 L 52 232 M70 210 L 68 228 M84 208 L 84 224" :stroke="FT" stroke-width="6" stroke-linecap="round" />
        <defs>
          <clipPath id="kfBelly">
            <path d="M13 72 C 2 105, 5 150, 48 222 L 140 212 C 112 170, 92 120, 97 72 Z" />
          </clipPath>
        </defs>
        <g clip-path="url(#kfBelly)">
          <path d="M22 96 C 16 130, 28 172, 60 210 C 70 180, 66 130, 50 92 C 42 80, 28 82, 22 96 Z" fill="#f7b066" />
          <path d="M60 84 C 82 120, 96 170, 120 216 L 145 216 C 118 176, 100 128, 96 76 Z" fill="#d9772e" />
          <path d="M28 112 q8 6 16 0 M48 104 q8 6 16 0 M68 100 q8 6 16 0 M36 136 q8 6 16 0 M56 128 q8 6 16 0 M76 124 q8 6 16 0 M46 160 q8 6 16 0 M66 152 q8 6 16 0 M86 150 q8 6 16 0 M58 184 q8 6 16 0 M80 178 q8 6 16 0 M100 176 q8 6 16 0" fill="none" stroke="#c4621f" stroke-width="2.4" stroke-linecap="round" opacity=".55" />
          <path d="M34 120 q6 4 12 0 M52 146 q6 4 12 0 M64 170 q6 4 12 0" fill="none" stroke="#ffd29a" stroke-width="2" stroke-linecap="round" opacity=".8" />
        </g>
        <path d="M104 80 C 126 104, 140 140, 147 196" fill="none" :stroke="TQ" stroke-width="6" stroke-linecap="round" />
        <circle v-for="([x, y], i) in spots" :key="i" :cx="x" :cy="y" r="2.6" fill="#9fe6f4" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
  const BL = '#1d86c8', BD = '#155c96', TN = '#ef9443', WH = '#fbf7ee', CH = '#23262d', FT = '#e0503a', TQ = '#4fd0e8'
  const spots = [[40, 34], [52, 24], [64, 17], [78, 14], [48, 40], [60, 30], [72, 24], [86, 22], [96, 18]]
</script>

<style scoped>
  .bird {
    position: absolute;
    bottom: 100%;
    left: 28px;
    width: 74px;
    height: 100px;
    margin-bottom: -9px;
    z-index: 3;
    pointer-events: none;
  }
  svg { overflow: visible; position: absolute; bottom: 0; left: 0 }
</style>
