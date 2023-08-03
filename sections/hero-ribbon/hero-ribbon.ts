import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("hero-ribbon",
    // language=HTML
    `

        <div class="tjs__hero-ribbon">
            <div class="tjs__hero-ribbon--wrapper">
                <div class="tjs__hero-ribbon--container [[layout.container]]">
                    <div class="row ">

                        <slot data-select=".section-h3 > .content"></slot>

                    </div>
                </div>
            </div>

        </div>
    `);