<template>
  <div>
    <div id="fb-root"></div>
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
  name: "index",
  components: { Header, Footer, Social },
};
</script>
