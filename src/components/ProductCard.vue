<template>
  <!--   {{ brands }} -->

  <Card class="overflow-hidden">
    <template #header>
      <router-link :to="`/phone/${phone.slug}`">
        <img :alt="phone.phone_name" :src="phone.image" />
      </router-link>
    </template>
    <template #content>
      <router-link
        :to="`/phone/${phone.slug}`"
        class="block text-center no-underline text-white-alpha-60 hover:text-orange-500"
      >
        {{ phone.phone_name }}
      </router-link>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
const props = defineProps(["phone"]);
</script>
