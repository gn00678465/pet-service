<template>
  <ValidationProvider tag="div" class="form-group"
    :rules="rules" v-slot="{ errors, classes }">
    <label :for="id" v-if="label !== ''">{{ label }}</label>
    <select v-model="value" class="custom-select py-2 px-4"
      :name="id"
      :class="classes"
      :id="id"
      @change="emitHandler"
    >
      <option value="" disabled>請選擇..</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}{{ unit }}
      </option>
    </select>
    <span>{{ errors[0] }}</span>
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
    options: {
      type: [Array, Number],
      required: true,
    },
    unit: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    value: '',
  }),
  methods: {
    emitHandler() {
      if (this.inputting) return;
      this.$emit(`update:${this.id}`, this.value);
    },
  },
};
</script>
