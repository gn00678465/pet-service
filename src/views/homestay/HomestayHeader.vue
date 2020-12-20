<template>
  <header>
    <div class="container">
      <div class="row sm:py-15">
        <div class="col-12 order-1 lodge-header-height
          sm:col-7 sm:order-2 lg:col-8">
          <div class="lodge-header-img bg-cover bg-center bg-no-repeat w-full h-full
            absolute top-0 left-0 sm:relative">
          </div>
        </div>
        <div class="text-primary text-center py-3 col-12 order-2
          sm:col-5 sm:order-1 sm:text-left sm:flex flex-col justify-center lg:col-4">
          <h2 class="h4 mb-1 sm:text-4xl sm:mb-2 lg:mb-4">寵物寄宿</h2>
          <p class="text-lg font-medium sm:text-xl">給您的毛孩最舒適的環境</p>
        </div>
      </div>
    </div>
    <div class="bg-light border border-light py-4 mb-15 lg:mb-20">
      <div class="container">
        <div class="flex items-center flex-wrap">
          <select name="species" id="species" class="custom-select w-65 mr-2 py-2"
            v-model="homestayForm.species">
            <option value="" disabled selected>Select..</option>
            <option value="dog">犬</option>
            <option value="cat">貓</option>
          </select>
          <select name="area" id="area" class="custom-select w-160 mr-2 py-2"
            v-model="homestayForm.area">
            <option value="" disabled selected>Select..</option>
            <option value="kaohsiung">高雄市</option>
            <option value="taipei">台北市</option>
          </select>
          <datePicker v-model="range" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="row items-center mt-2 md:mt-0 sm:flex-nowrap sm:mx-0 sm:space-x-2">
                <div class="col-6 sm:px-0 sm:w-160">
                  <input
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                  class="form-control py-2 text-gray-500"
                />
                </div>
                <span class="hidden sm:inline-block text-dark-900">至</span>
                <div class="col-6 sm:px-0 sm:w-160">
                  <input
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                  class="form-control py-2 text-gray-500"
                />
                </div>
              </div>
            </template>
          </datePicker>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import datePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
  components: {
    datePicker,
  },
  data: () => ({
    homestayForm: {
      species: '',
      area: '',
    },
    range: {
      start: new Date(),
      end: new Date(),
    },
  }),
};
</script>

<style scoped>
.lodge-header-img {
  background-image: url('./../../../public/images/homestay-1.png');
}
.lodge-header-height {
  height: 352px;
}
@screen sm {
  .lodge-header-height {
    height: 315px;
  }
}

.w-65 {
  width: 65px;
}
@responsive {
  .w-160 {
    width: 160px;
  }
}
</style>
