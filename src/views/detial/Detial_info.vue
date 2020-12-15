<template>
  <div class="text-primary font-medium"
    data-aos="fade-right"
    data-aos-duration="300"
  >
    <h2 class="h3 mb-4">{{ name }}
      <span class="ml-2">
        <template v-for="num in rating">
          <span class="material-icons text-lg text-light mr-1.5" :key="num">star</span>
        </template>
      </span>
    </h2>
    <p class="text-lg mb-3">給予毛孩最舒適的環境是我們的職責！</p>
    <p class="mb-7">已提供 52 筆服務、並獲得 30 個評價</p>
    <h3 class="h6 mb-3">服務內容</h3>
    <ul class="space-y-2 mb-7">
      <li>寄宿 NT$ 450 /晚</li>
      <li>美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）
        <p class="text-sm text-orange-400">個性貓另加價</p>
      </li>
      <li>到府保姆 NT$ 550 /晚</li>
    </ul>
    <div class="flex mb-7">
      <span class="material-icons text-orange-400 mr-3">location_on</span>
      <div class="block">
        <p>{{ address }}</p>
        <p>服務區域：{{ area }} 全區</p>
      </div>
    </div>
    <div class="row text-lg">
      <div class="col-6 sm:col-4 lg:col-4">
        <button class="btn btn-outline-primary py-2 w-full">聯繫</button>
      </div>
      <div class="col-6 sm:col-4 lg:col-6">
        <button class="btn btn-primary py-2 w-full"
          @click.prevent="$emit('order-now')">立刻預約</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
  },
};
</script>
