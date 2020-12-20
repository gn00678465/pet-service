<template>
  <ul class="processbar">
    <li v-for="(step, index) of steps" :key="step" class="processbar__item"
    :class="{'processbar__item--active': (index + 1) === current}">
      {{ step }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.processbar {
  @apply w-full flex items-center;
  &__item {
    @apply flex-grow text-center relative font-extralight;
    &::before,
    &::after {
      content: '';
      position: absolute;
    }
    &::before {
      @apply w-full bg-orange-400 left-0;
      top: -5px;
      height: 2px;
    }
    &::after {
      @apply w-2 h-2 rounded-full bg-orange-400 -top-2 left-1/2 transform -translate-x-1/2;
    }
    &--active {
      @apply font-medium;
    }
  }
}
</style>
