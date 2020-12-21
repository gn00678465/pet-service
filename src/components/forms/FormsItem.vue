<template>
  <ValidationObserver tag="form">
    <!-- checkbox -->
    <ValidationProvider class="flex justify-between mb-6 flex-wrap" tag="div"
      rules="required|min:1" v-slot="{ errors }">
      <template v-for="(checkbox) of checkboxes">
        <input type="checkbox" :id="checkbox.val" class="hidden" :key="`${checkbox.val}-input`"
          name="select" :value="checkbox.val" v-model="item">
        <label :for="checkbox.val" class="bg-white shadow card text-gray-600 border-2
          border-transparent p-1 cursor-pointer" :key="checkbox.val">
          <div class="flex flex-col items-center justify-center absolute inset-0">
            <span class="material-icons mb-1 sm:mb-2 sm:text-4xl">{{ checkbox.icon  }}</span>
            <p class="sm:text-lg">{{ checkbox.key }}</p>
          </div>
          </label>
      </template>
      <p class="w-full text-danger">{{ errors[0] }}</p>
    </ValidationProvider>
    <!-- time -->
    <datePicker :value="$attrs.range" v-on="$listeners" is-range :input-debounce="1000"
      :min-date='new Date()'
    >
      <template v-slot="{ inputValue, inputEvents }">
        <label for="selectDate" class="text-dark-900 mb-1">選擇日期</label>
        <div class="flex flex-wrap mb-5 sm:flex-nowrap">
          <div class="flex items-center mb-2 sm:mb-0">
            <input
              id="selectDate"
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
    <!-- select -->
    <div class="flex justify-between mb-10 sm:mb-20 sm:justify-start">
      <selectComponent class="w-20 sm:mr-6"
        label="毛孩數量"
        id="count"
        rules="required|is_not:''"
        :options="5"
        v-on="$listeners"
      />
      <ValidationProvider tag="div" class="form-group w-20 sm:w-30 sm:mr-8"
        rules="required|is_not:''" v-slot="{ errors, classes }">
        <label for="species">您的毛孩是</label>
        <select class="custom-select py-2 px-4"
          name="species" id="species"
          :class="classes"
          :value="$attrs.species" @change="$emit('update:species', $event.target.value)"
        >
          <option value="" disabled>請選擇..</option>
          <option value="dog">狗</option>
          <option value="cat">貓</option>
        </select>
        <span class="text-danger mt-1">{{ errors[0] }}</span>
        </ValidationProvider>
      <selectComponent class="w-20 sm:w-32"
        label="年齡"
        id="petAge"
        unit="歲"
        rules="required|is_not:''"
        :options="10"
        v-on="$listeners"
      />
    </div>
  </ValidationObserver>
</template>

<script>
import datePicker from 'v-calendar/lib/components/date-picker.umd';
import { ValidationObserver } from 'vee-validate';
import selectComponent from '../Select.vue';

export default {
  components: {
    datePicker,
    selectComponent,
    ValidationObserver,
  },
  props: {
    checkboxes: {
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
    item: [],
  }),
  watch: {
    item() {
      this.$emit('update:item', this.item);
    },
  },
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
