const sideItems = [
    { id:"dashboard_view", value:"Dashboard" },
    { id:"users_view", value:"Users" },
    { id:"products_view", value:"Products" },
    { id:"admin_view", value:"Admin" },
];

export const side = {
    css:"list",
    width:200, minWidth:120, maxWidth:300,
    paddingY:10,
    rows: [
        { 
            id:"side",
            view: "list", 
            css:"list", 
            scroll:false, select:true,
            template:"#value#", 
            data: sideItems,
            on: {
                onAfterSelect:function(id) {
                    $$(id).show();
                }
            },
            ready:function() {
                this.select("dashboard_view");
            }
        },
        { view:"template", template:"<img src=\"img/check.svg\" class=\"green-img\">Connected", css:"connected", height:30, },
    ],
};