import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("e-card-default",
    // language=HTML
    `
        <div class="card tjs__e-card-default">
            <slot data-select="img" data-replace></slot>
            <div class="card-body text-format p-4">
                <slot></slot>
            </div>
        </div>
    `);
