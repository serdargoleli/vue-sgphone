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
          <div class="col-6 md:col-3" v-for="phone in phones" :key="phone.slug">
            <ProductCard :phone="phone" />
          </div>

          <ProgressSpinner v-if="loading" />

          <div
            class="col-12 text-center"
            v-if="brandPhonesState.lastPage > brandPhonesState.currentPage"
          >
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
import { useBrandPhoneStore } from "@/stores/brandsPhones";
import { useLastestStore } from "@/stores/lastestPhones";

const brandStore = useBrandStore();
const { brands, loadingBrands } = storeToRefs(brandStore);
const lastestStore = useLastestStore();
const lastestPhonesState = lastestStore.lastestState;
const brandPhoneStore = useBrandPhoneStore();
const brandPhonesState = brandPhoneStore.brandPhonesState;
const selectedBrand = ref({});

const setSelectedBrand = async (selected) => {
  await brandPhoneStore.resetPhoneStore();
  if (selected == null) {
    selectedBrand.value = {};
  } else {
    selectedBrand.value = selected;

    await brandPhoneStore.getPhonesData(selected.brand_slug);
  }
};
const getBrandPhones = async (brandSlug) => {
  await brandPhoneStore.getPhonesData(brandSlug, true);
};

onMounted(async () => {
  if (brands.value.length <= 0) {
    await brandStore.getBrandsData();
  }
  if (lastestPhonesState.phones.length <= 0) {
    await lastestStore.getLastestPhone();
  }
});

const title = computed(() => {
  if (brandPhonesState.phones.length > 0) {
    return brandPhonesState.title.toUpperCase();
  } else {
    return lastestPhonesState.title;
  }
});

const phones = computed(() => {
  if (selectedBrand != null && Object.keys(selectedBrand.value).length > 0) {
    return brandPhonesState.phones;
  }
  return lastestPhonesState.phones;
});

const loading = computed(() => {
  if (selectedBrand != null && Object.keys(selectedBrand.value).length > 0) {
    return brandPhonesState.loading;
  }
  return lastestPhonesState.loading;
});
</script>
