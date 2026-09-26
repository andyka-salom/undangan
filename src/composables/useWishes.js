import { ref } from 'vue'

const STORAGE_KEY = 'khitanan-wishes-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function persist(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    // storage unavailable (private mode, quota) — fail silently
  }
}

const wishes = ref(load())

export function useWishes() {
  function addWish({ name, attendance, message }) {
    const entry = {
      id: Date.now(),
      name: name?.trim() || 'Tamu',
      attendance,
      message: message?.trim() || '',
      createdAt: new Date().toISOString()
    }
    wishes.value = [entry, ...wishes.value]
    persist(wishes.value)
    return entry
  }

  return { wishes, addWish }
}
