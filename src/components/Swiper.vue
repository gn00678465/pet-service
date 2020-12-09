<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot name="slideArea"></slot>
    </div>
    <!-- If we need navigation buttons -->
    <slot name="navArea">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </slot>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper';
// configure Swiper to use modules
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);
let popularSwiper = null;

export default {
  props: {
    rowBetween: {
      type: Number,
      default: 0,
    },
    columnBetween: {
      type: Number,
      default: 0,
    },
    slidesPerView: {
      type: Number,
      default: 1,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    popularSwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerColumn: 3,
          spaceBetween: this.columnBetween,
        },
        768: {
          loop: this.loop,
          spaceBetween: this.rowBetween,
          slidesPerView: this.slidesPerView,
        },
      },
    });
    this.$nextTick(() => {
      popularSwiper.update();
    });
  },
  methods: {
    prevHandler() {
      popularSwiper.slidePrev();
    },
    nextHandler() {
      popularSwiper.slideNext();
    },
  },
  beforeDestroy() {
    popularSwiper = null;
  },
};
</script>

<style scoped>
.swiper-container {
  padding: 8px;
}
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
</style>
