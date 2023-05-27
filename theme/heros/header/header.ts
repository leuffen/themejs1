import {ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


// language=HTML
const tpl = ka_html(`
<div class="as__header [[ layout.style ]]">
    <div class="as__header-background" data-ref="img">
    </div>
    <div class="as__header-main" >
        <div class="[[ layout.container ]]" data-ref="main">
        </div>
    </div>
</div>
`);


export class HeaderLayout extends DefaultLayout {


    style: string = "default";

}

@jodaRenderer("header", HeaderLayout)
class Hero1 implements JodaRendererInterface {
    render(element: HTMLElement, layout: HeaderLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});

        let hasImage = false;
        Array.from(element.querySelectorAll("img")).forEach((el: HTMLElement) => {
            main.select("img").append(el);
            hasImage = true;
        });

        if (! hasImage) {
            main.select("img").selected.classList.add("no-image");
        }


        Array.from(element.children).forEach((el: HTMLElement) => {
            main.select("main").append(el);
        })
        element.innerHTML = "";
        element.append(main.content);
        return main.content;
    }

}


