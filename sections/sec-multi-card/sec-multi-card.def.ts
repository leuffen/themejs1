import {defineSection, example, SectionLayoutGroup} from "../sections.def";


defineSection('sec-multi-card', SectionLayoutGroup.Content)`

A Header with callout and text followed by a card elements per h3 row with image on top.

`;


example("Leistungsübersicht auf Startseite mit Überschift, darunter 3 Columns mit Bild und Text. Danach eine Zeile mit einem Button zu den Leistungen")`
## Unsere Leistungen
{: layout="use: #sec-multi-card; cols:3;aspect-ratio: 16/9;"}

### Vorsorge

![](https://cdn.leuffen.de//leu-stock/v2/70/77-51_gfedcba/AdobeStock_87378997.webp)

Wir bieten eine umfassende Vorsorgeuntersuchung an, um Krankheiten frühzeitig zu erkennen und zu behandeln.

### Diagnostik

![](https://cdn.leuffen.de//leu-stock/v2/22/460-307_gfedcba/AdobeStock_484261570.webp)

Unsere Praxis ist mit modernsten Diagnosegeräten ausgestattet, um eine genaue und schnelle Diagnose zu gewährleisten.

### Therapie

![](https://cdn.leuffen.de//leu-stock/v2/9/1024-683_gfedcba/AdobeStock_417585744.webp)

Wir bieten eine breite Palette von Therapien an, um eine effektive Behandlung zu gewährleisten.

---
{: .section-h2}


[Unsere Leistungen](/leistungen){: .btn .btn-primary .btn-lg .mb-3}
{: .text-center}


`;

example("Mitarbeiter mit jeweils 3 Cards nebeneinander. (kann beliebig lang werden). Hier ist der Header mittels .d-none ausgeblendet (falls vorher bereits ein Cards Element steht).")`
## Unsere Mitarbeiter
{: layout="use: #sec-multi-card; cols:3;aspect-ratio: 16/9;" .d-none}

### Nicoleta Avrinte

![Bild des Mitarbeiters](https://cdn.leuffen.de//mvz-marienmuenster-k72/v2/11/c_gfedcba/portraits-mvz-nicoleta-avrinte.webp)

### Anika Engel

![Bild des Mitarbeiters](https://cdn.leuffen.de//mvz-marienmuenster-k72/v2/10/c_gfedcba/portraits-mvz-anika-engel.webp)

### Anika Meier

![Bild des Mitarbeiters](https://cdn.leuffen.de//mvz-marienmuenster-k72/v2/9/c_gfedcba/portraits-mvz-anika-meier.webp)
`;
