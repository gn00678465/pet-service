<template>
  <div class="container pb-15 lg:pb-20">
    <ul class="row -mb-3 sm:-mb-5 md:-mb-8">
      <li class="col-6 mb-3 sm:col-4 sm:mb-5 lg:col-3 md:mb-8"
        v-for="item of homestayLists" :key="item.name">
        <card
        :path="`/homestay/${item.id}`"
        :name="item.name"
        :imgUrl="item.image"
        :rating="item.rating"
        :service="item.service"
        >
        <template #footer>
          <div class="btn-groups">
          <button class="btn w-1/2 rounded-tl-none text-primary
          hover:bg-gray-200">聯繫</button>
          <button class="btn w-1/2 text-orange-400 hover:bg-gray-200">預約</button>
        </div>
        </template>
        </card>
      </li>
    </ul>
    <pagination :totalPage="3" :currentPage.sync="page"
      class="my-5 justify-end">
    </pagination>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';
import card from '@/components/Card.vue';
import data from '@/assets/data.json';

export default {
  components: {
    pagination,
    card,
  },
  data: () => ({
    homestayLists: [],
    page: 1,
  }),
  mounted() {
    this.getHomestayLists();
  },
  methods: {
    getHomestayLists() {
      const keys = Object.keys(data.homestayLists);
      const arr = [];
      keys.forEach((key) => {
        arr.push(data.homestayLists[key]);
      });
      this.homestayLists = arr;
    },
  },
};
</script>

<style scoped>
  .btn-groups {
    .btn {
      &:first-child {
        @apply rounded-tl-none;
      }
      &:last-child {
        @apply rounded-tr-none;
      }
    }
  }
</style>
