<template>
  <Listbox
    v-model="seleced"
    :filter="true"
    :options="brands"
    :filterFields="['brand_name']"
    listStyle="max-height:550px; height:550px"
    class="w-full border-none"
    @change="changeHandler($event)"
    :lazy="true"
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
