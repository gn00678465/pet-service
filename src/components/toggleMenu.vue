<template>
  <button :style="rootStyle" @click="toggleClass"
  class="toggle" :class="{active: isShow}">
    <span class="bar"></span>
  </button>
</template>

<script>
export default {
  props: {
    boxWidth: {
      type: Number,
      default: 30,
    },
    barColor: {
      type: String,
      default: '#F8B52E',
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.emitState();
  },
  methods: {
    toggleClass() {
      this.isShow = !this.isShow;
    },
    emitState() {
      this.$emit('update:toggle', this.isShow);
    },
  },
  watch: {
    isShow() {
      this.emitState();
    },
  },
  computed: {
    rootStyle() {
      return {
        '--boxWidth': `${this.boxWidth}px`,
        '--barColor': this.barColor,
      };
    },
  },
};
</script>

<style scoped>
.toggle {
  /* display: block; */
  width: var(--boxWidth);
  height: var(--boxWidth);
  outline: none;
}

.bar {
  position: relative;
  display: block;
}

.bar:before,
.bar:after {
  content: "";
  position: absolute;
  left: 0;
}

.bar:before {
  top: -11px;
}

.bar:after {
  top: 11px;
}

.bar,
.bar:before,
.bar:after {
  width: 100%;
  height: 5px;
  background-color: var(--barColor);
  transition: all 0.3s;
  backface-visibility: hidden;
  border-radius: 2px;
}

/* on activation */
.toggle.active span {
  background-color: transparent;
}
.toggle.active span:before {
  transform: rotate(45deg) translate(7px, 8px);
}
.toggle.active span:after {
  transform: rotate(-45deg) translate(7px, -8px);
}
</style>
