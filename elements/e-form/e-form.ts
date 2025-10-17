import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("e-form",
    // language=HTML
    `
        <form class="tjs__e-form" data-micx-formmail-preset="default" data-micx-formmail-sent-message="Übertragung erfolgreich!">
            <slot></slot>
        </form>
    `);
