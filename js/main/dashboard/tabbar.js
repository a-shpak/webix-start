export const tabbar = {
    id:"tabbar_movies",
    view:"tabbar",
    options:[
        { id:1, value:"All" },
        { id:2, value:"Old" },
        { id:3, value:"Modern" },
        { id:4, value:"New" },
    ],
    on: {
        onAfterTabClick:function() {
            $$("table_movies").filterByAll();
        }
    }
};