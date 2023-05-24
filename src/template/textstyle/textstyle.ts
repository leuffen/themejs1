import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


class TextStyleLayout extends DefaultLayout {

    template: string = "default";

    icon: string = "bi bi-play-fill";

}

let tpl = {};

// language=HTML
tpl["icontext"] = `
<div class="as__textstyle-icontext">
    <span class="icon [[layout.icon]]"></span>
    <div class="text" data-ref="main">
    </div>
</div>
`;
@jodaRenderer("textstyle", TextStyleLayout)
class TextStyle implements JodaRendererInterface {
    render(element: HTMLElement, layout: TextStyleLayout): HTMLElement {
        let template = tpl[layout.template];
        if (template === undefined) throw new Error("Template not found: " + layout.template);
        let main = new QTemplate(template);
        main.parse({layout});

        main.select("main").append(element.childNodes);
        element.append(main.content);
        return main.content;
    }
}
