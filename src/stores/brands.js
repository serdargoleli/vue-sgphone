import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useBrandStore = defineStore("brandsStore", () => {
  const brands = ref([]);
  const loadingBrands = ref(false);

  async function getBrandsData() {
    loadingBrands.value = true;
    const { data, status } = await axios.get(
      "https://phone-specs-api.azharimm.dev/brands"
    );
    if (status) {
      brands.value = [...data.data];
    }
    loadingBrands.value = false;
  }

  return { brands, loadingBrands, getBrandsData };
});
