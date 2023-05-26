import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

## Map zeigen

<map data-map-url=""></div>

`;


JodaDescriptionManager.addClass(".do-map", "This is a description", example, []);
