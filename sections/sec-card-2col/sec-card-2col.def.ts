import {defineSection, example, SectionLayoutGroup} from "../sections.def";


defineSection('sec-card-2col', SectionLayoutGroup.Content)`

This section displays a card with two columns. A Main column with the text or main content and a side column.

The will be automatically pulled into the side-column. Additional side content can be specified by adding
a .aside class to the element.

This element can be used multiple times in the main content of a page. It should not be used more than 3 times
in a row without a different section in between (due to the visual similarity).

If a blockquote element is specified as first element, it will be used as a big callout header. Use this
to highlight important information but keep it short (text size is .h1).

`;


example("Section with image and Accordion below the text.")`
## Vorsorge
{: layout="use: #sec-card-2col"}

> Vorsorge ist die beste Medizin!

![](https://cdn.leuffen.de//leu-stock/v2/76/c_gfedcba/AdobeStock_79790308.webp)

Schützen Sie sich und Ihre Lieben durch regelmäßige Untersuchungen, präventive Maßnahmen und individuelle Beratung. Wir stehen Ihnen zur Seite, um potenzielle Gesundheitsrisiken frühzeitig zu erkennen und maßgeschneiderte Präventionspläne zu entwickeln.

---
{: layout="use: accordion()" class="mt-5"}

### Gesundheits-Check-Up

Der Gesundheits-Check-Up ist eine umfassende Untersuchung, die dazu dient, Krankheiten frühzeitig zu erkennen und zu behandeln. Dieser Check-Up ist für alle Patienten ab 35 Jahren alle drei Jahre und für HZV Patienten alle 2 Jahre empfohlen.

### Hautkrebs-Früherkennung

Die Hautkrebs-Früherkennung ist eine wichtige Maßnahme zur Früherkennung von Hautkrebs. Sie sollte ab dem 35. Lebensjahr regelmäßig durchgeführt werden. Dieser Check ist für alle Patienten alle zwei Jahre empfohlen.

### Impfungen

Impfungen sind eine wichtige Maßnahme zur Vorbeugung von Infektionskrankheiten. Wir beraten Sie gerne zu den empfohlenen Impfungen und führen diese in unserer Praxis durch. Für Impfungen ist kein Termin erforderlich. Kommen Sie einfach während der Sprechzeiten vorbei.


`;


example("Example with Header, Image on one side and Header Text and form on the other side.")`
## Online Rezept
{: layout="use: #sec-card-2col"}

> Jetzt Wiederholungsrezept online anfragen

![](https://cdn.leuffen.de//leu-stock/v2/96/c_gfedcba/AdobeStock_249986710.webp)

Mit unserem Online-Rezeptformular können Sie bequem von zu Hause aus ein neues Rezept für Ihre Dauermedikation oder Folgerezepte anfordern.
 **Bestellungen vor 10:00 Uhr können am Folgetag abgeholt werden.**

---
{: layout="use: #e-form" .mt-5}

[input type="text"  name="Name" required .mb-3]
[input type="date" name="Geburtsdatum" required .mb-3]
[input type="email" name="E-Mail" required .mb-3]
[input type="tel" name="Telefon" required .mb-3]
[textarea name="Medikament" required .mb-3]
[textarea name="Ihre Nachricht (optional)" .mb-3 style="height: 120px;"]
[input type="checkbox" name="Datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required .mb-3]
[input type="submit" value="Absenden" .btn .btn-primary .btn-lg .mt-3]

`;

