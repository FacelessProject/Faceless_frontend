import { useWallet } from "@/store";
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
    meta: { check: false },

    children: [
      {
        name: "error",
        path: "/:path(.*)*",
        component: () => import("@/views/error.vue"),
        meta: { check: false },
      },
    ],
  },
];

const router = createRouter({
  // History模式
  history: createWebHistory(),

  scrollBehavior: () => ({
    behavior: "smooth",
    top: 0,
  }),

  routes,
});

router.beforeEach(({ meta: { check, home }, name, params }, from, next) => {
  if (check) return next("/");
  return next();
});

export default router;
