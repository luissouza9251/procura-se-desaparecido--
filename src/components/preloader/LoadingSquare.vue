<template>
  <div class="loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  margin: 0 auto;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: black;
  animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loading div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loading div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loading {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
