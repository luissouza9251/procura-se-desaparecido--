<script lang="ts">
import { useListStore } from "@/stores/list/listStore.ts";
import { useCommunStore } from "@/stores/commun/communStore.ts";
import CardItem from "../card/CardItem.vue";
import LoadingSquare from "../preloader/LoadingSquare.vue";

export default {
  components: {
    CardItem,
    LoadingSquare,
  },
  data() {
    const listStore = useListStore();
    const communStore = useCommunStore();
    return {
      listStore,
      communStore,
    };
  },

  mounted() {
    this.morePersonPerScrollEmit();
  },
  methods: {
    morePersonPerScrollEmit() {
      const listElm = document.querySelector("html");
      window.addEventListener("scroll", (e) => {
        const end =
          listElm.scrollTop + listElm.clientHeight >=
          listElm.scrollHeight - listElm.clientHeight - 2;
        if (!this.communStore.isLoading && end && this.$route.name === "home") {
          this.listStore.nextPage();
        }
      });
    },
  },
};
</script>

<template>
  <section
    id="infinite-list"
    class="row text-center justify-center items-center ma-auto"
  >
    <div
      class="col-xs-12 col-sm-6 col-mt-4 col-lg-4 pb-10 pr-5"
      v-for="person in listStore.list"
      :key="person.id"
    >
      <CardItem :person="person"></CardItem>
    </div>
    <div class="col-12">
      <LoadingSquare v-if="communStore.isLoading" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 90%;
}
</style>
