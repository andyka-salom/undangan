<script setup>
defineProps({
  closingMessage: { type: String, default: '' },
  familyName: { type: String, default: '' }
})
</script>

<template>
  <footer class="px-6 py-16 text-center text-ivory-100 border-t border-gold-400/30 relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-md relative z-10">
      <!-- Ornaments -->
      <div class="mb-4 flex items-center justify-center gap-3 text-gold-400 opacity-80">
        <span class="h-px w-10 bg-gold-400/40"></span>
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <span class="h-px w-10 bg-gold-400/40"></span>
      </div>

      <p class="font-amiri text-2xl text-gold-400 mb-3">
        جَزَاكُمُ اللهُ خَيْرًا كَثِيْرًا
      </p>

      <p class="mx-auto max-w-sm text-xs leading-relaxed text-ivory-300 sm:text-sm">
        {{ closingMessage }}
      </p>

      <div class="mt-8">
        <p class="font-cinzel text-xs uppercase tracking-widest text-gold-400/80">Kami yang mengundang,</p>
        <p class="mt-1 font-cinzel text-xl font-extrabold text-gold-gradient tracking-wide">
          {{ familyName }}
        </p>
      </div>

      <div class="mt-12 text-[11px] text-ivory-400/50 font-body">
        &copy; Undangan Khitanan Digital &bull; Dimuliakan dalam Kebaikan &amp; Doa
      </div>
    </div>
  </footer>
</template>
