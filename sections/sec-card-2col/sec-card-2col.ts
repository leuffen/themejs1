import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("sec-card-2col",
    // language=HTML
    `

        <div class="tjs__sec-card-2col">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <div class="row">
                    <div class="tjs__sec-card-2col--col-start col-12 col-md-6 text-format p-4 p-lg-5 order-2 order-md-1 tjs__section-text">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end col-12 col-md-6 image-side order-1 order-md-2">
                        <slot data-select="img, .children > .section-hr.aside" data-replace></slot>
                    </div>
                </div>
            </div>
        </div>
    `);
