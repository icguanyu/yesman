<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <!-- <div class="bg-text works-bg-text">WORKS</div> -->
        <div class="works-title">
          <p>最新作品</p><span>WORKS</span>
        </div>
      </div>
      <div class="body">
        <div class="mySwiper">
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide v-for="i in 14" :key="i">
              <img :src="`https://fakeimg.pl/400x400/333/ddd/?retina=1&text=${i}`" alt="">
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
        </div>
        <div class="more">更多作品</div>
      </div>

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
          slidesPerView: 1,
          spaceBetween: 5,
          navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 4,
            },
          },
        },
      };
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
      .mySwiper {
        width: 100%;
        display: flex;
        align-items: center;
        .swiper-container {
          flex: 1;
          margin-bottom: 10px;
        }
        .swiper {
          .swiper-slide {
            height: 260px;
            img {
              height: 100%;
              width: 100%;
            }
          }
        }
        .navigation {
          position: absolute;
          z-index: 1;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .button-next {
            margin-right: -10px;
          }
          .button-prev {
            margin-left: -10px;
          }
          .button-next,
          .button-prev {
            cursor: pointer;
            padding: 5px;
            background: #000;
          }
        }
      }
      .more {
        cursor: pointer;
        padding: 15px 40px;
        text-align: center;
        border: 1px solid #222;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      padding: 0;
      .content {
        padding: 30px 5%;
        .head {
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
      }
    }
  }
</style>