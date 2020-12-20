<template>
  <transition name="fade"
  >
    <div class="modal" v-show="visible" v-esc-modal="closeModal" ref="modal"
      :class="{'modal--active': visible}">
      <div class="modal__dialog modal__dialog__center expand-navbar" @click.self="closeModal(true)">
        <div class="modal__content lg:modal__content__lg">
          <slot name="modal-header"></slot>
          <slot name="modal-body"></slot>
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
  }),
  methods: {
    closeModal(val = true) {
      if (val) {
        this.$emit('update:visible', false);
      }
    },
    hiddenScrollBar(val) {
      document.body.style.overflow = val ? 'hidden' : 'auto';
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(window.navigator.userAgent)) {
        document.body.style.paddingRight = val ? '17px' : '0';
        this.$el.style.paddingRight = val ? '17px' : '0';
      }
    },
  },
  watch: {
    visible() {
      this.hiddenScrollBar(this.visible);
    },
  },
  directives: {
    'esc-modal': {
      bind(el, binding) {
        const eel = el;
        const useEffect = (event) => {
          if (event.keyCode === 27) {
            binding.value(event);
          }
        };
        eel.vueKeydownEventHandler = useEffect;
        document.addEventListener('keydown', useEffect);
      },
      unbind(el) {
        document.removeEventListener('keydown', el.vueKeydownEventHandler);
      },
    },
  },
};
</script>

<style scoped>
.modal {
  @apply fixed inset-0 overflow-x-hidden overflow-y-auto bg-black bg-opacity-40;
  &__dialog {
    @apply relative z-20 w-auto min-h-screen;
    @apply transition-all duration-500 transform translate-x-0 -translate-y-1/4 opacity-0;
    padding-left: 15px;
    padding-right: 15px;
    &__center {
      @apply flex items-center;
    }
  }
  &__content {
    @apply relative z-20 rounded bg-white mx-auto flex flex-col w-full;
    max-width: 690px;
  }
  &__body, &__header, &__footer {
    @apply p-3;
  }
}
@responsive {
  .modal__content__lg {
    max-width: 920px;
  }
}
.modal--active {
  .modal {
    &__dialog {
      @apply transform translate-x-0 translate-y-0 opacity-100;
    }
  }
}
</style>
