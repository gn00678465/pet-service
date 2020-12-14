<template>
  <div class="w-full sm:mb-10">
    <div class="form-group mb-5 sm:w-2/3">
      <label for="petName">毛孩姓名</label>
      <input id="petName" type="text" class="form-control py-2 px-4 font-light"
        :value="$attrs.petName" @change="$emit('update:petName', $event.target.value)"
        placeholder="請輸入毛孩姓名">
    </div>
    <div class="form-group mb-5 sm:w-2/3">
      <label for="name">飼主姓名</label>
      <input id="name" type="text" class="form-control py-2 px-4 font-light"
        :value="$attrs.name" @change="$emit('update:name', $event.target.value)"
        placeholder="請輸入飼主姓名">
    </div>
    <div class="form-group mb-5 sm:w-2/3">
      <label for="email">Email</label>
      <input id="email" type="email" class="form-control py-2 px-4 font-light"
        :value="$attrs.email" @change="$emit('update:email', $event.target.value)"
        placeholder="example@gmail.com">
    </div>
    <div class="form-group mb-5 sm:w-2/3">
      <label for="tel">聯絡電話</label>
      <input id="tel" type="tel" class="form-control py-2 px-4 font-light"
        :value="$attrs.tel" @change="$emit('update:tel', $event.target.value * 1)"
        placeholder="0912-345-678">
    </div>
  </div>
</template>
