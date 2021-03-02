<template>
  <div id="nav">
    <router-link to="/">關於YES,MAN</router-link>
    <router-link to="/">欣賞作品</router-link>
    <router-link to="/">環境</router-link>
    <router-link to="/">方案</router-link>
  </div>
</template>

<script>
  import $ from "jquery";
  export default {
    name: "my-header",
    mounted() {
      $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
          $("#nav").addClass("active");
        } else {
          $("#nav").removeClass("active");
        }
      });
    },
  };
</script>


<style lang="scss" scoped>
  #nav {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    left: 0;
    top: 0;
    transition: all 0.3s;
    box-shadow: 0px 5px 20px rgba(rgb(117, 117, 117), 0.1);
    a {
      display: inline-block;
      padding: 40px 30px;
      transition: all 0.3s;
    }
  }
  #nav.active {
    width: 100%;
    transition: all 0.3s;
    a {
      padding: 30px;
      transition: all 0.3s;
    }
  }
</style>