import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrandPhones from "../views/BrandPhones.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        {
          path: "brand/:brandSlug?",
          component: BrandPhones,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
