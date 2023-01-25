import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const usePhoneDetailsStore = defineStore("phoneDetailsStore", () => {
  const phoneDetailsState = reactive({
    details: {},
    loading: false,
  });

  async function getPhoneDetails(phoneSlug) {
    let url = `https://phone-specs-api.azharimm.dev/${phoneSlug}`;
    phoneDetailsState.loading = true;
    const { data, status } = await axios.get(url);
    if (status) {
      phoneDetailsState.details = data.data;
    }

    phoneDetailsState.loading = false;
  }

  function resetDetails() {
    phoneDetailsState.details = {};
    phoneDetailsState.loading = false;
  }

  return { phoneDetailsState, getPhoneDetails, resetDetails };
});
