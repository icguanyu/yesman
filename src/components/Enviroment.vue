<template>
  <div class="container" id="env">
    <div class="content">
      <div class="head">
        <div class="title" data-aos="fade-down">
          <p>拍攝環境</p><span>ENVIRONMENT</span>
        </div>
      </div>
      <div class="body">
        <article class="desc" data-aos="fade-down">
          解決爸爸停車困擾，門口可以停車！<br>
          解決媽咪的擔心，我們擁有完整逗小孩的方式．拍出媽咪喜愛的照片。<br>
          解決小孩拒拍的心情，專業的攝影師會犧牲色相討小孩歡心。<br>
          一個時段一棚的舒適環境，不會受到其他顧客的影響，舒適居家的氛圍，能放鬆心情拍攝。

        </article>
        <div class="features">
          <!-- <div class="features-bg" data-aos="fade-right"> </div> -->
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide id="bg_1"></swiper-slide>
            <swiper-slide id="bg_2"></swiper-slide>
            <swiper-slide id="bg_3"></swiper-slide>
            <swiper-slide id="bg_4"></swiper-slide>
            <swiper-slide id="bg_5"></swiper-slide>
            <swiper-slide id="bg_6"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

          <div class="features-list" data-aos="fade-left">
            <div class="item"><span class="index">01</span>工作室位於新莊區</div>
            <div class="item"><span class="index">02</span>四十坪立體攝影棚</div>
            <div class="item"><span class="index">03</span>舒適無壓的拍攝環境</div>
            <div class="item"><span class="index">04</span>專業保母證照</div>
            <div class="item"><span class="index">05</span>哺乳空間、尿布台、飲水機</div>
            <div class="item"><span class="index">06</span>大人、小孩服裝齊全</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  export default {
    name: "enviroment",
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
          pagination: {
            el: ".swiper-pagination",
          },
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
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    --swiper-pagination-color: #3f3f3f;
  }
  .container {
    padding-top: 100px;
    padding-bottom: 100px;
    .content {
      margin-bottom: 10px;
      .head {
        .title {
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
      }
      .body {
        .desc {
          letter-spacing: 1px;
          line-height: 20px;
          margin-bottom: 20px;
        }
        .features {
          display: flex;
          align-items: center;
          // .features-bg {
          //   width: 70%;
          //   flex-shrink: 0;
          //   height: 480px;
          //   background-size: cover;
          //   background-image: url("https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
          // }
          .swiper {
            width: 70%;
            flex-shrink: 0;
            height: 520px;
            .swiper-slide {
              height: 520px;
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
            }
            #bg_1 {
              background-image: url("../assets/images/env/1.jpg");
            }
            #bg_2 {
              background-image: url("../assets/images/env/2.jpg");
            }
            #bg_3 {
              background-image: url("../assets/images/env/3.jpg");
            }
            #bg_4 {
              background-image: url("../assets/images/env/4.jpg");
            }
            #bg_5 {
              background-image: url("../assets/images/env/5.jpg");
            }
            #bg_6 {
              background-image: url("../assets/images/env/6.jpg");
            }
          }
          .features-list {
            padding: 40px;
            margin-top: 50px;
            margin-left: -300px;
            background: rgba(white, 1);
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            z-index: 1;
            .item {
              width: 50%;
              padding: 20px;
              span {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      padding: 0;
      .content {
        height: auto;
        padding: 30px 5%;
        .head {
          .title {
            flex-direction: column;
            align-items: flex-start;
            font-size: 2rem;
            margin-bottom: 15px;
            span {
              margin-left: 0;
              margin-top: 5px;
              font-size: 1.6rem;
            }
          }
        }
        .body {
          .desc {
            margin-bottom: 10px;
          }
          .features {
            flex-direction: column-reverse;
            .swiper {
              width: 100%;
              height: 260px;
              .swiper-slide {
                height: 260px;
              }
            }
            .features-list {
              padding: 20px 0px;
              margin: 0;
              background: rgba(white, 0.95);
              .item {
                width: 100%;
                padding: 10px 0;
              }
            }
          }
        }
      }
    }
  }
</style>