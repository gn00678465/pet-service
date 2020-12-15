<template>
  <div>
    <div class="relative inline-block text-left">
      <div>
        <slot name="button">
          <button type="button" class="navbar__link text-lg sm:text-base"
          @click.prevent="isOpen = !isOpen">
          Hi, Joanne<span class="material-icons align-middle">arrow_drop_down</span>
        </button>
        </slot>
      </div>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-48
          bg-white border border-gray-300 z-40">
          <div class="py-2">
            <a href="#" class="block px-5 py-1 text-primary
              hover:bg-gray-100 hover:text-gray-900">會員資料</a>
            <a href="#" class="block px-5 py-1 text-primary
              hover:bg-gray-100 hover:text-gray-900">預約查詢</a>
            <a href="#" class="block px-5 py-1 text-primary
              hover:bg-gray-100 hover:text-gray-900">歷史預約</a>
            <div class="border-t border-gray-300">
              <a href="#" class="block px-5 py-2 text-orange-400
              hover:bg-gray-100 hover:text-gray-900">切換保母帳號</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>

<style scoped>
.w-48 {
  width: 192px;
}
</style>
