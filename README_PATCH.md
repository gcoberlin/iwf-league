# ANSTOSS IWF – Comunio-Markt Patch

## Enthalten
- neue Seite `#/comunio-markt`
- zentrale Datendatei unter `src/data/comunioMarket.js`
- Marktwertgewinner, Verlierer, teuerste Spieler
- automatisierbarer Redaktionsblock
- sichtbarer Button auf allen bestehenden Seiten

## Einbau
1. ZIP entpacken.
2. Die enthaltenen Dateien in das Stammverzeichnis des GitHub-Repositories kopieren.
3. Bei Rückfrage `src/main.jsx` ersetzen.
4. Alles committen: `Add Comunio market foundation`
5. Cloudflare Pages veröffentlicht den Commit automatisch.

## Wichtig
Die Werte sind zunächst Beispieldaten beziehungsweise vorhandene statische Werte.
Die technische Struktur ist bereits so angelegt, dass ein Cloudflare Worker später
`src/data/comunioMarket.js` durch echte Tagesdaten ersetzt. Für den automatischen Betrieb
sollten die Live-Daten in Phase 2 besser aus `public/data/comunio-market.json` geladen werden.
