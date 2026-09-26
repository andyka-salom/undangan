<script setup>
defineProps({
  dateLabel: { type: String, default: '' },
  timeLabel: { type: String, default: '' },
  venueName: { type: String, default: '' },
  venueAddress: { type: String, default: '' },
  mapsUrl: { type: String, default: '' },
  agenda: { type: Array, default: () => [] },
  dresscode: { type: String, default: 'Batik / Pakaian Muslim Rapi' }
})
</script>

<template>
  <section class="section-pad bg-emerald-950 bg-batik-dark text-ivory-100 relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-xl text-center relative z-10">
      <!-- Section Header -->
      <div class="mb-3 flex items-center justify-center gap-3 text-gold-400 opacity-80">
        <span class="h-px w-12 bg-gold-400/40"></span>
        <span class="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-300">Lokasi &amp; Waktu</span>
        <span class="h-px w-12 bg-gold-400/40"></span>
      </div>

      <h2 class="font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl">
        Rangkaian Acara Sakral
      </h2>

      <!-- Date & Time Cards -->
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div class="glass-card-dark rounded-2xl p-5 text-left transition-transform hover:-translate-y-1">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p class="font-cinzel text-[11px] font-semibold uppercase tracking-wider text-gold-400">Hari &amp; Tanggal</p>
              <p class="font-cinzel text-base font-bold text-ivory-100">{{ dateLabel }}</p>
            </div>
          </div>
        </div>

        <div class="glass-card-dark rounded-2xl p-5 text-left transition-transform hover:-translate-y-1">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p class="font-cinzel text-[11px] font-semibold uppercase tracking-wider text-gold-400">Waktu Acara</p>
              <p class="font-cinzel text-base font-bold text-ivory-100">{{ timeLabel }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Venue Card -->
      <div class="mt-4 glass-card-dark rounded-2xl p-6 text-left border border-gold-400/30">
        <div class="flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-400">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="font-cinzel text-xs font-semibold uppercase tracking-wider text-gold-400">Lokasi Syukuran</p>
            <p class="mt-1 font-cinzel text-lg font-bold text-ivory-100">{{ venueName }}</p>
            <p class="mt-1 text-xs leading-relaxed text-ivory-300">{{ venueAddress }}</p>
            
            <div v-if="dresscode" class="mt-3 inline-flex items-center gap-2 rounded-lg bg-gold-500/10 px-3 py-1 text-xs text-gold-300 border border-gold-500/20">
              <span>👔 Tata Busana: {{ dresscode }}</span>
            </div>

            <div class="mt-4 flex flex-wrap gap-3">
              <a
                v-if="mapsUrl"
                :href="mapsUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-full bg-gold-metallic px-5 py-2.5 font-cinzel text-xs font-bold text-emerald-950 shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Buka Google Maps</span>
                <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Agenda Timeline -->
      <div v-if="agenda.length" class="mt-10 glass-card-dark rounded-2xl p-6 text-left">
        <p class="mb-6 text-center font-cinzel text-xs font-bold uppercase tracking-widest text-gold-400">Susunan Acara</p>
        <ol class="relative space-y-6 border-l-2 border-gold-500/30 ml-3 pl-6">
          <li v-for="(item, i) in agenda" :key="i" class="relative group">
            <span class="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 ring-4 ring-emerald-950"></span>
            <span class="font-cinzel text-xs font-bold text-gold-400 tracking-wider">{{ item.time }}</span>
            <p class="font-body text-sm font-semibold text-ivory-100 mt-0.5">{{ item.title }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
