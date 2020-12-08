import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
import indexPage from '../views/index/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: home,
    children: [
      {
        path: '',
        component: indexPage,
        children: [
          {
            path: '',
            components: {
              online: () => import(/* webpackChunkName: "index" */ '../views/index/Online.vue'),
              banner: () => import(/* webpackChunkName: "index" */ '../views/index/Banner.vue'),
              order: () => import(/* webpackChunkName: "index" */ '../views/index/Order.vue'),
            },
          },
        ],
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
