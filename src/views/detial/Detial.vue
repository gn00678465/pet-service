<template>
  <div class="container sm:pt-15 lg:pt-20">
    <div class="row">
      <div class="order-1 col-12 sm:col-5 sm:order-2 lg:col-6">
        <router-view name="detial_img"/>
      </div>
      <div class="order-2 col-12 sm:col-7 sm:order-1 lg:col-6">
        <router-view name="detial_info"/>
      </div>
      <div class="order-3 col-12 lg:col-6 lg:offset-6">
        <router-view name="detial_about"/>
      </div>
      <div class="order-3 col-12 lg:col-6 lg:offset-6">
        <router-view name="comment"/>
      </div>
      <div class="order-3 col-12 lg:col-6 lg:offset-6">
        <router-view name="service"/>
      </div>
    </div>
  </div>
</template>
