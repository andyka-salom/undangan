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
  <section class="section-pad bg-ivory bg-batik-light relative overflow-hidden" v-reveal>
    <div class="mx-auto flex max-w-md flex-col items-center text-center">
      <!-- Profile Photo Card with Gold Oval Frame -->
      <div class="relative group">
        <!-- Glow Backlight -->
        <div class="absolute -inset-2 rounded-full bg-gold-500/20 blur-xl transition-all group-hover:bg-gold-500/30"></div>

        <!-- Gold Border Frame -->
        <div class="relative h-72 w-56 overflow-hidden rounded-[3rem] border-4 border-gold-400 bg-emerald-950 p-2 shadow-2xl sm:h-80 sm:w-64">
          <div class="h-full w-full overflow-hidden rounded-[2.5rem] border border-gold-400/40">
            <img
              :src="photo || '/images/child-default.jpg'"
              :alt="fullName"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <!-- Floating Medallion Badge -->
        <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-gold-400 bg-emerald-900 px-5 py-1.5 shadow-lg">
          <span class="font-cinzel text-[11px] font-bold tracking-widest text-gold-300 uppercase">
            {{ childOrder || 'Putra Tercinta' }}
          </span>
        </div>
      </div>

      <!-- Names & Parents -->
      <h2 class="mt-10 font-cinzel text-3xl font-extrabold text-emerald-950 sm:text-4xl tracking-wide">
        {{ fullName }}
      </h2>
      <p class="mt-2 font-body text-sm font-semibold text-gold-700 sm:text-base">
        Putra dari {{ parents }}
      </p>

      <!-- Prayer / Quote Box -->
      <div class="mt-6 rounded-2xl border border-gold-400/40 bg-white/80 p-6 shadow-md backdrop-blur-sm">
        <svg class="mx-auto h-6 w-6 text-gold-500 opacity-60 mb-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p class="font-body text-sm italic leading-relaxed text-emerald-900 sm:text-base">
          "{{ quote }}"
        </p>
      </div>
    </div>
  </section>
</template>
