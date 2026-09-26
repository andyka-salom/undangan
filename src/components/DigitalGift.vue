<script setup>
import { ref } from 'vue'

const props = defineProps({
  giftData: { type: Object, default: () => ({}) }
})

const copiedIndex = ref(null)
const copiedAddress = ref(false)

function copyToClipboard(text, index) {
  navigator.clipboard.writeText(text).then(() => {
    if (index !== undefined) {
      copiedIndex.value = index
      setTimeout(() => { copiedIndex.value = null }, 2500)
    } else {
      copiedAddress.value = true
      setTimeout(() => { copiedAddress.value = false }, 2500)
    }
  }).catch(() => {
    alert('Gagal menyalin. Silakan salin secara manual.')
  })
}
</script>

<template>
  <section v-if="giftData && giftData.enabled" class="section-pad bg-emerald-900 bg-batik-dark text-ivory-100 relative overflow-hidden" v-reveal>
    <!-- Background subtle ornament -->
    <div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"></div>

    <div class="mx-auto max-w-xl text-center relative z-10">
      <!-- Traditional Arch Header -->
      <div class="mb-4 flex items-center justify-center gap-3">
        <span class="h-px w-10 bg-gold-500/40"></span>
        <svg class="h-5 w-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <span class="h-px w-10 bg-gold-500/40"></span>
      </div>

      <h2 class="font-cinzel text-3xl font-bold text-gold-gradient sm:text-4xl">
        {{ giftData.title || 'Tanda Kasih Digital' }}
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-ivory-300 max-w-md mx-auto">
        {{ giftData.description }}
      </p>

      <!-- Accounts Grid -->
      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <div
          v-for="(acc, i) in giftData.accounts"
          :key="i"
          class="glass-card-dark rounded-2xl p-6 text-left relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-gold-400/50"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="font-cinzel text-xs font-semibold tracking-wider text-gold-400 uppercase">
              {{ acc.bank }}
            </span>
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
          </div>

          <p class="font-mono text-xl font-bold tracking-wider text-ivory-100 select-all">
            {{ acc.accountNumber }}
          </p>
          <p class="mt-1 text-xs text-ivory-300">a.n {{ acc.holder }}</p>

          <button
            type="button"
            class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500/40 bg-gold-500/10 px-4 py-2.5 text-xs font-semibold text-gold-300 transition-all hover:bg-gold-500 hover:text-emerald-900 active:scale-95"
            @click="copyToClipboard(acc.accountNumber, i)"
          >
            <template v-if="copiedIndex === i">
              <svg class="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Berhasil Disalin!</span>
            </template>
            <template v-else>
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              <span>Salin Rekening</span>
            </template>
          </button>
        </div>
      </div>

      <!-- Physical Gift Address -->
      <div v-if="giftData.giftAddress" class="mt-6 glass-card-dark rounded-2xl p-6 text-left">
        <div class="flex items-center gap-2 mb-2 text-gold-400 font-cinzel text-xs font-semibold uppercase tracking-wider">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
          </svg>
          Kirim Kado / Bingkisan Fisik
        </div>
        <p class="font-semibold text-ivory-100 text-sm">{{ giftData.giftAddress.recipient }}</p>
        <p class="mt-1 text-xs text-ivory-300 leading-relaxed">{{ giftData.giftAddress.address }}</p>
        <p v-if="giftData.giftAddress.phone" class="mt-1 text-xs text-gold-300">Telp: {{ giftData.giftAddress.phone }}</p>

        <button
          type="button"
          class="mt-3 inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 underline underline-offset-4"
          @click="copyToClipboard(giftData.giftAddress.address)"
        >
          {{ copiedAddress ? '✓ Alamat Disalin!' : 'Salin Alamat Lengkap' }}
        </button>
      </div>
    </div>
  </section>
</template>
