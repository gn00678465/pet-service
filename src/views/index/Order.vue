<template>
  <div class="container pt-10 pb-15 sm:py-20 text-primary">
    <h2 class="h3 mb-1">預約流程</h2>
    <p class="mb-3 sm:mb-5 text-lg">輕鬆三步驟，立即獲取最佳服務！</p>
    <ul class="row text-lg -mb-8 sm:-mb-0">
      <li class="col-12 sm:col-4 mb-8 sm:mb-0"
        v-for="(flow, index) of orderFlow" :key="flow.title"
        :data-aos="index % 2 === 0 ? 'flip-left': 'flip-right'"
        data-aos-offset="200"
        data-aos-duration="600"
        :data-aos-delay="index * 200"
        >
        <p class="mb-1">{{ index + 1 }}.{{ flow.title }}</p>
        <img :src="flow.imgUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderFlow: [
        {
          title: '查詢想要的服務',
          imgUrl: require('../../assets/images/order-1.png'),
        },
        {
          title: '找到合適的保姆',
          imgUrl: require('../../assets/images/order-2.png'),
        },
        {
          title: '填寫資料完成預約',
          imgUrl: require('../../assets/images/order-3.png'),
        },
      ],
    };
  },
};
</script>
