import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useBrandPhoneStore = defineStore("brandPhonesStore", () => {
  const brandPhonesState = reactive({
    phones: [],
    loading: false,
    currentPage: 1,
    lastPage: 0,
    title: "",
  });

  async function getPhonesData(brandSlug, page = false) {
    if (page && brandPhonesState.lastPage > brandPhonesState.currentPage) {
      brandPhonesState.currentPage++;
    }

    let url = `https://phone-specs-api.azharimm.dev/brands/${brandSlug}?page=${brandPhonesState.currentPage}`;
    brandPhonesState.loading = true;
    const { data, status } = await axios.get(url);
    if (status) {
      brandPhonesState.phones.push(...data.data.phones);
      brandPhonesState.currentPage = data.data.current_page;
      brandPhonesState.lastPage = data.data.last_page;
      brandPhonesState.title = data.data.title;
    }

    brandPhonesState.loading = false;
  }

  function resetPhoneStore() {
    brandPhonesState.phones = [];
    brandPhonesState.loading = false;
    brandPhonesState.currentPage = 1;
    brandPhonesState.lastPage = 0;
    brandPhonesState.title = "";
  }

  return { brandPhonesState, getPhonesData, resetPhoneStore };
});
