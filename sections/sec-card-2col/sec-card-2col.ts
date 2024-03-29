import {Joda} from "@leuffen/jodastyle";




Joda.registerTemplate(
    "sec-card-2col",
    // language=HTML
    `

        <section class="tjs__sec-card-2col [[layout.class]] :: mobile :lg: desktop">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <div class="row [[layout.order === 'reverse' ? 'flex-column-reverse': '']] [[layout.mobile_reverse === 'yes' ? ':: flex-column-reverse :lg:': '']]">
                    <div class="tjs__sec-card-2col--col-start tjs__section-text p-4 p-lg-5 :: col-12 :lg: col-[[layout.cols]]">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end image-side :: col-12 :lg: col-[[12 - layout.cols]] ">

                        <slot class="[[layout.slideshow === true ? 'slideshow' : '']]" data-select="img, .children > .section-hr.aside, .aside" [[layout.slideshow !== true ? 'data-limit="1"' : '' ]]></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {
        cols: 6,
    }

);
