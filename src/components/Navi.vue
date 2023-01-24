<template>
  <Menubar :model="items" class="w-11 mx-auto bg-transparent border-none">
    <template #start> <p class="mr-3">LOGO</p></template>
    <template #item="{ item }">
      <RouterLink
        class="p-menuitem p-menuitem-link p-menubar-root-list"
        :to="item.href"
        :key:string="item.label"
        >{{ item.label }}</RouterLink
      >
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
const items = ref([
  {
    label: "Brands",
    href: "/",
  },
  {
    label: "Favorite Products",
    href: "/",
  },
  {
    label: "Latest",
    href: "/",
  },
  {
    label: "Popular Products",
    href: "/",
  },
]);
</script>
<style lang=""></style>
