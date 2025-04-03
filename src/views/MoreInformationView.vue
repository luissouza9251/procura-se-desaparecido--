<script lang="ts">
import InputApp from "@/components/form/input/InputApp.vue";
import SubmitApp from "@/components/form/button/SubmitApp.vue";
import { usePersonStore } from "@/stores/person/personStore.ts";
import { useOccurrenceStore } from "@/stores/occurrence/occurrenceStore.ts";

export default {
  components: {
    InputApp,
    SubmitApp,
  },
  data() {
    const personStore = usePersonStore();
    if (!personStore.person?.nome) this.comeBack();
    const occurrenceStore = useOccurrenceStore();

    occurrenceStore.moreInformation.ocoId =
      personStore.person?.ultimaOcorrencia?.ocoId;

    let today = new Date();
    occurrenceStore.moreInformation.data = today.toISOString().split("T")[0];

    return { occurrenceStore };
  },
  methods: {
    async onSubmit() {
      if (
        !this.occurrenceStore.moreInformation?.informacao ||
        !this.occurrenceStore.moreInformation?.file
      ) {
        return;
      }

      if (confirm("Enviar informações?")) {
        const response = await this.occurrenceStore.sendMoreInformation();
        if (response) {
          await alert("Informações enviadas com sucesso!");
          this.$router.push("/");
        } else {
          await alert(
            "Erro no envio das informações, tente novamente mais tarde!"
          );
        }
      }
    },
    onFileChange($event) {
      let file = $event.target.files || $event.dataTransfer.files;
      if (!file.length) return;
      this.occurrenceStore.moreInformation.file = file[0];
    },
    comeBack() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <main>
    <div class="row center mt-5">
      <div class="col-xs-12 col-sm-12 col-md-7 mb-5">
        <form
          @submit.prevent="onSubmit"
          class="raw background-color-white border-default pa-10 ma-auto"
        >
          <div>
            <h2 class="text-accent">Enviar novas informações</h2>
          </div>

          <div class="mb-5">
            <InputApp
              v-model="occurrenceStore.moreInformation.informacao"
              label="Informações a respeito da visualização da Pessoa:"
              :required="true"
            />
          </div>

          <div>
            <p>Anexar arquivo:</p>
          </div>

          <div lass="mb-3">
            <input
              @change="onFileChange"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              required
            />
          </div>

          <div class="mt-5">
            <SubmitApp label="Enviar" />
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
form {
  height: min-content;
  width: 90%;
  min-width: 213px;
}
</style>
