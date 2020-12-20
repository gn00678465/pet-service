<template>
  <ValidationProvider tag="div" class="form-group"
    :rules="rules" v-slot="{ errors, classes }">
    <label :for="id" v-if="label !== ''">{{ label }}</label>
    <input v-model="value" class="form-control py-2 px-4 font-light"
      :name="type"
      :type="type"
      :class="classes"
      :id="id"
      :placeholder="placeholder"
      @compositionstart="inputting = true"
      @compositionend="inputting = false"
      @change="emitHandler"
    >
    <span class="text-danger mt-1">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    inputting: false,
    value: '',
  }),
  methods: {
    emitHandler() {
      if (this.inputting) return;
      this.$emit(`update:${this.id}`, this.type !== 'number' ? this.value : parseInt(this.value, 10));
    },
  },
};
</script>
