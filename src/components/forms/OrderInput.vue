<template>
  <div class="relative">
    <div class="flex flex-wrap py-5 px-6 sm:px-15 sm:pt-15 sm:pb-12 lg:px-8 lg:w-2/3">
      <steps class="mb-3 flex-grow sm:order-1 sm:mb-9 lg:mb-0" :steps="steps" :current="current" />
      <h3 class="h5 text-primary mb-3 flex-grow" :key="steps[current - 1]">
        {{ steps[current - 1] }}</h3>
      <div class="card flex-row mb-6 sm:mb-5 lg:absolute lg:flex-col lg:right-0 lg:top-0
        lg:w-1/3 lg:pt-15 lg:pb-12 lg:pr-8 lg:mb-0 lg:h-full">
        <img :src="info.image" alt=""
          class="card__img__left rounded object-cover sm:mr-4 lg:mr-0 lg:mb-2">
        <div class="card__body pr-0 py-0 text-primary flex flex-wrap content-center lg:p-0">
          <div class="sm:w-full sm:align-middle sm:mb-2">
            <h5 class="h6 sm:mr-2 sm:inline-block">{{ info.name }}</h5>
            <template v-for="num in info.rating">
              <span class="material-icons text-lg text-light mr-1" :key="num">star</span>
            </template>
          </div>
          <p class="flex">
            <span class="material-icons">location_on</span>
            <span>高雄市苓雅區、新興區、前鎮區</span>
          </p>
          <portal-target name="destination" class="lg:w-full lg:mt-6">
          </portal-target>
        </div>
      </div>
      <!-- component -->
        <transition name="fade" mode="out-in">
          <component :is="currentComponent"
            v-model="orderData.range"
            v-bind.sync="orderData"
            ref="form"
          />
        </transition>
      <!-- buttons -->
      <portal to="destination" :disabled="portal"
        class="flex-grow flex flex-wrap sm:justify-end sm:order-2">
        <button class="py-2 mb-1 btn text-orange-400 w-full sm:w-auto sm:mr-4 sm:mb-0
          lg:w-full lg:mb-1 lg:mr-0 visible"
          type="button"
          @click="prevHandler">返回</button>
        <button class="py-2 btn btn-primary w-full sm:w-1/2 lg:w-full"
          :type="current === 3 ? 'submit' : 'button'"
          @click="nextHandler">
        {{ current === 3 ? '送出預約' : '下一步' }}</button>
      </portal>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import steps from './Steps.vue';

export default {
  components: {
    steps,
    ValidationObserver,
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    steps: ['預約項目', '預約資料', '付款資訊'],
    current: 1,
    portal: true,
    windowWidth: window.innerWidth,
    orderData: {
      item: [],
      count: 1,
      range: {
        start: new Date(),
        end: new Date(),
      },
      species: '',
      petAge: 1,
      petName: '',
      name: '',
      email: '',
      tel: null,
    },
  }),
  mounted() {
    this.current = 1;
    this.windowWidthHandler();
    window.addEventListener('resize', this.windowWidthHandler);
  },
  methods: {
    nextHandler() {
      const validate = this.$refs.form.$children[0].validate();
      validate.then((success) => {
        if (success) {
          // 證成功後的行為包含 AJAX傳送、重製表單等等
          if (this.current < 3) {
            this.current += 1;
          } else if (this.current === 3) {
            console.log('submit');
            this.$emit('update:visible', false);
            this.current = 1;
          }
        }
      });
    },
    prevHandler() {
      if (this.current === 1) {
        this.$emit('update:visible', false);
      } else {
        this.current -= 1;
      }
    },
    windowWidthHandler() {
      if (window.innerWidth > 960) {
        this.portal = false;
      } else {
        this.portal = true;
      }
    },
  },
  computed: {
    currentComponent() {
      const formComponents = {
        formsItem: () => (import('./FormsItem.vue')),
        formsData: () => (import('./FormsData.vue')),
        formsInfo: () => (import('./FormsInfo.vue')),
      };
      return formComponents[Object.keys(formComponents)[this.current - 1]];
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowWidthHandler);
  },
};
</script>

<style scoped>
.card__img__left {
  width: 100px;
  height: 100px;
}

@screen sm {
  .card__img__left {
    width: 150px;
    height: 150px;
  }
}

@screen lg {
  .card__img__left {
    width: 282px;
    height: 282px;
  }
}
</style>
