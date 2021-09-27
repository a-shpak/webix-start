export const productsTreetable = {
    id:"treetable_products",
    view:"treetable",
    columns:[
        { id:"id", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#", editor:"text" },
        { id:"price", header:"Price", editor:"text" },
    ],
    scroll:"y",
    select:"cell",
    on: {
        onAfterLoad:function() {
            this.openAll();
        }
    },
    editable:true,
    rules:{
        "title":value => !!value,
        "price":value => !!value && !isNaN(value) && value >= 0,
    }
};