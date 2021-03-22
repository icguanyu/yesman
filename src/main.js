import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "boxicons";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/_element-variables.scss"; // 修改 ElementUI 預設變數
Vue.use(ElementUI);
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
