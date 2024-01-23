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
              <div class="content">
                <div class="customer">
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
                  因為月中時月中有贈送拍攝可以拿一張照片免費，但因為都蠻喜歡的所以就還是加價挑了<br />
                  今天拍攝前攝影師-罐頭<br />
                  就詢問我有沒有在月中拍攝，我跟他說有，他就請我拿照片給他看
                  目的就是為了避開與月中拍攝類似的照片，我覺得這點很棒，不會讓我花了兩筆錢卻拍攝到類似的東西👏🏻<br />
                  安撫師-小孟 也是很專業👍🏻 一直安撫著我們家妹妹的情緒
                  整個過程幾乎都沒有聽到寶寶哭聲，讓媽媽我根本也不用管小孩，可以在旁邊玩手機跟攝影師、安撫師聊天
                  這一次的拍攝讓我覺得很愉快，看到拍攝原檔後更期待完成品了呢❤️
                  攝影師：罐頭<br />
                  安撫師：小孟<br />
                  謝謝你們今天的拍攝～ <br />
                  大推yesman專業攝影工作室
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">
                <div class="customer">
                  <div class="avatar avatar-male"></div>
                  <div class="name">吳先生</div>
                </div>
                <div class="stars">
                  <img
                    src="@/assets/images/icons/star.svg"
                    alt=""
                    v-for="i in 5"
                    :key="i"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">內容3</div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">內容4</div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">內容5</div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">內容6</div>
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
        slidesPerView: 3,
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
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;

            .content {
              border: 1px solid #ddd;
            
              border-radius: 8px;
              padding: 10px;
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
