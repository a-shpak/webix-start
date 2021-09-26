const usersToolbar = {
    view:"toolbar",
    elements: [
        { view:"text", id:"users_text" },
        { view:"button", value:"Sort asc", width:150, css:"webix_primary", click:() => $$("users_list").sort("#name#", "asc"), },
        { view:"button", value:"Sort desc", width:150, css:"webix_primary", click:() => $$("users_list").sort("#name#", "desc"),  },
    ]
};

