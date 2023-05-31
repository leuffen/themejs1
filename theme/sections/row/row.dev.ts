import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

## Row Section{.do-row}

Some subtext


![Some Image](cdn:///leu-stock/v/50/1920x1282_1200x801_992x662_768x513_480x321_256x256/AdobeStock_361612440.avif_jpeg){: .image .order-2}

### Column 1

Some Column 1 Text

### Column 2

Some Column 2 Text


## Row Section{.do-row}



### Column 1

![Some Image](cdn:///leu-stock/v/50/1920x1282_1200x801_992x662_768x513_480x321_256x256/AdobeStock_361612440.avif_jpeg){: .image .order-2}

Some Column 1 Text

### Column 2

Some Column 2 Text



`;


JodaDescriptionManager.addClass("section", "row", "This is a description", example, []);
