<template>
  <ValidationObserver tag="form" class="w-full sm:mb-10">
    <inputComponent class="mb-5 sm:w-2/3"
      label="毛孩姓名"
      id="petName"
      type="text"
      placeholder="請輸入毛孩姓名"
      rules="required"
      v-on="$listeners"
    />
    <inputComponent class="mb-5 sm:w-2/3"
      label="飼主姓名"
      id="name"
      type="text"
      placeholder="請輸入飼主姓名"
      rules="required"
      v-on="$listeners"
    />
    <inputComponent class="mb-5 sm:w-2/3"
      label="Email"
      id="email"
      type="email"
      placeholder="example@gmail.com"
      rules="required|email"
      v-on="$listeners"
    />
    <inputComponent class="mb-5 sm:w-2/3"
      label="聯絡電話"
      id="tel"
      type="tel"
      placeholder="0912345678"
      rules="required|max:10"
      v-on="$listeners"
    />
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import inputComponent from '../Input.vue';

export default {
  components: {
    inputComponent,
    ValidationObserver,
  },
};
</script>
