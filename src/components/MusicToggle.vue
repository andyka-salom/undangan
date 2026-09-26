<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  autoStart: { type: Boolean, default: false }
})

const audio = ref(null)
const playing = ref(false)

function toggle() {
  if (!audio.value) return
  if (playing.value) {
    audio.value.pause()
    playing.value = false
  } else {
    audio.value.play().then(() => {
      playing.value = true
    }).catch(() => {
      playing.value = false
    })
  }
}

onMounted(() => {
  if (props.autoStart && audio.value) {
    audio.value.play().then(() => {
      playing.value = true
    }).catch(() => {
      playing.value = false
    })
  }
})

defineExpose({ toggle })
</script>

<template>
  <div v-if="src" class="fixed bottom-6 right-6 z-50">
    <audio ref="audio" :src="src" loop></audio>
    <button
      type="button"
      class="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 p-1 text-gold-400 shadow-[0_4px_25px_rgba(212,175,55,0.4)] border-2 border-gold-400/70 transition-transform active:scale-95 hover:scale-105"
      @click="toggle"
      :aria-label="playing ? 'Jeda Musik' : 'Putar Musik'"
      :title="playing ? 'Matikan Musik' : 'Putar Musik'"
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
