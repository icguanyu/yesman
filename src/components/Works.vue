<template>
  <div class="container" id="works">
    <div class="content">
      <div class="head">
        <!-- <div class="bg-text works-bg-text">WORKS</div> -->
        <div class="works-title" data-aos="fade-down">
          <p>最新作品</p>
          <span>WORKS</span>
        </div>
      </div>
      <div class="body">
        <div class="cates">
          <div
            class="cate"
            :class="{ active: active === '作品_新生兒' }"
            @click="chagneCateA"
          >
            新生兒
          </div>
          <div
            class="cate"
            :class="{ active: active === '作品_寶寶' }"
            @click="chagneCateB"
          >
            寶寶
          </div>
          <div
            class="cate"
            :class="{ active: active === '作品_兒童' }"
            @click="chagneCateC"
          >
            兒童
          </div>
          <div
            class="cate"
            :class="{ active: active === '作品_孕婦' }"
            @click="chagneCateD"
          >
            孕婦
          </div>
          <div
            class="cate"
            :class="{ active: active === '作品_家庭' }"
            @click="chagneCateE"
          >
            家庭
          </div>
          <div
            class="cate"
            :class="{ active: active === '作品_寵物' }"
            @click="chagneCateF"
          >
            寵物
          </div>
        </div>
        <!-- <div class="mySwiper">
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide v-for="i in 14" :key="i">
              <img :src="`https://fakeimg.pl/400x400/333/ddd/&text=${i}`" alt="">
            </swiper-slide>
          </swiper>
          <div class="navigation">
            <div class="button-prev">
              <box-icon name='chevron-left' color="#fff"></box-icon>
            </div>
            <div class="button-next">
              <box-icon name='chevron-right' color="#fff"></box-icon>
            </div>
          </div>
        </div> -->
        <div class="images-wrapper">
          <el-row :gutter="5">
            <el-col
              :xs="8"
              :span="4"
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
            >
              <div
                class="image"
                data-aos="flip-up"
                :data-aos-delay="50 * (imageIndex + 1)"
                :style="{ backgroundImage: 'url(' + image + ')' }"
                @click="index = imageIndex"
              ></div>
            </el-col>
          </el-row>
        </div>
        <!-- <div class='btn-holder'>
          <button class="btn btn-3 hover-border-1">
            <span>更多作品</span>
          </button>
        </div> -->
      </div>

      <CoolLightBox
        :items="items"
        :index="index"
        :fullScreen="true"
        :useZoomBar="true"
        :enableScrollLock="enableScrollLock"
        @close="index = null"
      >
      </CoolLightBox>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

// import "swiper/swiper-bundle.css";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "works",
  components: {
    CoolLightBox,
  },
  data() {
    return {
      enableScrollLock: window.innerWidth < 768 ? true : false,
      items: [],
      index: null,
      active: "作品_新生兒",
    };
  },
  created() {
    window.addEventListener("resize", () => {
      this.enableScrollLock = window.innerWidth < 768 ? true : false;
    });
  },
  mounted() {
    this.importAll(require.context("@/assets/images/作品_新生兒", true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      var imgs = [];
      r.keys().forEach((key, idx) => (imgs[idx] = r(key)));
      this.items = imgs;
    },
   
    chagneCateA() {
      this.active = "作品_新生兒";
      this.importAll(require.context("@/assets/images/作品_新生兒", true, /\.jpg$/));
    },
    chagneCateB() {
      this.active = "作品_寶寶";
      this.importAll(require.context("@/assets/images/作品_寶寶", true, /\.jpg$/));
    },
    chagneCateC() {
      this.active = "作品_兒童";
      this.importAll(require.context("@/assets/images/作品_兒童", true, /\.jpg$/));
    },
    chagneCateD() {
      this.active = "作品_孕婦";
      this.importAll(require.context("@/assets/images/作品_孕婦", true, /\.jpg$/));
    },
    chagneCateE() {
      this.active = "作品_家庭";
      this.importAll(require.context("@/assets/images/作品_家庭", true, /\.jpg$/));
    },
    chagneCateF() {
      this.active = "作品_寵物";
      this.importAll(require.context("@/assets/images/作品_寵物", true, /\.jpg$/));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 150px;
  padding-bottom: 50px;
  .content {
    margin-bottom: 10px;
    .works-title {
      font-size: 4rem;
      letter-spacing: 4px;
      font-weight: 700;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      span {
        margin-left: 10px;
        color: transparent;
        -webkit-text-stroke: 1px #ddd;
      }
    }
    .works-bg-text {
      position: absolute;
      right: 0;
      bottom: 0;
      line-height: 10rem;
      font-size: 12rem;
      z-index: 1;
    }
  }
  .body {
    .cates {
      display: flex;
      margin-bottom: 20px;
      .cate {
        cursor: pointer;
        padding: 10px 30px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #c9c9c9;
      }
      .cate + .cate {
        margin-left: 10px;
      }
      .cate.active {
        border-color: #413e29;
        background-color: #413e29;
        color: white;
        font-weight: bold;
      }
    }
    .btn-holder {
      width: 100%;
      text-align: center;
      margin: 10px 0;
    }
    .btn {
      position: relative;
      display: inline-block;
      width: auto;
      height: auto;
      padding: 5px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      min-width: 150px;
      span {
        position: relative;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15px 20px;
        transition: 0.3s;
        color: rgb(255, 255, 255);
        background-color: rgb(54, 56, 55);
      }
      &::before,
      &::after {
        background: transparent;
        z-index: 2;
      }
    }
    .btn.hover-border-1::before,
    .btn.hover-border-1::after {
      position: absolute;
      z-index: 1;
      content: "";
      width: 10%;
      height: 25%;
      transition: 0.35s;
    }
    .btn.hover-border-1::before {
      top: 0;
      left: 0;
      border-left: 1px solid rgb(28, 31, 30);
      border-top: 1px solid rgb(28, 31, 30);
    }
    .btn.hover-border-1::after {
      bottom: 0;
      right: 0;
      border-right: 1px solid rgb(28, 31, 30);
      border-bottom: 1px solid rgb(28, 31, 30);
    }
    .btn.hover-border-1:hover::before,
    .btn.hover-border-1:hover::after {
      width: 99%;
      height: 98%;
    }
  }
}

.images-wrapper {
  .image {
    cursor: pointer;
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
    background-position: center center;
    margin-bottom: 5px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0;
    .content {
      padding: 30px 5%;
      .head {
        margin-bottom: 20px;
        .works-title {
          flex-direction: column;
          align-items: flex-start;
          font-size: 2rem;
          margin-bottom: 5px;
          span {
            margin-left: 0;
            margin-top: 5px;
            font-size: 1.6rem;
          }
        }
      }
      .body {
        .cates {
          flex-wrap: wrap;
          .cate {
            flex-shrink: 0;
            margin-left: 0;
            margin-right: 10px;
            margin-bottom: 10px;
         
          }
        }
      }
    }
  }
}
</style>
