# Kleine Texte selbst ändern

Für normale Textänderungen brauchst du keine React-Kenntnisse.

## Magazinartikel ändern

Öffne:

`src/data/articles.js`

Dort findest du Überschrift, Teaser, Autor und den gesamten Artikeltext. Der lange Artikeltext steht zwischen Backticks:

```js
content: `
# Überschrift

Hier steht der Text.
`
```

Ändere nur den Text zwischen den Backticks. Komma und Backticks müssen erhalten bleiben.

## Managertexte und Kader ändern

Öffne:

`src/data/managers.js`

Dort kannst du pro Manager unter anderem ändern:

- `rank`
- `value`
- `grade`
- `verdict`
- `players`
- `key`
- `strength`
- `weakness`
- `ingo`, `werner`, `franz`

Beispiel:

```js
name: 'Jose',
rank: 2,
value: '21,96 Mio.',
verdict: 'Top 3',
```

## Änderungen direkt bei GitHub

1. Datei im Repository öffnen.
2. Oben rechts auf das Stift-Symbol klicken.
3. Text ändern.
4. Unten auf **Commit changes** klicken.
5. GitHub Pages baut die Seite automatisch neu.

## Wichtig

- Keine Anführungszeichen oder Kommas löschen.
- Bei einem Apostroph innerhalb eines Textes besser doppelte Anführungszeichen verwenden.
- Der feste Running Gag lautet: **„Mir fehlt noch etwas die Motivation …“**
