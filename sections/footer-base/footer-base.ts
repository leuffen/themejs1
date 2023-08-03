import {Joda} from "@leuffen/jodastyle/src/joda";

Joda.registerTemplate("footer-base",
    // language=HTML
    `

        <div class="tjs__footer-base [[layout.class]]">
            <div class="[[layout.container]] h-100">
                <div class="row">
                    <slot data-select=".section-h3 > .content" data-class=":: col-12 :xl: col"></slot>
                </div>
            </div>
            <div class="subfooter">
                <slot data-select="#minifooter"></slot>
            </div>
        </div>
    `);
