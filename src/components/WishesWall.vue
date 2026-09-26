<script setup>
import { useWishes } from '../composables/useWishes'

const { wishes } = useWishes()

function badgeText(attendance) {
  if (attendance === 'hadir') return 'Hadir'
  if (attendance === 'tidak') return 'Tidak Hadir'
  return 'Masih Ragu'
}

function badgeClass(attendance) {
  if (attendance === 'hadir') return 'bg-emerald-950/10 text-emerald-900 border-emerald-900/20'
  if (attendance === 'tidak') return 'bg-crimson-700/10 text-crimson-700 border-crimson-700/20'
  return 'bg-gold-500/20 text-gold-700 border-gold-500/30'
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
}
</script>

<template>
  <section v-if="wishes.length" class="section-pad text-ivory-100 relative overflow-hidden" v-reveal>
    
    <!-- Top & Bottom Gold Borders -->
    <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 opacity-70"></div>
    <div class="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 opacity-70"></div>

    <div class="mx-auto max-w-xl relative z-10">
      <!-- Section Title -->
      <div class="mb-8 text-center">
        <p class="font-cinzel text-xs font-bold tracking-[0.3em] text-gold-700 uppercase mb-3">Untaian Doa</p>
        <div class="flex items-center justify-center gap-4">
          <span class="h-px w-16 bg-gradient-to-r from-transparent to-gold-400"></span>
          <span class="text-gold-600 text-lg">✦</span>
          <span class="h-px w-16 bg-gradient-to-l from-transparent to-gold-400"></span>
        </div>
      </div>

      <h2 class="text-center font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl drop-shadow-sm">
        Dinding Doa Restu
      </h2>
      <p class="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
        {{ wishes.length }} ucapan &amp; doa telah disampaikan
      </p>

      <!-- Wishes Scrollable Container -->
      <div class="thin-scroll mx-auto mt-10 max-h-[500px] space-y-4 overflow-y-auto pr-2 relative">
        <div
          v-for="wish in wishes"
          :key="wish.id"
          class="glass-card-dark rounded-3xl p-5 text-left shadow-md border-2 border-gold-400/30 transition-transform hover:-translate-y-1 bg-emerald-950/40 backdrop-blur-sm"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <!-- Avatar Medallion -->
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-900 to-emerald-950 font-cinzel text-sm font-bold text-gold-400 shadow-inner border border-gold-400/50">
                {{ wish.name?.charAt(0)?.toUpperCase() || 'T' }}
              </div>
              <div>
                <p class="font-cinzel text-[15px] font-bold text-ivory-100">{{ wish.name }}</p>
                <p class="text-[10px] font-bold tracking-wider text-gold-600 mt-0.5">{{ formatDate(wish.createdAt) }}</p>
              </div>
            </div>

            <span class="shrink-0 rounded-full border px-3 py-1 font-cinzel text-[10px] font-bold shadow-sm" :class="badgeClass(wish.attendance)">
              {{ badgeText(wish.attendance) }}
            </span>
          </div>

          <div class="mt-4 pl-3 relative">
             <span class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 to-transparent"></span>
             <p class="text-[13px] leading-relaxed text-ivory-200 font-medium italic">
               "{{ wish.message }}"
             </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
