<template>
  <div id="footer">
    <div class="content">
      <div class="block" data-aos="fade-right">
        <div class="title" @click="back">
          <h1>Yes man專業攝影工作室</h1>
          <p>- 寶寶攝影，幸福留影 -</p>
        </div>
        <p>
          新北市三重區中正南路84號12樓
          <a
            href="https://maps.app.goo.gl/mnh5CYfffcVqiiqLA"
            target="_blank"
            style="vertical-align: middle;"
          >
            <box-icon name="map" color="#d86060" type="solid"></box-icon>
          </a>
        </p>
        <p>平日 早上10:00-18:30</p>
        <p>假日 早上10:00-21:00</p>
        <p>每周二公休</p>
        <br />
        <p>服務專線：<a href="tel:02-22988017">(02) 2298-8017</a></p>
        <p>Email：yesman8017@gmail.com</p>
        <div class="social">
          <a
            class="el-button el-button--primary el-button--small"
            style="color:#fff"
            href="https://www.facebook.com/YesManphotographyStudio"
            target="_blank"
            >Facebook</a
          >
          <a
            class="el-button el-button--success  el-button--small"
            style="color:#fff"
            href="https://lin.ee/nScZxpE"
            target="_blank"
            >LINE</a
          >
          <a
            class="el-button  el-button--small"
            href="https://www.instagram.com/yes_man_photography/"
            target="_blank"
            >Instagram</a
          >
        </div>
        <div class="copyright">
          Copyright © 2024 Yesman Photography Studio,All rights reserved.
        </div>
      </div>
      <iframe
        data-aos="fade-left"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.267218670859!2d121.494442!3d25.058930600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a91e815eeed1%3A0xc968a26ad993d563!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5Lit5q2j5Y2X6LevODTomZ8!5e0!3m2!1szh-TW!2stw!4v1706271158428!5m2!1szh-TW!2stw"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
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

  // background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
  .content {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    background: #fff;

    .block {
      flex: 1;
      display: inline-block;
      font-weight: normal;
      font-family: "微軟正黑體";
      padding: 0 60px;
      .title {
        margin-bottom: 10px;
        h1 {
          cursor: pointer;
          display: inline-block;
          font-weight: 600;
          padding: 3px 0px;
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

        p {
          font-style: italic;
        }
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
      .social {
        margin-top: 20px;
      }
      .copyright {
        font-size: 0.8rem;
        padding: 10px 0;
      }
    }
    iframe {
      width: 50%;
      height: 380px;
    }
  }
}
@media (max-width: 768px) {
  #footer {
    .content {
      flex-direction: column;
      .block {
        width: 100%;
        padding: 0 5%;
        .title {
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
        .social {
          margin-top: 20px;
        }
        .copyright {
          letter-spacing: 0;
          margin-bottom: 10px;
        }
      }
      iframe {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
