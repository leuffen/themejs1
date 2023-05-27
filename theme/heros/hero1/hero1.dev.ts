import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

# Hero Text 1{: .do-hero1}

Some text

![Some Image](cdn:///leu-stock/v/50/1920x1282_1200x801_992x662_768x513_480x321_256x256/AdobeStock_361612440.avif_jpeg){: .background}

`;


JodaDescriptionManager.addClass("hero", ".do-hero", "This is a description", example, []);
