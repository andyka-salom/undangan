<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  autoStart: { type: Boolean, default: false }
})

const audio = ref(null)
const playing = ref(false)
const audioError = ref(false)

// Web Audio API Synthesizer Fallback (Gamelan / Siter Pentatonic Melody)
let audioCtx = null
let synthTimer = null
const slendroNotes = [261.63, 293.66, 349.23, 392.00, 440.00, 523.25] // C4, D4, F4, G4, A4, C5

function playSynthNote(freq, duration = 2.5) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }

  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()

  // Bell-like sine + subtle harmonics for Gamelan sound
  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime)

  gain.gain.setValueAtTime(0.001, audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.15, audioCtx.currentTime + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration)

  osc.connect(gain)
  gain.connect(audioCtx.destination)

  osc.start()
  osc.stop(audioCtx.currentTime + duration)
}

function startSynthMelody() {
  if (synthTimer) return
  playing.value = true
  let step = 0
  const melodyPattern = [0, 2, 3, 1, 4, 3, 2, 0, 1, 3, 5, 4, 2, 1]
  
  synthTimer = setInterval(() => {
    if (!playing.value) return
    const noteIdx = melodyPattern[step % melodyPattern.length]
    playSynthNote(slendroNotes[noteIdx], 3.0)
    step++
  }, 1200)
}

function stopSynthMelody() {
  if (synthTimer) {
    clearInterval(synthTimer)
    synthTimer = null
  }
}

function play() {
  if (audio.value && props.src && !audioError.value) {
    audio.value.play().then(() => {
      playing.value = true
    }).catch((err) => {
      console.warn('HTML Audio play error, switching to Web Audio Gamelan synth:', err)
      audioError.value = true
      startSynthMelody()
    })
  } else {
    startSynthMelody()
  }
}

function pause() {
  playing.value = false
  if (audio.value) {
    audio.value.pause()
  }
  stopSynthMelody()
}

function toggle() {
  if (playing.value) {
    pause()
  } else {
    play()
  }
}

function handleAudioError() {
  console.warn('Audio URL failed to load. Using fallback Web Audio Gamelan synth.')
  audioError.value = true
  if (playing.value) {
    startSynthMelody()
  }
}

onMounted(() => {
  if (props.autoStart) {
    play()
  }
})

onUnmounted(() => {
  stopSynthMelody()
  if (audioCtx) {
    audioCtx.close()
  }
})

defineExpose({ play, pause, toggle })
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <audio
      v-if="src"
      ref="audio"
      :src="src"
      loop
      @error="handleAudioError"
    ></audio>
    <button
      type="button"
      class="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 p-1 text-gold-400 shadow-[0_4px_25px_rgba(212,175,55,0.4)] border-2 border-gold-400/70 transition-transform active:scale-95 hover:scale-105"
      @click="toggle"
      :aria-label="playing ? 'Jeda Musik' : 'Putar Musik'"
      :title="playing ? 'Matikan Musik Tembang Jawa' : 'Putar Musik Tembang Jawa'"
    >
      <!-- Disc spinning ring -->
      <div
        class="absolute inset-1 rounded-full border border-dashed border-gold-400/50"
        :class="{ 'animate-spinSlow': playing }"
      ></div>

      <!-- Icon & Equalizer wave -->
      <div class="relative z-10 flex items-center justify-center">
        <template v-if="playing">
          <div class="flex items-end gap-0.5 h-5">
            <span class="w-1 bg-gold-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_alternate] h-4"></span>
            <span class="w-1 bg-gold-300 rounded-full animate-[pulse_0.8s_ease-in-out_infinite_alternate] h-5"></span>
            <span class="w-1 bg-gold-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_alternate] h-3"></span>
          </div>
        </template>
        <template v-else>
          <svg class="h-6 w-6 text-gold-400 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </template>
      </div>
    </button>
  </div>
</template>
