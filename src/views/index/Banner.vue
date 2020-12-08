<template>
  <div class="banner pt-15 pb-31 text-white">
    <div class="container">
      <h2 class="h2 mb-12 sm:mb-25">PETPET目前已有</h2>
      <ul class="row">
        <li class="li col-9 offset-3 mb-20 sm:mb-0 sm:offset-0 sm:col-4 lg:col-3"
          v-for="item of lists" :key="item.id">
          <p class="h1 pl-4 pb-4 sm:pb-28 border-l-2 border-white">
            {{ item.num }}
            <span class="text-lg font-medium block">{{ item.description }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 'used',
          num: 5278,
          description: '人使用 PETPET',
        },
        {
          id: 'becoam',
          num: 580,
          description: '人成為寵物保母',
        },
        {
          id: 'service',
          num: '10000+',
          description: '已完成服務',
        },
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  @apply bg-center bg-no-repeat bg-cover;
  background-image: url('../../assets/images/index-9.jpeg');
}
</style>
