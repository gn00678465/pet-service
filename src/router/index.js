import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
import indexPage from '../views/index/Index.vue';
import popular from '../components/Popular.vue';
import homestayPage from '../views/homestay/Homestay.vue';
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
        path: 'homestay',
        component: homestayPage,
        children: [
          {
            path: '',
            components: {
              homestayHeader: () => import(/* webpackChunkName: "homestay" */ '../views/homestay/HomestayHeader.vue'),
              service: () => import(/* webpackChunkName: "homestay" */ '../views/homestay/Service.vue'),
              popular,
            },
          },
        ],
      },
      {
        path: 'homestay/:id',
        component: detialPage,
        children: [
          {
            path: '',
            components: {
              detial_img: () => import(/* webpackChunkName: "detial" */ '../views/detial/Detial_img.vue'),
              detial_info: () => import(/* webpackChunkName: "detial" */ '../views/detial/Detial_info.vue'),
              detial_about: () => import(/* webpackChunkName: "detial" */ '../views/detial/Detial_about.vue'),
              service: () => import(/* webpackChunkName: "homestay" */ '../views/homestay/Service.vue'),
              comment: () => import(/* webpackChunkName: "detial" */ '../views/detial/Comment.vue'),
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
