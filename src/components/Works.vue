<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <!-- <div class="bg-text works-bg-text">WORKS</div> -->
        <div class="works-title">
          <p>最新作品</p><span>WORKS</span>
        </div>
      </div>

    </div>
    <div class="mySwiper">
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://fakeimg.pl/400x400/a9a9a9/888/?retina=1" alt="">
        </swiper-slide>
      </swiper>
      <div class="navigation">
        <div class="button-next">
          <box-icon name='chevron-right' color="#fff"></box-icon>
        </div>
        <div class="button-prev">
          <box-icon name='chevron-left' color="#fff"></box-icon>
        </div>
      </div>
      <div class="more">更多作品</div>
    </div>

  </div>
</template>

<script>
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  export default {
    name: "works",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 4,
          loop: true,
          spaceBetween: 5,
          navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },
          breakpoints: {
            1080: {
              slidesPerView: 5,
            },
          },
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 200px;
    padding-bottom: 100px;
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
    .mySwiper {
      width: 100%;
      display: flex;
      align-items: center;
      .swiper {
        width: 70%;
        margin: 0;
        .swiper-slide {
          img {
            width: 100%;
          }
        }
      }
      .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        .button-next,
        .button-prev {
          cursor: pointer;
          padding: 5px;
          margin: 3px;
          background: #000;
        }
      }
      .more {
        cursor: pointer;
        color: white;
        padding: 15px 40px;
        background: #222;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>