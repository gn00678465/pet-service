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
