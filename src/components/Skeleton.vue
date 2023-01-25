<template>
  <div class="card" v-if="loading">
    <div class="grid formgrid">
      <div class="col-6">
        <Skeleton width="100%" height="100%"></Skeleton>
      </div>
      <div class="col-6">
        <Skeleton
          :width="i % 2 == 0 ? '45%' : '70%'"
          v-for="i of 10"
          :key="i"
          class="mb-4"
        ></Skeleton>
      </div>
    </div>
  </div>
</template>
<script setup>
import Skeleton from "primevue/skeleton";

const props = defineProps(["loading"]);
</script>
