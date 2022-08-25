import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Login",
    path: "/login",
    component: () => import("./views/login.vue"),
  },
  {
    name: "Sign Up",
    path: "/signup",
    component: () => import("./views/signup.vue"),
  },
  {
    name: "New Post",
    path: "/post",
    component: () => import("./views/post.vue"),
  },
  {
    name: "Post List",
    path: "/",
    component: () => import("./views/list.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  // @ts-ignore
  document.title = to.name;
  next();
});

export default router;
