import {
    DefaultLayout,
    jodaRenderer,
    JodaRendererInterface,
    JodaUseRenderer,
    splitChildrenBySelector
} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


class FooterLayout extends DefaultLayout {

    public max_cols: number = 4;

    public minifooter : string = null;

}

// language=HTML
const tpl = `
<div class="as__footer">
    <div class="[[layout.container]]">
        <div class="row [[layout.order]]" data-ref="row">
        </div>
        <div class="as__footer-minifooter" data-ref="mini">
            
        </div>
    </div>
</div>
`;

// language=HTML
const tplCol = `
<div class="as__footer-column :: col-12 :[[layout.break1]]: col-[[ cols ]] " data-ref="main">
    
</div>
`;


@jodaRenderer("footer1", FooterLayout)
class Footer1 implements JodaRendererInterface {
    render(element: HTMLElement, layout: FooterLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});
        let children = splitChildrenBySelector(element, "h2");
        let tplCol2 = new QTemplate(tplCol);
        tplCol2.parse({layout, cols: (12 / children.length).toFixed(0)});

        children.forEach(child => {
            let row = tplCol2.clone().select("main").append(child);
            main.select("row").append(row);
        });

        if (layout.minifooter) {
            let minifooter = document.querySelector(layout.minifooter);
            if (minifooter === null) {
                console.warn("Minifooter not found: ", layout.minifooter);
            } else {
                main.select("mini").append(minifooter);
            }

        }

        element.append(main.content);
        return main.content;
    }
}
