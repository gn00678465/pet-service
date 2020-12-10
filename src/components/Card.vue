<template>
  <router-link to="/"
    class="card shadow min-h-full transform-gpu hover:scale-105 transition-transform">
    <div class="card__img__top h-32 bg-cover bg-center"
      :style="{backgroundImage: `url(${imgUrl})`}"></div>
    <div class="card__body bg-gray-100 pt-2 pb-5 px-4 text-primary">
      <h5 class="mb-1.5">{{ name }}</h5>
      <div class="mb-1.5">
        <template v-for="num in rating">
          <span class="material-icons text-base text-light mr-1" :key="num">star</span>
        </template>
      </div>
      <p class="text-sm sm:mb-5">{{ service.join('、') }}</p>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    // path: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    service: {
      type: Array,
      required: true,
    },
  },
};
</script>
