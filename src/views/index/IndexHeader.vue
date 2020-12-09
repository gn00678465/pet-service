<template>
  <header class="w-full relative pb-15 sm:pb-26 md:pb-20">
    <div class="w-full py-0 sm:text-center sm:pt-26
      md:text-left md:pt-0">
      <img src="./../../assets/images/index-1.png"
        class="header-bg-img object-cover object-center inline-block" alt="">
    </div>
    <div class="container pt-3 sm:pt-6 md:py-0 relative
      md:absolute top-1/2 md:transform md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
      <div class="row items-center md:no-gutters">
        <div class="col-12 sm:col-7 sm:offset-3 md:offset-5">
          <h2 class="mb-1 text-2xl text-primary font-bold text-center
            sm:text-3xl sm:mb-2 sm:text-left">寵物服務，盡在 PETPET</h2>
          <p class="text-lg text-primary font-medium text-center mb-3
            sm:mb-5 sm:text-left sm:text-lg">
            當您的毛孩有需要時，<span class="md:hidden"><br/></span>幫您找到最合適的服務者！
          </p>
          <form @submit.prevent action="post" class="row no-gutters">
            <template v-for="select of selectLists">
              <div class="col-12 mb-3 md:mb-0 md:col-auto"
                :key="select.id" :class="select.widthClass">
                <select :name="select.name" :id="select.id"
                class="custom-select text-gray-500 text-lg py-2">
                <option selected disabled>{{ select.id }}</option>
                <option :value="option" v-for="option of select.options" :key="option">
                  {{ option }}</option>
              </select>
              </div>
            </template>
            <div class="col-12 md:col-auto w-95">
              <input type="submit" value="搜尋" class="btn btn-primary text-lg py-2 w-full
                md:px-7 md:w-auto">
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    selectLists: [
      {
        id: '品種',
        name: 'variety',
        options: ['狗', '貓'],
        widthClass: 'w-120',
      },
      {
        id: '服務',
        name: 'service',
        options: ['寵物寄宿', '寵物美容', '到府照顧', '遛狗保姆', '行為訓練'],
        widthClass: 'w-210',
      },
      {
        id: '地區',
        name: 'area',
        options: ['三民區', '鹽埕區'],
        widthClass: 'w-210',
      },
    ],
  }),
};
</script>

<style scoped>
.header-bg-img {
  width: 100%;
  height: 352px;
}

@screen sm {
  .header-bg-img {
    width: 210px;
    height: 288px;
  }
}

@screen md {
  .header-bg-img {
    width: 41vw;
    height: 736px;
  }
  .w-120 {
    width: calc((24 / 127) * 100%);
  }
  .w-210 {
    width: calc((42 / 127) * 100%);
  }
  .w-95 {
    width: calc((15 / 127) * 100%);
  }
}
</style>
