<template>
  <div class="container" id="feedbacks">
    <div class="content">
      <div class="head">
        <div class="title" data-aos="fade-down">
          <p>客戶好評</p>
          <span>FEEDBACKS</span>
        </div>
      </div>
      <div class="body">
        <!-- <div class="stars">
          <img src="@/assets/images/icons/star.svg" alt="" />
          <img src="@/assets/images/icons/star.svg" alt="" />
          <img src="@/assets/images/icons/star.svg" alt="" />
          <img src="@/assets/images/icons/star.svg" alt="" />
          <img src="@/assets/images/icons/star.svg" alt="" />
        </div> -->

        <div class="feedbacks">
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide>
              <div class="content content-image">
                <!-- <div class="customer">
                  <div class="avatar avatar-female"></div>
                  <div class="name">胡小姐</div>
                </div>
                <div class="stars">
                  <img
                    src="@/assets/images/icons/star.svg"
                    alt=""
                    v-for="i in 5"
                    :key="i"
                  />
                </div>
                <div class="comments">
                  從得知懷孕後就一直找合適的新生兒寫真拍攝
                  看了好多家，希望找一個不會太貴又可以照片全拿的～ 找到了yes
                  man，從一開始的諮詢到拍攝和引導都非常專業
                  諮詢時，服務人員解決我很多問題👍🏻<br />
                </div> -->
                <img src="@/assets/images/comments/01.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/02.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/03.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/04.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/05.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/06.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content content-image">
                <img src="@/assets/images/comments/07.jpg" alt="" />
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "about",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        // effect: "fade",
        pagination: {
          el: ".swiper-pagination",
        },
        fadeEffect: {
          crossFade: true,
        },
        // autoplay: {
        //   delay: 5000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
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
    margin-bottom: 30px;
    max-width: 1280px;
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
      .feedbacks {
        .swiper {
          width: 100%;
          flex-shrink: 0;

          .swiper-slide {
            height: 100%;
            width: fit-content;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            .content {
              border: 1px solid #ddd;
              border-radius: 20px;
              padding: 10px;
              overflow: hidden;
              .customer {
                display: flex;
                align-items: center;
                .avatar {
                  width: 50px;
                  height: 50px;
                  margin-right: 10px;
                  background-size: cover;
                }
                .avatar-female {
                  background-image: url("../assets/images/icons/female.png");
                }
                .avatar-male {
                  background-image: url("../assets/images/icons/male.png");
                }
              }
              .stars {
                margin-top: 10px;
                margin-bottom: 10px;
                img {
                  width: 20px;
                }
              }
              .comments {
                font-family: monospace;
                font-weight: 400;
                line-height: 18px;
              }
            }
            .content-image {
              padding: 0;
              img {
                width: 100%;
              }
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
    }
  }
}
</style>
