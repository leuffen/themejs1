# Edit Instructions

Diese Datei beschreibt, wie das Website Projekt aufgebaut ist. Das Projekt basiert auf jekyll. 
Daten wie Anschrift, Telefonnummern etc. sowie Öffnungs und Urlaubszeiten sind in den YAML Dateien unter _data/ gespeichert.
Es sollten nach möglichkeit keine dieser Daten direkt in den .md Dateien vorkommen. (falls doch- bitte stehen lassen)

## Daten in den .md Dateien

Wir verwenden für das Styling das sog. Jodastyle Javascript Framework. Dieses strukturiert die .md dateien in eine
Baumstruktur anhand der H1,H2,H3,H4,H5,H6 Tags. Über einen layout="" Tag kann das Layout gesteuert werden.

Beispiel einer Section (2 Column Layout mit Bild auf der Rechten Seite):

```markdown

## Unsere Leistungen
{: layout="use: #sec-card-2col"}

> Unterüberschrift

![Bildbeschreibung](https://cdn.leuffen.de//leu-stock/v2/303/c_gfedcba/AdobeStock_83593352.webp)

Text in der Section
```


Statt eines H-Tags können auch HR genutzt werden, wenn keien Überschrift nötig ist:

```markdown

---
{: layout="use: #sec-card-2col"}

### Element 1

Text 1

### Element 2   

Text 2

```


Achtung! zwischen HR oder H-Tag und Anweisungen in {: layout...} darf keine Leerzeile existieren!


## Bearbeitungshinweise aus Quelldateien

Beachte und befolge die `_shiller_instructions` im header der Dateien.
