<template>
  <div class="frame">
    <KingfisherBird />
    <div class="inner">
      <div class="name">MOSTAFA SAFWAT</div>
      <div class="photo">
        <img src="/images/mostafa.webp" alt="Portrait of Mostafa Safwat" width="640" height="855">
      </div>
      <div class="role">Full Stack Developer</div>
      <div class="stack">TypeScript · Vue · React · NestJS · MySQL</div>
    </div>
  </div>
</template>

<style scoped>
  .frame {
    position: relative;
    width: min(320px, 82vw);
    transform: rotate(3deg);
    background: conic-gradient(from 200deg, #ffd43b, #8fe3a8, #9fd8ff, #c6f0a0, #ffd43b);
    padding: 10px;
    border: 3px solid var(--ink);
    border-radius: 16px;
    box-shadow: 8px 8px 0 var(--ink);
  }
  .inner {
    background: #fffdf8;
    color: #17141a;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .name { font-family: var(--display); font-size: 15px }
  .photo {
    aspect-ratio: 4 / 5;
    border: 2.5px solid #17141a;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    background: #f1ebe2;
  }
  .photo img { display: block; width: 100%; height: 100%; object-fit: cover }
  .role { font-size: 13px; font-weight: 700 }
  .stack {
    font-size: 13px;
    line-height: 1.45;
    border-top: 2px solid #17141a;
    padding-top: 8px;
  }
</style>
