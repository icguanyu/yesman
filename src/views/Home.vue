<template>
  <div class="main">
    <Social />
    <TopSwiper />
    <About />
    <Works />
    <Env />
    <Intro />
    <PhotoGrid />
  </div>
</template>

<script>
  import Social from "@/components/Social.vue";
  import TopSwiper from "@/components/Topswiper.vue";
  import About from "@/components/About.vue";
  import Works from "@/components/Works.vue";
  import Env from "@/components/Enviroment.vue";
  import Intro from "@/components/Intro.vue";
  import PhotoGrid from "@/components/PhotoGrid.vue";
  export default {
    name: "Home",
    components: { Social, TopSwiper, About, Works, Env, Intro, PhotoGrid },

    created() {},
  };
</script>
