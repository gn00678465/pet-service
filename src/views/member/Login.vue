<template>
  <div>
    <navbar />
    <header class="w-full relative sm:pt-31 lg:pt-0">
      <div class="w-full py-0 sm:text-center sm:pt-26 hidden lg:block
        lg:text-left lg:pt-0">
        <img src="./../../assets/images/index-1.png"
          class="header-bg-img object-cover object-center inline-block" alt="">
      </div>
      <div class="w-full relative
        lg:absolute top-1/2 lg:transform lg:-translate-y-1/2 left-0">
        <div class="container pt-15 sm:pt-6 lg:py-0">
        <div class="row">
          <div class="col-12 sm:col-8 sm:offset-2 lg:col-7 lg:offset-5">
            <h2 class="h3 text-primary mb-6 sm:mb-15">登入</h2>
            <form action="" method="POST" @submit.prevent="submitHandler">
              <div class="form-group mb-12">
                <label for="email" class="mb-2">電子信箱</label>
                <input id="email" type="email" class="form-control" placeholder="example@gmail.com">
              </div>
              <div class="form-group mb-1">
                <input type="password" class="form-control" placeholder="請輸入密碼">
              </div>
              <a href="#" class="text-gray-500 text-sm mb-4 block">忘記密碼</a>
              <div class="form-inline mb-7">
                <input type="checkbox" class="mr-1" id="remember">
                <label for="remember">記住我的帳號</label>
              </div>
              <div class="flex flex-wrap mb-10 lg:space-x-2">
                <button class="btn w-full flex-grow border-gray-400 py-1 mb-3 lg:mb-0 lg:w-auto"
                  @click.prevent>
                  <p class="font-roboto text-gray-500 align-middle">
                    <img src="../../assets/images/facebook.svg" alt="" class="inline-block">
                    Facebook</p>
                </button>
                <button class="btn w-full flex-grow border-gray-400 py-1 lg:w-auto"
                  @click.prevent>
                  <p class="font-roboto text-gray-500 align-middle">
                    <img src="../../assets/images/google.svg" alt="" class="inline-block">
                    Google</p>
                </button>
              </div>
              <input type="submit" value="登入"
                class="btn btn-primary py-2 w-full text-lg mb-2">
                <a href="#" class="text-orange-400">還沒註冊嗎？</a>
            </form>
          </div>
        </div>
      </div>
      </div>
  </header>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue';
import store from '@/assets/store';

export default {
  components: {
    navbar,
  },
  data: () => ({
    auth: store.auth,
  }),
  methods: {
    submitHandler() {
      this.$router.push('/member');
    },
  },
};
</script>

<style scoped>
@screen lg {
  .header-bg-img {
    height: calc(100vh - var(--navbar-height));
    width: 41vw;
  }
}
</style>
