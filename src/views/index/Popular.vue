<template>
  <div class="container pb-10 sm:pb-20">
    <h2 class="h3 mb-1 text-primary">本月熱門保姆</h2>
    <p class="text-lg font-medium mb-3 text-primary">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
    <!-- siwper -->
    <div class="relative -m-2">
      <swiper
        :columnBetween="12"
        :rowBetween="30"
        :slidesPerView="3"
        :loop="true"
        ref="popularSwiper"
        >
        <template #slideArea>
          <div class="swiper-slide" v-for="sitter of sitterList" :key="sitter.name">
            <div class="card text-primary shadow">
              <div class="card__header h-30">
                <div class="bg-cover bg-center w-full h-full"
                :style="{ backgroundImage: `url(${sitter.imgUrl})` }"></div>
              </div>
              <div class="card__body p-2 pt-0 flex flex-col items-center">
                <img :src="sitter.photo" class="m-photo-center mb-1" alt="">
                <h4 class="text-lg font-medium mb-1">{{ sitter.name }}</h4>
                <p class="mb-3">{{ sitter.skills.join('、') }}</p>
                <button class="mb-6 py-3 btn btn-primary px-16">預約</button>
                <ul class="flex mb-7">
                  <li class="mr-15 md:mr-8 lg:mr-15">
                    <p class="mb-3">獲得評價</p>
                    <p><span class="h4 mr-1">{{ sitter.evaluate }}</span>則</p>
                  </li>
                  <li>
                    <p class="mb-3">已完成訂單</p>
                    <p><span class="h4 mr-1">{{ sitter.finished }}</span>件</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </swiper>
      <button type="button" class="hidden sm:block btn p-0 absolute z-10 -left-5
        text-orange-400 hover:text-primary
        transform top-1/2 -translate-y-1/2 rotate-90"
      @click="prevHandler()">
        <span class="material-icons text-5xl">arrow_drop_down_circle</span>
      </button>
      <button type="button" class="hidden sm:block btn p-0 absolute z-10 -right-5
        text-orange-400 hover:text-primary
        transform top-1/2 -translate-y-1/2 -rotate-90"
      @click="nextHandler()">
        <span class="material-icons text-5xl">arrow_drop_down_circle</span>
      </button>
    </div>
    <!-- siwper -->
  </div>
</template>

<script>
import swiper from '@/components/Swiper.vue';

export default {
  components: {
    swiper,
  },
  data() {
    return {
      sitterList: [
        {
          imgUrl: require('../../assets/images/index-2.jpeg'),
          name: 'Jamie',
          photo: require('../../assets/images/person-1.png'),
          skills: ['寄宿', '美容', '寵物行為訓練'],
          evaluate: 198,
          finished: 580,
        },
        {
          imgUrl: require('../../assets/images/index-3.jpeg'),
          name: 'Eric',
          photo: require('../../assets/images/person-2.png'),
          skills: ['寄宿', '美容'],
          evaluate: 76,
          finished: 208,
        },
        {
          imgUrl: require('../../assets/images/index-4.jpeg'),
          name: 'Yvonne',
          photo: require('../../assets/images/person-3.png'),
          skills: ['寄宿', '美容', '寵物行為訓練'],
          evaluate: 52,
          finished: 196,
        },
      ],
    };
  },
  methods: {
    prevHandler() {
      this.$refs.popularSwiper.prevHandler();
    },
    nextHandler() {
      this.$refs.popularSwiper.nextHandler();
    },
  },
};
</script>

<style scoped>
.m-photo-center {
  margin-top: -50px;
}
</style>
