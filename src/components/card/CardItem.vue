<script lang="ts">
import { defineComponent } from "vue";
import LoadingRound from "../preloader/LoadingRound.vue";
import { usePersonStore } from "@/stores/person/personStore.ts";

export default defineComponent({
  props: ["person"],

  components: {
    LoadingRound,
  },
  data() {
    const personStore = usePersonStore();
    return { personStore, isLoading: true };
  },
  computed: {
    idade: function () {
      return `${this.person.idade} anos,`;
    },
    data: function () {
      return `Data: ${this.person.dtDesaparecimento},`;
    },
    urlFoto: function () {
      return this.person.urlFoto ?? "src/assets/sem-foto.svg";
    },
  },
  methods: {
    onImgLoad() {
      this.isLoading = false;
    },
    viewPerson() {
      this.personStore.setPerson(this.person);
      this.$router.push("person");
    },
  },
});
</script>

<template>
  <div class="card border-default" @click="viewPerson()">
    <LoadingRound v-if="isLoading" />
    <div class="container-img">
      <img :src="urlFoto" :alt="person.nome" @load="onImgLoad" />
    </div>
    <div class="px-5">
      <h4>{{ person.nome }}</h4>
    </div>
    <div class="px-5">
      <p>{{ idade }} {{ person.sexo }}</p>
    </div>
    <div class="px-5">
      <p>{{ person.ultimaOcorrencia.localDesaparecimentoConcat }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  width: 90%;
}
.card {
  min-width: 249px;
  max-width: 500px;
  height: 490px;
  background-color: white;
  .container-img {
    overflow: hidden;
    width: 100%;
    height: 79%;
    position: relative;
    img {
      min-width: 100%;
      min-height: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
@media (max-width: $xs) {
  .card {
    .container-img {
      height: 72%;
    }
  }
}
p {
  font-size: 0.8em;
}
</style>
