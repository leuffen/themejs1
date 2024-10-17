import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("download-links",
    // language=HTML
    `
        <div class="tjs__download-links [[layout.class]]">
            <slot data-select="a"></slot>
            <slot></slot>
        </div>
    `);
