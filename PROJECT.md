# ANSTOSS – Projektbuch

## Version
**v0.6 – History** · 21. Juli 2026

## Vision
ANSTOSS ist das digitale Magazin und Archiv der IWF League: aktuelle Saison, historische Comunio-Daten, Managergeschichten und gemeinsame Reisen.

## Redaktion
- **Ingo:** Chefredakteur, 11FREUNDE-Stil, analytisch und emotional, Sympathie für Außenseiter.
- **Werner:** ehemaliger Schiedsrichter, Zahlen, Taktik, klare Noten.
- **Franz:** Boulevard, frech, reißerisch und satirisch.

## Feste IWF-Fakten
- Zehn Manager.
- Erste dokumentierte Reise: Berlin 2004.
- IWF-Hymne: **Journey – Don't Stop Believin'**.
- Sommer-IWF seit 2024 bei Henning im Garten; Familien sind ausdrücklich dabei.
- Nächste Reise: Rom, 26.–29. November 2026.
- Bangkok 2028 ist beschlossen; genauer Termin folgt.

## v0.6 – Neu
- Historische Datenbasis aus `Comunio IWF.xlsx`.
- Ewige Tabelle mit zehn aktuellen Managern.
- Titelranking und alle Meister 2016/17–2025/26.
- Rekorde: höchste Meisterpunktzahl, knappstes Finale, Führung Ewige Tabelle.
- Saisonarchiv mit vollständigen Abschlusstabellen.
- Reisechronik 2004–2026.
- Sommer-IWF 2024–2026 als eigene Familien-Tradition.
- Hymne in Reisen und „Über die IWF“ integriert.
- Managertexte ergänzt:
  - Sebastian: Rapper **Pink Panther** seit Bratislava 2019.
  - Jose: ehemaliger Fußballspieler und Raumdeuter seines Teams.
  - Wassilios: zuständig für Unterkunft und Programm; Lissabon-Anekdote.
- Bewusst nicht umgesetzt: IWF-Lexikon und Fun-Facts-Boxen.

## Datenquellen
- `src/data/history.js`: historische Comunio-Abschlusstabellen und Ewige Tabelle.
- `src/data/trips.js`: Reisechronik und Sommer-IWF.
- `src/data/managers.js`: Managercharaktere, Kader und Redaktionseinschätzungen.
- `src/data/quotes.js`: Zitate der Woche.
- OpenLigaDB: Bundesliga-Spieltag.

## Offene Punkte
- Die historischen Daten beginnen erst 2016/17, obwohl die IWF-Reisechronik bis 2004 reicht.
- Uwe steht 2025/26 in der Excel-Datei mit 0 Punkten; vor einer redaktionellen Interpretation prüfen.
- Historische Reisebilder und Anekdoten nach und nach ergänzen.
- Bundesliga-Tabelle und Verknüpfung Bundesliga-Spieler ↔ IWF-Kader später ergänzen.


## Version 0.7 – Datengetriebenes Magazin

- Artikel werden über `src/data/articles/index.js` geladen und nach `publishedAt` sortiert.
- Neue Beiträge können als eigene Datei unter `src/data/articles/` angelegt werden.
- Der aktuellste Beitrag wird automatisch zur Topstory.
- Neu: Transfer-Ticker vom 22. Juli 2026 mit Kimmich, den Transfers der letzten 48 Stunden und dem Transfermarkt ab 1 Mio. Euro.
