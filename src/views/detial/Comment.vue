<template>
  <div class="text-primary">
    <h2 class="h4 mb-6">飼主評論（30）</h2>
    <ul class="row -mb-5">
      <li class="col-12 mb-5 sm:col-6"
        v-for="comment of commentList" :key="comment.name">
        <div class="card flex-row border-2 border-gray-200">
          <div class="card__header py-7 px-4">
            <img :src="comment.imgUrl" alt=""></div>
          <div class="card__body flex flex-col justify-between pl-1">
            <p class="aligns-middle">{{ comment.name }}
              <span class="ml-2 font-roboto text-gray-500 text-sm">Oct 17 2020</span>
            </p>
            <div class="block">
              <template v-for="num in comment.rating">
                <span class="material-icons text-lg text-light mr-1.5" :key="num">star</span>
              </template>
            </div>
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </li>
    </ul>
    <a href="" class="block text-right text-lg mt-2">查看更多</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    commentList: [
      {
        name: '葉子',
        imgUrl: require('../../assets/images/person-4.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '服務很秋！',
      },
      {
        name: 'Ray',
        imgUrl: require('../../assets/images/person-6.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '超喜歡超棒超讚的...',
      },
      {
        name: '俊儀',
        imgUrl: require('../../assets/images/person-8.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '讚的！',
      },
      {
        name: 'Joanne',
        imgUrl: require('../../assets/images/person-5.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '貓完全不想回家了。',
      },
      {
        name: '穎旻',
        imgUrl: require('../../assets/images/person-7.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '下次還會麻煩您～',
      },
      {
        name: '子琪',
        imgUrl: require('../../assets/images/person-9.png'),
        commentTime: 'Oct 17 2020',
        rating: 5,
        content: '服務很棒耶哈哈哈！',
      },
    ],
  }),
};
</script>
