<script lang="ts">
import { usePersonStore } from "@/stores/person/personStore.ts";
import LoadingRound from "../components/preloader/LoadingRound.vue";
import SubmitApp from "../components/form/button/SubmitApp.vue";

export default {
  components: {
    LoadingRound,
    SubmitApp,
  },
  data() {
    const personStore = usePersonStore();
    if (!personStore.person?.nome) this.comeBack();
    return { personStore, isLoading: false };
  },
  computed: {
    person: function () {
      return this.personStore.person;
    },
    idade: function () {
      if (!this.person?.idade) return "";

      return `${this.person.idade} anos`;
    },
    data: function () {
      if (!this.person?.ultimaOcorrencia?.dtDesaparecimento) return "";

      const date = new Date(
        this.person.ultimaOcorrencia.dtDesaparecimento
      ).toLocaleDateString();
      return `último avistamento: ${date}`;
    },
    local: function () {
      if (!this.person?.ultimaOcorrencia?.localDesaparecimentoConcat) return "";
      return `local: ${this.person.ultimaOcorrencia.localDesaparecimentoConcat}`;
    },
    vestimenta: function () {
      if (
        !this.person?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO
          ?.vestimentasDesaparecido
      )
        return "";
      return `vestimenta: ${this.person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido}`;
    },
    maisInformacaoes: function () {
      if (!this.person?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao)
        return "";
      return `mais informações: ${this.person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao}`;
    },
    status: function () {
      const isLocated = this.isLocated;
      if (this.person?.sexo === "FEMININO") {
        return isLocated ? "Localizada" : "Desaparecida";
      }
      return isLocated ? "Localizado" : "Desaparecido";
    },
    urlFoto: function () {
      return this.person.urlFoto ?? "src/assets/sem-foto.svg";
    },
    isLocated: function () {
      if (this.person?.ultimaOcorrencia?.dataLocalizacao) {
        return true;
      }
      return false;
    },
    numberDaysMissing: function () {
      if (!this.person?.ultimaOcorrencia?.dtDesaparecimento || this.isLocated)
        return "";

      const dateNow = new Date();
      const dateDisappearance = new Date(
        this.person.ultimaOcorrencia.dtDesaparecimento
      );
      const timeDiff = Math.abs(
        dateNow.getTime() - dateDisappearance.getTime()
      );
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return `${this.status} há ${diffDays} dias`;
    },
  },
  methods: {
    onImgLoad() {
      this.isLoading = false;
    },
    comeBack() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <main>
    <div class="row center mb-10">
      <div class="col-12 status" v-bind:class="{ located: isLocated }">
        <h1>{{ status }}</h1>
      </div>
      <div class="col">
        <img
          class="photo"
          :src="urlFoto"
          :alt="person.nome"
          @load="onImgLoad"
          v-bind:class="{ located: isLocated }"
        />
      </div>
      <div class="col-md-5 pa-10">
        <div class="row">
          <div class="col-12 pb-10">
            <h1>{{ person.nome }}</h1>
          </div>
          <div class="col-12">
            <p>{{ idade }} - {{ person.sexo }}</p>
          </div>
          <div class="col-12">
            <p>{{ data }}</p>
          </div>
          <div class="col-12">
            <p>
              {{ local }}
            </p>
          </div>
          <div class="col-12">
            <p>
              {{ vestimenta }}
            </p>
          </div>
          <div class="col-12">
            <p>
              {{ maisInformacaoes }}
            </p>
          </div>
          <div class="col-12 missing">
            <p>
              {{ numberDaysMissing }}
            </p>
          </div>
          <div class="col-12 mt-20">Compartilhe nas redes sociais</div>
          <div class="col-3">
            <img class="rs" src="/src/assets/icons8-facebook-60.png" alt="" />
          </div>
          <div class="col-3">
            <img class="rs" src="/src/assets/icons8-instagram-60.png" alt="" />
          </div>
          <div class="col-3">
            <img
              class="rs"
              src="/src/assets/icons8-linkedin-circundado-60.png"
              alt=""
            />
          </div>
          <div class="col-3">
            <img class="rs" src="/src/assets/icons8-whatsapp-60.png" alt="" />
          </div>
          <div class="col-12 mt-10">
            <SubmitApp
              v-if="!isLocated"
              label="Tenho mais informações sobre essa pessoa"
              to="/more-information"
            />
          </div>
        </div>
      </div>
      <LoadingRound v-if="isLoading" />
    </div>
  </main>
  <router-link class="back" to="/">Voltar</router-link>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.status {
  background-color: $negative;
  text-align: center;
  &.located {
    background-color: $secondary;
  }
  h1 {
    color: white;
  }
}
.photo {
  border: solid 3px $negative;
  border-radius: 0 0 10px 0;
  border-top: none;
  max-width: 800;
  max-height: 900;
  &.located {
    border: solid 2px $secondary;
    border-top: none;
  }
}
@media (max-width: $xs) {
  img {
    width: 400px;
  }
}
.back {
  display: block;
  position: fixed;
  right: 12px;
  bottom: 12px;
  height: 50px;
  padding: 5px;
  margin: 2px;
  font-family: $fontSecondary;
  text-decoration: none;
  background-color: $accent;
  color: $primary;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 28px;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    color: $secondary;
  }
}
.missing {
  font-weight: bold;
  color: $negative;
  font-size: 1.5em;
}
.rs {
  width: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    color: $accent;
  }
}
.i-saw {
  font-size: 1.8em;
}
</style>
