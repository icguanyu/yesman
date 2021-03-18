<template>
  <div id="footer">
    <div class="content">
      <div class="company">
        <div class="company-logo">
          <img src="https://fakeimg.pl/400x400/#ccc/#333/" alt="Yesman Photography Studio">
        </div>
        <div class="company-info">
          <h1>Email</h1>
          <p>aaa@example.com</p>
          <h1>聯絡電話</h1>
          <p>(02) 2298-8017 </p>
          <h1>地址</h1>
          <p>新北市新莊區五工三路86巷10號1樓</p>

        </div>
      </div>
      <div class="social-links"></div>
    </div>
    <div class="copyright">Copyright © 2021 Yesman Photography Studio,All rights reserved.</div>
  </div>
</template>

<script>
  export default {
    name: "my-footer",
  };
</script>

<style lang="scss" scoped>
  #footer {
    width: 100%;
    background: #333;
    background: rgba(black, 1);
    // background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
    background-image: url("https://www.transparenttextures.com/patterns/blu-stripes.png");
    .content {
      width: 1080px;
      margin: auto;
      display: flex;
      padding: 30px 0;

      .company {
        display: flex;
        align-items: center;
        .company-logo {
          width: 150px;
          margin-right: 20px;
          img {
            width: 100%;
          }
        }
        .company-info {
          color: white;
          font-weight: 200;
          font-size: 1rem;
          line-height: 1.8rem;
          p{
            margin-bottom: 20px;
          }
        }
      }
    }
    .copyright {
      background: rgb(5, 5, 5);
      color: #ddd;
      text-align: center;
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
</style>