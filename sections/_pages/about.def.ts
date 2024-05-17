import {defineSection, example, SectionLayoutGroup} from "../sections.def";

defineSection('about', SectionLayoutGroup.Page)`

This is a examples of a whole page with multiple sections. It is the index site of the website.


`;


example("Startsite with a mix of sections.")`
## Unser Team
{: layout="use: #sec-card-2col"}

> Zahnmedizin in der Engelstraße

![](https://cdn.leuffen.de//shomann-k68/v2/18/a_gfedcba/Gruppenbild-Treppe-mit-Aerzten-1x1.webp)

Unsere Zahnarztpraxis wurde 1978 in Lünen-Süd gegründet. 10 Jahre später erfolgte der Umzug in unser jetziges Domizil in die Engelstraße. Unser Behandlerteam Dr. Nicole Lehnert, Konstantinos Naziris, Dr. Steffen Homann und Anna Stammer setzen jeden Tag alles daran, Ihnen die bestmögliche zahnmedizinische Versorgung zu bieten.



## Testimonial
{: layout="use: #sec-testimonial-ribbon"}

![](https://cdn.leuffen.de//shomann-k68/v2/26/249-205_gfedcba/Naziris_Stammer_Edit.webp)

„Es ist uns wichtig keine unpersönlichen Medizin-Dienstleister zu sein. Für unser Praxis-Team ist die fürsorgliche und persönliche Betreuung unserer Patientinnen und Patienten ebenso wichtig wie die professionelle Behandlung. Wir kümmern uns deshalb nicht nur um die Gesundheit der Zähne, sondern richten unser Augenmerk auf den ganzen Menschen, auf die Zusammenhänge zwischen Zahngesundheit und Allgemeinbefinden.“

— Konstantinos Naziris und Anna Stammer

## Ihr Zahnarzt
{: layout="use: #sec-card-2col"}

> Konstantinos Naziris

![Bild des Teams](https://cdn.leuffen.de//shomann-k68/v2/22/c_gfedcba/Naziris-Portrait.webp)

|----|--------------------------------------------------------------------|
| Studium der Zahnmedizin  | 1993 - 1999 in Bukarest |
| Weiterbildung  | 2007 - 2010 Fachrichtung Parodontologie an der Universität Witten/Herdecke |
| Behandlungsschwerpunkte  | Kieferorthopädie |
| Mitgliedschaft  | DGB (Deutsche Gesellschaft für Parodontologie) |
{: .table}

## Ihre Zahnärztin
{: layout="use: #sec-card-2col"}

> Dr. Nicole Lehnert

![Bild des Teams](https://cdn.leuffen.de//shomann-k68/v2/1/4625-3083_gfedcba/Dr-Nicole-Lehnert.webp)

|----|--------------------------------------------------------------------|
| Zahntechnische Ausbildung  | 1986 bis 1988 in Witten |
| Studium der Zahnmedizin  | 1988 bis 1994 in Frankfurt/Main |
| Promotion  | 1999 zum Dr.med.dent |
| Assistenzarztzeit  | in kieferorthopädischer und Mund-Kiefer- und Gesichtschirurgischer Praxis in Lüdenscheid |
| Fortbildungen  | Kieferorthopädie und Kinderbehandlung |
{: .table}

## Ihr Zahnarzt
{: layout="use: #sec-card-2col"}

> Dr. Steffen Homann

![Bild des Teams](https://cdn.leuffen.de//shomann-k68/v2/4/c_gfedcba/Dr-Steffen-Homann.webp)

|----|--------------------------------------------------------------------|
| Studium der Zahnmedizin  | 2010 bis 2015 an der Julius-Maximilians-Universität Würzburg |
| Promotionsstudium  | 2016 bis 2020 an der Ruprecht-Karls-Universität Heidelberg |
| Tätigkeit  | 2017 bis 2022 als angestellter Zahnarzt bei Zahnarztpraxis Dr. Wündrich und Kollegen in Bammental bei Heidelberg |
| Promotion  | 2020 zum Dr.med.dent zum Thema der epigenetischen Regulation von Plattenepithelkarzinomen der Kopf- und Halsregion |
| Curriculum Implantologie  | 2021 9+2 der Deutschen Gesellschaft für Orale Implantologie (DGOI) |
{: .table}

## Ihre Zahnärztin
{: layout="use: #sec-card-2col"}

> Anna Stammer

![Bild des Teams](https://cdn.leuffen.de//shomann-k68/v2/3/4676-3117_gfedcba/Zahnaerztin-Anna-Stammer.webp)

|----|--------------------------------------------------------------------|
| Studium der Zahnmedizin  | 2003 bis 2009 an der Uni Witten/Herdecke |
| Mitarbeit  | vor Ort in einem zahnärztlichen Hilfsprojekt in Gambia (Afrika) |
| Anstellung  | seit 2018 in unserer Praxis |
| Vorherige Tätigkeit  | als angestellte Zahnärztin und Schulzahnärztin |
| Fortbildungen  | in verschiedenen Bereichen der Zahnmedizin (u.a. Kinderbehandlung, Gutachtertätigkeit) |
| Curriculum Craniomandibuläre Dysfunktion(CMD)  | 2013 Haranni-Klinik Herne |
{: .table}


## Praxisteam
{: layout="use: #sec-multi-card; cols:3;aspect-ratio: 5/4;"}

### Birgit und Beate

![](https://cdn.leuffen.de//shomann-k68/v2/8/c_gfedcba/Birgit_Beate.webp)


### Meggie, Jana und Jana

![](https://cdn.leuffen.de//shomann-k68/v2/11/c_gfedcba/Meggie_Jana_Jana.webp)


### Saskia und Amela

![](https://cdn.leuffen.de//shomann-k68/v2/24/c_gfedcba/Saskia-und-Amela.webp)


### Bahar und Kim

![](https://cdn.leuffen.de//shomann-k68/v2/9/c_gfedcba/Bahar_Kim.webp)


### Kim und Jana

![](https://cdn.leuffen.de//shomann-k68/v2/7/c_gfedcba/Kim_Jana.webp)

## Zahntechniker
{: layout="use: #sec-multi-card; cols:3"}

### Theodoros Naziris

![](https://cdn.leuffen.de//shomann-k68/v2/21/c_gfedcba/Zahntechniker-Theodoros-Naziris.webp)



## Kontakt
{: layout="use: #cta-base"}

Informationen zu Behandlungen, Sprechstundenzeiten und Kontaktdaten finden Sie auf den nachfolgenden Seiten.

[Unsere Leistungen](/leistungen)
[Online Termin vereinbaren](/online-termin#online-termin-vereinbaren)
[Kontakt](/kontakt)
`;
