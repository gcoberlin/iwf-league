# ANSTOSS – IWF League v1.0

Digitales Magazin der IWF League mit Ausgabe 01, Saisoncheck, allen zehn Managerprofilen, Prognosen und Redaktionsrubriken.

## Lokal testen

```bash
npm ci
npm run dev
```

## Produktions-Build testen

```bash
npm run build
```

## Kleine Textänderungen

Siehe [`TEXTE_AENDERN.md`](./TEXTE_AENDERN.md).

## GitHub Pages

Der Workflow unter `.github/workflows/deploy.yml` verwendet `npm ci` und veröffentlicht den erzeugten Ordner `dist` automatisch.
