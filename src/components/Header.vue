<template>
  <div id="nav">
    <a class="logo">YESMAN</a>
    <router-link to="/">關於</router-link>
    <router-link to="/">作品</router-link>
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
        if (scrollTop > 100) {
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
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.3s;
    box-shadow: 0px 5px 20px rgba(rgb(117, 117, 117), 0.1);
    background: white;
    z-index: 2;
    .logo {
      font-weight: bold;
      font-size: 18px;
      &:after {
        content: "";
        height: 20px;
        width: 1px;
        background: #000;
        position: absolute;
        right: 0;
      }
    }
    a {
      font-weight: 500;
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