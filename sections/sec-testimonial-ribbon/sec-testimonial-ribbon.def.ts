import {defineSection, example, SectionLayoutGroup} from "../sections.def";


defineSection('sec-testimonial-ribbon', SectionLayoutGroup.Content)`

A section filling the screens full width with a round image of a person and a quote of this person.

Only use maximum once per page. Do not use as last nor as first element on a page.

The text of the header will not be shown.

`;


example("Statement of the doctor himself.")`

## Testimonial
{: layout="use: #sec-testimonial-ribbon"}

![](https://cdn.leuffen.de//leu-stock/v2/73/991-661_gfedcba/AdobeStock_185581198.webp)

„In unserer Praxis legen wir großen Wert auf eine individuelle und professionelle psychiatrische und psychotherapeutische Versorgung. Wir nutzen modernste Diagnoseverfahren und Behandlungsmethoden, um unseren Patienten die bestmögliche Unterstützung zu bieten. Unser Ziel ist es, dass sich jeder Patient bei uns gut aufgehoben und verstanden fühlt.“

— Yigit Sinan, Facharzt für XXX



`;

