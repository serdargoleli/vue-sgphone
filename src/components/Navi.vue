<template>
  <Menubar
    :model="items"
    class="w-11 mx-auto bg-transparent border-none flex align-items-center"
  >
    <template #start>
      <img class="mr-3" style="width: 130px" src="@/assets/logo.png" alt="" />
    </template>

    <template #item="{ item }">
      <RouterLink
        class="p-menuitem-link text-white-alpha-50 hover:text-orange-500"
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
    label: "Github",
    href: "https://github.com/serdargoleli/",
  },

  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/serdargoleli/",
  },
]);
</script>
<style lang=""></style>
