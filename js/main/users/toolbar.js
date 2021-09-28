import { countries } from "../../../data/countries.js";
import { getRandomInt } from "../../helpers.js";

export const usersToolbar = {
    view:"toolbar",
    elements: [
        {
            view:"text", 
            id:"users_text",
            on:{
                onTimedKeyPress:function() {
                    const text = this.getValue().toLowerCase();
                    $$("list_users").filter(function(obj) {
                        return obj.name.toLowerCase().indexOf(text) !== -1;
                    });
                },
            }
         },
        { view:"button", value:"Sort asc", width:150, css:"webix_primary", click:() => $$("list_users").sort("#name#", "asc"), },
        { view:"button", value:"Sort desc", width:150, css:"webix_primary", click:() => $$("list_users").sort("#name#", "desc"),  },
        { view:"button", value:"Add new", width:150, css:"webix_primary", click:addNewUser },
    ]
};

function addNewUser() {
    const obj =  {
        name: "Jhon",
        age: getRandomInt(18, 80),
        country:countries[getRandomInt(0, countries.length - 1)].value,
    };
    $$("list_users").add(obj);
}