import {ka_create_element, ka_dom_ready, ka_html, ka_sleep, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";
import {cdnBaseUrl} from "../../_variables";



(async () => {
    await ka_dom_ready();
    document.body.style.setProperty("--shape-blob1", "url(" + cdnBaseUrl + "/shapes/blob1.svg)");
    document.body.style.setProperty("--shape-blob1-anim", "url(" + cdnBaseUrl + "/shapes/blob1-anim.svg)");
})();


