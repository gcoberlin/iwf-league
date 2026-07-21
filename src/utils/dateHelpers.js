const DAY_MS = 24 * 60 * 60 * 1000

export function startOfLocalDay(value = new Date()) {
  const date = new Date(value)
  date.setHours(0, 0, 0, 0)
  return date
}

export function daysUntil(target, now = new Date()) {
  const start = startOfLocalDay(now)
  const end = startOfLocalDay(target)
  return Math.max(0, Math.ceil((end - start) / DAY_MS))
}

export function isBetween(now, start, end) {
  const current = new Date(now).getTime()
  return current >= new Date(start).getTime() && current <= new Date(end).getTime()
}

export function formatGermanDate(value, options = {}) {
  return new Intl.DateTimeFormat('de-DE', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
    ...options,
  }).format(new Date(value))
}

export function formatGermanTime(value) {
  return new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}
