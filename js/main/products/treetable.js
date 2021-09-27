export const productsTreetable = {
    id:"products_treetable",
    view:"treetable",
    columns:[
        { id:"id", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#" },
        { id:"price", header:"Price" },
    ],
    scroll:"y",
    select:"cell",
    on: {
        onAfterLoad:function() {
            this.openAll();
        }
    }
};