import { categoriesCollection } from "../../../data/collections.js";

export const categoriesTable = {
    id:"table_categories",
    view:"datatable",
    columns:[
        { id:"id", header:"", width:100, sort:"int" },
        { id:"value", header:"Category", fillspace:true, editor:"text", sort:"text" },
        { id:"delete", header:"", template:"{common.trashIcon()}", width:60 },
    ],
    data: categoriesCollection,
    select:"row",
    editable:true,
    rules:{
        value:val => !!val.trim(),
    },
    onClick:{
        "wxi-trash":function(e, id) {
            categoriesCollection.remove(id);
            return false;
        }
    }
}