import {ka_create_element, ka_dom_ready, ka_html, ka_sleep, KaTemplate} from "@kasimirjs/embed";
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


export class AccordionLayout extends DefaultLayout {

    accordion_auto_open : boolean = true;
}

@jodaRenderer("accordion", AccordionLayout)
class Accordion implements JodaRendererInterface {
    render(element: HTMLElement, layout: AccordionLayout): HTMLElement {
        Array.from(element.querySelectorAll(":scope > .children > .section-h3 > .content h3")).forEach( async (e, i) => {
            let newElem = ka_create_element("a", {class: "as__accordion-header"});
            e.parentNode.parentNode.insertBefore(newElem, e.parentNode);
            newElem.append(e);

            let update = () => {
                element.querySelectorAll(".section-h3 > .content,.children").forEach(async(e) => {
                    e.style.setProperty("--orig-height", e.scrollHeight + "px");
                });
            }



            newElem.onclick = () => {
                update();
                Array.from(newElem.closest(".children").children).forEach((e) => {
                    if (e === newElem.closest(".section-h3"))
                        return;
                    e.classList.remove("open");
                });
                newElem.closest(".section-h3")?.classList.toggle("open");
            }


        });



        console.log("auto open", layout);
        if (layout.accordion_auto_open) {
            element.querySelector(".section-h3")?.classList.add("open");
        }
        return element;

    }

}


