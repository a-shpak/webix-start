const header = {
    height:50,
    css:"header",
    paddingX:10,
    paddingY:3,
    cols: [
        { view:"label", label:"My App", css:"title" },
        {},
        { view:"button", label:"Profile", type:"icon", icon:"wxi-user", 
        css:"webix_transparent", maxWidth:150, id:"button_header", popup:"profile_popup" }
    ]
};

const profile_popup = {
    view:"popup",
    id:"profile_popup",
    body: {
        view:"list",
        width:150,
        autoheight:true,
        data: [ "Settings", "Log out"],
    }
};