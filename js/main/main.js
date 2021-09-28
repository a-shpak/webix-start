import { dashboardTable } from "./dashboard/table.js"; 
import { dashboardForm } from "./dashboard/form.js"; 
import { usersToolbar } from "./users/toolbar.js"; 
import { usersList } from "./users/list.js"; 
import { usersChart } from "./users/chart.js"; 
import { productsTreetable } from "./products/treetable.js"; 
import { tabbar } from "./dashboard/tabbar.js";
import { categoriesForm } from "./admin/form.js"; 
import { categoriesTable } from "./admin/table.js"; 

const dashboardView = {
    id:"dashboard_view",
    cols:[
        { rows:[ tabbar, dashboardTable, ]},
        dashboardForm,
    ] 
};
const usersView = { 
    id:"users_view",
    rows: [
        usersToolbar,
        usersList,
        usersChart,
    ]
};
const productsView = { 
    id:"products_view", 
    rows:[
        productsTreetable
    ]
};
const adminView = { 
    id:"admin_view", 
    cols:[
        categoriesTable,
        categoriesForm,
    ]
};

export const main = {
    cells:[
        dashboardView,
        usersView,
        productsView,
        adminView
    ]     
};