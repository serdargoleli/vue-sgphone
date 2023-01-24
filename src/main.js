import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css ";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/md-dark-indigo/theme.css";
import "./assets/main.css";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
