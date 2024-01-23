<template>
  <div class="main">
    <TopSwiper />
    <Works />
    <Features />
    <!-- <PhotoGrid /> -->
    <Env />
    <Service />
    <Feedbacks />
    <About />
  </div>
</template>

<script>
import TopSwiper from "@/components/Topswiper.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import Features from "@/components/Features.vue";
import Env from "@/components/Enviroment.vue";
import Service from "@/components/Service.vue";
import Feedbacks from "@/components/Feedbacks.vue";
// import PhotoGrid from "@/components/PhotoGrid.vue";
export default {
  name: "Home",
  components: {
    TopSwiper,
    About,
    Works,
    Features,
    Env,
    Service,
    Feedbacks,
  },

  created() {},
};
</script>
