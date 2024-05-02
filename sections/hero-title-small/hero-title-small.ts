import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("hero-title-small",
    // language=HTML
    `

    <section class="tjs-hero-title-small">
        <div class="imagewrapper">
            <slot class="image-slot" data-select="img, .top"></slot>
        </div>

        <slot></slot>
    </section>
    `);
