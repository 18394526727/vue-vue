import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/overturn",
      name: "overturn",
      component: () => import("@/views/Overturn.vue")
    },
    {
      path: "/drag",
      name: "drag",
      component: () => import("@/views/Drag/Drag.vue")
    },
    {
      path: "/animation",
      name: "animation",
      component: () => import("@/views/Animation.vue")
    },
    {
      path: "/my-love",
      name: "myLove",
      component: () => import("@/views/MyLove.vue")
    }
  ]
});
