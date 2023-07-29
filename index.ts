import {StyleEditorElement} from "./src.dev/StyleEditorElement";

export * from "./src/index";
export * from "./theme/styles";
export * from "./src.dev/StyleEditorElement";
export * from "./sections/sections";

if (location.hostname === "localhost") {
    console.log("Running in development mode");
    document.body.append(new StyleEditorElement());
}
