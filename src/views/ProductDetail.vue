<template>
  <div class="w-11 mx-auto pt-5">
    <Skeleton :loading="detailsState.loading" />
    <div
      class="grid mt-4 mb-4 md:justify-content-between"
      v-if="!detailsState.loading"
    >
      <div class="col-12 lg:col-4">
        <div class="grid">
          <div class="col-2">
            <div
              class="border-round-md"
              v-for="(image, index) of detailsState.details.phone_images"
              :key="index"
            >
              <Image
                imageClass="w-full max-w-full"
                :src="image"
                :alt="detailsState.details.phone_name"
                :preview="true"
              >
                <template #indicator> </template>
              </Image>
            </div>
          </div>
          <div class="col-10">
            <img :src="firstImage" class="w-full max-w-full border-round-xl" />
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-7">
        <span class="text-white-alpha-30">
          {{ detailsState.details.release_date }}
        </span>
        <h1 class="text-5xl">{{ detailsState.details.phone_name }}</h1>
        <Badge
          class="bg-white-alpha-20 border-round-md font-light text-base text-white-alpha-70 mb-4"
          style="letter-spacing: 1px"
        >
          {{ detailsState.details.brand }}
        </Badge>
        <div class="mb-4">
          <h2 class="text-white-alpha-40 font-light">Dimension</h2>
          <li class="text-white-alpha-60 font-base list-disc">
            {{ detailsState.details.dimension }}
          </li>
        </div>
        <div class="mb-4">
          <h2 class="text-white-alpha-40 font-light">OS</h2>
          <li class="text-white-alpha-60 font-base">
            {{ detailsState.details.os }}
          </li>
        </div>
        <div class="mb-4">
          <h2 class="text-white-alpha-40 font-light">Storage</h2>
          <li class="text-white-alpha-60 font-base">
            {{ detailsState.details.storage }}
          </li>
        </div>

        <a
          href="#all-details"
          class="hidden lg:inline-block bg-black-alpha-30 px-3 py-2 border-round-md no-underline text-white-alpha-50 hover:text-orange-500 mt-4"
        >
          Other Details <i class="pi pi-angle-double-down"></i>
        </a>
      </div>

      <div class="col-12">
        <div class="grid mt-6" id="all-details">
          <div
            class="col-12 md:col-6 lg:col-4"
            v-for="specifications in detailsState.details.specifications"
            :key="specifications.title"
          >
            <Card class="h-full font-light">
              <template #title>
                <h3 class="text-xl mb-0 text-white-alpha-60">
                  {{ specifications.title }}
                </h3>
              </template>
              <template #content>
                <div
                  v-for="specsItem in specifications.specs"
                  :key="specsItem.key"
                >
                  <h5 class="font-light text-white-alpha-20">
                    {{ specsItem.key }}
                  </h5>
                  <ul class="px-4">
                    <li
                      class="mb-3 text-white-alpha-40"
                      v-for="(specsItemValue, index) in specsItem.val"
                      :key="index + specsItem.key"
                    >
                      {{ specsItemValue }}
                    </li>
                  </ul>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import Skeleton from "../components/Skeleton.vue";
import Image from "primevue/image";
import Badge from "primevue/badge";
import Card from "primevue/card";
import { usePhoneDetailsStore } from "@/stores/phoneDetails";
const route = useRoute();
const phoneDetailsStore = usePhoneDetailsStore();
const detailsState = phoneDetailsStore.phoneDetailsState;

const expandedRows = ref([]);

const firstImage = computed(() => {
  if (Object.keys(detailsState.details).length > 0) {
    return detailsState.details.phone_images[0];
  }
});
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

onMounted(async () => {
  scrollToTop();
  if (Object.keys(detailsState.details).length <= 0)
    await phoneDetailsStore.getPhoneDetails(route.params.slug);
    document.title = `${detailsState.details.brand} ~ ${detailsState.details.phone_name} | SGPHONE `;
});

onUnmounted(() => {
  phoneDetailsStore.resetDetails();
});
</script>

<style></style>
