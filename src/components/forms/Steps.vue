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
