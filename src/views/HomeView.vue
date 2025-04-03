<script setup lang="ts">
import FilterMissing from "@/components/filter/FilterMissing.vue";
import ListMissing from "@/components/list/ListMissing.vue";
</script>

<template>
  <main>
    <div class="row mt-5">
      <div class="col-xs-12 col-sm-12 col-md-3 mb-5">
        <FilterMissing />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9">
        <ListMissing />
      </div>
    </div>
  </main>
</template>
