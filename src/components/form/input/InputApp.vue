<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputApps",
  props: ["modelValue", "label", "required"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value: unknown) {
        this.$emit("update:modelValue", value);
      },
    },
    name: {
      get() {
        return `lb${this.label}`;
      },
      set(value: string) {
        return value;
      },
    },
  },
});
</script>

<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      v-model="value"
      type="text"
      :id="name"
      :name="name"
      :required="required"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  label,
  input {
    width: 100%;
  }

  input {
    border: solid 1px $secondary;
    border-radius: 10px;
    min-height: 40px;
    padding: 10px;
  }
}
</style>
