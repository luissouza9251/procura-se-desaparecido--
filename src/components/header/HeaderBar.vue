<script lang="ts">
import { defineComponent } from "vue";
import LogoSVG from "@/assets/logo.svg";

export default defineComponent({
  components: {
    LogoSVG,
  },
});
</script>

<template>
  <header class="container nav-bar">
    <div class="row">
      <LogoSVG class="ma-10" />
      <h1 class="text-accent my-6">Procura-se pessoa desaparecida</h1>
    </div>
    <hr />
    <nav class="row align-content-flex-end ml-5">
      <div class="ma-5">
        <RouterLink class="link" to="/">Home</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

header {
  min-height: 150px;
  background-color: $primary;
}

nav {
  height: 80%;
  .item {
    display: block;
    color: black;
  }
}

hr {
  margin: 0 auto;
  width: 95%;
  border: 0.01px solid $secondary;
}

.link {
  color: $accent;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    color: $secondary;
  }
}

svg {
  fill: $accent;
  max-height: 70px;
  width: max-content;
}
</style>
