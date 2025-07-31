import { Joda } from "@leuffen/jodastyle";
Joda.registerTemplate("sec-testimonial-ribbon", 
// language=HTML
`

        <div class="tjs-testimonial-ribbon :: mobile :lg:">
            <div class="x--wrapper">
                <div class="x--container [[layout.container]] :: :xl:">

                    <div class="x--row">
                        <div class="x--image">
                            <slot class="" data-select="img"></slot>
                        </div>

                        <slot class="x--text"></slot>

                </div>
            </div>
        </div>
    `);
