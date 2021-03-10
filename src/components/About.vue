<template>
  <section class="container">
    <div class="content">
      <div class="bg-cover bg-mask about-bg-1"></div>
      <div class="bg-cover about-bg-2"></div>
      <div class="bg-text about-bg-text">about</div>
      <div class="about-title">
        <p>關於</p>
        <p style="font-weight:700">YESMAN</p>
      </div>
      <div class="about-desc">
        <p>我們是一群在台北工作的七年級生，各自從事攝影相關行業<br>
          在一次的機緣大家相約聊天才發現：<br>
          原來我們都沒有屬於自己的全家福，才開始互相幫忙拍了彼此的全家福<br>
          <br>
          拍攝過程中看著孩子跟長輩的互動，長輩那害羞地說：「好拉麥擱拍了」<br>
          但身體依舊離不開鏡頭，等待著孩子靠近拍攝，當下觸動了我們。<br>
          所以一起創立了『Yes Man專業攝影工作室』，來紀錄每個家庭這最幸福的時刻。
        </p>
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
    padding: 60px 0;
    background: #f8f8f8;
    .content {
      height: 600px;
      padding: 60px 150px 0 150px;
    }
  }
  .about-title {
    font-size: 2.8rem;
    line-height: 3rem;
    letter-spacing: 4px;
    color: white;
    margin-bottom: 10px;
    z-index: 5;
  }
  .about-desc {
    background: rgba(white, 0.95);
    padding: 30px;
    line-height: 2.4rem;
    letter-spacing: 1px;
    z-index: 4;
    color: #555;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .about-bg-text {
    position: absolute;
    top: 0;
    right: 0;
    color: #f8f8f8;
    font-size: 15rem;
    z-index: 1;
  }
  .about-bg-1 {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 440px;
    height: 260px;
    background-image: url("https://images.unsplash.com/photo-1483193722442-5422d99849bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  }
  .about-bg-2 {
    z-index: 3;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 400px;
    height: 400px;
    background-image: url("https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGNoaWxkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    margin-bottom: -100px;
  }
</style>