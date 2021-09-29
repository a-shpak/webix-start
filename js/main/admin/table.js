import { categoriesCollection } from "../../../data/collections.js";

export const categoriesTable = {
    id:"table_categories",
    view:"datatable",
    columns:[
        { id:"id", header:"", width:100, sort:"int" },
        { id:"value", header:"Category", fillspace:true, sort:"text" },
        { id:"delete", header:"", template:"{common.trashIcon()}", width:60 },
    ],
    data: categoriesCollection,
    select:"row",
    rules:{
        value:val => !!val.trim(),
    },
    onClick:{
        "wxi-trash":function(e, id) {
            $$("form_categories").clear();
            categoriesCollection.remove(id);
            return false;
        }
    }
}