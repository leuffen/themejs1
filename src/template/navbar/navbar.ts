import {ka_create_element, ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout} from "../../core/DefaultLayout";
import {jodaRenderer, JodaRendererInterface, jodaTemplate} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";



// language=HTML
const tpl = ka_html(`
<nav class="as__navbar [[layout.position]]" style="z-index: 999">

    <div id="as__minibar" class="as__minibar top" >
        <div class="[[layout.container]]" data-ref="minibar"></div>
    </div>
    
    <div class="as__mainbar navbar navbar-expand-lg w-100">
        <div class="[[layout.container]]" data-ref="main">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div data-ref="navbar" class="collapse navbar-collapse" id="navbarSupportedContent">

                
            </div>
        </div>
    </div>
    
</nav>
`);


export class NavbarLayout extends DefaultLayout {

    /**
     * a additional class name added to the main element
     * to allow for custom styling. Defaults to "default" (see as-navbar.scss for details)
     */
    style_class = "default";

    /**
     * default position: Fixed on top
     */
    position = "fixed";

    /**
     * Show fixed navbar if scrolled down more than this distance
     */
    fixed_scroll_distance = 10;
}


@jodaRenderer("navbar")
class Navbar implements JodaRendererInterface {

    public render(element: HTMLElement, layout: NavbarLayout) {
        layout = Object.assign(new NavbarLayout(), layout);


        let original = element.cloneNode(true) as HTMLElement;


        let template = new QTemplate(tpl);
        element.innerHTML = "";
        element.appendChild(template.content);


        template.parse({layout});

        let result = template.content;
        let mainDiv = template.with("main");
        let navbar = template.with("navbar");
        let minibar = template.with("minibar");



        let navbarBrand = original.querySelector(".navbar-brand");
        if (navbarBrand === null) {
            navbarBrand = ka_create_element("a", {href: "/"}, "No class='navbar-brand' element")
        }

        mainDiv.selected.insertBefore(navbarBrand, mainDiv.selected.firstElementChild);

        let mainUl = original.querySelector("ul.mainbar") as HTMLDivElement | null;
        if (mainUl === null) {
            mainUl = ka_create_element("ul", {}, "Missing ul.mainbar element") as HTMLDivElement
        }
        mainUl = mainUl.cloneNode(true) as HTMLDivElement;
        navbar.append(mainUl);

        let miniUl = original.querySelector("ul.minibar") as HTMLDivElement | null;
        if (miniUl.firstElementChild === null) {
            miniUl = null;
        }
        minibar.append(miniUl);

        mainUl.classList.add(..."navbar-nav navbar-nav-scroll ms-auto my-2 my-lg-0".split(" "));


        if (layout.fixed_scroll_distance !== null)
            result.firstElementChild.classList.add("auto-fixed");

        result.firstElementChild.classList.add(layout.style_class);
        let scolled = false;
        let fixed = false;

        window.setInterval(() => {
            if (window.scrollY > 0 && !scolled) {
                result.firstElementChild.classList.add("scrolled");
                scolled = true;
            } else if (window.scrollY === 0 && scolled) {
                result.firstElementChild.classList.remove("scrolled");
                scolled = false;
            } else {
                // nothing
            }
            if (layout.fixed_scroll_distance === null)
                return;
            if (window.scrollY > layout.fixed_scroll_distance && !fixed) {
                result.firstElementChild.classList.add("fixed");
                fixed = true;
            } else if (window.scrollY <= layout.fixed_scroll_distance && fixed) {
                result.firstElementChild.classList.remove("fixed");
                fixed = false;
            }
        }, 300)


        mainUl.querySelectorAll("li").forEach(e => e.classList.add("nav-item"))
        mainUl.querySelectorAll("li a").forEach(e => e.classList.add("nav-link"))
        mainUl.querySelectorAll("li.dropdown ul").forEach(e => e.classList.add("dropdown-menu"))
        mainUl.querySelectorAll("li.dropdown ul li").forEach(e => e.classList.add("dropdown-item"))


        element.replaceWith(template.content);
        return template.content;
    }
}

