<template>
  <ul class="grid grid-cols-4 gap-1.5 sm:gap-2 lg:grid-cols-5">
    <li class="row-span-4 col-span-4 lg:row-span-5 lg:col-span-5">
      <transition name="fade" mode="out-in">
        <img :src="imgArrays[initialImg]" alt="" :key="imgArrays[initialImg]"
        class="detial-img-height w-full object-cover rounded">
      </transition>
    </li>
    <li v-for="(img, index) of imgArrays" :key="img">
      <a href="#" class="rounded block thumbnail-img-height bg-no-repeat bg-cover bg-center"
      :style="{'backgroundImage': `url(${img})`}" @click.self.prevent="changeImage(index)"></a>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    initialImg: 0,
    imgArrays: [
      require('../../assets/images/homestay-3.jpeg'),
      require('../../assets/images/index-5.jpeg'),
      require('../../assets/images/detail-1.jpeg'),
      require('../../assets/images/detail2.jpeg'),
    ],
  }),
  methods: {
    changeImage(index) {
      this.initialImg = index;
    },
  },
};
</script>

<style scoped>
.thumbnail-img-height {
  height: 82px;
}

.detial-img-height {
  height: 282px;
}

@screen sm {
  .thumbnail-img-height {
    height: 61px;
  }
  .detial-img-height {
  height: 221px;
}
}

@screen lg {
  .thumbnail-img-height {
    height: 96px;
  }
  .detial-img-height {
    height: 440px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
