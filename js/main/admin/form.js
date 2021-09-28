const formContent = [
    { view:"text", label:"Category", name:"value", invalidMessage:"Field cannot be empty" },
    { cols:[
        { view:"button", label:"Add", css:"webix_primary", click:buttonSaveClick },
        { view:"button", label:"Clear", click:buttonClearClick },
    ]},
    {}
];

export const categoriesForm = {
    id:"form_categories",
    view:"form",
    elements:formContent,
    maxWidth:500,
    rules:{
        value:val => !!val,
    }
};

function buttonSaveClick() {
    const form = $$("form_categories");
    if (form.validate()) {
        form.save();
        form.clear();
        $$("table_categories").clearSelection();
    }
}
function buttonClearClick() {
    const form = $$("form_categories");
    form.clear();
    $$("table_categories").clearSelection();
}