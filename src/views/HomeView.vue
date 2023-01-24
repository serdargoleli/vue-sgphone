<template>
  <div class="w-11 mx-auto pt-5">
    <Hero />
    <div class="grid mt-8 mb-8">
      <div class="col-12 lg:col-3">
        <SideBar
          :brands="brands"
          @changeSelectedBrand="setSelectedBrand"
          :loading="loadingBrands"
        />
      </div>
      <div class="col-12 lg:col-9">
        <Card>
          <template #content>
            <h1 class="text-2xl">{{ title }}</h1>
          </template>
        </Card>

        <div class="grid mt-3">
          <div
            v-if="phonesState.phones.length > 0"
            class="col-3"
            v-for="phone in phonesState.phones"
            :key="phone.slug"
          >
            <ProductCard :phone="phone" />
          </div>

          <ProgressSpinner v-if="phonesState.loading" />

          <div
            class="col-12 text-center"
            v-if="phonesState.lastPage > phonesState.currentPage"
          >
            {{ phonesState.lastPage }}| {{ phonesState.currentPage }}
            <Button @click="getBrandPhones(selectedBrand.brand_slug)">
              Daha Fazla Gör</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import SideBar from "../components/SideBar.vue";
import ProductCard from "../components/ProductCard.vue";
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";
import Button from "primevue/button";

import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useBrandStore } from "@/stores/brands";
import { usePhoneStore } from "@/stores/phones";
import axios from "axios";

const brandStore = useBrandStore();
const { brands, loadingBrands } = storeToRefs(brandStore);
const phoneStore = usePhoneStore();
const phonesState = phoneStore.phonesState;
const selectedBrand = ref({});

const title = computed(() => {
  if (phonesState.phones.length > 0) {
    return phonesState.title.toUpperCase();
  }
  return "LATEST";
});

const setSelectedBrand = async (selected) => {
  selectedBrand.value = selected;
  await phoneStore.resetPhoneStore();
  await phoneStore.getPhonesData(selected.brand_slug);
};

const getBrandPhones = async (brandSlug) => {
  await phoneStore.getPhonesData(brandSlug, true);
};
onMounted(async () => {
  if (brands.value.length <= 0) {
    await brandStore.getBrandsData();
  }
});
</script>
