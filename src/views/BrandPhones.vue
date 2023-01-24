<template>
  <div><!-- {{ gets(route.params) }} --></div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const route = useRoute();
let brandSlug = route.params.brandSlug;

function gets(params) {
  const { data, status } = axios.get(
    `http://phone-specs-api.azharimm.dev/brands/${params.brandSlug}`
  );
}

watch(
  () => brandSlug,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
</script>
<style lang=""></style>
