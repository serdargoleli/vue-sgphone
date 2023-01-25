<template>
  <div class="w-11 mx-auto py-5">
    <Skeleton :loading="topFavoritesState.loading" />

    <template v-if="!topFavoritesState.loading">
      <DataTable
        class="p-datatable-sm mt-5 border-round-md"
        ref="dt"
        :value="topFavoritesState.phones"
        responsiveLayout="scroll"
        :rowHover="true"

      >
        <template #header>
          <div class="flex justify-content-between p-3">
            <h1 class="text-xl md:text-4xl text-">
              {{ topFavoritesState.title }}
            </h1>
            <Button
              icon="pi pi-external-link "
              label="Export Table"
              class="p-button-text p-button-sm text-white-alpha-50 hover:text-orange-500"
              @click="exportCSV($event)"
            />
          </div>
        </template>
        <Column field="phone_name" header="Name" class="p-3">
          <template #body="slotProps">
            <router-link
              class="no-underline text-white-alpha-50 hover:text-orange-500"
              :to="`/phone/${slotProps.data.slug}`"
            >
              {{ slotProps.data.phone_name }}
            </router-link>
          </template>
        </Column>
        <Column field="hits" header="Hits" class="text-white-alpha-50">
          <template #body="slotProps">
            <i class="pi pi-eye"></i>
            <span class="ml-2">{{ slotProps.data.hits }} </span>
          </template>
        </Column>
      </DataTable>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hero from "../components/Hero.vue";
import Skeleton from "../components/Skeleton.vue";
import axios from "axios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { useTopFavorites } from "@/stores/topFavorites";
const topFavoritesStore = useTopFavorites();
const topFavoritesState = topFavoritesStore.topFavoritesState;

const dt = ref();

const exportCSV = () => {
  dt.value.exportCSV();
};
onMounted(async () => {
  if (topFavoritesState.phones.length <= 0) {
    topFavoritesStore.getTopFavorites();
  }
});
</script>
