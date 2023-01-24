import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useLastestStore = defineStore("lastestPhoneStore", () => {
  const lastestState = reactive({
    phones: [],
    loading: false,
    title: "",
  });

  async function getLastestPhone() {
    let url = `https://phone-specs-api.azharimm.dev/latest`;
    lastestState.loading = true;
    const { data, status } = await axios.get(url);
    if (status) {
      lastestState.phones.push(...data.data.phones);
      lastestState.title = data.data.title;
    }

    lastestState.loading = false;
  }

  return { lastestState, getLastestPhone };
});
