import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/faq",
          name: "faq",
          component: () => import("../views/Faq.vue"),
        },
        {
          path: "/who",
          name: "who",
          component: () => import("../views/Who.vue"),
        },
        {
          path: "/contact_us",
          name: "contact_us",
          component: () => import("../views/Contactus.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/Error404.vue"),
    },
  ],
});
export default router;
