import {defineSection, example, SectionLayoutGroup} from "../sections.def";


defineSection('cta-base', SectionLayoutGroup.CTA)`

A Call-to-Action section. Place only one CTA Section at each bottom of a page. Provide Links to interesting other pages
for the user to navigate to.

`;


example("Basic Example with Buttons to other pages.")`
## Jetzt Beratungstermin vereinbaren
{: layout="use: #cta-base"}

[Leistungen](/leistungen)
[Kontakt](/kontakt)

`;

