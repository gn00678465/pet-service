<template>
  <nav class="navbar navbar__expand">
    <div class="container flex items-center flex-wrap justify-center md:justify-start">
      <a href="#" class="navbar__brand">
        <h1 class="logo">PETPET</h1>
      </a>
      <toggleMenu class="absolute right-5 top-4 md:hidden" :toggle.sync="isShow" />
      <div class="navbar__collapse font-medium md:-mr-3 md:font-normal"
        :class="{'navbar__collapse-show': isShow}">
        <ul class="navbar__list divide-y divide-gray-300 border-b border-gray-300
        text-primary justify-end md:divide-y-0 md:border-0">
          <li class="navbar__item md:my-2">
            <a href="" class="navbar__link text-lg md:text-base">預約服務</a>
          </li>
          <li class="navbar__item md:my-2">
            <a href="" class="navbar__link text-lg md:text-base">成為寵物保姆</a>
          </li>
          <li class="navbar__item md:my-2">
            <a href="" class="navbar__link text-lg md:text-base">登入</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import toggleMenu from './toggleMenu.vue';

export default {
  name: 'navbar',
  components: {
    toggleMenu,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
