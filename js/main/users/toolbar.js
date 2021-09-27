export const usersToolbar = {
    view:"toolbar",
    elements: [
        {
            view:"text", 
            id:"users_text",
            on:{
                onTimedKeyPress:function() {
                    const text = this.getValue().toLowerCase();
                    $$("users_list").filter(function(obj) {
                        return obj.name.toLowerCase().indexOf(text) !== -1;
                    });
                },
            }
         },
        { view:"button", value:"Sort asc", width:150, css:"webix_primary", click:() => $$("users_list").sort("#name#", "asc"), },
        { view:"button", value:"Sort desc", width:150, css:"webix_primary", click:() => $$("users_list").sort("#name#", "desc"),  },
    ]
};