<template>
  <Menubar
    :model="items"
    class="w-11 mx-auto bg-transparent border-none flex align-items-center"
  >
    <template #start>
      <router-link to="/">
        <img class="mr-3" style="width: 130px" src="@/assets/logo.png" alt="Serdar Göleli" />
      </router-link>
    </template>

    <template #item="{ item }">
      <a
        class="p-menuitem-link text-white-alpha-50 hover:text-orange-500"
        :href="item.href"
        :key:string="item.label"
        target="_blank"
      >
        {{ item.label }}
      </a>
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
