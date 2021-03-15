<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <div class="title">
          <p>拍攝方案</p><span>SERVICES</span>
        </div>
      </div>
      <div class="body">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide id="s_0">
            <div class="title">新生兒寫真到棚拍攝-A</div>
            <div class="price">NT$3,880元</div>
            <div class="items">
              <div class="item"><b>1</b>位兩個月內新生兒</div>
              <div class="item"><b>1</b>位新生兒<b>5</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <ol>
                <li>精修照片8張</li>
                <li>同檔案電子檔8張 </li>
                <li>4x6 水晶相本一本</li>
                <li>同檔案8張入相本</li>
                <li>16G 木質USB *1</li>
              </ol>
            </div>
          </swiper-slide>
          <swiper-slide id="s_1">
            <div class="title">兒童寫真到棚拍攝</div>
            <div class="price">NT$5,300元</div>
          </swiper-slide>
          <swiper-slide id="s_2">
            <div class="title">孕婦到棚拍攝</div>
            <div class="price">NT$100元</div>
          </swiper-slide>
          <swiper-slide id="s_3">
            <div class="title"> 韓式證件照</div>
            <div class="price">NT$100元</div>
          </swiper-slide>
          <swiper-slide id="s_4">
            <div class="title">形象照</div>
            <div class="price">NT$100元</div>
          </swiper-slide>
        </swiper>
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
          centeredSlides: true,
          loop: true,
          // autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },
          breakpoints: {
            1080: {
              slidesPerView: 3,
            },
          },
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 50px;
    padding-bottom: 50px;
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
            -webkit-text-stroke: 1px #ddd;
            color: transparent;
          }
        }
      }
      .body {
        margin-bottom: 40px;
        .swiper {
          width: 100%;
          margin: 0;
          padding-right: 100px;
          padding-left: 100px;
          .swiper-slide {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border: 1px solid #eee;
            transform: scale(0.9);
            transition: all 0.2s;
            overflow: hidden;
            // &:hover:after {
            //   opacity: 1;
            //   transform: translateY(0);
            // }
            &:after {
              transform: translateY(100%);
              opacity: 0;
              cursor: pointer;
              content: "詳細介紹";
              width: 100%;
              height: 100%;
              position: absolute;
              background: rgba(black, 0.4);
              background-image: url("https://www.transparenttextures.com/patterns/blu-stripes.png");
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              transition: all 0.3s;
            }
            .title {
              padding: 10px;
              text-align: center;
              background: rgb(133, 133, 133);
              text-align: center;
              color: white;
              font-size: 16px;
              font-weight: 300;
            }
            .price {
              font-weight: bold;
              text-align: center;
              padding: 30px 0;
              font-size: 1.6rem;
              color: rgb(71, 76, 77);
            }
            .items {
              padding: 0 20px;
              .item {
                padding-bottom: 5px;
                border-bottom: 1px solid #eee;
                margin-bottom: 5px;
                letter-spacing: 2px;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
            .output {
              padding: 10px 20px;
              ol {
                padding-left: 30px;
                padding-top: 10px;
                padding-bottom: 10px;
                border: 1px dashed rgb(114, 114, 114);

                li {
                  list-style: decimal;
                  margin-bottom: 8px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
                &:after {
                  content: "贈";
                  font-size: 30px;
                  -webkit-text-stroke: 0.5px red;
                  color: transparent;
                  position: absolute;
                  right: 8px;
                  top: 8px;
                  transform: rotate(0deg);
                  border-radius: 50%;
                }
              }
            }
            .notes {
              color: rgb(233, 67, 67);
              font-size: 12px;
              padding: 0 20px;
              margin-bottom: 10px;
            }
          }
          .swiper-slide-active {
            transform: scale(1);
            .title {
              padding: 10px;
              background: rgb(15, 51, 97);
            }
          }
        }
      }
    }
  }
  // #s_0 {
  //   background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/268317_729865.jpeg");
  // }
  // #s_1 {
  //   background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/808904_447727.jpeg");
  // }
  // #s_2 {
  //   background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/226472_960277.jpeg");
  // }
  // #s_3 {
  //   background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/613188_728398.jpeg");
  // }
  // #s_4 {
  //   background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/35722_503054.jpeg");
  // }
</style>