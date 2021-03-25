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

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  offset: 0,
  delay: 200,
  duration: 800,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
Vue.use(AOS);

// global components
import ServiceCoolLightBox from "@/components/ServiceCoolLightBox";
Vue.component("ServiceCoolLightBox", ServiceCoolLightBox);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
