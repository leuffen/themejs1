import { Joda } from "@leuffen/jodastyle";
Joda.registerTemplate("infobox", 
// language=HTML
`

        <div class="tjs-infobox alert bg-soft-[[layout.type]] d-flex mb-3" tabindex="0">
            <i style="width: 48px; height: 48px" class="text-[[layout.type]] me-3 bi [[layout.icon]] h1"></i>
            <div>
                <slot></slot>


            </div>
        </div>
    `, {
    type: "success", icon: "bi-info-circle-fill"
});
