import {Joda} from "@leuffen/jodastyle/src/joda";

Joda.registerTemplate("cta-form",
    // language=HTML
    `
        <form class="tjs__cta-form" data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
            <div class="container">
                <slot data-select=":scope h2"></slot>
            </div>
            <div class="wrapper">
                <div class="container">
                    <div class="row g-3">
                        <slot data-select=".section-hr" data-replace=""></slot>

                    </div>
                </div>
            </div>

        </form>
    `);
