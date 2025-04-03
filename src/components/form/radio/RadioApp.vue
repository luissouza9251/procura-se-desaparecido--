<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioApp",

  props: ["modelValue", "options", "label"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value: number) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="option.name"
        :name="option.name"
        :value="option.value"
        v-model="value"
      />
      <label :for="option.name">{{ option.name }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  label {
    width: 100%;
  }
}
</style>
