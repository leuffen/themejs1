import {JodaDescriptionManager} from "@leuffen/jodastyle";

let html =`

# Header 1


`;

JodaDescriptionManager.addClass("page",
    "theme1",
    "theme1",
    html,
    []
    ,
    {
        bodyClasses: ["theme1"]
    }
);
