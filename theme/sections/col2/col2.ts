import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


class Col2Layout extends DefaultLayout {

    public order: string = "";

    public cols: number = 8;

    public side_content: string = "";

}

// language=HTML
const tpl = `
<div class="as__2col [[layout.container]]">
    <div class="row [[layout.order]] ">
        <div class=":: col-12 order-2 :[[layout.break1]]: col-[[ layout.cols ]] " data-ref="main"></div>
        <div class=":: col-12 order-1 :[[layout.break1]]: col-[[ 12-layout.cols ]]" data-ref="side">[[ layout.side_content]]</div>
    </div>
    
</div>
`;
@jodaRenderer("col2", Col2Layout)
class Col2 implements JodaRendererInterface {
    render(element: HTMLElement, layout: Col2Layout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});

        main.select("main").append(element.childNodes);

        element.append(main.content);
        return main.content;
    }
}
