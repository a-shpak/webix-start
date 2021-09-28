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

    $$("form_movie").bind("table_movies");
    $$("treetable_products").load("data/products.js");
    $$("chart_users").sync($$("list_users"), function() {
        this.group({
            by:"country",
            map:{
                name:["id", "count"]   
            }
        });
        this.sort("#country#", "asc");
    });
    $$("table_movies").registerFilter(
        $$("tabbar_movies"),
        { columnId:"year", compare:function(value, filter) {
            switch(filter) {
                case '2': return value < 1970;
                case '3': return value > 2010;
                case '4': return value == 2021;
                default:  return true;
            }
        }},
        { 
            getValue:function(node) { return node?.getValue() },
            setValue:function(node, value) { node?.setValue(value); }
        }
    );
});