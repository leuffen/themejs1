



export type SectionExample = {
    description: string,
    code: string
}

export type Section = {
    name: string,
    group: SectionLayoutGroup,
    description: string,
    layout_options: Map<string, string>,
    examples : SectionExample[]
}

const general = `
Nutze die Beispiele im folgenden json-Code als Referenz, wie und welche Sections angelegt werden können (achte auf die Kramdown anweisungen in {: ...}. Diese müssen mit angegeben werden):`;


type TaggedTemplateLiteral<T> = (strings: TemplateStringsArray, ...values: any[]) => T;

export var SECTIONS = {
    general,
    available_sections: [],
};
var currentSection = null;

export enum SectionLayoutGroup {
   Hero = "Hero",
    Content = "Content",
    ContentElements = "Content-Elements",
    Footer = "Footer",
    CTA = "Call-To-Action(CTA)",
    Page = "Page",
}


export function defineSection(name: string, group : SectionLayoutGroup) : TaggedTemplateLiteral<{name: string, description: string}> {
    return (strings: TemplateStringsArray, ...values: any[]) => {
        SECTIONS.available_sections.push(currentSection = {name, group, description: strings.join(''), layout_options: new Map(), examples: []});
        return {name,  description: strings.join('')};
    }
}



export function example(description: string) : TaggedTemplateLiteral<{example : SectionExample}> {
    return (strings: TemplateStringsArray, ...values: any[]) => {
        let curExample = {description, code: strings.join('')};
        currentSection.examples.push(curExample);
        return {example : curExample};
    }
}


