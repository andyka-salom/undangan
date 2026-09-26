import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetISO) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const isPast = ref(false)
  let timer = null

  function tick() {
    const target = new Date(targetISO).getTime()
    const now = Date.now()
    const diff = target - now

    if (diff <= 0) {
      isPast.value = true
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      return
    }

    isPast.value = false
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((diff / (1000 * 60)) % 60)
    seconds.value = Math.floor((diff / 1000) % 60)
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, minutes, seconds, isPast }
}
