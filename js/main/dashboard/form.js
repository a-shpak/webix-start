const formContent = [
    { view:"template", type:"section", template:"edit films" },
    { view:"text", label:"Title", name:"title", invalidMessage:"Enter valid title" },
    { view:"text", label:"Year", name:"year", invalidMessage:"Year should be between 1970 and 2021" },
    { view:"text", label:"Rating", name:"rating", invalidMessage:"Rating cannot be empty or 0" },
    { view:"text", label:"Votes", name:"votes", invalidMessage:"Votes must be less than 100000" },
    { cols:[
        { view:"button", label:"Add Item", css:"webix_primary", id:"button_add", click:buttonAddClick },
        { view:"button", label:"Clear", id:"button_clear", click:buttonClearClick },
    ]},
    {}
];
const form = {
    id:"form_movie",
    view:"form",
    maxWidth:320,
    minWidth:165,
    padding:30,
    elements: formContent,
    rules: {
        title:val => val?.trim() && /<(.|\n)*?>/g.test(val) == false,
        year: val => val > 1970 && val <= new Date().getFullYear(),
        rating: val => !isNaN(val) && val != 0,
        votes: val => val && val < 100000 && val >= 0,
    },
};

// Handlers
function buttonAddClick() {
    const form = $$("form_movie");
    if (form.validate()) {
        const table = $$("table_movies");
        table.add(form.getValues());
        form.clear();
        webix.message("Validation succees!");
    }
}
function buttonClearClick() {
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