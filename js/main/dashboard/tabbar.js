export const tabbar = {
    view:"tabbar",
    options:[
        "All",
        "Old",
        "Modern",
        "New",
    ],
    on: {
        onAfterTabClick:function(id, ev) {
            console.log(id);
            const table = $$("table_movies");
            if (id == "All") {
                table.filter("#year#", "");
            } else if (id == "Old") {
                table.filter(obj => obj.year < 1960);
            } else if (id == "Modern") {
                table.filter(obj => obj.year > 2010 && obj.year < 2021);
            } else if (id == "New") {
                table.filter(obj => obj.year == 2021)
            }
        }
    }
};