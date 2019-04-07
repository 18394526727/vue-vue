import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import "@/components/_global.js";
import "@/views/Drag/drag";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
