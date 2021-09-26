const table = {
    id:"table_movies",
    view:"datatable",
    blockselect:false,
    select:"row",
    leftSplit:1,
    columns:[
        { id:"id", header:"", css:"col-gray", width: 60 },
        { id:"title", header:"Film Title", fillspace:true },
        { id:"year", header:"Released" },
        { id:"votes", header:"Votes" },
    ],
    scroll:"y",
    url: "data/data.js"
};