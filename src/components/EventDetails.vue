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
  <section class="section-pad text-ivory-100 relative overflow-hidden" v-reveal>
    
    <!-- Background Corner Accents -->
    <svg class="absolute top-0 left-0 w-48 h-48 text-gold-500/10 pointer-events-none transform -scale-x-100" viewBox="0 0 100 100" fill="none">
       <path d="M0 0 L100 0 C100 50 50 100 0 100 Z" fill="currentColor"/>
    </svg>
    <svg class="absolute bottom-0 right-0 w-48 h-48 text-gold-500/10 pointer-events-none transform scale-x-100 scale-y-[-1]" viewBox="0 0 100 100" fill="none">
       <path d="M0 0 L100 0 C100 50 50 100 0 100 Z" fill="currentColor"/>
    </svg>

    <div class="mx-auto max-w-xl text-center relative z-10">
      <!-- Section Header -->
      <div class="mb-8 text-center">
        <p class="font-cinzel text-xs font-bold tracking-[0.3em] text-gold-500 uppercase mb-3">Lokasi &amp; Waktu</p>
        <div class="flex items-center justify-center gap-4">
          <span class="h-px w-16 bg-gradient-to-r from-transparent to-gold-400"></span>
          <span class="text-gold-400 text-xl">❖</span>
          <span class="h-px w-16 bg-gradient-to-l from-transparent to-gold-400"></span>
        </div>
      </div>

      <h2 class="font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl drop-shadow-lg mb-10">
        Rangkaian Acara Sakral
      </h2>

      <!-- Date & Time Cards -->
      <div class="grid gap-5 sm:grid-cols-2">
        <!-- Card 1 -->
        <div class="glass-card-dark rounded-3xl p-6 text-left transition-transform hover:-translate-y-1 border border-gold-400/30 relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 relative z-10">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-600/30 to-gold-900/30 text-gold-400 border border-gold-400/20 shadow-inner">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p class="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">Hari &amp; Tanggal</p>
              <p class="font-cinzel text-[15px] font-bold text-ivory-100 mt-1">{{ dateLabel }}</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="glass-card-dark rounded-3xl p-6 text-left transition-transform hover:-translate-y-1 border border-gold-400/30 relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 relative z-10">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-600/30 to-gold-900/30 text-gold-400 border border-gold-400/20 shadow-inner">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p class="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">Waktu Acara</p>
              <p class="font-cinzel text-[15px] font-bold text-ivory-100 mt-1">{{ timeLabel }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Venue Card -->
      <div class="mt-5 glass-card-dark rounded-3xl p-8 text-left border border-gold-400/40 relative">
        <!-- Inner thin border -->
        <div class="absolute inset-2 border border-gold-400/10 rounded-2xl pointer-events-none"></div>

        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-800/20 text-gold-400 border border-gold-500/30 shadow-lg">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="font-cinzel text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">Lokasi Syukuran</p>
            <p class="mt-1 font-cinzel text-xl font-extrabold text-ivory-100 drop-shadow-md">{{ venueName }}</p>
            <p class="mt-2 text-sm leading-relaxed text-ivory-300 font-medium">{{ venueAddress }}</p>
            
            <div v-if="dresscode" class="mt-4 inline-flex items-center gap-2 rounded-xl bg-gold-900/40 px-4 py-2 text-xs text-gold-200 border border-gold-500/30 shadow-sm">
              <span class="text-gold-400">❖</span>
              <span class="font-medium tracking-wide">Busana: {{ dresscode }}</span>
            </div>

            <div class="mt-6 flex flex-wrap gap-4">
              <a
                v-if="mapsUrl"
                :href="mapsUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 font-cinzel text-xs font-bold text-emerald-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Buka Google Maps</span>
                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Agenda Timeline -->
      <div v-if="agenda.length" class="mt-12 glass-card-dark rounded-3xl p-8 text-left border border-gold-400/30">
        <div class="flex items-center justify-center gap-3 mb-8">
          <span class="h-px w-8 bg-gold-400/50"></span>
          <p class="text-center font-cinzel text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">Susunan Acara</p>
          <span class="h-px w-8 bg-gold-400/50"></span>
        </div>

        <div class="relative max-w-sm mx-auto">
          <!-- Continuous line -->
          <div class="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold-600 via-gold-400 to-gold-600 opacity-40"></div>
          
          <ul class="space-y-8 relative">
            <li v-for="(item, i) in agenda" :key="i" class="relative group pl-12">
              <!-- Diamond bullet -->
              <div class="absolute left-[9px] top-1 flex h-3.5 w-3.5 items-center justify-center rotate-45 bg-gold-500 ring-4 ring-emerald-950 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
              
              <div class="bg-emerald-900/30 rounded-2xl p-4 border border-gold-500/20 transition-colors group-hover:bg-gold-900/20 group-hover:border-gold-500/40">
                <span class="font-cinzel text-xs font-bold text-gold-300 tracking-widest">{{ item.time }}</span>
                <p class="font-body text-[15px] font-bold text-ivory-100 mt-1 drop-shadow-sm">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
