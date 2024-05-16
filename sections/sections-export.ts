import * as fs from "fs";

import "./_pages/index.def";
import "./_pages/about.def";
import "./_pages/leistungen1.def";
import "./_pages/leistungen2.def";
import "./sec-card-2col/sec-card-2col.def";
import "./sec-card-feature/sec-card-feature.def";
import "./sec-multi-card/sec-multi-card.def";
import "./sec-testimonial-ribbon/sec-testimonial-ribbon.def";
import "./cta-base/cta-base.def";



import {SECTIONS} from "./sections.def";

fs.writeFile(__dirname + "/../_tpl/sections.def.json", JSON.stringify(SECTIONS, null, 2), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File has been created");
});

