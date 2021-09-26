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