const table = {
    id:"table_movies",
    view:"datatable",
    select:true,
    leftSplit:1,
    columns:[
        { id:"id", header:"", css:"col-gray", width:60, sort:"int" },
        { id:"title", header:["Title", { content:"textFilter" } ], fillspace:true, sort:"text"},
        { id:"year", header:["Released", { content:"textFilter" } ], maxWidth:100, sort:"int" },
        { id:"votes", header:["Votes", { content:"textFilter" } ], maxWidth:100, sort:"text" },
        { id:"rating", header:["Rating", { content:"textFilter" } ], maxWidth:100, sort:"text" },
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