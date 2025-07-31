import { Joda } from "@leuffen/jodastyle";
Joda.registerTemplate("sec-card-feature", 
// language=HTML
`
        <div class="tjs__sec-card-feature [[layout.class]]">
            <div class="container">
                <div class="header_image">
                    <slot data-select=":scope > .content img, map" data-replace data-limit="1"></slot>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6 heading-style-flex text-format p-4 p-lg-5 tjs__section-text">
                        <slot></slot>
                    </div>
                    <div class="col-12 col-lg-6 text-format p-4 p-lg-5">
                        <slot data-select=".aside || :scope > .children"></slot>
                    </div>
                </div>
            </div>
        </div>
    `);
