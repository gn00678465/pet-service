import modal from '@/components/Modal.vue';
import PortalVue from 'portal-vue';
import {
  ValidationProvider,
  extend,
  localize,
  configure,
} from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';
import AOS from 'aos';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;
Vue.component('modal', modal);
Vue.use(PortalVue);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize('zh_TW', TW);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  created() {
    AOS.init({
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount('#app');
