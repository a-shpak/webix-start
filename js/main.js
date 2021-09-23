const main_list = {
    css:"list",
    width:200, minWidth:120, maxWidth:300,
    paddingY:10,
    rows: [
        { view: "list", data: ["Dashboard", "Users", "Product", "Locations"], 
          css:"list", scroll:false },
        { view:"template", template:"<img src=\"img/check.svg\" class=\"green-img\">Connected", css:"connected", height:30 },

    ]
};
const main_table = {
    view:"datatable",
    data:small_film_set,
    autoConfig:true,
    scroll:"y"
};
const form_content = [
    { view:"template", type:"section", template:"edit films" },
    { view:"text", label:"Title" },
    { view:"text", label:"Year" },
    { view:"text", label:"Rating" },
    { view:"text", label:"Votes" },
    {cols:[
        { view:"button", label:"Add Item", css:"webix_primary" },
        { view:"button", label:"Clear" },
    ]},
    {}
];
const main_form = {
    maxWidth:300,
    minWidth:165,
    padding:30,
    view:"form",
    elements: form_content,
};
const main = {
    cols: [
        main_list,
        { view:"resizer" },
        main_table,
        main_form
    ]
};