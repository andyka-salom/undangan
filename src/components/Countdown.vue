<script setup>
import { useCountdown } from '../composables/useCountdown'

const props = defineProps({
  targetISO: { type: String, required: true },
  dateLabel: { type: String, default: '' },
  timeLabel: { type: String, default: '' }
})

const { days, hours, minutes, seconds, isPast } = useCountdown(props.targetISO)

const units = [
  { label: 'HARI', get: () => days.value },
  { label: 'JAM', get: () => hours.value },
  { label: 'MENIT', get: () => minutes.value },
  { label: 'DETIK', get: () => seconds.value }
]

function pad(n) {
  return String(n).padStart(2, '0')
}

function addToGoogleCalendar() {
  const startDate = new Date(props.targetISO)
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000) // 3 hours duration
  
  const formatDateISO = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '')
  
  const title = encodeURIComponent('Acara Khitanan Ananda Rasya')
  const details = encodeURIComponent('Undangan Tasyakuran Khitanan')
  const dates = `${formatDateISO(startDate)}/${formatDateISO(endDate)}`
  
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${dates}`
  window.open(googleUrl, '_blank')
}
</script>

<template>
  <section class="section-pad bg-ivory bg-batik-light text-center relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-xl">
      <!-- Traditional Divider Ornament -->
      <div class="mb-3 flex items-center justify-center gap-3 text-gold-600 opacity-80">
        <span class="h-px w-12 bg-gold-500/40"></span>
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span class="h-px w-12 bg-gold-500/40"></span>
      </div>

      <h2 class="font-cinzel text-2xl font-bold text-emerald-900 sm:text-3xl">
        Hitung Mundur Acara Sakral
      </h2>
      <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-gold-700 sm:text-sm">
        {{ dateLabel }} &bull; {{ timeLabel }}
      </p>

      <!-- Timer Boxes -->
      <div v-if="!isPast" class="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2.5 sm:gap-4">
        <div
          v-for="unit in units"
          :key="unit.label"
          class="glass-card-light flex flex-col items-center justify-center rounded-2xl border border-gold-400/40 py-4 shadow-md transition-transform hover:scale-105"
        >
          <span class="font-cinzel text-3xl font-extrabold text-emerald-900 sm:text-4xl">
            {{ pad(unit.get()) }}
          </span>
          <span class="mt-1 font-cinzel text-[10px] font-bold tracking-widest text-gold-700 sm:text-xs">
            {{ unit.label }}
          </span>
        </div>
      </div>
      
      <p v-else class="mt-6 font-cinzel text-lg font-bold italic text-gold-600">
        Acara Sedang / telah Berlangsung
      </p>

      <!-- Save to Calendar Button -->
      <div class="mt-8 flex justify-center">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-white/90 px-6 py-2.5 font-cinzel text-xs font-bold text-emerald-900 shadow-sm transition-all hover:bg-gold-500 hover:text-emerald-950 active:scale-95"
          @click="addToGoogleCalendar"
        >
          <svg class="h-4 w-4 text-gold-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          Simpan ke Google Calendar
        </button>
      </div>
    </div>
  </section>
</template>
