<script setup>
import { ref } from 'vue'

const props = defineProps({
  photos: { type: Array, default: () => [] }
})

const selectedPhotoIndex = ref(null)

function openLightbox(index) {
  selectedPhotoIndex.value = index
}

function closeLightbox() {
  selectedPhotoIndex.value = null
}
</script>

<template>
  <section class="section-pad bg-ivory bg-batik-light relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-2xl text-center">
      <!-- Section Title -->
      <div class="mb-2 flex items-center justify-center gap-3 text-gold-600 opacity-80">
        <span class="h-px w-12 bg-gold-500/40"></span>
        <span class="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-700">Dokumentasi</span>
        <span class="h-px w-12 bg-gold-500/40"></span>
      </div>

      <h2 class="font-cinzel text-3xl font-extrabold text-emerald-950 sm:text-4xl">
        Momen Bahagia Ananda
      </h2>

      <!-- Photos Grid -->
      <div v-if="photos.length" class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <figure
          v-for="(photo, i) in photos"
          :key="i"
          class="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gold-400/60 bg-emerald-950 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          @click="openLightbox(i)"
        >
          <div class="aspect-square w-full overflow-hidden">
            <img
              :src="photo.src"
              :alt="photo.caption || 'Foto Momen'"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <figcaption v-if="photo.caption" class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-transparent p-3 text-left">
            <p class="font-body text-xs text-ivory-100 line-clamp-1">{{ photo.caption }}</p>
          </figcaption>
        </figure>
      </div>

      <!-- Empty Fallback Card -->
      <div v-else class="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-gold-400/50 bg-white/70 p-8 text-center shadow-sm">
        <svg class="mx-auto h-12 w-12 text-gold-500/60 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <p class="text-xs text-emerald-900 leading-relaxed">
          Galeri foto tasyakuran. Tambahkan foto di <code class="rounded bg-gold-500/20 px-1.5 py-0.5 font-mono text-[11px] text-emerald-900">src/data/config.js</code> pada bidang <code class="rounded bg-gold-500/20 px-1.5 py-0.5 font-mono text-[11px] text-emerald-900">gallery</code>.
        </p>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <teleport to="body">
      <div
        v-if="selectedPhotoIndex !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        @click="closeLightbox"
      >
        <div class="relative max-w-3xl w-full text-center" @click.stop>
          <button
            type="button"
            class="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors p-2"
            @click="closeLightbox"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          
          <img
            :src="photos[selectedPhotoIndex]?.src"
            :alt="photos[selectedPhotoIndex]?.caption"
            class="max-h-[80vh] w-auto max-w-full mx-auto rounded-2xl border-2 border-gold-400 shadow-2xl"
          />
          <p v-if="photos[selectedPhotoIndex]?.caption" class="mt-4 font-cinzel text-sm text-ivory-100">
            {{ photos[selectedPhotoIndex]?.caption }}
          </p>
        </div>
      </div>
    </teleport>
  </section>
</template>
