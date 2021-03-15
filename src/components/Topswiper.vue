<template>
  <div class="top-swiper">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide id="bg_1"></swiper-slide>
      <swiper-slide id="bg_2"></swiper-slide>
      <swiper-slide id="bg_3"></swiper-slide>

    </swiper>
    <div id="particles-js">
      <div class="title">
        <h3>用鏡頭留下最珍貴的記憶</h3>
        <h1 id="sunnyday">YESMAN</h1>
        <h2>Photography Studio</h2>
      </div>
    </div>
    <div class="scroll">
      <p>Scroll to discover</p>
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
            delay: 6000,
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
  }
  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(black, 0.2);
    // background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
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
          top: -10px;
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
      background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/3215916/379202_674043.jpeg");
    }
    #bg_2 {
      background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/3215916/464449_494215.jpeg");
    }
    #bg_3 {
      background-image: url('https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/3215916/996294_57001.jpeg');
    }
  }
  .scroll {
    position: relative;
    z-index: 3;
    position: absolute;
    padding: 10px;
    bottom: 0px;
    right: 30px;
    // transform-origin: top right;
    // transform: rotate(-90deg);
    writing-mode: vertical-rl;
    p {
      color: white;
      font-weight: 200;
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
        &:after {
          content: "";
          position: absolute;
          width: 8px;
          height: 1px;
          background: white;
          transform: rotate(45deg);
          bottom: 4px;
          right: 0px;
        }
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
</style>