export function useGuest() {
  const params = new URLSearchParams(window.location.search)
  const raw = params.get('to') || params.get('kepada') || ''
  const name = raw ? decodeURIComponent(raw.replace(/\+/g, ' ')) : ''
  return { guestName: name }
}
