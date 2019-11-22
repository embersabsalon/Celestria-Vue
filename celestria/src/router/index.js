import Vue from 'vue'
import Router from 'vue-router'

import DashboardRoutes from './dashboard';
import AuthorizingBodyRoutes from './authorizing_body';

Vue.use(Router)

const routes = [
    ...AuthorizingBodyRoutes,
    DashboardRoutes
];

const router = new Router({
    routes,
    mode: 'history'
});

export default router;
