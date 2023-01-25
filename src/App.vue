<template>
  <Navi />
  <RouterView />
  <ScrollTop class="bg-orange-500" />
</template>

<script setup>
import ScrollTop from "primevue/scrolltop";
import Navi from "./components/Navi.vue";
document.title = `SGPHONE`;
</script>
<style scoped></style>
