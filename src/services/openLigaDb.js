const API_BASE = 'https://api.openligadb.de'
const LEAGUE_SHORTCUT = 'bl1'
const SEASON = 2026

function matchStart(match) {
  return new Date(match.matchDateTimeUTC || match.matchDateTime)
}

export async function fetchBundesligaSeason(signal) {
  const response = await fetch(`${API_BASE}/getmatchdata/${LEAGUE_SHORTCUT}/${SEASON}`, { signal })
  if (!response.ok) throw new Error(`OpenLigaDB antwortet mit Status ${response.status}`)
  const data = await response.json()
  if (!Array.isArray(data)) throw new Error('OpenLigaDB lieferte ein unerwartetes Datenformat')
  return data
}

export function selectRelevantMatchday(matches, now = new Date()) {
  if (!matches.length) return null
  const sorted = [...matches].sort((a, b) => matchStart(a) - matchStart(b))
  const groups = new Map()

  sorted.forEach(match => {
    const number = match.group?.groupOrderID || match.group?.groupID || 1
    if (!groups.has(number)) groups.set(number, [])
    groups.get(number).push(match)
  })

  const currentTime = now.getTime()
  const groupEntries = [...groups.entries()].sort((a, b) => a[0] - b[0])
  const nextEntry = groupEntries.find(([, groupMatches]) =>
    groupMatches.some(match => !match.matchIsFinished && matchStart(match).getTime() >= currentTime - 3 * 60 * 60 * 1000)
  )

  const selected = nextEntry || groupEntries[groupEntries.length - 1]
  return { number: selected[0], matches: selected[1] }
}

export function getMatchScore(match) {
  const results = Array.isArray(match.matchResults) ? match.matchResults : []
  const final = results.find(result => result.resultTypeID === 2) || results[results.length - 1]
  if (!final) return null
  return `${final.pointsTeam1}:${final.pointsTeam2}`
}
