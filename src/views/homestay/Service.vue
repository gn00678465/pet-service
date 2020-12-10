<template>
  <div class="container pb-15 lg:pb-20">
    <ul class="row -mb-3 sm:-mb-5 md:-mb-8">
      <li class="col-6 mb-3 sm:col-4 sm:mb-5 lg:col-3 md:mb-8"
        v-for="item of homestayListsArr" :key="item.name">
        <a class="card shadow min-h-full transform-gpu hover:scale-105 transition-transform">
          <div class="card__img__top h-32 bg-cover bg-center"
            :style="{backgroundImage: `url(${item.image})`}"></div>
          <div class="card__body bg-gray-100 pt-2 pb-5 px-4 text-primary">
            <h5 class="mb-1.5">{{ item.name }}</h5>
            <div class="mb-1.5">
              <template v-for="num in item.rating">
                <span class="material-icons text-base text-light mr-1" :key="num">star</span>
              </template>
            </div>
            <p class="text-sm sm:mb-5">{{ item.service.join('、') }}</p>
          </div>
          <div class="card__footer">
            <div class="btn-groups">
              <button class="btn btn-outline-primary w-1/2 rounded-tl-none">聯繫</button>
              <button class="btn btn-outline-primary w-1/2 text-orange-400">預約</button>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <pagination :totalPage="3" :currentPage.sync="page"
      class="my-5 justify-end">
    </pagination>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';
import data from '@/assets/data.json';

export default {
  components: {
    pagination,
  },
  data: () => ({
    serviceLists: [
      {
        imgUrl: require('../../assets/images/homestay-2.jpeg'),
        name: '寵屋屋',
        rating: 5,
        content: ['寄宿', '美容洗澡', '到府保姆'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-3.jpeg'),
        name: '毛孩好家',
        rating: 5,
        content: ['寄宿', '美容洗澡', '到府保姆'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-4.jpeg'),
        name: '妖貓X僕SS',
        rating: 5,
        content: ['寄宿', '美容洗澡'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-5.jpeg'),
        name: '貓是主我是僕',
        rating: 5,
        content: ['寄宿', '美容洗澡', '到府保姆'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-6.jpeg'),
        name: '汪汪隊',
        rating: 5,
        content: ['寄宿', '到府保姆', '寵物行為訓練'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-7.jpeg'),
        name: '卯咪',
        rating: 5,
        content: ['寄宿', '寵物行為訓練'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/index-2.jpeg'),
        name: '貓狗大戰',
        rating: 5,
        content: ['寄宿', '美容洗澡', '到府保姆'],
        path: '',
      },
      {
        imgUrl: require('../../assets/images/homestay-8.jpeg'),
        name: '萌寵底家',
        rating: 5,
        content: ['寄宿', '到府保姆'],
        path: '',
      },
    ],
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
  computed: {
    homestayListsArr() {
      const arr = [];
      this.homestayLists.forEach((item) => {
        const newItem = item;
        delete newItem.detial;
        arr.push(newItem);
      });
      return arr;
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
