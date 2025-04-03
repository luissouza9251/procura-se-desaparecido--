<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["label", "to"],
  methods: {
    onSubmit() {
      if (!this.to) return;
      this.$router.push(this.to);
    },
  },
});
</script>

<template>
  <div class="form-group">
    <input :type="to ? 'button' : 'submit'" :value="label" @click="onSubmit" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  input {
    width: 100%;
    min-width: max-content;
    border: solid 1px $primary;
    background-color: white;
    border-radius: 10px;
    min-height: 40px;
    padding: 10px;
  }
  input:hover {
    cursor: pointer;
    background-color: $primary;
    color: $accent;
    transition: 0.1s;
    //opacity: 1;
  }
  input:active {
    color: $accent;
    background-color: $secondary;
    color: $primary;
  }
}
</style>
