<template>
  <nav class="navbar navbar__expand sticky-top z-l bg-white shadow" ref="navbar">
    <div class="container flex items-center flex-wrap justify-center sm:justify-start">
      <router-link to="/" class="navbar__brand"><h1 class="logo">PETPET</h1></router-link>
      <toggleMenu class="absolute right-5 top-4 sm:hidden" :toggle.sync="isShow" />
      <div class="navbar__collapse font-medium sm:-mr-3 sm:font-normal sm:overflow-visible"
        :class="{'navbar__collapse--show': isShow}">
        <ul class="navbar__list divide-y divide-gray-300 border-b border-gray-300
        text-primary justify-end sm:divide-y-0 sm:border-0">
          <li class="navbar__item sm:my-2">
            <router-link to="/" class="navbar__link text-lg sm:text-base">預約服務</router-link>
          </li>
          <li class="navbar__item sm:my-2">
            <router-link to="/" class="navbar__link text-lg sm:text-base">成為寵物保姆</router-link>
          </li>
          <li class="navbar__item sm:my-2">
            <template v-if="!auth">
              <router-link to="/login" class="navbar__link text-lg sm:text-base">登入</router-link>
            </template>
            <template v-else>
              <dropdown />
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import toggleMenu from './ToggleMenu.vue';
import dropdown from './Dropdown.vue';

export default {
  name: 'navbar',
  components: {
    toggleMenu,
    dropdown,
  },
  props: {
    auth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    const { height } = this.$refs.navbar.getBoundingClientRect();
    document.documentElement.style.setProperty('--navbar-height', `${height}px`);
  },
};
</script>

<style scoped>
  .navbar{
    @apply flex items-center relative;
    &__brand {
      @apply inline-block py-1;
    }
    &__toggler {
      @apply inline-block py-1;
      @screen sm {
        @apply hidden;
      }
    }
    &__collapse {
      @apply flex-grow transition-all duration-300 delay-75 max-h-0 overflow-hidden;
      flex-basis: 100%;
      &--show {
        max-height: 99em;
      }
      @screen sm {
        flex-basis: auto;
        max-height: initial;
      }
    }
    &__list {
      @apply block;
      @screen sm {
        @apply flex items-center;
      }
    }
    &__link {
      @apply p-3 block text-center hover:bg-gray-200;
      @screen sm {
        @apply rounded;
      }
    }
  }
  .navbar__expand {
    .container {
      @apply px-0;
      @screen md {
        padding: 0 39px;
      }
      @screen lg {
        padding: 0 15px;
      }
    }
  }
  .sticky-top {
    @apply sticky top-0;
  }
  .fixed-top {
    @apply fixed left-0 right-0;
  }
</style>
