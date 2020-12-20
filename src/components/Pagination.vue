<template>
  <ul class="pagination">
    <li class="page__item">
      <button type="button" class="page__link">
        <slot name="prev-arrow">«</slot>
      </button>
    </li>
    <li v-for="num of totalPage" :key="num" class="page__item">
      <button type="button" class="page__link" :data-page="num"
        :class="{'page__link--active': num === currentPage}"
        @click.prevent="emitPage(num)">
        {{ num }}
      </button>
    </li>
    <li class="page__item">
      <button type="button" class="page__link">
        <slot name="next-arrow">»</slot>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    emitPage(num) {
      this.$emit('update:currentPage', num);
    },
  },
};
</script>

<style scoped>
.pagination {
  @apply flex rounded;
  .page {
    &__item {
      @apply border border-gray-200;
      &:first-child {
        @apply rounded-l;
      }
      &:last-child {
        @apply rounded-r;
      }
      &:not(:last-child) {
        @apply border-r-0;
      }
    }
    &__link {
      @apply inline-block px-4 py-2;
    }
    &__link:not(.page__link--active) {
      @apply text-primary hover:bg-gray-200;
    }
    &__link--active {
      @apply bg-primary text-white cursor-auto;
    }
  }
}
</style>
