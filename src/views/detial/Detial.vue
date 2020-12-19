<template>
  <div class="container sm:pt-15 lg:pt-20">
    <div class="row">
      <div class="order-1 col-12 sm:col-5 sm:order-2 lg:col-6
      mb-10 lg:mb-20">
        <detialImg :imgArr="homestayInfo.detial.images" :key="id"/>
      </div>
      <div class="order-2 col-12 sm:col-7 sm:order-1 lg:col-6
      mb-10 sm:mb-15 lg:sticky lg:top-20">
        <detialInfo
          :name="homestayInfo.name"
          :rating="homestayInfo.rating"
          :address="homestayInfo.detial.address"
          :area="homestayInfo.detial.service_area"
          @order-now="showModal = true"
        />
      </div>
      <div class="order-3 col-12 lg:col-6 lg:offset-6
      mb-10 sm:mb-15 lg:mb-20">
        <detialAbout
          :about="homestayInfo.detial.about"
          :experience="homestayInfo.detial.experience"
          :license="homestayInfo.detial.license"
          :provide="homestayInfo.detial.provide"
          :home_range="homestayInfo.detial.home_range"
          :area="homestayInfo.detial.service_area"
        />
      </div>
      <div class="order-3 col-12 lg:col-6 lg:offset-6
      mb-10 sm:mb-15 lg:mb-20">
        <comments
          :comments="homestayInfo.detial.comments"
        />
      </div>
      <div class="order-3 col-12 mb-15 lg:mb-20 lg:col-6 lg:offset-6">
        <h3 class="h4 mb-6 text-primary">其他
          <a href="#" class="text-orange-400" @click.prevent> 高雄市 </a>
          <a href="#" class="text-orange-400" @click.prevent> 寄宿 </a> 的 寵物保姆</h3>
        <ul class="grid grid-cols-2 grid-rows-2 gap-custom
          sm:grid-cols-3 sm:grid-rows-3">
          <li v-for="item of newHomestayArr" class="" :key="item.name">
            <card
              :path="`/homestay/${item.id}`"
              :name="item.name"
              :imgUrl="item.image"
              :rating="item.rating"
              :service="item.service"
            />
          </li>
        </ul>
      </div>
    </div>
    <modal :visible.sync="showModal" ref="modal">
      <template #modal-body>
        <transition name="fade" mode="out-in">
          <template v-if="!isFinish">
            <orderInput  :visible.sync="showModal" :info="homestayInfo"
              @finish="isFinish = true"/>
          </template>
          <template v-else>
            <final :visible.sync="showModal" />
          </template>
        </transition>
      </template>
    </modal>
  </div>
</template>

<script>
import data from '@/assets/data.json';
import card from '@/components/Card.vue';
import orderInput from '@/components/forms/OrderInput.vue';
import final from '@/components/forms/Final.vue';
import detialImg from './Detial_img.vue';
import detialInfo from './Detial_info.vue';
import detialAbout from './Detial_about.vue';
import comments from './Comment.vue';

export default {
  props: {
    id: {
      type: String,
    },
  },
  data: () => ({
    homestayInfo: {},
    newHomestayArr: [],
    showModal: false,
    isFinish: false,
  }),
  components: {
    detialImg,
    detialInfo,
    detialAbout,
    comments,
    card,
    orderInput,
    final,
  },
  created() {
    this.homestayInfo = data.homestayLists[this.id];
  },
  mounted() {
    this.filterHomestayList();
  },
  methods: {
    filterHomestayList() {
      const dataArr = Object.keys(data.homestayLists).filter((key) => key !== this.id);
      const arr = [];
      dataArr.forEach((item) => {
        arr.push(data.homestayLists[item]);
      });
      this.newHomestayArr = arr;
    },
  },
  watch: {
    id() {
      this.homestayInfo = data.homestayLists[this.id];
      this.filterHomestayList();
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== from.path) {
      this.$refs.modal.hiddenScrollBar(this.visible);
      next();
    }
    next(false);
  },
};
</script>

<style scoped>
.gap-custom {
  gap: 15px;
}

@screen sm {
  .gap-custom {
    gap: 30px;
  }
}

@screen lg {
  .gap-custom {
    gap: 6px;
  }
}
</style>
