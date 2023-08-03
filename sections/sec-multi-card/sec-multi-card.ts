import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("sec-multi-card",
    // language=HTML
    `

        <div class="tjs__sec-multi-card">
            <div class="container header">
                <slot data-select=":scope > .content"></slot>
            </div>
            <div class="container">
                <div class="row g-3 row-cols-1 row-cols-lg-[[ layout.cols ?? 3 ]]">
                    <slot data-select=":scope > .children > *" data-replace=""></slot>
                </div>
            </div>
        </div>
    `);
