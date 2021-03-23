<template>
  <div>
    <div id="nav">
      <router-link class="logo" to="/">YESMAN</router-link>
      <router-link to="/">關於</router-link>
      <router-link to="/">作品</router-link>
      <router-link to="/">環境</router-link>
      <router-link to="/">方案</router-link>
    </div>
    <div id="nav_mobile" @click="drawer = true">
      <box-icon name='menu'></box-icon>
    </div>

    <el-drawer :visible.sync="drawer" direction="ltr" size="100%" :with-header="false">
      <div class="drawer-content">
        <div class="close" @click="drawer = false">
          <box-icon name='x'></box-icon>
        </div>
        <div class="content">
          <router-link class="logo" to="/">YESMAN</router-link>
          <router-link to="/">關於</router-link>
          <router-link to="/">作品</router-link>
          <router-link to="/">環境</router-link>
          <router-link to="/">方案</router-link>
          <a href="#">
            <box-icon type='logo' name='facebook-circle'></box-icon>
          </a>
          <a href="#">
            <box-icon name='instagram' type='logo'></box-icon>
          </a>
          <a href="#">
            <box-icon name='message-rounded-detail' type='solid'></box-icon>
          </a>
          <a href="#">LINE</a>

        </div>
      </div>

    </el-drawer>

  </div>

</template>

<script>
  import $ from "jquery";
  export default {
    name: "my-header",
    data() {
      return {
        drawer: false,
      };
    },
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
  #nav_mobile {
    cursor: pointer;
    z-index: 2;
    display: none;
    position: fixed;
    width: 60px;
    height: 60px;
    background: white;
  }
  .drawer-content {
    height: 100vh;
    .close {
      cursor: pointer;
      margin-right: auto;
      width: 60px;
      height: 60px;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      a {
        display: inline-block;
        text-align: center;
        padding: 20px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-image: linear-gradient(180deg, #555, #555);
        background-size: 0 1px;
        background-position: 100% 100%;
        transition: background-size 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);
      }
      a:hover {
        background-size: 100% 1px;
        background-position: 0 100%;
      }
    }
  }

  @media (max-width: 768px) {
    #nav {
      display: none;
    }
    #nav_mobile {
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>