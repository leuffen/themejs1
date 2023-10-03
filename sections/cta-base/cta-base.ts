import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("cta-base",
    // language=HTML
    `

        <section class="tjs__cta-base">
            <div class="[[layout.container]]">
                <slot></slot>
            </div>
        </section>
    `);
