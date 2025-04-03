<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputRangeApp",

  props: ["modelValue", "label"],
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
    name: {
      get() {
        return `lb${this.label}`;
      },
      set(value: string) {
        return value;
      },
    },
  },
  data() {
    return {};
  },
});
</script>

<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      v-model="value"
      type="number"
      :id="name"
      :name="name"
      min="0"
      max="100"
    />
    <input v-model="value" type="range" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  label {
    width: 100%;
  }

  input[type="number"] {
    width: 42%;
    //min-width: max-content;
    border: solid 1px silver;
    border-radius: 10px;
    min-height: 40px;
    padding: 10px;
  }

  input[type="range"] {
    width: calc(58% - 0.4em);
    margin: auto 0.2em;
    -webkit-appearance: none;
    background: white;
    border: solid 1px $secondary;
    border-radius: 10px;
    height: 10px;
    cursor: pointer;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      background: $primary;
      border-radius: 100%;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: $primary;
      border-radius: 100%;
      cursor: pointer;
    }
  }
}
</style>
