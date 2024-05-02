import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("subheader",
    // language=HTML
    `

        <div class="tjs-subheader">
            <div class="x-wrapper [[layout.container]]">
                <div class="x-inner">
                    <slot></slot>
                </div>
            </div>
        </div>
    `, {
        container: "container"
    });
