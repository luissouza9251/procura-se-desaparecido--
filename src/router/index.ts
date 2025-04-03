import PersonView from "@/views/PersonView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/person",
      name: "person",
      component: () => import("../views/PersonView.vue"),
    },
    {
      path: "/more-information",
      name: "moereInformation",
      component: () => import("../views/MoreInformationView.vue"),
    },
  ],
});

export default router;
