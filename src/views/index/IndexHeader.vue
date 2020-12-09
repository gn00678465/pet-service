<template>
  <header class="w-full relative">
    <div class="w-full py-0 sm:text-center sm:pt-26">
      <img src="./../../assets/images/index-1.png"
        class="header-bg-img object-cover object-center inline-block" alt="">
    </div>
    <div class="container pb-12 pt-3 sm:pt-6 sm:pb-26">
      <div class="row items-center no-gutters">
        <div class="col-12 sm:col-7 sm:offset-3">
          <h2 class="mb-1 text-2xl text-primary font-bold text-center
            sm:text-3xl sm:mb-2 sm:text-left">寵物服務，盡在 PETPET</h2>
          <p class="text-lg text-primary font-medium text-center mb-3
            sm:mb-5 sm:text-left sm:text-lg">
            當您的毛孩有需要時，<span class="lg:hidden"><br/></span>幫您找到最合適的服務者！
          </p>
          <form @submit.prevent action="">
            <template v-for="select of selectLists">
              <select :key="select.id" :name="select.name" :id="select.id"
                class="form-control text-gray-500 mb-3">
                <option selected disabled>{{ select.id }}</option>
                <option :value="option" v-for="option of select.options" :key="option">
                  {{ option }}</option>
              </select>
            </template>
            <input type="submit" value="搜尋" class="btn btn-primary w-full">
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
      },
      {
        id: '服務',
        name: 'service',
        options: ['寵物寄宿', '寵物美容', '到府照顧', '遛狗保姆', '行為訓練'],
      },
      {
        id: '地區',
        name: 'area',
        options: ['三民區', '鹽埕區'],
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

@screen lg {
  .header-bg-img {
    width: 100%;
    height: 736px;
  }
}
</style>
