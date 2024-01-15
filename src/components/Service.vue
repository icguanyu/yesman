<template>
  <div class="container" id="service">
    <div class="content">
      <div class="head">
        <div class="title" data-aos="fade-down">
          <p>拍攝方案</p>
          <span>SERVICES</span>
        </div>
      </div>
      <div class="body">
        <div class="services">
          <div
            class="service"
            v-for="(s, idx) in services"
            :key="idx"
            @click="next(s.key)"
            data-aos="fade-down"
            :data-aos-delay="100 * (idx + 1)"
          >
            <div class="thumb" :id="`s_${idx}`"></div>
            <div class="content">
              <h1>{{ s.title }}</h1>
              <p>{{ s.desc || "補上簡短介紹" }}</p>
              <p>{{ s.price }}</p>
            </div>
            <box-icon name="right-arrow-alt"></box-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
  components: {},
  data() {
    return {
      services: [
        {
          title: "新生兒寫真到「府」拍攝-A",
          desc: "兩個願望一次滿足：全檔、6套造型。",
          price: "NT$9,800元",
          key: "a",
        },
        {
          title: "新生兒寫真到「府」拍攝-B",
          desc: "輕鬆在家擁有攝影棚。",
          price: "NT$7,800元",
          key: "b",
        },
        {
          title: "新生兒寫真到「棚」拍攝-A",
          desc: "獨享60坪攝影棚。",
          price: "NT$6,000元",
          key: "c",
        },
        {
          title: "新生兒寫真到「棚」拍攝-B",
          desc: "出生的好禮物。",
          price: "NT$3,880元",
          key: "d",
        },
        {
          title: "兒童寫真到棚拍攝-A",
          desc: "超值好禮三選一。",
          price: "NT$6,000元",
          key: "e",
        },
        {
          title: "兒童寫真到棚拍攝-B",
          desc: "超值體驗價。",
          price: "NT$3,880元",
          key: "f",
        },
        {
          title: "孕婦到棚拍攝",
          desc: "拍出最美的一刻。",
          price: "NT$6,800元",
          key: "g",
        },
        {
          title: "韓式證件照",
          desc: "提高面試的機會。",
          price: "NT$280起",
          key: "h",
        },
        {
          title: "形象照",
          desc: "專業的態度等於高檔的收入。",
          price: "NT$2,400起",
          key: "i",
        },
      ],
    };
  },
  methods: {
    next(key) {
      this.$router.push(`/service?s=${key}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 50px;
  padding-bottom: 20px;
  background: #f8f8f8;
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
          -webkit-text-stroke: 1px #ddd;
          color: transparent;
        }
      }
    }
    .body {
      margin-bottom: 40px;
    }
  }
}
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
  .service {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-right: 20px;
    flex: 1;
    min-width: 45%;
    padding: 20px;
    cursor: pointer;
    transition: all 0.5s;
    border-bottom: 1px solid #ddd;
    &:hover {
      border-style: 8px;
      background: white;
      box-shadow: 0 0.5rem 1.3rem 0 #0000000d;
      border-radius: 8px;
      border-color: white;
      transition: all 0.5s;
      .content {
        h1 {
          background-size: 100% 1px;
          background-position: 0 100%;
        }
      }
    }
    &:nth-child(even) {
      margin-right: 0;
    }
    .thumb {
      background-size: cover;
      background-repeat: no-repeat;
      flex-shrink: 0;
      margin-right: 10px;
      width: 180px;
      height: 140px;
    }
    .content {
      max-width: 240px;
      margin: 0;
      margin-left: 10px;
      margin-right: auto;
      h1 {
        display: inline-block;
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 5px;
        padding-bottom: 10px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-image: linear-gradient(180deg, #555, #555);
        background-size: 0 1px;
        background-position: 100% 100%;
        transition: background-size 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);
      }
      p {
        font-weight: 300;
        line-height: 1.2rem;
      }
    }
  }
}
#s_0 {
  background-image: url("../assets/images/service_thumbs/1.jpg");
}
#s_1 {
  background-image: url("../assets/images/service_thumbs/2.jpg");
}
#s_2 {
  background-image: url("../assets/images/service_thumbs/3.jpg");
}
#s_3 {
  background-image: url("../assets/images/service_thumbs/4.jpg");
}
#s_4 {
  background-image: url("../assets/images/service_thumbs/5.jpg");
}
#s_5 {
  background-image: url("../assets/images/service_thumbs/6.jpg");
}
#s_6 {
  background-image: url("../assets/images/service_thumbs/7.jpg");
}
#s_7 {
  background-image: url("../assets/images/service_thumbs/8.jpg");
}
#s_8 {
  background-image: url("../assets/images/service_thumbs/9.jpg");
}
@keyframes marquee {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0;
    .content {
      height: auto;
      padding: 30px 5%;
      margin: 0;
      .head {
        .title {
          flex-direction: column;
          align-items: flex-start;
          font-size: 2rem;
          margin-bottom: 15px;
          span {
            margin-left: 0;
            margin-top: 5px;
            font-size: 1.6rem;
          }
        }
      }
    }
  }
  .services {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    .service {
      margin-right: 0px;
      flex: 1;
      padding: 10px;
      .thumb {
        background-size: cover;
        background-repeat: no-repeat;
        flex-shrink: 0;
        margin-right: 10px;
        width: 150px;
        height: 110px;
      }
      .content {
        max-width: 240px;
        margin: 0;
        margin-left: 0;
        padding: 10px;
        h1 {
          display: inline-block;
          font-weight: 500;
          font-size: 1.2rem;
          margin-bottom: 5px;
          padding-bottom: 10px;
          overflow: hidden;
          background-repeat: no-repeat;
          background-image: linear-gradient(180deg, #555, #555);
          background-size: 0 1px;
          background-position: 100% 100%;
          transition: background-size 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);
        }
        p {
          font-weight: 300;
          line-height: 1.2rem;
        }
      }
    }
  }
}
</style>
