<script setup>
defineProps({
  guestName: { type: String, default: '' },
  nickname: { type: String, default: '' }
})
defineEmits(['open'])
</script>

<template>
  <section
    class="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-emerald-950 px-6 py-12 text-ivory-100 bg-batik-dark"
  >
    <!-- Background Image & Ambient Ornaments -->
    <div class="pointer-events-none absolute inset-0 z-0 opacity-20">
      <img src="/images/gunungan-gold.jpg" alt="Gunungan Backdrop" class="h-full w-full object-cover object-center scale-105 animate-pulseGlow" />
      <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/90"></div>
    </div>

    <!-- Gold Corner Frame Ornaments -->
    <div class="pointer-events-none absolute top-4 left-4 z-10 opacity-70">
      <svg class="h-12 w-12 text-gold-400" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0 0v30h5V5h25V0H0zm70 0v5h25v25h5V0H70zM0 70v30h30v-5H5V70H0zm95 25V70h5v30H70v-5h25z" />
        <circle cx="15" cy="15" r="3" />
      </svg>
    </div>
    <div class="pointer-events-none absolute top-4 right-4 z-10 opacity-70 rotate-90">
      <svg class="h-12 w-12 text-gold-400" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0 0v30h5V5h25V0H0zm70 0v5h25v25h5V0H70zM0 70v30h30v-5H5V70H0zm95 25V70h5v30H70v-5h25z" />
        <circle cx="15" cy="15" r="3" />
      </svg>
    </div>

    <!-- Top: Formal Calligraphy & Salam Header -->
    <div class="relative z-10 mt-4 text-center">
      <p dir="rtl" class="font-amiri text-2xl text-gold-400 tracking-wider">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>
      <p class="mt-2 font-cinzel text-xs font-semibold tracking-widest text-gold-300/90 uppercase">
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </p>
    </div>

    <!-- Center: Crest & Formal Title Box -->
    <div class="relative z-10 flex flex-col items-center text-center my-auto py-4">
      <!-- Traditional Medallion Crest -->
      <div class="relative mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold-400/60 bg-emerald-900/80 p-2 shadow-[0_0_30px_rgba(212,175,55,0.25)] sm:h-36 sm:w-36">
        <div class="absolute inset-1 rounded-full border border-dashed border-gold-400/40"></div>
        <img src="/images/gunungan-gold.jpg" alt="Gunungan Crest" class="absolute inset-0 h-full w-full rounded-full object-cover opacity-25" />
        <span class="font-cinzel text-5xl font-extrabold text-gold-gradient sm:text-6xl drop-shadow-md">
          {{ nickname?.charAt(0) || 'R' }}
        </span>
      </div>

      <div class="flex items-center justify-center gap-3 text-gold-400/80 mb-1">
        <span class="h-px w-10 bg-gold-400/40"></span>
        <span class="font-cinzel text-[11px] font-bold uppercase tracking-[0.3em] text-gold-300">WALIMATUL KHITAN</span>
        <span class="h-px w-10 bg-gold-400/40"></span>
      </div>

      <h1 class="mt-2 font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-5xl tracking-wide drop-shadow-lg">
        Ananda {{ nickname || 'Rasya' }}
      </h1>

      <div class="mt-4 max-w-sm rounded-xl border border-gold-400/30 bg-emerald-900/40 p-4 text-center backdrop-blur-sm">
        <p class="font-body text-xs leading-relaxed text-ivory-200 sm:text-sm">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Tasyakuran Khitanan putra kami.
        </p>
      </div>
    </div>

    <!-- Bottom: Formal Guest Badge & CTA -->
    <div class="relative z-10 mb-2 flex w-full max-w-sm flex-col items-center gap-4 text-center">
      <div class="w-full glass-card-dark rounded-2xl p-4 border border-gold-400/40 text-center shadow-lg">
        <p class="font-cinzel text-[11px] font-bold uppercase tracking-widest text-gold-400">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
        <p class="mt-1 font-cinzel text-lg font-bold text-ivory-100">
          {{ guestName || 'Tamu Undangan' }}
        </p>
      </div>

      <button
        type="button"
        class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-metallic px-9 py-3.5 font-cinzel text-xs font-extrabold text-emerald-950 shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 tracking-widest"
        @click="$emit('open')"
      >
        <span>BUKA UNDANGAN</span>
        <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </section>
</template>
