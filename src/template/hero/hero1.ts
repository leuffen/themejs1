import {ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


// language=HTML
const tpl = ka_html(`
<div class="as__hero1 position-relative" style="isolation: isolate">
    <div class="as__hero1_image-mobile :: d-block :[[layout.break1]]: d-none   col-[[12 - layout.content_cols]] " data-ref="image-mobile"></div>

    <div class="[[layout.container]] ">
        <div class="as__hero1_content-row row :: mobile :[[layout.break1]]: full_height align-items-center">
            
            <div class="as__hero1_content [[layout.content_classes]] [[layout.content_space]] :: col-12 :[[layout.break1]]:  col-[[layout.content_cols]] " data-ref="main"></div>
        </div>
    </div>
    <div class="position-absolute top-0 bottom-0 w-100" style="z-index: -1">
        <div class="container-fluid p-0 h-100 :: d-none :[[layout.break1]]: d-block">
            <div class="row g-0 flex-lg-row-reverse h-100">
                <div class="col-[[layout.image_cols]] position-relative as__hero1_image h-100" data-ref="image">
                    <div class="position-absolute image-overlay [[ layout.content_cols-layout.image_cols < 0 ? 'overlay-fade' : '']]"></div>
                </div>
               
            </div>
            
        </div>
    </div>
</div>
`);


export class HeroLayout extends DefaultLayout {

    /**
     * Columns of the content overlay
     */
    content_cols : number = 6

    content_space : string = "my-5"

    /**
     * set Classes of the content div
     */
    content_classes : string = ""

    /**
     * Size of the image in Background
     */
    image_cols : number = 6

    /**
     *
     */
    image_content: string = "contentSelector(img)"
}

@jodaRenderer("hero1", HeroLayout)
class Hero1 implements JodaRendererInterface {
    render(element: HTMLElement, layout: HeroLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});

        Array.from(element.querySelectorAll(".background img, img.background")).forEach((el: HTMLElement) => {
            main.select("image").append(el.cloneNode(true));
            main.select("image-mobile").append(el);
        });

        console.log("hero1");

        main.select("main").append(element.querySelector("*"))
        element.innerHTML = "";
        element.append(main.content);
        return main.content;
    }

}


