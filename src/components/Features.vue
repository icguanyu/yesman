<template>
  <section class="container" id="features">
    <div class="content">
      <div class="head">
        <div class="title" data-aos="fade-down">
          <p>寶寶攝影˙幸福留影</p>
          <span>YES MAN</span>
        </div>
      </div>
      <div class="body">
        <div class="problems" data-aos="fade-down">
          <div class="problem"><span>01</span>媽咪爸比帶孩子們拍照最怕...</div>
          <div class="problem"><span>02</span>寶寶怕生愛哭怎麼辦?</div>
          <div class="problem">
            <span>03</span>想拍一些特別的主題，讓回憶 更有趣!
          </div>
          <div class="problem">
            <span>04</span>不知道攝影師怎麼挑，好煩惱...
          </div>
        </div>

        <div class="contact" data-aos="fade-down">
          <p><i class="el-icon-phone"></i>不用擔心，通通交給YES MAN！</p>
          <a
            class="el-button el-button--success"
            style="color:#fff"
            href="https://lin.ee/nScZxpE"
            target="_blank"
            >LINE 線上洽詢</a
          >
          <a class="el-button" href="tel:02-22988017">電話洽詢</a>
        </div>
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
    .head {
      .title {
        font-size: 4rem;
        letter-spacing: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        span {
          margin-left: 10px;
          color: transparent;
          -webkit-text-stroke: 1px #ddd;
        }
      }
    }
    .body {
      .problems {
        margin-bottom: 40px;
        .problem {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          font-size: 20px;
          font-style: italic;
          span {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            line-height: 32px;
            text-align: center;
            font-size: 16px;
            border: 1px solid #aaa;
            border-radius: 50%;
            margin-right: 40px;
            &:after {
              content: "";
              width: 30px;
              height: 1px;
              background-color: #aaa;
              position: absolute;
              right: -30px;
            }
          }
        }
      }
      .contact {
        text-align: center;
        p {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 20px;
          i {
            margin-right: 10px;
          }
        }
        a {
          width: 200px;
        }
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
          margin-bottom: 20px;
          span {
            margin-left: 0;
            margin-top: 5px;
            font-size: 1.6rem;
          }
        }
      }
      .body {
        .problems {
          .problem {
            font-size: 16px;
            span {
              width: 35px;
              height: 35px;
              line-height: 28px;
              font-size: 14px;
              margin-right: 30px;
              &:after {
                width: 20px;
                right: -20px;
              }
            }
          }
        }
        .contact {
          text-align: center;
          p {
            font-size: 18px;
          }
          a {
            width: 140px;
          }
        }
      }
    }
  }
}
</style>
