import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
import indexPage from '../views/index/Index.vue';
import popular from '../components/Popular.vue';
import lodgePage from '../views/lodge/Lodge.vue';
import detialPage from '../views/detial/Detial.vue';

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
              indexHeader: () => import(/* webpackChunkName: "index" */ '../views/index/IndexHeader.vue'),
              popular,
              online: () => import(/* webpackChunkName: "index" */ '../views/index/Online.vue'),
              banner: () => import(/* webpackChunkName: "index" */ '../views/index/Banner.vue'),
              order: () => import(/* webpackChunkName: "index" */ '../views/index/Order.vue'),
            },
          },
        ],
      },
      {
        path: 'lodge',
        component: lodgePage,
        children: [
          {
            path: '',
            components: {
              lodgeHeader: () => import(/* webpackChunkName: "lodge" */ '../views/lodge/LodgeHeader.vue'),
              service: () => import(/* webpackChunkName: "lodge" */ '../views/lodge/Service.vue'),
              popular,
            },
          },
        ],
      },
      {
        path: 'lodge/:id',
        component: detialPage,
        children: [
          {
            path: '',
            components: {
              detial_img: () => import(/* webpackChunkName: "detial" */ '../views/detial/Detial_img.vue'),
              detial_info: () => import(/* webpackChunkName: "detial" */ '../views/detial/Detial_info.vue'),
              service: () => import(/* webpackChunkName: "lodge" */ '../views/lodge/Service.vue'),
              comment: () => import(/* webpackChunkName: "detial" */ '../views/detial/Comment.vue'),
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
