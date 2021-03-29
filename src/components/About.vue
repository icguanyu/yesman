<template>
  <section class="container" id="about">
    <div class="content">
      <div class="head">
        <div class="title" data-aos="fade-down">
          <p>關於YESMAN</p><span>ABOUT US</span>
        </div>
      </div>
      <div class="body">
        <article class="desc" data-aos="fade-right">
          我們是幾位一起在台北工作的七年級生，各自從事攝影相關行業，在一次的機緣大家相約聊天才發現：原來我們都沒有屬於自己的全家福！才開始互相幫忙拍了彼此的全家福。在拍攝過程中，看著孩子們跟長輩的互動，長輩經常害羞地說：「好拉麥夠拍了」，但身體依舊牢牢坐在Ｃ位，等著晚輩們坐近拍攝。<br>
          當下觸動了我們，所以才會一起創了『Yes Man專業攝影工作室』，紀錄每個家庭最幸福的時刻。<br>回想一下自己從翻身、坐穩、走路...都是爸媽細心呵護才把我們照顧長大，有人說拍照就跟魔法一樣，可以記錄當下的感覺，我們想把這最簡單的方式分享給每一個家庭。<br>
          <br>
          關於Yes Man<br>
          我們提供「孕婦、新生兒、小孩、全家福」寫真，每個夥伴都有6年以上的攝影資歷，擁有一整套完整逗小孩的方式以及保母證照。<br>工作室位於新莊區，擁有40坪的立體攝影棚，我們打造讓孩子感到無壓力的環境，提供了大人與小孩的服務，讓爸媽輕鬆完成美麗的拍攝。
        </article>
        <div class="bg-cover about-bg" data-aos="fade-left"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "about",
  };
</script>

<style lang="scss" scoped>
  .container {
    padding: 30px 0;
    background: #f8f8f8;
    .content {
      height: 560px;
      padding: 60px 0;
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
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: rgba(white, 0.95);
        .desc {
          padding: 40px;
          line-height: 2rem;
          letter-spacing: 1px;
          color: #555;
          font-weight: 300;
          letter-spacing: 1px;
          align-items: stretch;
          box-sizing: border-box;
        }
        .about-bg {
          flex-shrink: 0;
          width: 400px;
          background-image: url("https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
          // margin-bottom: -100px;
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
            margin-bottom: 5px;
            span {
              margin-left: 0;
              margin-top: 5px;
              font-size: 1.6rem;
            }
          }
        }
        .body {
          display: block;
          flex-direction: column-reverse;
          justify-content: space-between;
          width: 100%;
          height: auto;
          background: rgba(white, 0.95);
          .desc {
            padding: 30px;
            line-height: 1.8rem;
            letter-spacing: 1px;
            color: #555;
            font-weight: normal;
            letter-spacing: 1px;
            align-items: stretch;
            box-sizing: border-box;
          }
          .about-bg {
            width: 100%;
            height: 300px;
            background-image: url("https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
            // margin-bottom: -100px;
          }
        }
      }
    }
  }
</style>