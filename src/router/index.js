import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetail from "../views/ProductDetail.vue";
import TopFavorites from "../views/TopFavorites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/phone/:slug?",
      component: ProductDetail,
    },
    {
      path: "/top-by-fans",
      component: TopFavorites,
    },
  ],
});

export default router;
