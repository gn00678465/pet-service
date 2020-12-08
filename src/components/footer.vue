<template>
  <footer class="container pt-2 pb-6 md:pt-15 md:pb-8 text-primary">
    <h2 class="logo md:hidden">PETPET</h2>
    <div class="hidden md:grid grid-cols-4 gap-7 items-baseline mb-24">
      <ul v-for="items of footerLinks" :key="items.title">
        <li><h4 :class="items.titleClass">{{ items.title }}</h4></li>
        <template v-for="link of items.links" >
          <li :key="link"><a :class="items.linkClass" href="#">{{ link }}</a></li>
        </template>
      </ul>
    </div>
    <div class="flex justify-end md:justify-between items-center">
      <p class="hidden md:inline-block text-lg font-medium">
        <span class="material-icons align-middle">phone</span>
      07-123-4567
      </p>
      <p class="text-sm">Copyright © 2020 PetPet. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          title: 'PETPET',
          titleClass: 'logo mb-6',
          links: ['關於我們', '幫助中心', '使用條款', '隱私政策'],
          linkClass: 'inline-block py-3',
        },
        {
          title: '寵物服務',
          titleClass: 'h6 mb-9',
          links: ['寵物寄宿', '寵物到府保姆', '寵物美容洗澡', '寵物行為訓練'],
          linkClass: 'inline-block py-3',
        },
        {
          title: '加入我們',
          titleClass: 'h6 mb-9',
          links: ['成為寵物保姆', '加入寵物計程車', '專屬 APP 下載', '相關合約條款'],
          linkClass: 'inline-block py-3',
        },
        {
          title: '聯繫我們',
          titleClass: 'h6 mb-9',
          links: ['petpet@petmail.com'],
          linkClass: 'inline-block py-3',
        },
      ],
    };
  },
};
</script>
