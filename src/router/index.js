import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/service",
        name: "Service",
        component: () => import("../views/Service.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/admin.vue"),
    children: [
      {
        path: "",
        name: "admin",
        component: () => import("../views/admin/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "登入",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
