import {dashboardTable} from "./dashboard/table.js"; 
import {dashboardForm} from "./dashboard/form.js"; 

import {usersToolbar} from "./users/toolbar.js"; 
import {usersList} from "./users/list.js"; 
import {usersChart} from "./users/chart.js"; 

import {productsTreetable} from "./products/treetable.js"; 

const dashboardView = {
    id:"dashboard_view",
    cols:[
        dashboardTable,
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
const adminView = { id:"admin_view", template:"admin", align:"center" };

export const main = {
    cells:[
        dashboardView,
        usersView,
        productsView,
        adminView
    ]     
};