import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/assets/store';
import home from '../views/Home.vue';
import indexPage from '../views/index/Index.vue';
import popular from '../components/Popular.vue';
import homestayPage from '../views/homestay/Homestay.vue';
import detialPage from '../views/detial/Detial.vue';
import loinPage from '../views/member/Login.vue';
import member from '../views/member/Member.vue';

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
        components: {
          default: detialPage,
        },
        props: {
          default: true,
        },
      },
    ],
  },
  {
    path: '/login',
    component: loinPage,
  },
  {
    path: '/member',
    component: member,
    // beforeEnter(to, from, next) {
    //   console.log(to, from);
    //   console.log(store.auth);
    //   if (store.auth) {
    //     next();
    //   }
    //   next('/login');
    // },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
