<script setup>
defineProps({
  fullName: { type: String, default: '' },
  parents: { type: String, default: '' },
  photo: { type: String, default: '' },
  quote: { type: String, default: '' },
  childOrder: { type: String, default: 'Putra Pertama' }
})
</script>

<template>
  <section class="section-pad text-ivory-100 relative overflow-hidden" v-reveal>
    
    <!-- Top & Bottom Gold Borders -->
    <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 opacity-70"></div>
    <div class="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 opacity-70"></div>

    <div class="mx-auto flex max-w-md flex-col items-center text-center relative z-10">
      
      <!-- Elegant Title -->
      <div class="mb-10 text-center">
        <p class="font-cinzel text-xs font-bold tracking-[0.3em] text-gold-700 uppercase mb-2">Profil Ananda</p>
        <div class="flex items-center justify-center gap-3">
          <span class="h-px w-12 bg-gold-400"></span>
          <span class="text-gold-600 text-lg">✦</span>
          <span class="h-px w-12 bg-gold-400"></span>
        </div>
      </div>

      <!-- Profile Photo Card with Gold Oval Frame -->
      <div class="relative group">
        <!-- Glow Backlight -->
        <div class="absolute -inset-4 rounded-full bg-gold-400/20 blur-2xl transition-all group-hover:bg-gold-400/40"></div>

        <!-- Gold Border Frame -->
        <div class="relative h-72 w-56 overflow-hidden rounded-[4rem] border-[6px] border-emerald-950 bg-emerald-900 p-1 shadow-2xl sm:h-80 sm:w-64 ring-2 ring-gold-400 ring-offset-4 ring-offset-ivory-100">
          <div class="h-full w-full overflow-hidden rounded-[3.5rem] border-2 border-gold-400/50">
            <img
              :src="photo || '/images/child-default.jpg'"
              :alt="fullName"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <!-- Floating Medallion Badge -->
        <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border-2 border-gold-400 bg-gradient-to-b from-emerald-900 to-emerald-950 px-6 py-2 shadow-xl">
          <span class="font-cinzel text-[11px] font-bold tracking-widest text-gold-300 uppercase drop-shadow-md whitespace-nowrap">
            {{ childOrder || 'Putra Tercinta' }}
          </span>
        </div>
      </div>

      <!-- Names & Parents -->
      <div class="mt-12 w-full">
        <h2 class="font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl tracking-wide drop-shadow-sm">
          {{ fullName }}
        </h2>
        <div class="mt-4 flex flex-col items-center gap-1">
          <p class="font-cinzel text-xs tracking-widest text-gold-700 uppercase">Putra dari</p>
          <p class="font-body text-base font-bold text-ivory-100 bg-gold-500/20 px-6 py-1.5 rounded-full border border-gold-400/30 inline-block">
            {{ parents }}
          </p>
        </div>
      </div>

      <!-- Prayer / Quote Box -->
      <div class="mt-8 relative w-full px-4">
        <!-- Decorative brackets -->
        <div class="absolute left-0 top-0 text-gold-400 opacity-40 text-4xl font-serif">"</div>
        <div class="absolute right-0 bottom-0 text-gold-400 opacity-40 text-4xl font-serif">"</div>
        
        <div class="rounded-3xl border border-gold-400/30 bg-emerald-950/50 glass-card-dark px-8 py-6 backdrop-blur-sm relative z-10">
          <p class="font-body text-[13px] italic leading-relaxed text-ivory-200 sm:text-sm font-medium">
            {{ quote }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
