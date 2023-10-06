import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("image-gallery1__images-image",
    // language=HTML
    `

        <slot class="tjs-image-gallery1__images-image" data-select="img"></slot>

    `);


Joda.registerTemplate("image-gallery1",
    // language=HTML
    `

        <section class="tjs-image-gallery1 container :: mobile :lg: desktop">
            <slot class="tjs-image-gallery1__header"></slot>
            <slot class="tjs-image-gallery1__images" data-select="ul > li" data-child-layout="use: #image-gallery1__images-image"></slot>
        </section>

    `);
