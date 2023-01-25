<template>
  <Menubar
    :model="items"
    class="w-11 mx-auto bg-transparent border-none flex align-items-center"
  >
    <template #start>
      <router-link to="/">
        <img
          class="mr-3"
          style="width: 130px"
          src="@/assets/logo.png"
          alt="Serdar Göleli"
        />
      </router-link>
    </template>

    <template #item="{ item }">
      <router-link
        class="p-menuitem-link text-white-alpha-50 hover:text-orange-500"
        :to="item.href"
        :key:string="item.label"
      >
        {{ item.label }}
      </router-link>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref([
  {
    label: "Top By Fans",
    href: "/top-by-fans",
  },
]);
</script>
<style lang=""></style>
