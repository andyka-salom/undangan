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
  <section class="section-pad text-ivory-100 relative overflow-hidden" v-reveal>
    <div class="mx-auto max-w-2xl text-center relative z-10">
      <!-- Section Title -->
      <div class="mb-8 text-center">
        <p class="font-cinzel text-xs font-bold tracking-[0.3em] text-gold-700 uppercase mb-3">Dokumentasi</p>
        <div class="flex items-center justify-center gap-4">
          <span class="h-px w-16 bg-gradient-to-r from-transparent to-gold-400"></span>
          <span class="text-gold-600 text-lg">✦</span>
          <span class="h-px w-16 bg-gradient-to-l from-transparent to-gold-400"></span>
        </div>
      </div>

      <h2 class="font-cinzel text-3xl font-extrabold text-gold-gradient sm:text-4xl drop-shadow-sm mb-10">
        Momen Bahagia Ananda
      </h2>

      <!-- Photos Grid -->
      <div v-if="photos.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <figure
          v-for="(photo, i) in photos"
          :key="i"
          class="group relative cursor-pointer overflow-hidden rounded-3xl border-4 border-gold-400/40 bg-emerald-950 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold-400/80"
          @click="openLightbox(i)"
        >
          <div class="aspect-square w-full overflow-hidden">
            <img
              :src="photo.src"
              :alt="photo.caption || 'Foto Momen'"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          </div>
          <!-- Internal subtle border -->
          <div class="absolute inset-2 border border-gold-400/20 rounded-2xl pointer-events-none"></div>

          <figcaption v-if="photo.caption" class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent p-4 text-left">
            <p class="font-cinzel text-xs font-bold tracking-wider text-gold-300 drop-shadow-md line-clamp-1">{{ photo.caption }}</p>
          </figcaption>
        </figure>
      </div>

      <!-- Empty Fallback Card -->
      <div v-else class="mx-auto max-w-md rounded-3xl border-2 border-dashed border-gold-400/50 glass-card-dark bg-emerald-950/40 p-10 text-center shadow-md backdrop-blur-sm">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 text-gold-600 mb-4">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <p class="text-sm font-semibold text-ivory-200 leading-relaxed font-body">
          Galeri foto tasyakuran. Tambahkan foto di <code class="rounded bg-gold-500/20 px-2 py-1 font-mono text-[11px] text-ivory-100 border border-gold-500/30">src/data/config.js</code>.
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
