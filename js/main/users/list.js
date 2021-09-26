const usersList = {
    id:"users_list",
    view:"list",
    url:"data/users.js",
    template:"#name# from #country# <span class=\"delete-user\">x<span>",
    onClick: {
        "delete-user":function(e, id) {
            this.remove(id);
        }
    },
}