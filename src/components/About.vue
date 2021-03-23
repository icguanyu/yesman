<template>
  <section class="container" id="about">
    <div class="content">
      <div class="head">
        <div class="title">
          <p>關於YESMAN</p><span>ABOUT US</span>
        </div>
      </div>
      <div class="body">
        <article class="desc">
          我們是一群在台北工作的七年級生，各自從事攝影相關行業<br>
          在一次的機緣大家相約聊天才發現：<br>
          原來我們都沒有屬於自己的全家福，才開始互相幫忙拍了彼此的全家福<br>
          <br>
          拍攝過程中看著孩子跟長輩的互動，長輩那害羞地說：「好拉麥擱拍了」<br>
          但身體依舊離不開鏡頭，等待著孩子靠近拍攝，當下觸動了我們。<br>
          所以一起創立了『Yes Man專業攝影工作室』，來紀錄每個家庭這最幸福的時刻。
        </article>
        <div class="bg-cover about-bg"></div>
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
        height: 400px;
        background: rgba(white, 0.95);
        .desc {
          padding: 40px;
          line-height: 2.2rem;
          letter-spacing: 1px;
          color: #555;
          font-weight: 300;
          letter-spacing: 1px;
          align-items: stretch;
          box-sizing: border-box;
        }
        .about-bg {
          width: 400px;
          height: 100%;

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
            span{
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
            padding: 40px;
            line-height: 2.2rem;
            letter-spacing: 1px;
            color: #555;
            font-weight: 300;
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