import Vue from 'vue';
import vueRouter from 'vue-router';
import home from '../views/home/index.vue';
import nothing from '../views/nothing/index.vue';
import indexHome from '../views/index/index.vue';

Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/info',
            // component: import(/* webpackChunkName: "group-foo" */ '../views/home/index.vue'),
            component: home,
        },
        { path: '/', component: indexHome },
        { path: '*', component: nothing }

    ],
});

export default router;

