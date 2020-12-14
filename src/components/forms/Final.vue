<template>
  <div class="container px-6 py-custom">
    <div class="row">
      <div class="col-12 text-center sm:col-8 sm:offset-2 lg:col-6 lg:offset-3">
        <span class="material-icons mb-3 text-light text-icon">pets</span>
        <h3 class="h5 text-primary mb-3">預約成功!</h3>
        <p class=" text-primary mb-4">您可以在會員頁找到您的預約資料並修改或取消預約。</p>
        <router-link to="/" class="btn btn-primary col-12 sm:col-10" tag="button">
        前往會員頁</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-icon {
  font-size: 80px;
}

.py-custom {
  padding-top: 209px;
  padding-bottom: 209px;
}

@screen sm {
  .py-custom {
    padding-top: 294px;
    padding-bottom: 294px;
  }
}

@screen lg {
  .py-custom {
    padding-top: 164px;
    padding-bottom: 164px;
  }
}
</style>
