const dashboardView = {
    id:"dashboard_view",
    cols:[
        table,
        form
    ] 
};
const usersView = { id:"users_view", template:"users", align:"center" };
const productsView = { id:"products_view", template:"products", align:"center" };
const adminView = { id:"admin_view", template:"admin", align:"center" };

const main = {
    cells:[
        dashboardView,
        usersView,
        productsView,
        adminView
    ]     
};