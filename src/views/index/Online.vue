<template>
  <div class="container text-primary pb-10 sm:pb-20" :style="rootStyle">
    <h2 class="h3 mb-1">線上預約</h2>
    <p class="text-lg font-medium mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
    <ul class="grid sm:grid-flow-col sm:grid-row-2 sm:grid-cols-4 gap-1 sm:gap-1.5 text-white">
      <li v-for="(item) of lists" :key="item.title" :class="{'row-span-2': item.rowSpan}">
        <a href="#" class="rounded relative block">
          <div class="absolute z-20 h5 inset-0 bg-black bg-opacity-40 hover:bg-opacity-0
            transition-all duration-300 flex items-center justify-center">{{ item.title }}</div>
          <div class="rounded w-full bg-cover bg-no-repeat bg-center"
          :class="item.classes"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: '寵物寄宿',
          imgUrl: require('../../assets/images/index-5.jpeg'),
          rowSpan: true,
          classes: 'img-h img-h-x2 row-span-2',
        },
        {
          title: '寵物美容',
          imgUrl: require('../../assets/images/index-6.jpeg'),
          rowSpan: true,
          classes: 'img-h img-h-x2',
        },
        {
          title: '到府照顧',
          imgUrl: require('../../assets/images/index-7.jpeg'),
          rowSpan: false,
          classes: 'img-h',
        },
        {
          title: '遛狗保姆',
          imgUrl: require('../../assets/images/index-8.jpeg'),
          rowSpan: false,
          classes: 'img-h',
        },
        {
          title: '行為訓練',
          imgUrl: require('../../assets/images/index-3.jpeg'),
          rowSpan: true,
          classes: 'img-h img-h-x2',
        },
      ],
    };
  },
  computed: {
    rootStyle() {
      return {
        '--sm-height': '132px',
        '--md-height': '103px',
        '--lg-height': '172px',
        '--md-height-x2': '210px',
        '--lg-height-x2': '350px',
      };
    },
  },
};
</script>

<style scoped>
.img-h {
  min-height: var(--sm-height);
  z-index: 1;
}
.img-h-x2 {
  min-height: var(--sm-height);
  z-index: 1;
}
@screen md {
  .img-h {
    min-height: var(--md-height);
  }
  .img-h-x2 {
    min-height: var(--md-height-x2);
  }
}
@screen lg {
  .img-h {
    min-height: var(--lg-height);
  }
  .img-h-x2 {
    min-height: var(--lg-height-x2);
  }
}
</style>
