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
          <!--新生兒寫真到棚拍攝--SR-->
          <swiper-slide>
            <div class="title">新生兒寫真到府拍攝-SR</div>
            <div class="price">NT$8,800元</div>
            <div class="items">
              <div class="item">到府拍攝</div>
              <div class="item"><b>35天</b>內新生兒</div>
              <div class="item"><b>1</b>位新生兒<b>5-8</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片全檔案（70張以上）</li>
                <li>同檔案電子檔全檔案 </li>
                <li>6x8 水晶相本一本</li>
                <li>自選其中30張入相本</li>
                <li>16G 木質USB *1</li>
                <li>8*10相框 *1（同檔案製作）</li>
                <li>30秒側錄影片</li>
              </ol>
              <div class="notes">
                *如果寶貝配合度高會盡量多拍！<br>
                *依照地區酌收車馬費（車馬費費用請訊息詢問）
              </div>

            </div>
          </swiper-slide>
          <!--新生兒寫真到棚拍攝--S-->
          <swiper-slide>
            <div class="title">新生兒寫真到府拍攝-S</div>
            <div class="price">NT$6,000元</div>
            <div class="items">
              <div class="item">到府拍攝</div>
              <div class="item"><b>35天</b>內新生兒</div>
              <div class="item"><b>1</b>位新生兒<b>4</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片全檔案（35張以上）</li>
                <li>同檔案電子檔全檔案 </li>
                <li>6x8 水晶相本一本</li>
                <li>自選其中30張入相本</li>
                <li>16G 木質USB *1</li>
              </ol>
              <div class="notes">
                *依照地區酌收車馬費（車馬費費用請訊息詢問）
              </div>

            </div>
          </swiper-slide>
          <!--新生兒寫真到棚拍攝--A-->
          <swiper-slide>
            <div class="title">新生兒寫真到棚拍攝-A</div>
            <div class="price">NT$5,000元</div>
            <div class="items">
              <div class="item"><b>兩個月</b>內新生兒</div>
              <div class="item"><b>1</b>位新生兒<b>8</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片10張</li>
                <li>同檔案電子檔10張 </li>
                <li>6x8 水晶相本一本</li>
                <li>同檔案10張入相本</li>
                <li>16G 木質USB *1</li>
                <li>8*10相框 *1（同檔案製作）</li>
              </ol>
              <div class="bonus">
                <box-icon name='gift' color="#fff" size="18px"></box-icon><span>好禮三選二</span>
              </div>
              <ol>
                <li>30秒側錄影片</li>
                <li>兩位大人(一男一女)淡妝髮</li>
                <li>人像似顏繪一張（選擇一張照片）</li>
              </ol>
            </div>
          </swiper-slide>
          <!--新生兒寫真到棚拍攝-B-->
          <swiper-slide>
            <div class="title">新生兒寫真到棚拍攝-B</div>
            <div class="price">NT$3,880元</div>
            <div class="items">
              <div class="item"><b>兩個月</b>內新生兒</div>
              <div class="item"><b>1</b>位新生兒<b>5</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片8張</li>
                <li>同檔案電子檔8張 </li>
                <li>4x6 水晶相本一本</li>
                <li>同檔案8張入相本</li>
                <li>16G 木質USB *1</li>
              </ol>
            </div>
          </swiper-slide>
          <!--兒童寫真到棚拍攝-A-->
          <swiper-slide>
            <div class="title">兒童寫真到棚拍攝-A</div>
            <div class="price">NT$5,000元</div>
            <div class="items">
              <div class="item"><b>兩個月至兩歲</b>小朋友</div>
              <div class="item"><b>1</b>位小朋友<b>2</b>套服裝<b>2</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片10張</li>
                <li>同檔案電子檔10張 </li>
                <li>6x8 水晶相本一本</li>
                <li>同檔案10張入相本</li>
                <li>16G 木質USB *1</li>
                <li>8x10相框一個（同檔案製作）*1</li>
              </ol>
              <div class="bonus">
                <box-icon name='gift' color="#fff" size="18px"></box-icon><span>好禮三選二</span>
              </div>
              <ol>
                <li>30秒側錄影片</li>
                <li>兩位大人(一男一女)淡妝髮</li>
                <li>人像似顏繪一張（選擇一張照片）</li>
              </ol>
            </div>
          </swiper-slide>
          <!--兒童寫真到棚拍攝-B-->
          <swiper-slide>
            <div class="title">兒童寫真到棚拍攝-B</div>
            <div class="price">NT$3,800元</div>
            <div class="items">
              <div class="item"><b>兩個月至兩歲</b>小朋友</div>
              <div class="item"><b>1</b>位小朋友<b>2</b>套服裝<b>2</b>個造型</div>
              <div class="item"><b>2</b>位大人入鏡（不含服裝造型）</div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片8張</li>
                <li>同檔案電子檔8張 </li>
                <li>4x6 水晶相本一本</li>
                <li>同檔案8張入相本</li>
                <li>16G 木質USB *1</li>
              </ol>
            </div>
          </swiper-slide>
          <!--孕婦到棚拍攝-->
          <swiper-slide>
            <div class="title">孕婦到棚拍攝</div>
            <div class="price">NT$6,800元</div>
            <div class="items">
              <div class="item"><b>1</b>位孕媽咪<b>2</b>套服裝<b>2</b>種造型</div>
              <div class="item"><b>1</b>位爸爸<b>2</b>套服裝<b>2</b>種造型</div>
              <div class="item"></div>
            </div>
            <div class="output">
              <div class="within">
                <box-icon name='photo-album' size="16px" color="#fff"></box-icon><span>方案含以下項目</span>
              </div>
              <ol>
                <li>精修照片10張</li>
                <li>同檔案電子檔10張 </li>
                <li>6x8 水晶相本一本</li>
                <li>同檔案10張入相本</li>
                <li>16G 木質USB *1</li>
                <li>8x10相框*1（同檔案製作）</li>
              </ol>
              <div class="bonus">
                <box-icon name='gift' color="#fff" size="18px"></box-icon><span>好禮二選一</span>
              </div>
              <ol>
                <li>30秒側錄影片</li>
                <li>人像似顏繪一張（選擇一張照片）</li>
              </ol>
              <div class="notes">
                *男生服裝僅提供黑色西裝，可自備
              </div>
            </div>
          </swiper-slide>
          <!--韓式證件照-->
          <swiper-slide>
            <div class="title">韓式證件照</div>
            <div class="price">NT$280</div>
            <div class="items">
              <div class="item">不需化妝直接拍攝</div>
            </div>
            <div class="output">
              <ol>
                <li>4x6照片兩張（排版）</li>
              </ol>
            </div>
            <div class="price">NT$580</div>
            <div class="items">
              <div class="item">底妝、眼妝（不含假睫毛）
                唇妝、頭髮自然整理</div>
            </div>
            <div class="output">
              <ol>
                <li>4x6照片兩張（排版）</li>
              </ol>
            </div>
          </swiper-slide>
          <!--形象照-->
          <swiper-slide>
            <div class="title">形象照</div>
            <div class="price">NT$2,400</div>
            <div class="items">
              <div class="item">素背景一套，未化妝</div>
            </div>
            <div class="output">
              <ol>
                <li>精修照片兩三張</li>
              </ol>
            </div>
            <div class="price">NT$3,000</div>
            <div class="items">
              <div class="item">素背景一套，化妝</div>
            </div>
            <div class="output">
              <ol>
                <li>精修照片兩三張</li>
              </ol>
              <div class="notes">
                衣服多一套 +NT$800 <br>
                精修照片加一張 +NT$700 <br>
                證件照加一張電子檔 + NT$500 <br>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="others">
          <h1>其他加購項目</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <td>項目</td>
                  <td>價格</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>多一位大人入鏡拍攝（不含服裝造型）</td>
                  <td>$500/人</td>
                </tr>
                <tr>
                  <td>多一位大人加妝髮 </td>
                  <td>$1000/人</td>
                </tr>
                <tr>
                  <td>多一位大人服裝租借<span>註1</span></td>
                  <td> 一套$600/人</td>
                </tr>
                <tr>
                  <td>多一位小朋友拍攝（含一套服裝搭配一種造型）<span>註2</span></td>
                  <td> $500/人</td>
                </tr>
                <tr>
                  <td>多一位小朋友拍攝（含兩套服裝搭配兩種造型）<span>註2</span></td>
                  <td>$1000/人</td>
                </tr>
                <tr>
                  <td>加選電子檔</td>
                  <td>$500/張</td>
                </tr>
                <tr>
                  <td>加選入相本+電子檔</td>
                  <td>$700/張</td>
                </tr>
                <div class="others-notes">
                  註1:服裝僅提供黑色西裝以及禮服<br>
                  註2:小朋友年齡限制為0-11歲，滿12(含)歲以上算大人<br>
                  <p style="color:red;font-size: 18px;">拍攝成品需自取，如需郵寄宅配到府貨，需自行負擔郵費</p>
                </div>
              </tbody>
            </table>

          </div>
        </div>
        <div class="notice">
          <div class="block">
            <div class="title">拍攝注意事項</div>
            <div class="content">
              <ol>
                <li>大人若是入鏡拍攝，需自備一套服裝，和小朋友其中一套服裝做拍攝，如需和小朋友兩套服裝做拍攝，需加價一套$500/人。</li>
                <li>本公司全程禁止側拍側錄。</li>
                <li>拍攝完成後隔一週後可預約時間挑選照片，挑選照片需到工作室挑選，時段為晚上18:00及19:30兩種時段，於拍攝完成後預約時間。</li>
                <li>訂單贈品如遇不可抗力因素缺貨，本公司將以等值商品替代。</li>
                <li>本公司全館禁止攜帶寵物，如要攜帶寵物，請放置於外出籠/包裡，不可落地。</li>
              </ol>
            </div>
          </div>
          <div class="block">
            <div class="title">貼心提醒</div>
            <div class="content">
              <ol>
                <li>拍攝當日請讓小朋友吃飽睡飽才有精神拍照。</li>
                <li>如果小朋友生病不舒服，請主動告知並延期拍攝。</li>
                <li>小朋友重要物品一定要記得攜帶，例如：尿布、奶嘴、奶瓶等。</li>
                <li>可攜帶小朋友熟悉的物品或玩具，準備零食。</li>
                <li>如想穿自己的便服可以自備，選擇工作室提供之服裝或自備服裝，總共拍攝兩套。</li>
                <li>小朋友身上不要有任何紋身貼紙、蓋章等記號。</li>
                <li>帶具有代表性或特殊意義的玩偶、物品等一同入鏡。</li>
              </ol>

            </div>
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
          centeredSlides: true,
          loop: true,
          // autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 10,
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
          margin-bottom: 40px;
          padding-right: 100px;
          padding-left: 100px;
          .swiper-slide {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border: 1px dotted #ccc;
            height: 600px;
            transition: all 0.2s;
            overflow: hidden;
            .title {
              padding: 10px;
              text-align: center;
              background: rgb(210, 210, 210);
              text-align: center;
              color: white;
              font-size: 18px;
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
              padding: 0 15px;
              font-size: 1.2rem;
              line-height: 1.4rem;
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
              padding: 10px 15px;
              ol {
                padding-left: 30px;
                padding-top: 10px;
                padding-bottom: 10px;
                border: 1px dotted rgb(114, 114, 114);

                li {
                  list-style: decimal;
                  margin-bottom: 8px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
              .within,
              .bonus {
                display: flex;
                align-items: center;
                color: white;
                margin: 5px 0;
                padding: 5px;
                background: rgb(210, 210, 210);
                span {
                  margin-left: 5px;
                }
              }
            }
            .notes {
              color: rgb(233, 67, 67);
              font-size: 13px;
              margin: 5px 0;
              letter-spacing: 2px;
              line-height: 14px;
            }
          }
          .swiper-slide-active {
            border: 1px dotted #0f3361;
            .title {
              background: rgb(15, 51, 97);
            }
            .output {
              .within {
                background: #2861ab;
              }
              .bonus {
                background: rgb(255, 112, 112);
              }
            }
          }
        }
        .others {
          margin-bottom: 40px;
          h1 {
            font-size: 2rem;
            letter-spacing: 4px;
            margin-bottom: 10px;
          }
          table {
            width: 100%;
            thead {
              background: #eee;
              td {
                padding: 10px 8px;
                font-weight: 500;
              }
            }
            tr {
              border-bottom: 1px solid #e2e2e2;
              &:nth-child(even) {
                background: #f3f3f3;
              }
              &:last-child {
                td {
                  border-bottom: none;
                }
              }
            }
            td {
              font-weight: 300;
              padding: 10px 8px;
            }
          }
          .others-notes {
            font-size: 13px;
            line-height: 16px;
            padding: 8px;
          }
        }
        .notice {
          display: flex;
          .block {
            flex: 1;
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
            .title {
              font-size: 2rem;
              padding-bottom: 10px;
            }
            .content {
              ol {
                padding-left: 30px;
                padding-top: 10px;
                padding-bottom: 10px;
                border: 1px solid rgb(211, 211, 211);
                li {
                  list-style: decimal;
                  margin-bottom: 5px;
                  line-height: 20px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
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