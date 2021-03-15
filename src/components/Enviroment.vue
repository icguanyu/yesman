<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <div class="title">
          <p>拍攝環境</p><span>ENVIRONMENT</span>
        </div>
      </div>
      <div class="body">
        <article class="desc">
          本工作室於新莊區設立擁有近40坪的立體攝影棚，場景風格有清新乾淨、可愛活潑、正式等多種風格，共10多個場景
          ，<b>放更多環境介紹的文案</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae maiores cumque eligendi voluptates
          voluptatum ab unde aperiam incidunt ratione similique odit perspiciatis excepturi quos quo placeat, veniam
          repudiandae sint?
        </article>
        <div class="features">
          <div class="features-bg"></div>
          <div class="features-list">
            <div class="item"><span class="index">01</span>工作室位於新莊區</div>
            <div class="item"><span class="index">02</span>四十坪立體攝影棚</div>
            <div class="item"><span class="index">03</span>舒適無壓的拍攝環境</div>
            <div class="item"><span class="index">04</span>更多環境特色</div>
            <div class="item"><span class="index">05</span>更多環境特色</div>
            <div class="item"><span class="index">06</span>更多環境特色</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
  export default {
    name: "enviroment",
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 100px;
    padding-bottom: 100px;
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
            color: transparent;
            -webkit-text-stroke: 1px #ddd;
          }
        }
      }
      .body {
        .desc {
          letter-spacing: 1px;
          line-height: 20px;
          margin-bottom: 20px;
        }
        .features {
          display: flex;
          align-items: center;
          .features-bg {
            width: 70%;
            flex-shrink: 0;
            height: 480px;
            background-size: cover;
            background-image: url("https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
          }
          .features-list {
            padding: 40px;
            margin-top: 50px;
            margin-left: -300px;
            background: rgba(white, 1);
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            .item {
              width: 50%;
              padding: 20px;
              span{
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>