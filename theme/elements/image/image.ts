import {ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


// language=HTML
const tpl = `
    <div class="as__image">
        <div class="header" data-ref="header"></div>
        <div class="image" data-ref="image">
        </div>
        <div class="footer" data-ref="footer"></div>
    </div>
`;


export class ImageLayout extends DefaultLayout {

}

@jodaRenderer("image", ImageLayout)
class Image implements JodaRendererInterface {
    render(element: HTMLElement, layout: ImageLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});

        let imageDiv = main.select("image")
        let e = element;
        if (e.tagName !== "IMG") {
            e = e.querySelector("img");
        }

        main.content.classList.add(...e.classList);
        element.replaceWith(main.content);
        main.selected.append(e);
        return main.content;
    }

}


