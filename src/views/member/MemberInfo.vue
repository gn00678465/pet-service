<template>
  <div class="h-custom container text-primary flex items-center justify-center">
    <div class="row flex-grow">
      <div class="col-12 mb-10 lg:col-11 lg:offset-1">
        <h2 class="h3 align-middle">會員資料<span class="material-icons ml-2">create</span>
        </h2>
      </div>
      <div class="col-12 mb-15 sm:col-6 sm:mb-0 lg:col-5 lg:offset-1">
        <div class="card">
          <div class="card__header">
            <img src="../../assets/images/person-5.png" alt=""
            class="mr-4 member-photo inline-block">
            <p class="text-lg font-medium inline-block">Joanne</p>
          </div>
          <div class="card__body pt-9 px-0 pb-0">
            <div class="row">
              <div class="col-4">
                <ul class="space-y-5 text-black">
                  <li>電子信箱</li>
                  <li>聯絡電話</li>
                  <li>性別</li>
                  <li>聯絡地址</li>
                </ul>
              </div>
              <div class="col-8">
                <ul class="space-y-5">
                  <li>cycample@gmail.com</li>
                  <li>0912-345-789</li>
                  <li>女</li>
                  <li>高雄市鹽埕區七賢三路123號</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 sm:col-6">
        <h3 class="h5 mb-9">
          Hi, Joanne<br />喜歡我們提供的服務嗎？<br />現在你也可以成為寵物保姆囉
        </h3>
        <button class="btn btn-primary py-2 text-lg w-full lg:w-1/2">成為寵物保姆</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-custom {
  height: calc(100vh - 65px);
}
.member-photo {
  width: 75px;
  height: 75px;
}
@screen sm {
  .member-photo {
    width: 95px;
    height: 95px;
  }
}
</style>
