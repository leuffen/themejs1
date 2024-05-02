import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("sec-legal-content",
    // language=HTML
    `

        <section class="tjs-legal-content :: mobile :lg:">
            <div class="out-wrapper">
                <div class="container p-0">
                    <div class="inner-wrapper :: p-4 :lg: p-5">
                            <div class="tjs__section-text">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `);
