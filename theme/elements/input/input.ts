import {ka_create_element, ka_dom_ready, ka_html, ka_sleep, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


const tplDefault = `
<div class="as__input [[layout.style]] [[classes]]">
  <div data-ref="main"></div>
  <label for="[[ id ]]">[[ label ]]</label>
</div>
`;


export class InputLayout extends DefaultLayout {
    style : "form-floating" | "form-control" = "form-floating";
    classes : string = "";
}



let idCounter = 0;
@jodaRenderer("input", InputLayout)
class Input implements JodaRendererInterface {
    render(element: HTMLElement, layout: InputLayout): HTMLElement {
        let main = new QTemplate(tplDefault);

        element.id = element.id === "" ? "as__input_" + idCounter++ : element.id;


        if (element instanceof HTMLSelectElement) {
            if (element.hasAttribute("data-options")) {
                let options = element.dataset.options.split(",").map((o : string) => {
                    return {value: o, label: o};
                });
                for (let option of options) {
                    let opt = ka_create_element("option", {value: option.value}, option.label);
                    element.append(opt);
                }
            }
        }


        main.parse({
            layout,
            classes: layout.classes + " " + element.getAttribute("data-class") ?? "",
            id: element.id,
            label: element.getAttribute("label") ?? element.getAttribute("name")
        });

        element.classList.add("form-control");
        element.parentNode.replaceChild(main.content, element);
        main.select("main").selected.replaceWith(element);

        return main.content;
    }

}


