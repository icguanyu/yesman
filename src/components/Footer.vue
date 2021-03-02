<template>
  <div id="footer">
    <div class="content">
      <div class="company">
        <div class="company-logo">
          <img src="https://fakeimg.pl/200x200/#ccc/#333/" alt="Yesman Photography Studio">
        </div>
        <div class="company-info">
          <p>新北市新莊區五工三路86巷10號1樓</p>
          <p>TEL：(02)2298-8017</p>
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
    .content {
      width: 80%;
      margin: auto;
      display: flex;
      padding: 30px 0;
      .company {
        display: flex;
        align-items: center;
        .company-logo {
          width: 80px;
          margin-right: 20px;
          img {
            width: 100%;
          }
        }
        .company-info {
          color: #ddd;
          font-size: 1rem;
          line-height: 2rem;
        }
      }
    }
    .copyright {
      color: #ddd;
      text-align: center;
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
</style>