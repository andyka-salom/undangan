<script setup>
defineProps({
  arabic: { type: String, default: '' },
  translation: { type: String, default: '' },
  javanese: { type: String, default: '' },
  source: { type: String, default: '' }
})
</script>

<template>
  <section class="section-pad text-center text-ivory-100 relative overflow-hidden" v-reveal>
    <!-- Background Ornaments -->
    <div class="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
      <svg viewBox="0 0 100 100" fill="none" class="text-gold-500 w-full h-full transform -scale-x-100">
        <path d="M0,0 L100,0 C100,50 50,100 0,100 Z" fill="currentColor" />
      </svg>
    </div>
    <div class="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
      <svg viewBox="0 0 100 100" fill="none" class="text-gold-500 w-full h-full transform scale-x-100 scale-y-[-1]">
        <path d="M0,0 L100,0 C100,50 50,100 0,100 Z" fill="currentColor" />
      </svg>
    </div>

    <div class="mx-auto max-w-2xl px-4 relative z-10">
      <!-- Islamic & Traditional Arch Card Container -->
      <div class="glass-card-dark relative rounded-3xl p-8 sm:p-14 border-2 border-gold-400/40 shadow-[0_0_40px_rgba(212,175,55,0.08)] before:absolute before:inset-2 before:rounded-[1.25rem] before:border before:border-gold-400/20">
        
        <!-- Corner Ornaments inside card -->
        <svg class="absolute top-4 left-4 w-8 h-8 text-gold-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 3L3 3M3 3L3 21M3 3L11 11" />
        </svg>
        <svg class="absolute top-4 right-4 w-8 h-8 text-gold-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 3L21 3M21 3L21 21M21 3L13 11" />
        </svg>
        <svg class="absolute bottom-4 left-4 w-8 h-8 text-gold-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 21L3 21M3 21L3 3M3 21L11 13" />
        </svg>
        <svg class="absolute bottom-4 right-4 w-8 h-8 text-gold-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 21L21 21M21 21L21 3M21 21L13 13" />
        </svg>

        <!-- Arch Motif Header SVG -->
        <div class="mb-8 flex justify-center text-gold-400 opacity-90 drop-shadow-md">
          <svg class="h-14 w-14" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C25 20 20 40 20 60 L20 100 L80 100 L80 60 C80 40 75 20 50 0 Z" fill="none" stroke="currentColor" stroke-width="3" />
            <circle cx="50" cy="40" r="8" fill="currentColor" />
            <path d="M35 100 L35 70 A15 15 0 0 1 65 70 L65 100" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>

        <!-- Arabic Quote Calligraphy -->
        <p dir="rtl" class="font-amiri text-3xl font-bold leading-[2.5] text-gold-gradient sm:text-4xl whitespace-pre-line drop-shadow-lg">
          {{ arabic }}
        </p>

        <!-- Divider -->
        <div class="my-8 flex items-center justify-center gap-3 text-gold-400/80">
          <span class="h-px w-20 bg-gradient-to-r from-transparent to-gold-400"></span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
          <span class="h-px w-20 bg-gradient-to-l from-transparent to-gold-400"></span>
        </div>

        <!-- Translation -->
        <p class="font-body text-sm leading-loose text-ivory-200 sm:text-base italic max-w-lg mx-auto tracking-wide">
          {{ translation }}
        </p>

        <!-- Javanese Sacred Prayer (if present) -->
        <div v-if="javanese" class="mt-8 pt-8 border-t border-gold-400/20 relative">
          <!-- Small center ornament over border -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-950 px-3 text-gold-400">
             <span class="text-lg">❖</span>
          </div>
          <p class="font-cinzel text-xs font-bold tracking-[0.3em] text-gold-300 uppercase mb-4">Pangajab &amp; Pandonga</p>
          <p class="font-body text-[13px] leading-loose text-gold-200/90 italic max-w-lg mx-auto font-medium">
            "{{ javanese }}"
          </p>
        </div>

        <!-- Source -->
        <p class="mt-8 font-cinzel text-[10px] font-bold tracking-[0.2em] text-gold-500 uppercase bg-gold-900/30 inline-block px-4 py-1.5 rounded-full border border-gold-500/30">
          {{ source }}
        </p>
      </div>
    </div>
  </section>
</template>
