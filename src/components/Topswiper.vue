<template>
  <div class="top-swiper">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide id="bg_1"></swiper-slide>
      <swiper-slide id="bg_2"></swiper-slide>
      <swiper-slide id="bg_3"></swiper-slide>
      <swiper-slide id="bg_4"></swiper-slide>
      <swiper-slide id="bg_5"></swiper-slide>
      <swiper-slide id="bg_6"></swiper-slide>
      <swiper-slide id="bg_7"></swiper-slide>
      <swiper-slide id="bg_8"></swiper-slide>
      <swiper-slide id="bg_9"></swiper-slide>
      <swiper-slide id="bg_10"></swiper-slide>
    </swiper>
    <div id="particles-js">
      <div class="title">
        <h3>用鏡頭留下最珍貴的記憶</h3>
        <h1>YESMAN</h1>
        <h2>Photography Studio</h2>
      </div>
    </div>
    <div class="scroll">
      <p>Scroll</p>
      <div class="box">
        <span></span>
      </div>
    </div>
  </div>

</template>

<script>
  import "particles.js";
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  export default {
    name: "top-swiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
        },
      };
    },
    mounted() {
      // window.particlesJS("particles-js", {
      //   particles: {
      //     number: {
      //       value: 40,
      //       density: { enable: true, value_area: 3000 },
      //     },
      //     color: { value: "#ffffff" },
      //     shape: {
      //       type: "image",
      //       image: {
      //         src: require("@/assets/images/others/soap_bubbles_PNG48.png"),
      //         width: 100,
      //         height: 100,
      //       },
      //     },
      //     opacity: {
      //       value: 0,
      //       random: true,
      //       anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      //     },
      //     size: {
      //       value: 50,
      //       random: true,
      //       anim: {
      //         enable: false,
      //         speed: 60,
      //         size_min: 40,
      //         sync: false,
      //       },
      //     },
      //     line_linked: {
      //       enable: false,
      //     },
      //     move: {
      //       enable: true,
      //       speed: 3,
      //       direction: "top",
      //       random: true,
      //       straight: false,
      //       out_mode: "out",
      //       bounce: false,
      //       attract: {
      //         enable: false,
      //         rotateX: 3945.7382081613637,
      //         rotateY: 1200,
      //       },
      //     },
      //   },
      //   interactivity: {
      //     events: {
      //       onhover: { enable: false },
      //       onclick: { enable: false },
      //     },
      //   },
      //   retina_detect: true,
      // });
    },
  };
</script>

<style lang="scss" scoped>
  .top-swiper {
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: rgba(black, 0.2);
    background-image: url("https://www.transparenttextures.com/patterns/blu-stripes.png");
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      color: white;
      text-align: center;
      h3 {
        font-weight: 300;
        letter-spacing: 8px;
      }
      h1 {
        font-weight: 600;
        color: white;
        font-size: 4rem;
        margin: 18px 0;
        letter-spacing: 20px;
        background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h2 {
        position: relative;
        display: inline-block;
        padding-top: 18px;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 6px;
        &::before {
          position: absolute;
          content: "";
          width: 50%;
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          background: #fff;
        }
      }
    }
  }
  .swiper {
    width: 100%;
    background: black;
    .swiper-slide {
      text-align: center;
      height: 100vh;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      img {
        width: 100%;
        height: 100%;
      }
    }
    #bg_1 {
      background-image: url("../assets/images/slide/1.jpg");
    }
    #bg_2 {
      background-image: url("../assets/images/slide/2.jpg");
    }
    #bg_3 {
      background-image: url("../assets/images/slide/3.jpg");
    }
    #bg_4 {
      background-image: url("../assets/images/slide/4.jpg");
    }
    #bg_5 {
      background-image: url("../assets/images/slide/5.jpg");
    }
    #bg_6 {
      background-image: url("../assets/images/slide/6.jpg");
    }
    #bg_7 {
      background-image: url("../assets/images/slide/7.jpg");
    }
    #bg_8 {
      background-image: url("../assets/images/slide/8.jpg");
    }
    #bg_9 {
      background-image: url("../assets/images/slide/9.jpg");
    }
    #bg_10 {
      background-image: url("../assets/images/slide/10.jpg");
    }
  }
  .scroll {
    position: relative;
    z-index: 3;
    position: absolute;
    padding: 10px;
    bottom: 20px;
    right: 30px;
    // transform-origin: top right;
    // transform: rotate(-90deg);
    writing-mode: vertical-rl;
    p {
      color: white;
      font-weight: 200;
      letter-spacing: 2px;
    }
    .box {
      position: relative;
      height: 100%;
      width: 15px;
      overflow: hidden;
      span {
        display: block;
        position: absolute;
        right: 5px;
        top: 0;
        width: 1px;
        height: 100%;
        background: white;
        animation: grow 2s linear infinite;
      }
    }
  }
  @keyframes grow {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @media (max-width: 768px) {
    #particles-js {
      .title {
        h3 {
          letter-spacing: 4px;
        }
        h1 {
          font-size: 3rem;
          margin: 12px 0;
          letter-spacing: 10px;
        }
        h2 {
          font-size: 0.8rem;
          letter-spacing: 4px;
        }
      }
    }

    .scroll {
      position: relative;
      z-index: 3;
      position: absolute;
      display: flex;
      padding: 0px;
      right: 50%;
      align-items: center;
      transform: translateX(50%);
      p {
        line-height: 32px;
        margin-bottom: 5px;
      }
      .box {
        width: 30px;
        height: 60px;
        span {
          right: 50%;
        }
      }
    }
  }
</style>