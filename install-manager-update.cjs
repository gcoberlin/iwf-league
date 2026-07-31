const fs = require('fs')
const path = require('path')

const root = process.cwd()
const mainPath = path.join(root, 'src', 'main.jsx')
const cssImport = "import './manager-update.css'"

if (!fs.existsSync(mainPath)) {
  console.error('FEHLER: Bitte im Stammordner von iwf-league ausführen.')
  process.exit(1)
}

let main = fs.readFileSync(mainPath, 'utf8')
if (!main.includes(cssImport)) {
  const marker = "import './styles.css'"
  if (!main.includes(marker)) {
    console.error('FEHLER: styles.css-Import wurde nicht gefunden.')
    process.exit(1)
  }
  main = main.replace(marker, marker + "\n" + cssImport)
  fs.writeFileSync(mainPath, main, 'utf8')
}

console.log('Manager-Unterseiten-Update wurde eingebaut.')
console.log('Jetzt npm run build ausführen.')
