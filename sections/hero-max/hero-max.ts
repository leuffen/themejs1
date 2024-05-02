import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("hero-max",
    // language=HTML
    `

        <section class="tjs__hero-max [[layout.class]] [[layout.autoheight === false ? '' : 'tjs__hero-max--autoheight' ]] :: mobile :xxl: desktop">
            <slot data-select="img.background, :scope>.content>p.background>img" class="slideshow"></slot>
            <div class="x-overlay x-overlay1"></div>
            <div class="x-overlay x-overlay2"></div>
            <div class="x-overlay x-overlay3"></div>
            <div class="tjs__hero-max--out-wrapper ">
                <div class="tjs__hero-max--container [[layout.container]] ">
                    <slot class="content" data-select=".slide || :scope > * "></slot>
                </div>
            </div>
        </section>

    `,
    {
        'aspect-ratio': "5/4",
    },
    {
        onAfterConnectedCallback: (el) => {
            let wrapper = el.querySelector(".tjs__hero-max--out-wrapper") as HTMLElement;
            if (wrapper.textContent.trim() === "")
                wrapper.style.display = "none"; // Remove Wrapper if empty
        }
    }

    );
