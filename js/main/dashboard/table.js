import { getRandomInt } from "../../index.js";

export const dashboardTable = {
    id:"table_movies",
    view:"datatable",
    select:true,
    leftSplit:1,
    scheme:{
        $init:function(obj) {
            obj.votes = parseInt(obj.votes.replace(',', ''));
            obj.rating = parseFloat(obj.rating.replace(',', '.'));
            obj.categoryId = getRandomInt(1, 4);
        }
    },
    columns:[
        { id:"id", header:"", css:"col-gray", width:60, sort:"int" },
        { id:"title", header:["Title", { content:"textFilter" } ], fillspace:true, sort:"text" },
        { id:"categoryId", header:["Category", { content:"selectFilter" }], editor:"select", collection:"data/categories.js" },
        { id:"rating", header:["Rating", { content:"numberFilter" } ], maxWidth:100, sort:"int" },
        { id:"votes", header:["Votes", { content:"numberFilter" } ], maxWidth:100, sort:"int" },
        { id:"year", header:"Year", maxWidth:100, sort:"int" },
        { id:"delete", header:"", template:"{common.trashIcon()}", css:"pointer", width:50 },
    ],
    hover:"datatable-hover",
    onClick:{
        "wxi-trash":function(e, id) {
            this.remove(id);
            return false;
        }
    },
    scroll:"y",
    url: "data/data.js"
};