<template>
  <footer class="container pt-2 pb-6 md:pt-15 md:pb-8 text-primary">
    <h2 class="logo md:hidden">PETPET</h2>
    <div class="hidden md:grid grid-cols-4 gap-7 items-baseline mb-24">
      <ul v-for="items of footerLinks" :key="items.title">
        <li>
          <h4 :class="items.titleClass">{{ items.title }}</h4>
        </li>
        <template v-for="link of items.links" >
          <li :key="link.link">
            <router-link class="inline-block py-3
              hover:font-bold transition-all" :to="link.path">{{ link.link }}</router-link>
          </li>
        </template>
      </ul>
      <ul>
        <li>
          <h4 class="h6 mb-9">聯繫我們</h4>
          <a href="mailto:petpet@petmail.com" class="inline-block py-3
            hover:font-bold transition-all">petpet@petmail.com</a>
        </li>
      </ul>
    </div>
    <div class="flex justify-end md:justify-between items-center">
      <a href="tel:07-123-4567" class="hidden md:inline-block text-lg font-medium">
        <span class="material-icons align-middle">phone</span>
        07-123-4567
      </a>
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
          links: [
            {
              link: '關於我們',
              path: '/',
            },
            {
              link: '幫助中心',
              path: '/',
            },
            {
              link: '使用條款',
              path: '/',
            },
            {
              link: '隱私政策',
              path: '/',
            },
          ],
        },
        {
          title: '寵物服務',
          titleClass: 'h6 mb-9',
          links: [
            {
              link: '寵物寄宿',
              path: '/homestay',
            },
            {
              link: '寵物到府保姆',
              path: '/',
            },
            {
              link: '寵物美容洗澡',
              path: '/',
            },
            {
              link: '寵物行為訓練',
              path: '/',
            },
          ],
        },
        {
          title: '加入我們',
          titleClass: 'h6 mb-9',
          links: [
            {
              link: '成為寵物保姆',
              path: '/',
            },
            {
              link: '加入寵物計程車',
              path: '/',
            },
            {
              link: '專屬 APP 下載',
              path: '/',
            },
            {
              link: '相關合約條款',
              path: '/',
            },
          ],
        },
      ],
    };
  },
};
</script>
