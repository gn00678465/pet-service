<template>
  <ValidationObserver tag="form" class="w-full mb-5 sm:mb-24 lg:mb-28">
    <ValidationProvider tag="div" rules=""
      class="form-group mb-5 sm:w-2/3">
      <label for="creadCard">信用卡帳號</label>
      <input id="creadCard" type="number" class="form-control py-2 px-4 font-light"
        placeholder="Xxxx-xxxx-xxxx-xxxx">
    </ValidationProvider>
    <ValidationProvider tag="div" rules=""
      class="form-group mb-5 sm:w-2/3">
      <label for="name">有效日期</label>
      <input id="name" type="date" class="form-control py-2 px-4 font-light"
        placeholder="(MM/YY)">
    </ValidationProvider>
    <ValidationProvider tag="div" rules=""
      class="form-group mb-5 sm:w-2/3">
      <label for="code">安全碼</label>
      <input id="code" type="password" class="form-control py-2 px-4 font-light"
        placeholder="***">
    </ValidationProvider>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
  },
};
</script>
