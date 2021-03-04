<template>
  <div class="top-swiper">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide id="bg_1"></swiper-slide>
      <swiper-slide id="bg_2"></swiper-slide>
      <swiper-slide id="bg_3"></swiper-slide>

    </swiper>
    <div id="particles-js"></div>
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
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 3000 },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "image",
            image: {
              src: require("@/assets/images/others/soap_bubbles_PNG48.png"),
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 50,
            random: true,
            anim: {
              enable: false,
              speed: 60,
              size_min: 40,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 3945.7382081613637,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: { enable: false },
            onclick: { enable: false },
          },
        },
        retina_detect: true,
      });
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
      background-image: url("https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80");
    }
    #bg_2 {
      background-image: url("https://images.unsplash.com/photo-1475178278683-8c225ae5ec3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    }
    #bg_3 {
      background-image: url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80"');
    }
  }
  .scroll {
    position: relative;
    z-index: 3;
    position: absolute;
    padding: 10px;
    bottom: -30px;
    left: 10px;
    transform-origin: top left;
    transform: rotate(-90deg);
    p {
      color: white;
      font-weight: 200;
    }
    .box {
      position: relative;
      height: 10px;
      width: 100%;
      overflow: hidden;
      margin-top: 5px;
      span {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 1px;
        background: white;
        animation: grow 1.8s linear infinite;
        &:after {
          content: "";
          position: absolute;
          width: 10px;
          height: 1px;
          background: white;
          transform: rotate(30deg);
          top: 3px;
          left: 0px;
        }
      }
    }
  }
  @keyframes grow {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>