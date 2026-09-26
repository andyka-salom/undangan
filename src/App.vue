<script setup>
import { ref, onErrorCaptured, nextTick } from 'vue'
import { config } from './data/config'
import { useGuest } from './composables/useGuest'

import CoverScreen from './components/CoverScreen.vue'
import Countdown from './components/Countdown.vue'
import QuoteSection from './components/QuoteSection.vue'
import ChildProfile from './components/ChildProfile.vue'
import EventDetails from './components/EventDetails.vue'
import Gallery from './components/Gallery.vue'
import WishesWall from './components/WishesWall.vue'
import AppFooter from './components/AppFooter.vue'
import MusicToggle from './components/MusicToggle.vue'

const { guestName } = useGuest()
const opened = ref(false)
const fatalError = ref('')
const musicRef = ref(null)

function openInvitation() {
  opened.value = true
  document.body.style.overflow = 'auto'
  nextTick(() => {
    musicRef.value?.play()
  })
}

document.body.style.overflow = 'hidden'

onErrorCaptured((err) => {
  fatalError.value = err?.message || String(err)
  console.error('[Undangan] Terjadi error saat merender halaman:', err)
  return false
})
</script>

<template>
  <div v-if="fatalError" class="flex min-h-[100svh] flex-col items-center justify-center gap-3 bg-ivory px-6 text-center">
    <p class="font-cinzel text-2xl font-bold text-crimson-600">Ada yang perlu diperbaiki</p>
    <p class="max-w-md text-sm text-emerald-900/80">
      Undangan gagal ditampilkan, kemungkinan ada isian yang salah format di
      <code class="rounded bg-emerald-100 px-1.5 py-0.5 text-xs">src/data/config.js</code>.
    </p>
    <pre class="mt-2 max-w-lg overflow-x-auto rounded-lg bg-emerald-950 p-4 text-left text-xs text-ivory-100">{{ fatalError }}</pre>
  </div>
  <div v-else class="min-h-screen bg-ivory selection:bg-gold-500 selection:text-emerald-950">
    <transition
      enter-active-class="transition-opacity duration-700"
      leave-active-class="transition-opacity duration-700"
      leave-to-class="opacity-0"
    >
      <CoverScreen
        v-if="!opened"
        :guest-name="guestName"
        :nickname="config.child.nickname"
        @open="openInvitation"
      />
    </transition>

    <main v-if="opened" class="w-full">
      <Countdown
        :target-i-s-o="config.event.dateTimeISO"
        :date-label="config.event.dateLabel"
        :time-label="config.event.timeLabel"
      />
      <QuoteSection
        :arabic="config.quote.arabic"
        :translation="config.quote.translation"
        :javanese="config.quote.javanese"
        :source="config.quote.source"
      />
      <ChildProfile
        :full-name="config.child.fullName"
        :parents="config.child.parents"
        :photo="config.child.photo"
        :quote="config.child.quote"
        :child-order="config.child.childOrder"
      />
      <EventDetails
        :date-label="config.event.dateLabel"
        :time-label="config.event.timeLabel"
        :venue-name="config.event.venueName"
        :venue-address="config.event.venueAddress"
        :maps-url="config.event.mapsUrl"
        :agenda="config.event.agenda"
        :dresscode="config.event.dresscode"
      />
      <Gallery :photos="config.gallery" />
      <WishesWall />
      <AppFooter :closing-message="config.host.closingMessage" :family-name="config.host.familyName" />
    </main>

    <!-- Music Player ALWAYS available so user gesture triggers audio playback smoothly -->
    <MusicToggle
      v-if="config.music.enabled"
      ref="musicRef"
      :src="config.music.src"
    />
  </div>
</template>
