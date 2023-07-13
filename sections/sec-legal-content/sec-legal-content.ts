import {Joda} from "@leuffen/jodastyle/src/joda";


Joda.registerTemplate("sec-legal-content",
    // language=HTML
    `

        <div class="tjs__sec-legal-content">
            <div class="out-wrapper">
                <div class="container">
                    <div class="inner-wrapper">
                            <div class="tjs__section-text">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
