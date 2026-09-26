<script setup>
defineProps({
  arabic: { type: String, default: '' },
  translation: { type: String, default: '' },
  source: { type: String, default: '' }
})
</script>

<template>
  <section class="section-pad bg-emerald-950 bg-batik-dark text-center text-ivory-100 relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-2xl px-4">
      <!-- Islamic Sacred Arch Card Container -->
      <div class="glass-card-dark relative rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-2xl">
        <!-- Arch Motif Header SVG -->
        <div class="mb-6 flex justify-center text-gold-400 opacity-90">
          <svg class="h-12 w-12" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C25 20 20 40 20 60 L20 100 L80 100 L80 60 C80 40 75 20 50 0 Z" fill="none" stroke="currentColor" stroke-width="3" />
            <circle cx="50" cy="40" r="8" fill="currentColor" />
          </svg>
        </div>

        <!-- Arabic Quote Calligraphy -->
        <p dir="rtl" class="font-amiri text-3xl font-bold leading-loose text-gold-gradient sm:text-4xl whitespace-pre-line drop-shadow-md">
          {{ arabic }}
        </p>

        <!-- Divider -->
        <div class="my-6 flex items-center justify-center gap-2 text-gold-400/60">
          <span class="h-px w-16 bg-gold-400/30"></span>
          <span class="text-xs">&bull; ✦ &bull;</span>
          <span class="h-px w-16 bg-gold-400/30"></span>
        </div>

        <!-- Translation & Source -->
        <p class="font-body text-sm leading-relaxed text-ivory-200 sm:text-base italic max-w-lg mx-auto">
          {{ translation }}
        </p>
        <p class="mt-4 font-cinzel text-xs font-bold tracking-widest text-gold-400 uppercase">
          {{ source }}
        </p>
      </div>
    </div>
  </section>
</template>
