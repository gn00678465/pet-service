<template>
  <ul class="text-primary -mb-5">
    <li class="mb-5">
      <h3 class="h5 mb-3">關於</h3>
      <p v-html="about"></p>
    </li>
    <li class="mb-5">
      <h3 class="h5 mb-3">經歷</h3>
      {{ experience }}
    </li>
    <li class="mb-5">
      <h3 class="h5 mb-3">技能證照</h3>
      {{ license }}
    </li>
    <li class="mb-5">
      <h3 class="h5 mb-3">提供</h3>
      {{ provide.join('、') }}
    </li>
    <li class="mb-5">
      <h3 class="h5 mb-3">毛孩活動範圍</h3>
      {{ home_range }}
    </li>
    <li class="mb-5">
      <h3 class="h5 mb-3">服務地區</h3>
      {{ area }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    about: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
    provide: {
      type: Array,
      required: true,
    },
    home_range: {
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
