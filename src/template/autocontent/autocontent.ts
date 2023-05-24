import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


class AutocontentLayout extends DefaultLayout {
    style = "fullsize";

}

// language=HTML
let tpl = {};

tpl["fullsize"] = `
<div class="as__autocontent">
    <div class="[[ layout.container ]]" data-ref="main">
        
    </div>
</div>
`;
@jodaRenderer("autocontent", AutocontentLayout)
class AutoContent implements JodaRendererInterface {
    render(element: HTMLElement, layout: AutocontentLayout): HTMLElement {
        let tplHtml = tpl[layout.style];
        if (!tplHtml) throw new Error("Unknown style: " + layout.style);

        let main = new QTemplate(tplHtml);
        main.parse({layout});

        main.select("main").append(element.childNodes);
        element.append(main.content);
        return main.content;
    }
}
