import {Joda} from "@leuffen/jodastyle";




Joda.registerTemplate(
    "sec-card-2col",
    // language=HTML
    `

        <section class="tjs__sec-card-2col [[layout.class]] :: mobile :lg: desktop">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <slot class="title" data-select="img.title || .title > img"></slot>
                <div class="row [[layout.order === 'reverse' ? 'flex-column-reverse': '']] [[layout.mobile_reverse === 'yes' ? ':: flex-column-reverse :lg:': '']]">
                    <div class="tjs__sec-card-2col--col-start heading-style-flex :: col-12 :lg: col-[[layout.cols]]">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end image-side :: col-12 :lg: col-[[12 - layout.cols]] ">

                        <slot class="[[layout.slideshow === true ? 'slideshow' : '']]" data-select=".aside || .aside-content || img, .children > .section-hr.aside" [[layout.slideshow !== true ? 'data-limit="1"' : '' ]]></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {
        cols: 6,
    }

);
