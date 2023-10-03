import {Joda} from "@leuffen/jodastyle";




Joda.registerTemplate("sec-card-2col",
    // language=HTML
    `

        <section class="tjs__sec-card-2col">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <div class="row [[layout.order === 'reverse' ? 'flex-row-reverse': '']] [[layout.mobile_reverse === 'yes' ? ':: flex-row-reverse :lg:': '']]">
                    <div class="tjs__sec-card-2col--col-start tjs__section-text">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end image-side ">
                        <slot class="[[layout.slideshow === true ? 'slideshow' : '']]" data-select="img, .children > .section-hr.aside, .aside" [[layout.slideshow !== true ? 'data-limit="1"' : '' ]]></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
