<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderBar from "@/components/header/HeaderBar.vue";
</script>

<template>
  <HeaderBar />
  <RouterView />
</template>

<style lang="scss">
@import "@/styles/app.scss";
</style>
