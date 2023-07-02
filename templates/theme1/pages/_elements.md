<!-- Section: Card Section - repeat 2 times max -->
## Short header of Card Section with image
{: layout="use: #card_section"}

> Punchline (max 60 characters)

![Section image](<url>)

Text

<!-- End of section -->


<!-- Section: Testemonial - use only once per page -->
## Testemonial
{: layout="use: #testemonial_ribbon"}

![Image of Testemonial](<image>)

„citiation“

— Name
<!-- End of section -->


<!-- Section: Feature Product Card Section with image and accordion -->
## short header of the section
{: layout="use: #card_section_faq"}

> Punchline (max 60 characters)

text

![Title image](<iamge>)

<!-- keep lines below to start the accordion. Do not modify -->
---
{: layout="use: accordion()"}

<!-- subsection for accordion. Repeat as often as needed (min 3 times) -->
### Accordion Header 1

Accordion Text

<!-- End of subsection -->
<!-- End of section -->


<!-- Section: Heading with multiple Cards -->
## Leistungen
{: layout="use: #multi_card_section; cols: 2" hidden="true" }


<!-- Subsection: Card - repeat 3 times max -->
### Card 1

text
<!-- End of subsection -->

<!-- End of section -->

<!-- Section: Call for action with button -->
## CTA Title
{: layout="use: #cfa_section"}

[Deeplink button1](<url>)
<!-- End of section -->


<!-- Section: Contact card for contact page (Preserve contact card as it is!) -->

## Anschrift
{: layout="use: #card_section"}

> Schreiben Sie uns

<!-- preserve liqid syntax! -->
<p>{% include el/address.html %}</p>

---
{: class=":: d-none :xl: d-block"}

Öffnungszeiten

<!-- preserve liqid syntax! -->
{% include el/openhours.html %}

<!-- End of section -->


<!-- Section: CTA (Call to Action) with Contact Form -->
## <CTA Header>
{: layout="use: #form_contact"}

---

<!-- preserve square brackets [xy...] syntax! -->
[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" .mb-3]
[input type="tel" name="Telefon" .mb-3]

---

[textarea name="Ihre Nachricht" required .mb-3 style="height: 120px;"]
[input type="checkbox" name="Ihre Nachricht" label="Ich akzeptiere die Datenschutzbestimmungen" required .mb-3]
[input type="submit" name="Absenden" value="Absenden" class="btn btn-primary" .my-3]

<!-- End of section -->
