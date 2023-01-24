import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const usePhoneStore = defineStore("phoneStore", () => {
  const phonesState = reactive({
    phones: [],
    loading: false,
    currentPage: 1,
    lastPage: 0,
    title: "",
  });

  async function getPhonesData(brandSlug, page = false) {
    if (page && phonesState.lastPage > phonesState.currentPage) {
      phonesState.currentPage++;
    }

    let url = `https://phone-specs-api.azharimm.dev/brands/${brandSlug}?page=${phonesState.currentPage}`;
    phonesState.loading = true;
    const { data, status } = await axios.get(url);
    if (status) {
      phonesState.phones.push(...data.data.phones);
      phonesState.currentPage = data.data.current_page;
      phonesState.lastPage = data.data.last_page;
      phonesState.title = data.data.title;
    }

    phonesState.loading = false;
  }

  function resetPhoneStore() {
    phonesState.phones = [];
    phonesState.loading = false;
    phonesState.currentPage = 1;
    phonesState.lastPage = 0;
    phonesState.title = "";
  }

  return { phonesState, getPhonesData, resetPhoneStore };
});
