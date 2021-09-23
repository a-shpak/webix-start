const header = {
    height:50,
    css:"header",
    paddingX:10,
    paddingY:3,
    cols: [
        { view:"label", label:"My App", css:"title" },
        {},
        { view:"button", label:"Profile", type:"icon", icon:"wxi-user", 
        css:"webix_transparent", maxWidth:200, id:"button_header", popup:"profile_popup" }
    ]
};

const profile_popup = {
    view:"popup",
    id:"profile_popup",
    width:"300",
    body: {
        view:"list",
        data: [ "Settings", "Log out"],
        autoheight:true
    }
};