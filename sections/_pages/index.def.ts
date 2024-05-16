import {defineSection, example, SectionLayoutGroup} from "../sections.def";

defineSection('index', SectionLayoutGroup.Page)`

This is a examples of a whole page with multiple sections. It is the index site of the website.


`;


example("Startsite with a mix of sections.")`
---
{: layout="use: #hero-max;"}

![](https://cdn.leuffen.de//leu-stock/v2/32/304-205_gfedcba/AdobeStock_138200241.webp)
{: .background}

# Augenarzt<br>Prof. Dr. Daniel Mustermann
{: .section-h3 layout="use: #hero-slide; align-self: self-end; justify-self: left; x-adjust: 0%; y-adjust: 0% " .sec-box .sec-slide}

---
{: .section-h4 layout="use: #button-group"}
[[i class="bi bi-house-add-fill fs-3"]<br>Jetzt als **neuer Patient** anmelden](/online-anmeldung){: .btn .btn-primary}
[[i class="bi bi-calendar-plus-fill fs-3"]<br>Jetzt **Termin** vereinbaren](/termin){: .btn .btn-primary .text-center}

[[i class="bi bi-card-heading fs-3"]<br>**Rezept** online anfragen](/online-rezept){: .btn .btn-primary .text-center }
[[i class="bi bi-box-arrow-up-right fs-3"]<br>**Überweisung** an Facharzt](/online-ueberweisung){: .btn .btn-primary .text-center}
[[i class="bi bi-camera-video-fill fs-3"]<br>**Videosprechstunde**](/online-videosprechstunde){: .btn .btn-primary .text-center}




## Übersicht
{: layout="use: #hero-ribbon"}

### Aktuelles

<liweco-news>Keine aktuellen Meldungen</liweco-news>

### Sprechstundenzeiten

<liweco-collapse-openhour-table>
{% include el/openhours.html %}
</liweco-collapse-openhour-table>

Wir bitten um eine Terminvereinbarung.

### Notfälle

Außerhalb der Sprechstundenzeiten wenden sie sich bitte an den KV-Bereitschaftsdienst unter der Telefonnummer [116 117](tel:116117) oder den Notruf unter [112](tel:112).



## Hausarztpraxis in Frensdorf
{: layout="use: #sec-card-2col" }

> Individuelle und professionelle medizinische Versorgung

In unserer Praxis bieten wir individuelle und professionelle medizinische Versorgung an. Unser Angebot umfasst Vorsorgemedizin, Impfungen, Herz-Lungen Diagnostik, Sonografie, Altersmedizin, Kleine Chirurgie und Begleitung bei chronischen Erkrankungen.

Für weitere Informationen oder zur Terminvereinbarung kontaktieren Sie uns bitte!

![](https://cdn.leuffen.de//leu-stock/v2/69/131-86_gfedcba/AdobeStock_319898261.webp)


---
{: layout="use: #sec-card-2col; cols: 12" .section-h2 }


### Aktuelle Informationen zum Coronavirus
{: layout="use: #infobox; type: danger; icon: bi-exclamation-octagon-fill"}

Corona- Test positiv bitte zuerst **NUR** telefonisch melden

Coronaimpfung ab sofort nach Terminvereinbarung



## Unsere Leistungen
{: layout="use: #sec-multi-card; cols:3"}

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



## Testimonial
{: layout="use: #sec-testimonial-ribbon"}

![](https://cdn.leuffen.de//leu-stock/v2/73/991-661_gfedcba/AdobeStock_185581198.webp)

„In unserer Praxis legen wir großen Wert auf individuelle und professionelle medizinische Versorgung. Wir nutzen modernste Diagnoseverfahren und Behandlungsmethoden, um unseren Patienten die bestmögliche Versorgung zu bieten. Unser Ziel ist es, dass sich jeder Patient bei uns gut aufgehoben fühlt.“

— Parissa Graß, Hausärztin




## Lernen Sie uns kennen
{: layout="use: #sec-card-2col"}

> Ihr vertrauensvolles Team

![](https://cdn.leuffen.de//leu-stock/v2/60/418-279_gfedcba/AdobeStock_99592855.webp)




Unser freundliches und kompetentes Team unterstützt die Ärzte mit langjähriger Erfahrung und professioneller Betreuung.

[Erfahren Sie mehr über uns...](/ueber-uns){: .btn .btn-primary }


## Haben Sie Fragen? Schreiben Sie uns
{: layout="use: #cta-form"}


---

[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" required data-invalid-msg="Bitte geben Sie eine gültige E-Mail Adresse ein" .mb-3]
[input type="tel" name="Telefon" .mb-3]

---

[textarea name="Ihre Nachricht" required .mb-3 style="height: 120px;"]
[input type="checkbox" name="Datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required .mb-3]
[input type="submit" name="Absenden" value="Absenden" class="btn btn-primary btn-lg" .my-3]

`;
