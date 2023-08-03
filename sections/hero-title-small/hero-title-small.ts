import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("hero-title-small",
    // language=HTML
    `

    <div class="tjs__hero-title-small">
        <div class="imagewrapper">
            <slot data-select="img" data-replace="true"></slot>
        </div>

        <slot></slot>
    </div>
    `);
