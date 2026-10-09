// Tiny synthesized cat sounds (Web Audio), shared by the kitten and the cat.
let ctx: AudioContext | null = null

function audio(): AudioContext {
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    ctx = new Ctor()
  }
  ctx.resume()
  return ctx
}

function purr() {
  try {
    const ac = audio()
    const t = ac.currentTime, len = 2.6, sr = ac.sampleRate
    const buf = ac.createBuffer(1, sr * len, sr), ch = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < ch.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; ch[i] = last * 3.5 }
    const src = ac.createBufferSource(); src.buffer = buf
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220
    const am = ac.createGain(); am.gain.value = 0.5
    const lfo = ac.createOscillator(); lfo.frequency.value = 25
    const lfoG = ac.createGain(); lfoG.gain.value = 0.5
    lfo.connect(lfoG).connect(am.gain)
    const out = ac.createGain()
    out.gain.setValueAtTime(0, t)
    for (const o of [0, 0.85, 1.7]) {
      out.gain.linearRampToValueAtTime(0.5, t + o + 0.25)
      out.gain.linearRampToValueAtTime(0.18, t + o + 0.8)
    }
    out.gain.linearRampToValueAtTime(0, t + len)
    src.connect(lp).connect(am).connect(out).connect(ac.destination)
    src.start(t); lfo.start(t); src.stop(t + len); lfo.stop(t + len)
  } catch {}
}

function mew() {
  try {
    const ac = audio()
    const t = ac.currentTime, dur = 0.42
    const osc = ac.createOscillator(); osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(700, t)
    osc.frequency.linearRampToValueAtTime(1050, t + 0.12)
    osc.frequency.exponentialRampToValueAtTime(560, t + dur)
    const vib = ac.createOscillator(); vib.frequency.value = 7
    const vibG = ac.createGain(); vibG.gain.value = 18
    vib.connect(vibG).connect(osc.frequency)
    const f1 = ac.createBiquadFilter(); f1.type = 'bandpass'; f1.Q.value = 6
    f1.frequency.setValueAtTime(900, t); f1.frequency.linearRampToValueAtTime(1800, t + 0.14); f1.frequency.linearRampToValueAtTime(1100, t + dur)
    const f2 = ac.createBiquadFilter(); f2.type = 'bandpass'; f2.Q.value = 8; f2.frequency.value = 3000
    const g2 = ac.createGain(); g2.gain.value = 0.35
    const out = ac.createGain()
    out.gain.setValueAtTime(0, t)
    out.gain.linearRampToValueAtTime(0.28, t + 0.05)
    out.gain.setValueAtTime(0.28, t + 0.2)
    out.gain.exponentialRampToValueAtTime(0.001, t + dur)
    osc.connect(f1).connect(out); osc.connect(f2).connect(g2).connect(out)
    out.connect(ac.destination)
    osc.start(t); vib.start(t); osc.stop(t + dur + 0.05); vib.stop(t + dur + 0.05)
  } catch {}
}

export function useSounds() {
  return { purr, mew }
}
