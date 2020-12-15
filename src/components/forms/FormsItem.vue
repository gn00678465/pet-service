<template>
  <div>
    <!-- radio -->
    <div class="flex justify-between mb-6">
      <template v-for="(radio) of radios">
        <input type="radio" :id="radio.val" class="hidden" :key="`${radio.val}-input`"
          name="select" :value="radio.val" @change="$emit('update:item', $event.target.value)">
        <label :for="radio.val" class="bg-white shadow card text-gray-600 border-2
          border-transparent p-1 cursor-pointer" :key="radio.val">
          <div class="flex flex-col items-center justify-center absolute inset-0">
            <span class="material-icons mb-1 sm:mb-2 sm:text-4xl">{{ radio.icon  }}</span>
            <p class="sm:text-lg">{{ radio.key }}</p>
          </div>
          </label>
      </template>
    </div>
    <!-- time -->
    <datePicker :value="$attrs.range" v-on="$listeners" is-range>
      <template v-slot="{ inputValue, inputEvents }">
        <p class="text-dark-900 mb-1">選擇日期</p>
        <div class="flex flex-wrap mb-5 sm:flex-nowrap">
          <div class="flex items-center mb-2 sm:mb-0">
            <input
              :value="inputValue.start"
              v-on="inputEvents.start"
              class="form-control py-2 pl-4 flex-1"
          />
          <span class="ml-2 mr-8 sm:mx-2">至</span>
          </div>
          <div class="flex items-center">
            <input
              :value="inputValue.end"
              v-on="inputEvents.end"
              class="form-control py-2 pl-4 flex-1"
            />
            <span class="ml-2 sm:mr-8">共 1 晚</span>
          </div>
        </div>
      </template>
    </datePicker>
    <div class="flex justify-between mb-10 sm:mb-20 sm:justify-start">
      <div class="form-group w-20 sm:mr-6">
        <label for="" class="text-dark-900">毛孩數量</label>
        <select name="" id="" class="custom-select py-2 px-4"
          :value="$attrs.count" @change="$emit('update:count', $event.target.value * 1)">
          <option :value="num" v-for="num of 10" :key="num">
            {{ num }}隻
          </option>
        </select>
      </div>
      <div class="form-group w-20 sm:w-30 sm:mr-8">
        <label for="" class="text-dark-900">您的毛孩是</label>
        <select name="" id="" class="custom-select py-2 px-4"
          :value="$attrs.species" @change="$emit('update:species', $event.target.value)">
          <option value="dog">狗</option>
          <option value="cat">貓</option>
        </select>
      </div>
      <div class="form-group w-20 sm:w-32">
        <label for="" class="text-dark-900">年齡</label>
        <select name="" id="" class="custom-select py-2 px-4"
          :value="$attrs.petAge" @change="$emit('update:petAge', $event.target.value * 1)">
          <option :value="num" v-for="num of 15" :key="num">
            {{ num }}歲
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
  components: {
    datePicker,
  },
  props: {
    radios: {
      type: Array,
      default: () => [
        {
          key: '寄宿',
          val: 'homestay',
          icon: 'house',
        },
        {
          key: '美容',
          val: 'beautiful',
          icon: 'soap',
        },
        {
          key: '到府保姆',
          val: 'roofing',
          icon: 'roofing',
        },
        {
          key: '遛狗保姆',
          val: 'walk',
          icon: 'directions_walk',
        },
      ],
    },
  },
  data: () => ({
    range: {},
  }),
};
</script>

<style scoped>
.card {
  width: 72px;
  height: 72px;
}
@screen sm {
  .card {
    width: 128px;
    height: 128px;
  }
}
input.hidden:checked {
  + .card {
    @apply border-orange-400 !important;
    span {
      @apply text-light;
    }
    p {
      @apply text-primary;
    }
  }
}
</style>
