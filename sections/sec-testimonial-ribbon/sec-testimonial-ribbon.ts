import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("sec-testimonial-ribbon",
    // language=HTML
    `

        <div class="tjs__sec-testimonial-ribbon :: mobile :lg:">
            <div class="tjs__sec-testimonial-ribbon--wrapper">
                <div class="tjs__sec-testimonial-ribbon--container [[layout.container]] :: :xl: mt-0">
                    <div class="row">
                        <div class="col-lg-3 image-round mx-auto ::  :xl: my-auto">
                            <div class="ratio ratio-1x1">
                                <slot data-select="img" data-replace=""></slot>
                            </div>

                        </div>
                        <div class="col-lg-9 text-format :: :lg: my-auto">
                            <slot></slot>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `);
