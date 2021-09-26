const side = {
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
            }
        },
        { view:"template", template:"<img src=\"img/check.svg\" class=\"green-img\">Connected", css:"connected", height:30, },
    ],
};