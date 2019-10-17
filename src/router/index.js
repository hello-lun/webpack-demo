import Vue from 'vue';
import vueRouter from 'vue-router';
import beforeRoute from './beforeRoute';

Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/info',
      component: () => {
        document.getElementById('app').style.display = 'none';
        document.body.classList.remove('body-wrap-hidden');
        document.body.classList.add('body-wrap-show');
        return import(/* webpackChunkName: "group-foo" */ '../views/home/index.vue').then(res => {
          document.body.classList.remove('body-wrap-show');
          document.body.classList.add('body-wrap-hidden');
          return res;
        })
      },
    },
    { path: '/tree', component: () => {
        return import(/* webpackChunkName: "group-nothing" */ '../views/tree/index.vue')
      }
    },

    { path: '/', component: () => {
      let body = document.body;
        document.getElementById('app').style.display = 'none';
        body.classList.remove('body-wrap-hidden');
        body.classList.add('body-wrap-show');
        return import(/* webpackChunkName: "group-nothing" */ '../views/index/index.vue').then(res => {
          body.classList.remove('body-wrap-show');
          body.classList.add('body-wrap-hidden');
          body = null;
          return res;
        })
      }
    },

    { path: '*', component: () => {
        document.getElementById('app').style.display = 'none';
        document.body.classList.remove('body-wrap-hidden');
        document.body.classList.add('body-wrap-show');
        return import(/* webpackChunkName: "group-indexHome" */ '../views/nothing/index.vue').then(res => {
          document.body.classList.remove('body-wrap-show');
          document.body.classList.add('body-wrap-hidden');
          return res;
        })
      }
    }
  ]
});

beforeRoute(router);

export default router;
