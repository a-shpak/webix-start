export const usersList = {
    id:"users_list",
    view:"list",
    url:"data/users.js",
    template:"#name# from #country# <span class=\"delete-user\">x<span>",
    onClick: {
        "delete-user":function(e, id) {
            this.remove(id);
        }
    },
    on: {
        onAfterRender: function() {
            const list = $$("users_list");
            list.clearCss("selection-top");
            for (let i = 0; i < (list.count() > 4 ? 5 : list.count()); i++ ) {
                list.addCss(list.data.order[i], "selection-top");
            }
        } 
    }
};