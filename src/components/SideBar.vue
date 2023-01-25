<template>
  <ProgressSpinner v-if="loading" />

  <Listbox
    v-else
    v-model="seleced"
    :filter="true"
    :options="brands"
    :filterFields="['brand_name']"
    emptyMessage="Brand Not Found"
    listStyle="max-height:1550px; height:1550px"
    class="w-full border-none"
    @change="changeHandler($event)"
  >
    <template #option="slotProps">
      <div
        class="country-item flex justify-content-between text-white-alpha-60"
      >
        <div>{{ slotProps.option.brand_name.toUpperCase() }}</div>
        <Badge
          class="bg-white-alpha-10 text-white-alpha-60"
          :value="slotProps.option.device_count"
        />
      </div>
    </template>
  </Listbox>
</template>

<script setup>
import ProgressSpinner from "primevue/progressspinner";
import { ref } from "vue";
import Listbox from "primevue/listbox";
import Badge from "primevue/badge";
const props = defineProps(["brands", "loading"]);
const emit = defineEmits(["changeSelectedBrand"]);
const seleced = ref("");

const changeHandler = (event) => {
  emit("changeSelectedBrand", event.value);
};
</script>
