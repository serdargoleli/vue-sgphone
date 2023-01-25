import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useTopFavorites = defineStore("topFavorites", () => {
  const topFavoritesState = reactive({
    phones: [],
    loading: false,
    title: "",
  });

  async function getTopFavorites(phoneSlug) {
    topFavoritesState.loading = true;
    const { data, status } = await axios.get(
      "https://phone-specs-api.azharimm.dev/top-by-interest"
    );
    if (status) {
      topFavoritesState.phones.push(...data.data.phones);
      topFavoritesState.title = data.data.title;
    }

    topFavoritesState.loading = false;
  }

  function resetState() {
    topFavoritesState.phones = [];
    topFavoritesState.loading = false;
  }

  return { topFavoritesState, getTopFavorites, resetState };
});
