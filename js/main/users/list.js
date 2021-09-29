import { usersCollection } from "../../../data/collections.js";

export const usersList = {
    id:"list_users",
    view:"editlist",
    data:usersCollection,
    template:"#name#, #age# from #country# <span class=\"delete-user\">x<span>",
    onClick: {
        "delete-user":function(e, id) {
            usersCollection.remove(id);
            return false;
        }
    },
    scheme: {
        $init:function(obj) {
            if (obj.age < 26) {
                obj.$css = "hightlight-yellow";
            }
        }
    },
    editable:true,
    editor:"text",
    editValue:"name",
    rules: {
        "name":value => !!value,
    }
};