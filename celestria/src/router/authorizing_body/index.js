const routes = [{
    path: '/new-authorizing-body',
    name: 'new-authorizing-body',
    component: () => import('source/pages/authorizing_body/NewAuthorizingBody.vue'),
    meta: {
        title: 'New Authorizing Body - Celestria'
    }
}, {
    path: '/edit-authorizing-body',
    name: 'edit-authorizing-body',
    component: () => import('source/pages/authorizing_body/EditAuthorizingBody.vue'),
    meta: {
        title: 'Edit Authorizing Body - Celestria'
    }
}, {
    path: '/view-authorizing-body',
    name: 'view-authorizing-body',
    component: () => import('source/pages/authorizing_body/ViewAuthorizingBody.vue'),
    meta: {
        title: 'View Authorizing Body - Celestria'
    }
}];

export default routes;