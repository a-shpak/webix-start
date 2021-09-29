import { getRandomInt } from "../../helpers.js";
import { categoriesCollection } from "../../../data/collections.js";

export const dashboardTable = {
    id:"table_movies",
    view:"datatable",
    select:true,
    leftSplit:1,
    scheme:{
        $init:function(obj) {
            obj.votes = parseInt(obj.votes.replace(',', ''));
            obj.rating = parseFloat(obj.rating.replace(',', '.'));
            obj.categoryId = getRandomInt(1, categoriesCollection.count());
        }
    },
    columns:[
        { id:"id", header:"", css:"col-gray", width:60, sort:"int" },
        { id:"title", header:["Title", { content:"textFilter" } ], fillspace:true, sort:"text" },
        { id:"categoryId", header:["Category", { content:"selectFilter" }], editor:"select", collection:categoriesCollection },
        { id:"rating", header:["Rating", { content:"numberFilter" } ], maxWidth:100, sort:"int" },
        { id:"votes", header:["Votes", { content:"numberFilter" } ], maxWidth:100, sort:"int" },
        { id:"year", header:"Year", maxWidth:100, sort:"int" },
        { id:"delete", header:"", template:"{common.trashIcon()}", css:"pointer", width:50 },
    ],
    hover:"datatable-hover",
    onClick:{
        "wxi-trash":function(e, id) {
            $$("form_movies").clear();
            this.remove(id);
            return false;
        }
    },
    scroll:"y",
    url: "data/data.js",
    ready:function() {
        this.sort("#id#", "asc", "int");
    }
};