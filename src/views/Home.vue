<template>
  <div class="main">
    <TopSwiper />
    <About />
    <Works />
  </div>
</template>

<script>
  import TopSwiper from "@/components/Topswiper.vue";
  import About from "@/components/About.vue";
  import Works from "@/components/Works.vue";
  export default {
    name: "Home",
    components: { TopSwiper, About, Works },

    created() {},
  };
</script>
