import {
  createRouter,
  RouteRecordRaw,
  createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    meta: { check: false },

    children: [],
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

router.beforeEach(({ meta: { check } }, from, next) => {
  if (check) return next("/");
  return next();
});

export default router;
