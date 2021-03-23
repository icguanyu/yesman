<template>
  <section class="entrance">
    <div class="bg_box">
      <div class="bg"></div>
      <div class="bg"></div>
      <div class="bg"></div>
      <div class="bg"></div>
      <div class="mask_content">
        <div class="title">
          <h3>晴天整合行銷有限公司</h3>
          <h1 id="sunnyday">YESMAN</h1>
          <h2>ADVERTISING & MARKETING</h2>
        </div>
        <div class="right_box">
          <div class="dot">“</div>
          <p>晴天整合行銷</p>
          <p>永遠把您的客戶，當成自己的客戶</p>
          <p>用最認真專業的服務態度</p>
          <p>完美達成您托付的每一項任務</p>
        </div>
        <div class="scroll">
          <p>SCROLL</p>
          <div class="rect">
            <div class="bar"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Entrance",

    components: {},
  };
</script>

<style lang="scss" scoped>
  .entrance {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg_box {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      opacity: 1;
      transform: scale(1.2);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 25s;
      //transition: transform 5s linear;
    }
    .bg:nth-child(1) {
      background-image: url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
      animation-name: norika-1;
      z-index: 3;
    }
    .bg:nth-child(2) {
      background-image: url("https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
      animation-name: norika-2;
      z-index: 2;
    }
    .bg:nth-child(3) {
      background-image: url("https://images.unsplash.com/photo-1496681859237-6039cd585c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
      animation-name: norika-3;
      z-index: 1;
    }
    .bg:nth-child(4) {
      background-image: url("https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
      animation-name: norika-4;
      z-index: 0;
    }
    .bg_active {
      transform: scale(1.2);
    }
    .mask_content {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
      z-index: 4;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      .title {
        color: white;
        text-align: center;
        h3 {
          font-weight: 300;
          letter-spacing: 8px;
        }
        h1 {
          font-weight: 600;
          color: white;
          font-size: 4rem;
          margin: 18px 0;
          letter-spacing: 20px;
          background: linear-gradient(to right, #c497ff 0%, #a9ffcd 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h2 {
          position: relative;
          display: inline-block;
          padding-top: 18px;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 6px;
          &::before {
            position: absolute;
            content: "";
            width: 50%;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            height: 1px;
            background: #fff;
          }
        }
      }
    }
    .sunnyday {
      position: absolute;
      top: 100px;
      left: 100px;
      text-align: right;
      z-index: 10;
      p {
        font-style: italic;
        color: #fff;
        font-size: 8rem;
        letter-spacing: 10px;
        //text-shadow: 12px 0 0px rgba(0, 0, 0, 0.5);
        font-weight: 600;
      }
    }
    .right_box {
      background: rgba(0, 0, 0, 0.05);
      position: absolute;
      z-index: 10;
      right: 60px;
      bottom: 60px;
      width: 320px;
      border: 2px solid white;
      padding: 45px 20px 20px 20px;
      .dot {
        color: white;
        position: absolute;
        left: 15px;
        top: 15px;
        font-size: 4rem;
        font-family: initial;
      }
      p {
        color: white;
        font-weight: 400;
        font-size: 0.9rem;
        letter-spacing: 2px;
        line-height: 1.4rem;
      }
    }
  }
  .scroll {
    color: white;
    display: inline-block;
    writing-mode: vertical-rl;
    position: absolute;
    bottom: 80px;
    right: 30px;
    p {
      color: white;
    }
    .rect {
      top: 65px;
      left: 8px;
      position: absolute;
      height: 80px;
      width: 1px;
      overflow: hidden;
      .bar {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background: white;
        animation: scroll 2s infinite linear;
      }
    }
  }
  @keyframes scroll {
    0% {
      top: -100%;
    }
    50% {
      top: 0;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes norika-1 {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    1.5625% {
      opacity: 1;
    }
    23.4375% {
      opacity: 1;
    }
    26.5625% {
      opacity: 0;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
    
  }
  @keyframes norika-2 {
    23.4375% {
      opacity: 1;
      transform: scale(1);
    }
    26.5625% {
      opacity: 1;
    }
    48.4375% {
      opacity: 1;
    }
    51.5625% {
      opacity: 0;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  @keyframes norika-3 {
    48.4375% {
      opacity: 1;
      transform: scale(1);
    }
    51.5625% {
      opacity: 1;
    }
    73.4375% {
      opacity: 1;
    }
    76.5625% {
      opacity: 0;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  @keyframes norika-4 {
    73.4375% {
      opacity: 1;
      transform: scale(1);
    }
    76.5625% {
      opacity: 1;
    }
    98.4375% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1024px) {
    .bg_box {
      .bg {
        background-size: cover;
      }
    }
  }
  @media (max-width: 768px) {
    .entrance {
      height: 100vh;
      .bg_box {
        .bg {
          background-size: cover;
        }
      }
      .mask_content {
        .title {
          margin-bottom: 100px;
          #sunnyday {
            font-size: 12vw;
            letter-spacing: 5px;
          }
          h3 {
            font-size: 3.5vw;
            letter-spacing: 4px;
          }
          h1 {
            margin: 10px 0;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 4vw;
            padding-top: 5px;
            letter-spacing: 2px;
            font-weight: 300;
          }
        }
      }
      .right_box {
        width: 90%;
        right: 50%;
        bottom: 100px;
        transform: translateX(50%);
        padding: 35px 10px 15px 10px;
        border: 1px solid white;
        .dot {
          font-size: 3rem;
          line-height: 3rem;
        }
        p {
          letter-spacing: 1px;
        }
      }
      .scroll {
        right: 50%;
        transform: translateX(50%);
        bottom: 20px;
        font-size: 12px;
        .rect {
          top: 0;
          left: -5px;
        }
      }
    }
  }
</style>