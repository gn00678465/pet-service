<template>
  <div>
    <navbar />
    <router-view></router-view>
    <subscribe />
    <footerNav />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue';
import subscribe from '@/components/Subscribe.vue';
import footerNav from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    navbar,
    subscribe,
    footerNav,
  },
};
</script>
