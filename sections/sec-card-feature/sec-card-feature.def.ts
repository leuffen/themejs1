import {defineSection, example, SectionLayoutGroup} from "../sections.def";


defineSection('sec-card-feature', SectionLayoutGroup.Content)`

A Feature Card Section with a large image on top and to columens of Text below. Should be used only
once within a pages content. Best places at after 2-3 sec-card-2col elements.

If a Blockquote is used as first element, it will be used as a big callout header. The h2 element will be
smaller abouve the callout.

`;


example("Section with image image on top, header, callout and text on left and accordion on right.")`
## Vorsorge für die ganze Familie
{: layout="use: #sec-card-feature"}

> Gesundheit für alle Altersgruppen

Vorsorge ist für alle Altersgruppen wichtig. Ob Kinder, Jugendliche, Erwachsene oder Senioren - wir bieten für jede Altersgruppe passende Vorsorgeuntersuchungen an.

Uns ist eine umfassende Aufklärung über die Möglichkeiten der Vorsorge und eine individuelle Beratung wichtig. Wir arbeiten eng mit Ihnen zusammen, um die bestmögliche Vorsorge für Ihre individuellen Bedürfnisse zu gewährleisten.

[Jetzt Termin vereinbaren](/kontakt){: .btn .fw-bold .btn-secondary .mt-4}


![](https://cdn.leuffen.de//leu-stock/v2/107/1315-877_gfedcba/AdobeStock_610198709.webp)

---
{: layout="use: accordion()"}

### Akutversorgung von Kindern ab 6 Monaten

Unsere Praxis legt besonderen Wert auf die Versorgung Ihrer jüngsten Familienmitglieder. Bei akuten Beschwerden und Krankheitsbildern steht das Wohl Ihres Kindes immer an erster Stelle. Kinder ab dem Alter von 6 Monaten benötigen eine spezielle Herangehensweise, die sowohl medizinisches Know-how als auch eine kindgerechte Behandlung beinhaltet. Unsere erfahrenen Fachkräfte nehmen sich ausreichend Zeit für Ihren Nachwuchs und sorgen dafür, dass er sich in unserer Praxis sicher und geborgen fühlt.

### Jugendschutzuntersuchung

Jeder Jugendliche steht im Laufe seiner Entwicklung vor neuen Herausforderungen und Veränderungen. Die Jugendschutzuntersuchung ist ein wichtiger Baustein, um sicherzustellen, dass junge Menschen gesund und wohlbehalten ins Berufsleben starten können. In unserer Praxis bieten wir diese Untersuchung an, die dazu dient, mögliche gesundheitliche Risiken frühzeitig zu erkennen und vorbeugende Maßnahmen zu treffen. Es ist unser Ziel, die körperliche und geistige Gesundheit Ihres Teenagers zu fördern und zu schützen.

### Altersmedizinische Vorsorgeuntersuchungen

Mit fortschreitendem Alter ändern sich die Bedürfnisse und Anforderungen an unsere Gesundheit. Unsere Praxis ist darauf spezialisiert, Sie bestmöglich durch diese Lebensphase zu begleiten. Mithilfe altersmedizinischer Vorsorgeuntersuchungen (geriatrisches Basisassessment) können wir frühzeitig Veränderungen und potenzielle Risikofaktoren erkennen. So sind wir in der Lage, Ihnen individuell angepasste Empfehlungen und Therapien anzubieten. Ihr Wohlbefinden und Ihre Lebensqualität stehen für uns immer im Vordergrund. Vertrauen Sie auf unsere Expertise und lassen Sie uns gemeinsam für Ihre Gesundheit sorgen.


`;

