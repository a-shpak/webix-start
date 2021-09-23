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
    id:"table_movies",
    view:"datatable",
    data:small_film_set,
    autoConfig:true,
    scroll:"y"
};
const form_content = [
    { view:"template", type:"section", template:"EDIT FILMS" },
    { view:"text", label:"Title", name:"title", invalidMessage:"Title cannot be empty" },
    { view:"text", label:"Year", name:"year", invalidMessage:"Year should be between 1970 and 2021" },
    { view:"text", label:"Rating", name:"rating", invalidMessage:"Rating cannot be empty or 0" },
    { view:"text", label:"Votes", name:"votes", invalidMessage:"Votes must be less than 100000" },
    { cols:[
        { view:"button", label:"Add Item", css:"webix_primary", id:"button_add", click:button_add_click },
        { view:"button", label:"Clear", id:"button_clear", click:button_clear_click },
    ]},
    {}
];
const main_form = {
    id:"form_movie",
    view:"form",
    maxWidth:320,
    minWidth:165,
    padding:30,
    elements: form_content,
    rules: {
        title:webix.rules.isNotEmpty,
        year: val => val > 1970 && val <= new Date().getFullYear(),
        rating: val => !isNaN(val) && val != 0,
        votes: val => val && val < 100000 && val >= 0,
    },
};
const main = {
    cols: [
        main_list,
        { view:"resizer" },
        main_table,
        main_form
    ]
};


// handlers

function button_add_click() {
    const form = $$("form_movie");
    if (form.validate()) {
        const table = $$("table_movies");
        table.data.add(form.getValues());
        form.clear();
        webix.message("Validation succees!");
    }
}
function button_clear_click() {
    webix.confirm({
        title:"Clear form",
        text:"Are you sure you want to clear form?",
    }).then(
        function() {
            $$("form_movie").clear();
            $$("form_movie").clearValidation();
        }
    );
}