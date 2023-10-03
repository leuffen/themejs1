import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("footer-base",
    // language=HTML
    `

        <footer class="tjs__footer-base [[layout.class]]">
            <div class="[[layout.container]] h-100">
                <div class="row">
                    <slot data-select=".section-h3 > .content" data-child-class=":: col-12 :xl: col"></slot>
                </div>
            </div>
            <div class="subfooter">
                <slot data-select="#minifooter"></slot>
            </div>
        </footer>
    `);
