<template>
  <div class="main">

    <TopSwiper />
    <About />
    <Works />
    <!-- <PhotoGrid /> -->
    <Env />
    <Service />

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
