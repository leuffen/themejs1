import { Joda } from "@leuffen/jodastyle";
Joda.registerTemplate("hero-ribbon", 
// language=HTML
`

        <div class="tjs__hero-ribbon">
            <slot data-select="h2" class="d-none"></slot>
            <div class="tjs__hero-ribbon--wrapper">
                <div class="tjs__hero-ribbon--container [[layout.container]]">
                    <div class="row ">

                        <slot data-select=".section-h3 > .content"></slot>

                    </div>
                </div>
            </div>

        </div>
    `);
