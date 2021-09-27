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

    const table = $$("table_movies");
    $$("side").select("dashboard_view");
    $$("form_movie").bind("table_movies");
    table.sort("#id#", "asc");
    $$("treetable_products").load("data/products.js");
    $$("chart_users").sync($$("list_users"), function() {
        this.group({
            by:"country",
            map:{
                name:["id", "count"]   
            }
        });
    });
    table.registerFilter(
        $$("tabbar_movies"),
        { columnId:"year", compare:function(value, filter, item) {
            if (filter == 1) {
                return true;
            } else if (filter == 2) {
                return value < 1970;
            } else if (filter == 3) {
                return value > 2010;
            } else if (filter == 4) {
                return value == 2021;
            } else return false;
        }},
        { 
            getValue:function(node) { return node?.getValue() },
            setValue:function(node, value) { node?.setValue(value); }
        }
    );
});

export function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * max);
}