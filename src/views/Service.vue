<template>
  <div class="main">
    <div class="container">
      <div class="banner">
        <div class="page-title">拍攝方案介紹</div>
      </div>
      <div class="content">

        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>方案介紹</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-tabs v-model="activeName" :tabPosition='tabPosition' @tab-click="handleClick" type="card">
          <el-tab-pane label="新生兒寫真到府拍攝-A" name="a">
            <ServiceA />
          </el-tab-pane>
          <el-tab-pane label="新生兒寫真到府拍攝-B" name="b">
            <ServiceB />
          </el-tab-pane>
          <el-tab-pane label="新生兒寫真到棚拍攝-A" name="c">
            <ServiceC />
          </el-tab-pane>
          <el-tab-pane label="新生兒寫真到棚拍攝-B" name="d">
            <ServiceD />
          </el-tab-pane>
          <el-tab-pane label="兒童寫真到棚拍攝-A" name="e">
            <ServiceE />
          </el-tab-pane>
          <el-tab-pane label="兒童寫真到棚拍攝-B" name="f">
            <ServiceF />
          </el-tab-pane>
          <el-tab-pane label="孕婦到棚拍攝" name="g">
            <ServiceG />
          </el-tab-pane>
          <el-tab-pane label="韓式證件照" name="h">
            <ServiceH />
          </el-tab-pane>
          <el-tab-pane label="形象照" name="i">
            <ServiceI />
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>

  </div>
</template>

<script>
  import ServiceA from "@/components/services/a";
  import ServiceB from "@/components/services/b";
  import ServiceC from "@/components/services/c";
  import ServiceD from "@/components/services/d";
  import ServiceE from "@/components/services/e";
  import ServiceF from "@/components/services/f";
  import ServiceG from "@/components/services/g";
  import ServiceH from "@/components/services/h";
  import ServiceI from "@/components/services/i";
  export default {
    name: "Services",
    components: {
      ServiceA,
      ServiceB,
      ServiceC,
      ServiceD,
      ServiceE,
      ServiceF,
      ServiceG,
      ServiceH,
      ServiceI,
    },
    data() {
      return {
        activeName: "a",
        services: [
          {
            title: "新生兒寫真到「府」拍攝",
            desc: "",
            price: "NT$8,800元",
          },
          {
            title: "新生兒寫真到棚拍攝-A",
            desc: "",
            price: "NT$6,000元",
          },
          {
            title: "新生兒寫真到棚拍攝-B",
            desc: "",
            price: "NT$5,000元",
          },
          {
            title: "新生兒寫真到棚拍攝-C",
            desc: "",
            price: "NT$3,880元",
          },
          {
            title: "兒童寫真到棚拍攝-A",
            desc: "",
            price: "NT$5,000元",
          },
          {
            title: "兒童寫真到棚拍攝-B",
            desc: "",
            price: "NT$3,800元",
          },
          {
            title: "孕婦到棚拍攝",
            desc: "",
            price: "NT$6,800元",
          },
          {
            title: "韓式證件照",
            desc: "",
            price: "NT$280起",
          },
          {
            title: "形象照",
            desc: "",
            price: "NT$2,400起",
          },
        ],
        tabPosition: window.innerWidth < 768 ? "top" : "left",
      };
    },
    watch: {
      $route(to) {
        this.activeName = to.query.s;
      },
    },
    created() {
      window.scrollTo(0, 0);
      this.activeName = this.$route.query.s;
      // if (
      //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      //     navigator.userAgent
      //   )
      // ) {
      //   this.tabPosition = "top";
      // }
      window.addEventListener("resize", () => {
        this.tabPosition = window.innerWidth < 768 ? "top" : "left";
      });
    },
    methods: {
      handleClick(tab) {
        this.$router.push({ query: { s: tab.paneName } });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-bottom: 50px;
    .banner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50vh;
      background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/3215916/996294_57001.jpeg");
      background-size: cover;
      background-position: center center;
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background: rgba(black, 0.2);
        // background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
        background-image: url("https://www.transparenttextures.com/patterns/blu-stripes.png");
      }
      .page-title {
        color: white;
        z-index: 2;
        letter-spacing: 8px;
        font-size: 2rem;
      }
    }
    .breadcrumb {
      margin: 30px 0;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding-bottom: 20px;
      .banner {
        height: 40vh;
        .page-title {
          letter-spacing: 2px;
          font-size: 1.6rem;
        }
      }
      .content {
        padding: 5px 15px;
      }
      .breadcrumb {
        margin: 15px 0;
      }
    }
  }
</style>
