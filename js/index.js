import {header, profilePopup} from "./header.js";
import {main} from "./main/main.js";
import {footer} from "./footer.js";
import {side} from "./main/side.js";

webix.ready(function() {

    webix.ui(
        profilePopup
    );

    webix.ui({
        rows: [
            header,
            { cols:[ side, { view:"resizer" }, main] },
            footer
        ]
    });

    $$("side").select("dashboard_view");
    $$("form_movie").bind("table_movies");
    $$("table_movies").sort("#id#", "asc");
    $$("treetable_products").load("data/products.js");
    $$("chart_users").sync($$("list_users"), function() {
        this.group({
            by:"country",
            map:{
                name:["id", "count"]   
            }
        });
    });
});

export function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * max);
}