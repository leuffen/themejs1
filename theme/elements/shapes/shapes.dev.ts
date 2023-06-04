import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

# Shapes

![](cdn:///leu-stock/v/44/1920x1273_1200x796_992x658_768x509_480x318_256x256/AdobeStock_281626595.avif_jpeg){: .mask .shape-blob1 style="width:200px;height:auto"}
![](cdn:///leu-stock/v/44/1920x1273_1200x796_992x658_768x509_480x318_256x256/AdobeStock_281626595.avif_jpeg){: .mask .shape-blob1-anim style="width:200px;height:auto"}

`;


JodaDescriptionManager.addClass("element", ".shapes", "This is a description", example, []);
