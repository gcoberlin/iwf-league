import { readFile, access } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const html = await readFile(resolve(dist, 'index.html'), 'utf8')
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(([, ref]) => ref)
  .filter(ref => ref.startsWith('/'))

for (const ref of refs) {
  await access(resolve(dist, ref.slice(1)))
}

console.log(`Build geprüft: ${refs.length} referenzierte Dateien vorhanden.`)
