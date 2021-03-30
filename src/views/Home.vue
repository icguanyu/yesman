<template>
  <div class="main">
    <div id="fb-root"></div>
    <TopSwiper />

    <Works />
    <!-- <PhotoGrid /> -->
    <Env />
    <Service />
    <About />
  </div>
</template>

<script>
  import TopSwiper from "@/components/Topswiper.vue";
  import About from "@/components/About.vue";
  import Works from "@/components/Works.vue";
  import Env from "@/components/Enviroment.vue";
  import Service from "@/components/Service.vue";
  // import PhotoGrid from "@/components/PhotoGrid.vue";
  export default {
    name: "Home",
    components: {
      TopSwiper,
      About,
      Works,
      Env,
      Service,
    },

    created() {},
  };
</script>
