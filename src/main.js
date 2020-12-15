import modal from '@/components/Modal.vue';
import PortalVue from 'portal-vue';
import AOS from 'aos';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;
Vue.component('modal', modal);
Vue.use(PortalVue);

new Vue({
  router,
  created() {
    AOS.init({
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount('#app');
