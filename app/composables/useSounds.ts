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

// The purr is one long-lived voice: petting again while it plays schedules more
// breaths onto it instead of starting a second, overlapping voice.
const BREATH = 0.85 // seconds between breaths
const MIN_PURR = 2.6 // a single pet purrs for at least this long
const PURR_FALLBACK_MS = MIN_PURR * 1000

type PurrVoice = {
  src: AudioBufferSourceNode
  lfo: OscillatorNode
  breath: GainNode
  fade: GainNode
  nextBreath: number
  end: number
  stopTimer?: ReturnType<typeof setTimeout>
}
let voice: PurrVoice | null = null

function startPurrVoice(ac: AudioContext): PurrVoice {
  const t = ac.currentTime, sr = ac.sampleRate, n = sr * 2
  const buf = ac.createBuffer(1, n, sr), ch = buf.getChannelData(0)
  let last = 0
  for (let i = 0; i < n; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; ch[i] = last * 3.5 }
  // Remove the random walk's drift so the looped buffer has no click at the seam.
  const drift = ch[n - 1]! - ch[0]!
  for (let i = 0; i < n; i++) ch[i] = ch[i]! - drift * i / (n - 1)
  const src = ac.createBufferSource(); src.buffer = buf; src.loop = true
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220
  const am = ac.createGain(); am.gain.value = 0.5
  const lfo = ac.createOscillator(); lfo.frequency.value = 25
  const lfoG = ac.createGain(); lfoG.gain.value = 0.5
  lfo.connect(lfoG).connect(am.gain)
  const breath = ac.createGain(); breath.gain.setValueAtTime(0, t)
  const fade = ac.createGain()
  src.connect(lp).connect(am).connect(breath).connect(fade).connect(ac.destination)
  src.start(t); lfo.start(t)
  return { src, lfo, breath, fade, nextBreath: t, end: t }
}

/** Purrs, or extends the current purr. Returns how long the purr will last, in ms. */
function purr(): number {
  try {
    const ac = audio()
    const now = ac.currentTime
    // Start fresh only if there's no purr or it's already fading out.
    if (!voice || now >= voice.end - 0.1) voice = startPurrVoice(ac)
    const v = voice

    while (v.end < now + MIN_PURR - 1e-3) {
      const b = v.nextBreath
      v.breath.gain.linearRampToValueAtTime(0.5, b + 0.25)
      v.breath.gain.linearRampToValueAtTime(0.18, b + 0.8)
      v.nextBreath = b + BREATH
      v.end = b + 0.9
    }

    // Move the fade-out to the new end. It hasn't started yet, so its value is still 1.
    v.fade.gain.cancelScheduledValues(now)
    v.fade.gain.setValueAtTime(1, v.end - 0.1)
    v.fade.gain.linearRampToValueAtTime(0, v.end)

    clearTimeout(v.stopTimer)
    v.stopTimer = setTimeout(() => {
      v.src.stop(); v.lfo.stop()
      if (voice === v) voice = null
    }, (v.end - now) * 1000 + 100)

    return (v.end - now) * 1000
  } catch {
    return PURR_FALLBACK_MS
  }
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
