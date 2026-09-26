<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'
import { useWishes } from '../composables/useWishes'

const props = defineProps({
  whatsappNumber: { type: String, default: '' },
  whatsappEnabled: { type: Boolean, default: false },
  childNickname: { type: String, default: '' }
})

const { addWish } = useWishes()

const name = ref('')
const attendance = ref('hadir')
const message = ref('')
const submitted = ref(false)
const error = ref('')

function celebrate() {
  confetti({
    particleCount: 100,
    spread: 80,
    startVelocity: 35,
    origin: { y: 0.7 },
    colors: ['#d4af37', '#e6c367', '#0a2a26', '#ffffff']
  })
}

function handleSubmit() {
  if (!name.value.trim()) {
    error.value = 'Mohon isi nama lengkap Anda terlebih dahulu.'
    return
  }
  error.value = ''
  addWish({ name: name.value, attendance: attendance.value, message: message.value })
  submitted.value = true
  celebrate()
}

function resetForm() {
  name.value = ''
  message.value = ''
  attendance.value = 'hadir'
  submitted.value = false
}

function whatsappLink() {
  const status = attendance.value === 'hadir' ? 'akan HADIR' : attendance.value === 'tidak' ? 'TIDAK DAPAT HADIR' : 'MASIH RAGU'
  const text = `Assalamu'alaikum Wr. Wb. Saya ${name.value || '(nama)'} mengonfirmasi ${status} pada acara Tasyakuran Khitanan Ananda ${props.childNickname}.${message.value ? '\n\nDoa & Ucapan: ' + message.value : ''}`
  return `https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent(text)}`
}
</script>

<template>
  <section class="section-pad bg-emerald-950 bg-batik-dark text-ivory-100 relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-lg relative z-10">
      <!-- Section Header -->
      <div class="mb-3 flex items-center justify-center gap-3 text-gold-400 opacity-80 text-center">
        <span class="h-px w-12 bg-gold-400/40"></span>
        <span class="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-300">RSVP &amp; Doa</span>
        <span class="h-px w-12 bg-gold-400/40"></span>
      </div>

      <h2 class="text-center font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl">
        Konfirmasi Kehadiran
      </h2>
      <p class="mt-2 text-center text-xs leading-relaxed text-ivory-300 sm:text-sm">
        Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan kehormatan tersendiri bagi kami.
      </p>

      <!-- Form Container -->
      <form v-if="!submitted" class="mt-8 space-y-5 glass-card-dark rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-2xl" @submit.prevent="handleSubmit">
        <div>
          <label class="mb-1.5 block font-cinzel text-xs font-semibold tracking-wider text-gold-300 uppercase" for="rsvp-name">
            Nama Lengkap <span class="text-crimson-400">*</span>
          </label>
          <input
            id="rsvp-name"
            v-model="name"
            type="text"
            placeholder="Masukkan nama Anda"
            class="w-full rounded-xl border border-gold-400/30 bg-emerald-900/60 px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
          />
        </div>

        <div>
          <label class="mb-1.5 block font-cinzel text-xs font-semibold tracking-wider text-gold-300 uppercase">
            Konfirmasi Kehadiran
          </label>
          <div class="grid grid-cols-3 gap-2.5">
            <button
              v-for="opt in [
                { key: 'hadir', label: 'Hadir' },
                { key: 'tidak', label: 'Tidak Hadir' },
                { key: 'ragu', label: 'Masih Ragu' }
              ]"
              :key="opt.key"
              type="button"
              class="rounded-xl border px-3 py-3 font-cinzel text-xs font-bold transition-all duration-300"
              :class="attendance === opt.key
                ? 'border-gold-400 bg-gold-metallic text-emerald-950 shadow-md scale-[1.02]'
                : 'border-gold-400/20 bg-emerald-900/40 text-ivory-300 hover:border-gold-400/50'"
              @click="attendance = opt.key"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="mb-1.5 block font-cinzel text-xs font-semibold tracking-wider text-gold-300 uppercase" for="rsvp-message">
            Ucapan &amp; Doa Restu (Opsional)
          </label>
          <textarea
            id="rsvp-message"
            v-model="message"
            rows="3"
            placeholder="Tuliskan doa terbaik untuk ananda..."
            class="w-full resize-none rounded-xl border border-gold-400/30 bg-emerald-900/60 px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
          ></textarea>
        </div>

        <p v-if="error" class="text-xs text-rose-400 font-semibold">{{ error }}</p>

        <button
          type="submit"
          class="w-full rounded-xl bg-gold-metallic py-3.5 font-cinzel text-xs font-extrabold uppercase tracking-widest text-emerald-950 shadow-lg transition-transform hover:scale-[1.01] active:scale-95"
        >
          Kirim Konfirmasi &amp; Doa
        </button>

        <a
          v-if="whatsappEnabled && whatsappNumber"
          :href="whatsappLink()"
          target="_blank"
          rel="noopener"
          class="flex w-full items-center justify-center gap-2 rounded-xl border border-gold-400/40 bg-emerald-900/40 py-3 font-cinzel text-xs font-bold text-gold-300 transition-colors hover:bg-gold-500/10 hover:border-gold-400"
        >
          <svg class="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          Konfirmasi via WhatsApp
        </a>
      </form>

      <!-- Submitted Success Card -->
      <div v-else class="mt-8 glass-card-dark rounded-3xl p-8 text-center border border-gold-400/40 shadow-2xl">
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/50">
          <svg class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="font-cinzel text-2xl font-bold text-gold-gradient">
          Terima Kasih, {{ name }}!
        </h3>
        <p class="mt-2 text-xs leading-relaxed text-ivory-300">
          Konfirmasi dan doa terbaik Anda telah tersampaikan dengan sempurna.
        </p>
        <button
          type="button"
          class="mt-6 font-cinzel text-xs font-semibold text-gold-400 underline underline-offset-4 hover:text-gold-300"
          @click="resetForm"
        >
          Kirim Konfirmasi Lain
        </button>
      </div>
    </div>
  </section>
</template>
