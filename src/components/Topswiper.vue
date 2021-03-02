<template>
  <div class="top-swiper">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide id="bg_1"></swiper-slide>
      <swiper-slide id="bg_2"></swiper-slide>
      <swiper-slide id="bg_3"></swiper-slide>

    </swiper>
    <div class="scroll">
      <p>Scroll to discover</p>
      <div class="box">
        <span></span>
      </div>
    </div>
  </div>

</template>

<script>
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
  };
</script>

<style lang="scss" scoped>
  .top-swiper {
    width: 100%;
    height: 100vh;
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
      background-image: url("https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
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