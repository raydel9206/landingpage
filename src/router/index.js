import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        { path: "", name: "home", component: () => import("../views/Home.vue") },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/Error404.vue"),
    },
  ],
});
export default router;
