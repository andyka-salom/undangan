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
  <section class="section-pad text-ivory-100 text-center relative overflow-hidden" v-reveal>
    
    <!-- Thin top border -->
    <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 opacity-50"></div>

    <div class="mx-auto max-w-xl relative z-10">
      <!-- Traditional Divider Ornament -->
      <div class="mb-4 flex items-center justify-center gap-4 text-gold-600 opacity-80">
        <span class="h-px w-16 bg-gradient-to-r from-transparent to-gold-500"></span>
        <span class="text-gold-600 text-lg">❖</span>
        <span class="h-px w-16 bg-gradient-to-l from-transparent to-gold-500"></span>
      </div>

      <h2 class="font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl drop-shadow-sm">
        Hitung Mundur Acara Sakral
      </h2>
      <p class="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
        {{ dateLabel }} &bull; {{ timeLabel }}
      </p>

      <!-- Timer Boxes -->
      <div v-if="!isPast" class="mx-auto mt-10 grid max-w-md grid-cols-4 gap-3 sm:gap-5">
        <div
          v-for="unit in units"
          :key="unit.label"
          class="glass-card-dark flex flex-col items-center justify-center rounded-3xl border-2 border-gold-400/30 py-5 shadow-lg transition-transform hover:-translate-y-1 bg-emerald-950/40 relative overflow-hidden group"
        >
          <div class="absolute inset-0 bg-gradient-to-b from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span class="font-cinzel text-3xl font-extrabold text-ivory-100 sm:text-4xl drop-shadow-md">
            {{ pad(unit.get()) }}
          </span>
          <span class="mt-2 font-cinzel text-[10px] font-bold tracking-[0.2em] text-gold-700">
            {{ unit.label }}
          </span>
        </div>
      </div>
      
      <p v-else class="mt-8 font-cinzel text-xl font-bold italic text-gold-600 bg-gold-500/10 inline-block px-8 py-3 rounded-full border border-gold-400/30">
        Acara Sedang / Telah Berlangsung
      </p>

      <!-- Save to Calendar Button -->
      <div class="mt-10 flex justify-center">
        <button
          type="button"
          class="inline-flex items-center gap-3 rounded-full border border-gold-500 bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-3.5 font-cinzel text-xs font-bold text-emerald-950 shadow-xl transition-all hover:scale-105 active:scale-95 group"
          @click="addToGoogleCalendar"
        >
          <svg class="h-5 w-5 text-emerald-950 group-hover:text-emerald-900" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          <span class="tracking-widest">Simpan ke Kalender</span>
        </button>
      </div>
    </div>
  </section>
</template>
