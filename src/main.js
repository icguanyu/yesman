import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

/*
vue-awesome-swiper
https://github.com/surmon-china/vue-awesome-swiper
*/
import Swiper, { Autoplay, EffectFade } from "swiper";
Swiper.use([Autoplay, EffectFade]);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
