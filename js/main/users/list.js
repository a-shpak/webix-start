webix.protoUI({
    name:"editlist" 
}, webix.EditAbility, webix.ui.list);  

export const usersList = {
    id:"list_users",
    view:"editlist",
    url:"data/users.js",
    template:"#name#, #age# from #country# <span class=\"delete-user\">x<span>",
    onClick: {
        "delete-user":function(e, id) {
            this.remove(id);
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