<template>
  <div class="container" id="service">
    <div class="content">
      <div class="head">
        <div class="title">
          <p>拍攝方案</p><span>SERVICES</span>
        </div>
      </div>
      <div class="body">
        <div class="services">
          <div class="service" v-for="(s,idx) in services" :key="idx" @click="next(s.key)">
            <div class="thumb" :id="`s_${idx}`"></div>
            <div class="content">
              <h1>{{s.title}}</h1>
              <p>{{s.desc||'補上簡短介紹'}}</p>
              <p>{{s.price}}</p>
            </div>
            <box-icon name='right-arrow-alt'></box-icon>
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
            title: "新生兒寫真到府拍攝-SR",
            desc: "",
            price: "NT$8,800元",
            key: "a",
          },
          {
            title: "新生兒寫真到府拍攝-S",
            desc: "",
            price: "NT$6,000元",
            key: "b",
          },
          {
            title: "新生兒寫真到棚拍攝-A",
            desc: "",
            price: "NT$5,000元",
            key: "c",
          },
          {
            title: "新生兒寫真到棚拍攝-B",
            desc: "",
            price: "NT$3,880元",
            key: "d",
          },
          {
            title: "兒童寫真到棚拍攝-A",
            desc: "",
            price: "NT$5,000元",
            key: "e",
          },
          {
            title: "兒童寫真到棚拍攝-B",
            desc: "",
            price: "NT$3,800元",
            key: "f",
          },
          {
            title: "孕婦到棚拍攝",
            desc: "",
            price: "NT$6,800元",
            key: "g",
          },
          {
            title: "韓式證件照",
            desc: "",
            price: "NT$280起",
            key: "h",
          },
          {
            title: "形象照",
            desc: "",
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
    padding-bottom: 50px;
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
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/268317_729865.jpeg");
  }
  #s_1 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/808904_447727.jpeg");
  }
  #s_2 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/226472_960277.jpeg");
  }
  #s_3 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/613188_728398.jpeg");
  }
  #s_4 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/35722_503054.jpeg");
  }
  #s_5 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/808904_447727.jpeg");
  }
  #s_6 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/226472_960277.jpeg");
  }
  #s_7 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/613188_728398.jpeg");
  }
  #s_8 {
    background-image: url("https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/3215916/35722_503054.jpeg");
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