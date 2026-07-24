# Sofort-Fix für die weiße Seite

Die Browser-Konsole zeigte, dass JavaScript und CSS als `text/html` ausgeliefert wurden. Das passiert, wenn GitHub Pages zwar die `index.html`, aber nicht das dazugehörige aktuelle `dist/assets`-Paket ausliefert.

Diese Version enthält deshalb:

- eine robuste GitHub-Pages-Action mit Node.js 22 und `npm ci`
- `public/CNAME` für `iwf-anstoss.de`
- `public/.nojekyll`
- eine Build-Prüfung, die fehlende referenzierte Assets erkennt
- den vollständiger aktualisierten Transfer-Ticker

## Veröffentlichen

1. Inhalt dieser ZIP in dein Repository kopieren.
2. Danach im Terminal:

```powershell
git add .
git commit -m "Fix Pages deployment and update transfer ticker"
git push origin main
```

3. In GitHub unter **Actions** warten, bis „Deploy ANSTOSS to GitHub Pages“ grün ist.
4. Anschließend die Seite mit `Strg + F5` neu laden.

Wichtig: Nicht nur die lokale `dist/index.html` einzeln hochladen. Die Action veröffentlicht immer den kompletten neu gebauten `dist`-Ordner samt `assets`.
