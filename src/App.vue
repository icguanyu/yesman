<template>
  <div id="app">
    <Header />
    <Social />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Social from "@/components/Social.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    name: "app",
    components: { Header, Footer, Social },
  };
</script>

<style lang="scss">
  @import "@/assets/scss/all.scss";
</style>
