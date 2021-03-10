import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "boxicons";
/*
vue-awesome-swiper
https://github.com/surmon-china/vue-awesome-swiper
*/
import Swiper, { Autoplay, EffectFade, Navigation } from "swiper";
Swiper.use([Autoplay, EffectFade, Navigation]);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
