import {customElement, ka_create_element, ka_dom_ready, ka_sleep} from "@kasimirjs/embed";
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

export function contentSaw(content : DocumentFragment | HTMLElement, breakpoint : string) : DocumentFragment[] {
    let ret : DocumentFragment[] = [];
    let currentFragment : DocumentFragment = null;

    Array.from(content.children).forEach((child) => {
        console.log("child", child);
        if (child instanceof HTMLElement) {
            let property = getComputedStyle(child).getPropertyValue("--joda-break").replace(/"/g, "")
            let val = property.split(",").map((v) => v.trim());
            console.log("property", property, "breakpoint", breakpoint, "val", val);
            if (val.includes(breakpoint)) {
                console.log("breakpoint", breakpoint, "found in", val);
                if (currentFragment !== null) {
                    ret.push(currentFragment);
                    currentFragment = new DocumentFragment();
                } else {

                    currentFragment = new DocumentFragment();
                }
            }
        }
        if (currentFragment === null) {
            currentFragment = new DocumentFragment();
        }
        currentFragment.appendChild(child);
    });
    ret.push(currentFragment);
    return ret;
}


function reformatContent(content :  DocumentFragment | HTMLElement, steps = ["section", "row", "area"]) {
    let curBreakpoint = steps.shift();

    contentSaw(content, curBreakpoint).forEach(async(fragment) => {
        console.log("sawing", content, curBreakpoint, fragment);
        let container = ka_create_element("div", {rel: curBreakpoint}) as HTMLDivElement;
        content.appendChild(container);

        if (steps.length > 0)
            reformatContent(fragment, steps);
        container.append(fragment);
        await ka_sleep(100);
    });
}

type JodaCommand = {
    '--joda-attach'? : string;
    '--joda-box'? : null;
}

function getJodaParams (element : HTMLElement) : JodaCommand {
    let ret : JodaCommand = {
        '--joda-init': null,
        '--joda-attach': null,
        '--joda-box': null
    } as JodaCommand;

    let styles = getComputedStyle(element);
    Array.from(styles).forEach((value, key) => {
        if ( ! value.startsWith("--joda-")) {
            return;
        }
        if (ret[value] === undefined) {
            console.warn("Joda command", value, "is undefined");
            return;
        }
        if (styles.getPropertyValue(value) === getComputedStyle(element.parentElement).getPropertyValue(value)) {
            // The value is not inherited (not original)
            return;
        }
        console.log(element, value, styles.getPropertyValue(value), styles.getPropertyPriority(value));
        ret[value] = styles.getPropertyValue(value).replace(/\"(.*)\"/g, "$1").trim();
    });
    return ret;
}


function parseElementString(input : string) : {elementName: string|null, classes: string[], attributes: {[key: string]: string}} {
    let ret = {
        elementName: null,
        classes: [],
        attributes: {}
    }
    input = input.replace(/^([a-z\-_&\/]+)/i, (match, p1) => {ret.elementName = p1; return "";});

    input = input.replace(/@(.*)/g, (match, p1 :string) => {
        if (p1.includes("=")) {
            p1.replace(/([a-z0-9\-_]+)\s*=(.*)/ig, (match, p1, p2) => ret.attributes[p1] = p2.trim());
        } else {
            p1.split(" ").filter((v) => v.trim() !== "").forEach((v) => ret.classes.push(v));
        }
        return "";
    });
    return ret;
}

function createElementFromString(input : string) : HTMLElement {
    let elemStr = parseElementString(input);

    if (elemStr.elementName === null) {
        elemStr.elementName = "div";
    }

    elemStr.attributes["class"] += " " + elemStr.classes.join(" ");
    if (elemStr.attributes.class.trim() === "") {
        delete elemStr.attributes.class;
    }
    return ka_create_element(elemStr.elementName, elemStr.attributes);
}


function getElementTagName(elem : string) : string {
    return ["div", "section", "article"].includes(elem) ? elem : "div";
}



@customElement("joda-content")
export class JodaContentComponent extends HTMLElement {

    #origContent: HTMLDivElement;
    #outputDiv : HTMLDivElement;



    private async splitByV1(source : DocumentFragment, target : HTMLDivElement) {
        let parents = [] as {name: string, element: HTMLElement}[];
        let boxMap = {} as {[key: string]: HTMLElement};
        let currentParent : HTMLElement = target;
        Array.from(source.children).forEach((child : Element) => {

            if (child instanceof HTMLElement) {
                console.log("input", child, getJodaParams(child))
                let cmd = getJodaParams(child);
                let jodaBoxDef = parseElementString(cmd["--joda-box"] ?? "");

                if (jodaBoxDef.elementName !== null) {
                    let wrapperElement = ka_create_element(getElementTagName(jodaBoxDef.elementName), {rel: jodaBoxDef.elementName, class: jodaBoxDef.classes.join(" ")});

                    let jodaAttachDef = parseElementString(cmd["--joda-attach"] ?? "");
                    switch (jodaAttachDef.elementName) {
                        case "/":
                            // Attach to root element
                            parents.length = 0;
                            target.appendChild(wrapperElement);
                            currentParent = wrapperElement;
                            break;
                        case null:
                            // Attach to current element
                            currentParent.appendChild(wrapperElement);
                            break;
                        case "&":
                            // Attach to the last position the same Box was attached or current element if it is the first time
                            if (boxMap[jodaAttachDef.elementName] === undefined) {
                                boxMap[jodaAttachDef.elementName] = currentParent;
                            }
                            boxMap[jodaAttachDef.elementName].appendChild(wrapperElement);
                            currentParent = wrapperElement;
                            break;
                        default:
                            // Find the element
                            while (parents.length > 0 && parents[parents.length - 1].name !== jodaAttachDef.elementName) {
                                parents.pop();
                            }
                            if (parents.length === 0) {
                                // Create the parent Todo: Use a Template for creating one

                                let parentElement = ka_create_element(getElementTagName(jodaAttachDef.elementName), {rel: jodaAttachDef.elementName, class: jodaAttachDef.classes}) as HTMLDivElement;
                                currentParent.appendChild(parentElement);
                                parents.push({name: jodaAttachDef.elementName, element: parentElement});
                            }
                            currentParent = parents[parents.length - 1].element;
                            currentParent.appendChild(wrapperElement);
                            currentParent = wrapperElement;
                            break;

                    }
                    // register the current element as a parent
                    parents.push({name: jodaBoxDef.elementName, element: wrapperElement});
                    currentParent.appendChild(child);
                    return;
                }

            }
            currentParent.appendChild(child);


        });
    }


    async connectedCallback() {
        await ka_sleep(1);
        let msg = null;
        while(msg !== "1") {
            msg = getComputedStyle(this).getPropertyValue("--joda-init").toString().trim();
            console.log(getComputedStyle(this), msg, msg === "1", "wurst");
            await ka_sleep(10);
        }
        this.#origContent = ka_create_element("div", {style: "display:none !important"}) as HTMLDivElement;
        this.#origContent.innerHTML = this.innerHTML;
        this.innerHTML = "";

        this.appendChild(this.#origContent);
        this.#outputDiv = ka_create_element("div") as HTMLDivElement;
        this.appendChild(this.#outputDiv);

        await ka_sleep(1);
        await this.splitByV1(this.#origContent as DocumentFragment, this.#outputDiv);

    }

}
