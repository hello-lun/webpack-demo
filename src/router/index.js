import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/info',
            component: () => import(/* webpackChunkName: "group-foo" */ '../views/home/index.vue'),
        },
        { path: '/', component: () => import(/* webpackChunkName: "group-nothing" */ '../views/index/index.vue'), },

        { path: '*', component: () => import(/* webpackChunkName: "group-indexHome" */ '../views/nothing/index.vue'), }

    ],
});

export default router;

