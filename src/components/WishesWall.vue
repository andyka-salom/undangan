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
  <section v-if="wishes.length" class="section-pad bg-ivory bg-batik-light relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-xl">
      <!-- Section Title -->
      <div class="mb-2 flex items-center justify-center gap-3 text-gold-600 opacity-80 text-center">
        <span class="h-px w-12 bg-gold-500/40"></span>
        <span class="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-700">Untaian Doa</span>
        <span class="h-px w-12 bg-gold-500/40"></span>
      </div>

      <h2 class="text-center font-cinzel text-3xl font-extrabold text-emerald-950 sm:text-4xl">
        Dinding Doa Restu
      </h2>
      <p class="mt-1 text-center text-xs text-gold-700 font-semibold">
        {{ wishes.length }} ucapan &amp; doa telah disampaikan oleh para tamu
      </p>

      <!-- Wishes Scrollable Container -->
      <div class="thin-scroll mx-auto mt-8 max-h-[460px] space-y-3.5 overflow-y-auto pr-1.5">
        <div
          v-for="wish in wishes"
          :key="wish.id"
          class="glass-card-light rounded-2xl p-4 text-left shadow-sm border border-gold-400/30 transition-transform hover:-translate-y-0.5"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <!-- Avatar Medallion -->
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-950 font-cinzel text-sm font-bold text-gold-400 shadow-sm border border-gold-400/40">
                {{ wish.name?.charAt(0)?.toUpperCase() || 'T' }}
              </div>
              <div>
                <p class="font-cinzel text-sm font-bold text-emerald-950">{{ wish.name }}</p>
                <p class="text-[10px] text-gold-700/80">{{ formatDate(wish.createdAt) }}</p>
              </div>
            </div>

            <span class="shrink-0 rounded-full border px-3 py-1 font-cinzel text-[10px] font-bold" :class="badgeClass(wish.attendance)">
              {{ badgeText(wish.attendance) }}
            </span>
          </div>

          <p v-if="wish.message" class="mt-3 text-xs leading-relaxed text-emerald-900/90 italic pl-1 border-l-2 border-gold-400/40">
            "{{ wish.message }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
