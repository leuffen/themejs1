
// language=HTML
import {Joda, JodaDescriptionManager} from "@leuffen/jodastyle";

const html = `

    <nav class="navbar-centerlogo">
        <div class="navbar">
            <div class="navbar__wrapper [[ layout.container ]]">
                <slot class="" data-select="ul.navbar-top "></slot>

                <slot class="navbar__logo" data-select="[[ layout.slot_logo_selector ]]"></slot>

                <div class="burger-menu" onclick="this.closest('nav').classList.toggle('sidebar')">
                    <div class="burger-menu__text">
                        [[ layout.burger_text ]]
                    </div>
                    <div class="burger-menu__burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>

        <aside>
            <div class="backdrop" onclick="this.closest('nav').classList.remove('sidebar')"></div>
            <div class="menu">
                <div class="menu-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"  onclick="this.closest('nav').classList.remove('sidebar')">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <slot data-select="ul.navbar-main" data-copy="1" data-child-class="isl-navbar-switch1__nav--items-item"></slot>
            </div>
        </aside>
    </nav>

`;

Joda.registerTemplate(
    "navbar-centerlogo",
    html,
    {
        slot_logo_selector: ".brand",
        burger_text: "Menü",
        container: "container",

        scrollup_position: 300
    },
    {
        "onAfterAllTemplatesConnectedCallback": (element: HTMLElement) => {
            // If the page is scrolled down, the navbar should be sticky
            // Update this on scroll event
            let lastY = 0;
            let navbar = element.querySelector(".navbar")
            let changer = () => {
                if (window.scrollY > 1) {
                    navbar.classList.add("scrolled");
                    navbar.classList.remove("unscrolled");
                } else {
                    navbar.classList.remove("scrolled");
                    navbar.classList.add("unscrolled");
                }

                let isScrollingUp = window.scrollY < lastY;
                lastY = window.scrollY;

                if (window.scrollY > 800 && ! isScrollingUp) {
                    navbar.classList.add("scrollup");
                } else {
                    navbar.classList.remove("scrollup");
                }

            }

            window.addEventListener("scroll", changer, {passive: true});
            changer()
        }
    });
