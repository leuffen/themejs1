import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("sec-multi-card__item",
    // language=HTML
    `
        <div class="col tjs__sec-multi-card__item">
            <div class="wrapper">

                <slot class="tjs__sec-multi-card__item-img" data-select="img"></slot>


                <div class="tjs__sec-multi-card__item__body text-format">
                    <slot></slot>
                </div>
            </div>

        </div>
    `
);
Joda.registerTemplate("sec-multi-card",
    // language=HTML
    `

        <section class="tjs__sec-multi-card">
            <div class="container header" style="--joda-on-empty-class: d-none;">
                <slot class="tjs__section-text" data-select=":scope > .content"></slot>
            </div>
            <div class="container">
                <slot class="row g-3 row-cols-1 row-cols-lg-[[ layout.cols ?? 3 ]]" data-select=":scope > .children > *"  data-child-layout="use: #sec-multi-card__item"></slot>
            </div>
        </section>
    `);
