<template>
  <div class="text-primary">
    <h2 class="h4 mb-6">飼主評論（30）</h2>
    <ul class="row -mb-5">
      <li class="col-12 mb-5 sm:col-6"
        v-for="comment of comments" :key="comment.name">
        <div class="card flex-row border-2 border-gray-200 h-full">
          <div class="card__header py-7 px-4">
            <img :src="comment.imgUrl" alt=""></div>
          <div class="card__body flex flex-col justify-between pl-1 pr-0">
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
    <a href="" class="block text-right text-lg mt-2" @click.prevent>查看更多</a>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
