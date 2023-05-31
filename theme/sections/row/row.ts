import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


class RowLayout extends DefaultLayout {

    public order: string = "";


    public center_image_selector = ":root > img";

}

// language=HTML
const tpl = `
<div class="as__row [[layout.container]]">
    <div class="wrapper1">
        <div class="wrapper2">
            <div class="header" data-ref="header"></div>
            <div class="row [[layout.order]] " data-ref="row">
            </div>
            <div class="header" data-ref="footer"></div>
            <div class="overlay1" data-ref="overlay1"></div>
            <div class="overlay2" data-ref="overlay2"></div>
        </div>
    </div>
</div>
`;
@jodaRenderer("row", RowLayout)
class Row implements JodaRendererInterface {
    render(element: HTMLElement, layout: RowLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});

        let secIndex = 1;
        main.select("header").pick(element, "h2,.header");
        main.select("row").pick(element, ".image ", e => {e.classList.add("col"); return e;});
        main.select("row").pick(element, ".section-h3", e => {
            e.classList.add("col");
            e.classList.add("order-" + secIndex++ * 2);
            return e;
        });
        main.select("footer").pick(element, ".footer");
        element.append(main.content);
        return main.content;
    }
}
