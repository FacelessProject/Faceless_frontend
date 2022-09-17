import { useWallet } from "@/store";
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    meta: { check: false },

    children: [
      {
        path: "/",
        name: "home",
        redirect: "wallet",
      },

      {
        path: "/wallet",
        component: () => import("@/views/wallet.vue"),
        meta: { check: false },
      },

      {
        path: "/transfer",
        component: () => import("@/views/transfer.vue"),
        meta: { check: false },
      },

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
  if (check) {
    const { account } = useWallet().connect;
    if (account) return next();
    return next("/");
  }

  return next();
});

export default router;
