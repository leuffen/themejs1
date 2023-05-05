import {ka_create_element} from "@kasimirjs/embed";
import {createElementTree} from "./ka-quick-template";

type Commands = {
    [command: string]: (value : string, target : HTMLDivElement, element : HTMLElement) => HTMLElement | void;
}

export let commands : Commands = {};


commands["--tjs-replace-by"] = (value : string, target, element : HTMLElement) => {
    let ret = createElementTree(value)

    ret.leaf.append(element);
    return ret.start;
}
