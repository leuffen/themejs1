import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("hero-slide",
    // language=HTML
    `

        <article class="hero-slide :: mobile :xl: desktop">
            <slot></slot>
        </article>

    `,
    {
        cols: 6
    },
    {
        onAfterConnectedCallback: (el) => {

        }
    }

);
