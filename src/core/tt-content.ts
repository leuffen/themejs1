import {customElement, ka_create_element, ka_sleep} from "@kasimirjs/embed";
import {commands} from "./commands";


function getCSSRule(ruleName : string) : CSSStyleRule {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}



@customElement("tt-content")
export class TtContentComponent extends HTMLElement {

    #origContentTemplate: HTMLTemplateElement;
    #outputDiv : HTMLDivElement;


    private async parse(source : DocumentFragment, target : HTMLDivElement) {
        await ka_sleep(1);

        Array.from(source.children).forEach((child) => {
            child.classList.forEach((className) => {
                console.log("class", className);

                let rule = getCSSRule("." + className);

                let vars = Array.from(rule.style).filter((key) => key.startsWith("--tjs-")).map((key) => {return {name: key, cmd: rule.style.getPropertyValue(key)}});
                console.log("Commands", vars, rule);
                vars.forEach((variable) => {
                    if (commands[variable.name] === undefined) {
                        console.warn("Ignoring unknown command", variable.name, "in", className);
                        return;
                    }
                    let ret = commands[variable.name](variable.cmd, target, child);
                    if (ret !== null)
                        child = ret as HTMLElement;
                });
                target.appendChild(child);
            });

        });
    }


    connectedCallback() {
        this.#origContentTemplate = ka_create_element("template") as HTMLTemplateElement;
        this.#outputDiv = ka_create_element("div") as HTMLDivElement;
        this.#origContentTemplate.innerHTML = this.innerHTML;
        this.innerHTML = "";
        this.appendChild(this.#origContentTemplate);
        this.appendChild(this.#outputDiv);
        this.parse(this.#origContentTemplate.content, this.#outputDiv);
    }

}
