import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("hero-max",
    // language=HTML
    `

        <section class="tjs__hero-max [[layout.class]] [[layout.autoheight === false ? '' : 'tjs__hero-max--autoheight' ]] :: mobile :xxl: desktop">
            <slot data-select="img.background, :scope>.content>p.background>img" class="slideshow"></slot>
            <div class="tjs__hero-max--out-wrapper ">
                <div class="tjs__hero-max--container [[layout.container]] ">
                    <div class="tjs__hero-max--inner-wrapper :: :xxl: col-[[layout.cols]]">
                            <div class="tjs__hero-max--section-text">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `,
    {
        cols: "6",
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
