<script lang="ts">
import InputApp from "@/components/form/input/InputApp.vue";
import InputRangeApp from "@/components/form/range/InputRangeApp.vue";
import SubmitApp from "@/components/form/button/SubmitApp.vue";
import RadioApp from "@/components/form/radio/RadioApp.vue";
import { useFilterStore } from "@/stores/filter/filterStore.ts";
import { computed } from "@vue/runtime-core";
import { Sexo, Status } from "@/models/filterModel.ts";

export default {
  components: {
    RadioApp,
    InputApp,
    InputRangeApp,
    SubmitApp,
  },
  data() {
    const store = useFilterStore();
    const sexOptions = [
      { name: "Masculino", value: 1 },
      { name: "Feminino", value: 2 },
    ];
    const stateOptions = [
      { name: "Desaparecido", value: 1 },
      { name: "Localizado", value: 2 },
    ];

    const sexo = computed({
      get: () => Sexo[store.filter.sexo],
      set: (val) => (store.filter.sexo = Sexo[val]),
    });
    const status = computed({
      get: () => parseInt(Status[store.filter.status]),
      set: (val) => (store.filter.status = Status[val]),
    });

    return {
      sexo,
      store,
      status,
      sexOptions,
      stateOptions,
      idadeInicial: 0,
      idadeFinal: 0,
    };
  },
  mounted() {
    if (!this.store.hasListAssembled()) {
      this.onSubmit();
    }
  },
  methods: {
    onSubmit() {
      this.store.search();
    },
  },
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="raw background-color-white border-default pa-10 ma-auto"
  >
    <div>
      <h2 class="text-accent">Filtro</h2>
    </div>

    <div class="mb-5">
      <RadioApp v-model="sexo" label="Sexo:" :options="sexOptions" />
    </div>
    <div class="mb-5">
      <InputApp v-model="store.filter.nome" label="Nome:" />
    </div>

    <div class="mb-5">
      <InputRangeApp
        v-model="store.filter.faixaIdadeInicial"
        label="Idade Minima:"
      />
    </div>

    <div class="mb-5">
      <InputRangeApp
        v-model="store.filter.faixaIdadeFinal"
        label="Idade máxima:"
      />
    </div>

    <div class="mb-5">
      <RadioApp v-model="status" label="Status:" :options="stateOptions" />
    </div>

    <div class="mt-5">
      <SubmitApp label="Pesquisar" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  height: min-content;
  width: 90%;
  min-width: 213px;
}
div {
  width: 100%;
}
</style>
