<template>
  <div>
    <navbar :auth="true" />
    <info />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue';
import info from './MemberInfo.vue';

export default {
  components: {
    navbar,
    info,
  },
};
</script>
