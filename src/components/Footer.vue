<template>
  <div id="footer">
    <div class="content">
      <div class="block">
        <div class="title" @click="back">
          <h1>YESMAN</h1>
          <p>- Photography Studio -</p>
        </div>
        <p>新北市新莊區五工三路86巷10號1樓 <a href="https://goo.gl/maps/n64aA8WqSzA77S5i7" target="_blank"
            style="vertical-align: middle;">
            <box-icon name='map' color="#d86060" type='solid'></box-icon>
          </a></p>
        <p>平日 早上10:00-18:30</p>
        <p>假日 早上10:00-21:00</p>
        <p>每周二公休</p>
        <p>TEL. (02) 2298-8017 /MAIL. example@gmail.com</p>

      </div>
    </div>

    <div class="copyright">Copyright © 2021 Yesman Photography Studio,All rights reserved.</div>
  </div>
</template>

<script>
  export default {
    name: "my-footer",
    methods: {
      back() {
        this.$router.push("/");
        window.scrollTo(0, 0);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #footer {
    width: 100%;
    background: #f8f8f8;
    // background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
    .content {
      max-width: 1080px;
      margin: auto;
      padding-top: 80px;
      padding-bottom: 20px;
      font-size: 1.2rem;
      line-height: 1.6rem;
      display: flex;
      justify-content: center;
      .block {
        text-align: center;
        display: inline-block;
        .title {
          h1 {
            cursor: pointer;
            display: inline-block;
            font-weight: 500;
            padding: 3px 10px;
            overflow: hidden;
            background-repeat: no-repeat;
            background-image: linear-gradient(180deg, #555, #555);
            background-size: 0 1px;
            background-position: 100% 100%;
            transition: background-size 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);
            &:hover {
              background-size: 100% 1px;
              background-position: 0 100%;
            }
          }
          margin-bottom: 5px;
          p {
            font-style: italic;
          }
        }
        p {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .copyright {
      text-align: center;
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
  @media (max-width: 768px) {
    #footer {
      .content {
        width: 100%;
        padding: 20px 5%;
      }
      .copyright {
        font-size: 0.6rem;
        padding: 5px 0;
      }
    }
  }
</style>